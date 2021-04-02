import {createStore,applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import Reducer from '../reducers'
import promiseMiddleware from 'redux-promise'

let store = createStore(Reducer,applyMiddleware(logger,promiseMiddleware))

export default store