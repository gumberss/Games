(function (exports) {

    exports.movePlayerRule = function movePlayerRule(actionRequested, screen) {
        const acceptedCommands = {
            ArrowUp(player) {
                return {
                    ...player,
                    y: player.y - (player.y - 1 >= 0)
                }
            },
            ArrowDown(player) {
                return {
                    ...player,
                    y: player.y + (player.y + 1 < screen.height)
                }
            },
            ArrowLeft(player) {
                return {
                    ...player,
                    x: player.x - (player.x - 1 >= 0)
                }
            },
            ArrowRight(player) {
                return {
                    ...player,
                    x: player.x + (player.x + 1 < screen.width)
                }
            }
        }

        return acceptedCommands[actionRequested]
    }
})(typeof exports === 'undefined' ? this : exports)