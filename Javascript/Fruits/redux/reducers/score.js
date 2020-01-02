import { CHANGE_SCORE, ADD_SCORE } from '../actions/score'
import { SETUP } from '../actions/general'

const acceptedActions = {
    [CHANGE_SCORE]: (state, action) => ({
        ...state,
        [action.playerId]: {
            ...state[action.playerId],
            fruits: ++state[action.playerId].fruits,
        }
    }),
    [ADD_SCORE]: (state, action) => ({
        ...state,
        [action.playerId]: {
            playerName: action.playerName,
            fruits: action.fruits
        }
    }),
    [SETUP]: (state, action) => ({
        ...state,
        ...action.newState.score
    })
}

export default function score(state = {}, action) {

    const handler = acceptedActions[action.type]

    return handler && handler(state, action) || state
}