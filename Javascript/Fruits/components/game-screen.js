import React from 'react'
import { connect } from 'react-redux'

import createKeyboardListener from '../public/keyboard-listener'
import createGame from '../public/client-game.js'
import renderScreen from '../public/render-screen.js'
import io from 'socket.io-client'
import colors from '../default/colors'
import { fruitAdded, fruitTaked } from '../redux/actions/fruits'
import { addPlayer, removePlayer, movePlayer } from '../redux/actions/players'
import { changeScore, addScore } from '../redux/actions/score'
import { setup } from '../redux/actions/general'

class GameScreen extends React.Component {

    render() {

        return (<canvas id="screen" ref='canvas' style={styles.canvas}></canvas>)
    }

    componentDidMount() {

        const {
            fruitAdded,
            fruitTaked,
            addPlayer,
            removePlayer,
            movePlayer,
            gameAction,
            setup,
            changeScore,
            addScore
        } = this.props

        const { canvas } = this.refs

        const game = createGame()

        const keyboardListener = createKeyboardListener(document)
        const socket = io()

        socket.on('connect', () => {
            const playerId = socket.id

            game.subscribe(gameAction)

            keyboardListener.registerPlayerId(playerId)
            keyboardListener.subscribe(command => {

                const { players, fruits } = this.props
                game.movePlayer(command, players, fruits, game.state.screen)

            })
            keyboardListener.subscribe(command => {
                const { type, ...data } = command
                socket.emit(type, data)
            })

            console.log(`Player connected on Client with id: ${playerId}`)

            this.tick(canvas, game, requestAnimationFrame, playerId)
        })

        socket.on('setup', state => setup(state))
        socket.on('remove-player', command => removePlayer(command))
        socket.on('add-fruit', command => fruitAdded(command))
        socket.on('fruit-taked', command => fruitTaked(command))
        socket.on('change-score', command => changeScore(command))

        socket.on('add-player', command => {
            addPlayer(command)
            addScore(command)
        })

        socket.on('move-player', command => {
            const playerId = socket.id

            if (playerId !== command.id) {
                console.log("socket.on('move-player', command => {", command)

                movePlayer({ ...command })
            }
        })
    }

    tick(screen, game, requestAnimationFrame, currentPlayerId) {

        const { fruits, players } = this.props

        requestAnimationFrame(() => {
            renderScreen(screen, game, requestAnimationFrame, currentPlayerId, fruits, players)
            this.tick(screen, game, requestAnimationFrame, currentPlayerId)
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

const mapStateToProps = ({ fruits, players }) => ({
    fruits,
    players
})

const mapDispatchToProps = dispatch => ({
    gameAction: store => dispatch(store),
    fruitAdded: store => dispatch(fruitAdded(store)),
    fruitTaked: store => dispatch(fruitTaked(store)),
    addPlayer: store => dispatch(addPlayer(store)),
    removePlayer: store => dispatch(removePlayer(store)),
    movePlayer: store => dispatch(movePlayer(store)),
    setup: store => dispatch(setup(store)),
    changeScore: store => dispatch(changeScore(store)),
    addScore: store => dispatch(addScore(store))
})

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)