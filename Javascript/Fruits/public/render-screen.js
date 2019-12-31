export default function renderScreen(screen, game, requestAnimationFrame, currentPlayerId, fruits, players) {

    screen.width = game.state.screen.width
    screen.height = game.state.screen.height
    const context = screen.getContext('2d')

    context.fillStyle = 'white'
    context.clearRect(0, 0, game.state.screen.width, game.state.screen.height)

    for (const playerId in players) {
        const player = players[playerId]
        context.fillStyle = 'black'
        context.fillRect(player.x, player.y, 1, 1)
    }

    for (const fruitId in fruits) {
        const fruit = fruits[fruitId]
        context.fillStyle = 'green'
        context.fillRect(fruit.x, fruit.y, 1, 1)
    }

    const currentPlayer = players[currentPlayerId]
    if (currentPlayer) {
        context.fillStyle = '#F0DB4F'
        context.fillRect(currentPlayer.x, currentPlayer.y, 1, 1)
    }
}