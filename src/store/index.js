import { createStore, applyMiddleware, compose } from 'redux'
import {CounterReducer} from '../redux/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(CounterReducer, composeEnhancers(applyMiddleware()))
export default store