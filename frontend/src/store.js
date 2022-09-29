import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import composeWithDevTools from 'redux-devtools-extension'

const reducer = combineReducers({})

const initialState = {}
const middlewear = [thunk]
const storenpm  = legacy_createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middlewear))
)
