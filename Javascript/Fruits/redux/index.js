import { createStore } from 'redux'

import middleware from './middlewares'
import reducer from './reducers'

export const initStore = (initialState = {}) => {
    return createStore(reducer, initialState, middleware)
}