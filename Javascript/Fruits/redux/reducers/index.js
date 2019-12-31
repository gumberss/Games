import { combineReducers } from 'redux'

import player from './player'
import fruits from './fruits'

export default combineReducers({
    player,
    fruits
})