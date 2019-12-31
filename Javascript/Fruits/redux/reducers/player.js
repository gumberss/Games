import { SELECT_USERNAME } from '../actions/player'

const acceptedActions = {
    [SELECT_USERNAME]: (state, action) => ({
        ...state,
        userName: action.userName
    }),
}


export default function player(state = {}, action) {

    const handler = acceptedActions[action.type] 

    return handler && handler(state, action) || state
}