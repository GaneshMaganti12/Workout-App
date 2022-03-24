import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import LoginReducer from '../Reducer/LoginReducer'
import WorkoutReducer from '../Reducer/WorkoutReducer'

const rootReducer = combineReducers({
    login : LoginReducer,
    workout: WorkoutReducer
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export default store