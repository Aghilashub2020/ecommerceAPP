import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import composeWithDevTools from 'redux-devtools-extension'
import { productListReducer } from './reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducer
})

const initialState = {}
const middlewear = [thunk]
const storenpm  = legacy_createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middlewear))
)
