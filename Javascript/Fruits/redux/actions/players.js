export const SELECT_USERNAME = 'SELECT_USERNAME'

export const ADD_PLAYER = 'add-player'
export const REMOVE_PLAYER = 'remove-player'
export const MOVE_PLAYER = 'move-player'
export const SETUP = 'setup'

export function selectUserName({ userName }) {
    return {
        type: SELECT_USERNAME,
        userName
    }
}

export function addPlayer({ playerId, playerX, playerY }) {
    return {
        type: ADD_PLAYER,
        playerId,
        playerX,
        playerY
    }
}

export function removePlayer({ playerId }) {
    return {
        type: REMOVE_PLAYER,
        playerId
    }
}

export function movePlayer({ id, x, y }) {
    return {
        type: MOVE_PLAYER,
        id,
        x,
        y
    }
}

