import { combineReducers } from 'redux'

import players from './players'
import fruits from './fruits'
import score from './score'

export default combineReducers({
    players,
    fruits,
    score
})