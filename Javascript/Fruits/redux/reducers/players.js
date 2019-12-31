import {
    SELECT_USERNAME,
    ADD_PLAYER,
    REMOVE_PLAYER,
    MOVE_PLAYER,
    SETUP
} from '../actions/players'

const acceptedHorizontalMovementsCommands = {
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

const acceptedVerticalMovementCommands = {
    ArrowUp(player) {
        if (player.y - 1 >= 0) {
            player.y = player.y - 1
        }
    },
    ArrowDown(player) {

        if (player.y + 1 < state.screen.height) {
            player.y = player.y + 1
        }
    }
}

const acceptedActions = {
    [SELECT_USERNAME]: (state, action) => ({
        ...state,
        userName: action.userName
    }),
    [ADD_PLAYER]: (state, action) => ({
        ...state,
        [action.playerId]: {
            x: action.playerX,
            y: action.playerY
        }

    }),
    [REMOVE_PLAYER]: (state, action) => {
        const { [action.playerId]: removedPlayer, ...newState } = state
        return newState
    },
    [MOVE_PLAYER]: (state, action) => ({
        ...state,
        [action.playerId]: {
            ...state[action.playerId],
            x: acceptedHorizontalMovementsCommands[action.keyPressed] || state[action.playerId].x,
            y: acceptedVerticalMovementCommands[action.keyPressed] || state[action.playerId].y
        }
    }),
    [SETUP]: (state, action) => ({
        ...state,
        ...action.newState.players
    })
}

export default function players(state = {}, action) {

    const handler = acceptedActions[action.type]

    return handler && handler(state, action) || state
}