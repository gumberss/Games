const express = require('express')
const  http  = require('http')
const  createGame = require('./public/game.js')
const  socketio = require('socket.io')
const  next = require('next')

const app = express()
const server = http.createServer(app)
const sockets = socketio(server)

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

const PORT = process.env.PORT || 3000;

nextApp.prepare().then(() => {

    app.get('*', (req, res) => nextHandler(req, res))

    const game = createGame()
//https://realguess.net/2013/06/29/share-javascript-code-between-browser-(front-end)-and-node-(back-end)/
    //game.start()

    game.subscribe(command => {
        const { type, ...data } = command

        sockets.emit(type, data)
    })

    sockets.on('connection', socket => {
        const playerId = socket.id
        console.log(`Player connected on Server with id: ${playerId}`)
        game.addPlayer({ playerId: playerId })
        socket.emit('setup', game.state)

        socket.on('disconnect', () => {
            game.removePlayer({ playerId })
        })

        socket.on('move-player', ({ keyPressed, playerId }) => {
            game.movePlayer({ keyPressed, playerId })
        })
    })

    server.listen(PORT, (err) => {
        if (err) throw err
        console.log('up port ' + PORT)
    })
})