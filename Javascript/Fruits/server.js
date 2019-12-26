import express from 'express'
import http from 'http'
import createGame from './public/game.js'
import socketio from 'socket.io'

const app = express()
const server = http.createServer(app)
const sockets = socketio(server)

app.use(express.static('public'))

const game = createGame()

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

server.listen(3000, () => console.log('up port 3000'))