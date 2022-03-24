import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import LoginReducer from '../LoginReducer/LoginReducer'


const store = createStore(LoginReducer, composeWithDevTools(applyMiddleware(thunk)))


export default store