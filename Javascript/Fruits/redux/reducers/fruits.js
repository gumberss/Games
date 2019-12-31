import {
    FRUIT_TAKED,
    ADD_FRUIT,
    SETUP
} from '../actions/fruits'

const acceptedActions = {
    [FRUIT_TAKED]: (state, action) => {
        const { [action.fruitId]: removedFruit, ...newState } = state
        return newState
    },
    [ADD_FRUIT]: (state, action) => ({
        ...state,
        [action.fruitId]: {
            x: action.fruitX,
            y: action.fruitY
        }
    }),
    [SETUP]: (state, action) => ({
        ...state,
        ...action.newState.fruits
    })
}

export default function fruits(state = {}, action) {

    const handler = acceptedActions[action.type]

    return handler && handler(state, action) || state
}