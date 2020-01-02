
exports.createGame = function createGame() {

    const state = {
        players: {},
        fruits: {},
        score: {},
        screen: {
            width: 40,
            height: 40
        }
    }

    function setState(newState) {
        Object.assign(state, newState)
    }

    const observers = []

    function subscribe(observerFunction) {
        observers.push(observerFunction)
    }

    function start() {
        const frequency = 2000

        setInterval(addFruit, frequency)
    }

    function notifyAll(command) {
        for (const observerFunction of observers) {
            observerFunction(command)
        }
    }

    function addPlayer(command) {
        const playerId = command.playerId
        const playerX = command.playerX || Math.floor(Math.random() * state.screen.width)
        const playerY = command.playerY || Math.floor(Math.random() * state.screen.height)

        state.players[playerId] = {
            id: playerId,
            x: playerX,
            y: playerY
        }

        state.score[playerId] = {
            fruits: 0
        }

        notifyAll({
            type: 'add-player',
            playerId,
            playerX,
            playerY
        })
    }

    function removePlayer(command) {
        const playerId = command.playerId

        delete state.players[playerId]
        delete state.score[playerId]

        notifyAll({
            type: 'remove-player',
            playerId,
        })
    }

    function addFruit(command) {
        const fruitX = command && command.fruitX || Math.floor(Math.random() * state.screen.width)
        const fruitY = command && command.fruitY || Math.floor(Math.random() * state.screen.width)
        const fruitId = `${fruitX}:${fruitY}`

        state.fruits[fruitId] = {
            x: fruitX,
            y: fruitY
        }

        notifyAll({
            type: 'add-fruit',
            fruitId,
            fruitX,
            fruitY
        })
    }

    function removeFruit(command) {
        const fruitId = command.fruitId

        state.fruits[fruitId] && delete state.fruits[fruitId]
    }

    function movePlayer(command) {

        const acceptedCommands = {
            ArrowUp(player) {
                if (player.y - 1 >= 0) {
                    player.y = player.y - 1
                }
            },
            ArrowDown(player) {

                if (player.y + 1 < state.screen.height) {
                    player.y = player.y + 1
                }
            },
            ArrowLeft(player) {
                if (player.x - 1 >= 0) {
                    player.x = player.x - 1
                }
            },
            ArrowRight(player) {
                if (player.x + 1 < state.screen.width) {
                    player.x = player.x + 1
                }
            }
        }

        console.log(`Moving ${command.playerId} with ${command.keyPressed}`)

        const { keyPressed, playerId } = command

        const player = state.players[playerId]

        const action = acceptedCommands[keyPressed]

        if (player && action) {
            action(player)

            notifyAll({
                type: 'move-player',
                ...player
            })

            checkForFruitCollision(playerId)
        }
    }

    function checkForFruitCollision(playerId) {
        const player = state.players[playerId]

        var fruitId = `${player.x}:${player.y}`;

        if (state.fruits[fruitId]) {

            console.log("colidiu")

            state.score[playerId].fruits++;

            removeFruit({ fruitId })

            notifyAll({
                type: 'fruit-taked',
                fruitId,
                playerId
            })

        }
    }

    return {
        movePlayer,
        addPlayer,
        addFruit,
        removeFruit,
        removePlayer,
        checkForFruitCollision,
        state,
        setState,
        subscribe,
        start
    }
}
