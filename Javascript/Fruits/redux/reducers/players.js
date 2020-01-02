import {
    SELECT_USERNAME,
    ADD_PLAYER,
    REMOVE_PLAYER,
    MOVE_PLAYER,
    SETUP
} from '../actions/players'

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
        [action.id]: {
            ...state[action.id],
            x: action.x,
            y: action.y
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