import React from 'react'
import { connect } from 'react-redux'

import createKeyboardListener from '../public/keyboard-listener'
import { createGame } from '../public/game.js'
import renderScreen from '../public/render-screen.js'
import io from 'socket.io-client'
import colors from '../default/colors'
import { fruitAdded, fruitTaked } from '../redux/actions/fruits'

class GameScreen extends React.Component {
    render() {
        return (<canvas id="screen" style={styles.canvas}></canvas>)
    }

    componentDidMount() {

        const { fruitAdded, fruitTaked, fruits } = this.props

        const game = createGame()

        const keyboardListener = createKeyboardListener(document)
        const socket = io()

        socket.on('connect', () => {
            const playerId = socket.id
            keyboardListener.registerPlayerId(playerId)
            keyboardListener.subscribe(game.movePlayer)
            keyboardListener.subscribe(command => {
                const { type, ...data } = command
                socket.emit(type, data)
            })
            console.log(`Player connected on Client with id: ${playerId}`)

            const screen = document.getElementById('screen')

            renderScreen(screen, game, requestAnimationFrame, playerId)
            //renderScreen(screen, game, requestAnimationFrame, playerId, fruits)
        })

        socket.on('setup', state => {
            console.log(`Receiving "setup" event from server`)
            console.log(state)
            game.setState(state)
        })

        socket.on('add-player', command => {
            console.log(`Receiving`, command)
            game.addPlayer(command)
        })

        socket.on('remove-player', command => {
            console.log(`Receiving`, command)
            game.removePlayer(command)
        })

        socket.on('move-player', command => {
            console.log(`Receiving`, command)

            const playerId = socket.id

            if (playerId !== command.playerId) {
                game.movePlayer(command)
            }
        })

        socket.on('add-fruit', command => {
            game.addFruit(command)
            fruitAdded(command)
        })

        socket.on('fruit-taked', command => {
            game.removeFruit(command)
            fruitTaked(command)
            // game.incrementScore(command.playerId)
        })
    }
}

const styles = {
    canvas: {
        height: '500px',
        width: '500px',
        'border': '1px solid ' + colors.GRAY,
        'image-rendering': 'pixelated',
        //'image-rendering': 'crisp-edges',
        //'image-rendering': '-moz-crisp-edges'

    }
}

const mapStateToProps = ({ fruits }) => ({
    fruits: Object.keys(fruits)
})

const mapDispatchToProps = dispatch => ({
    fruitAdded: store => dispatch(fruitAdded(store)),
    fruitTaked: store => dispatch(fruitTaked(store)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)