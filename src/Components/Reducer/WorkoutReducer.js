import { createSlice } from "@reduxjs/toolkit";


const WorkoutReducer = createSlice({
    name: 'home',
    initialState: {home: [], fitness: {}},
    reducers: {
        GET_WORKOUT(state, action){
            return {home: action.payload}
        },
        GET_WORKOUT_DETAIL(state, action){
            return {fitness: action.payload}
        }
    }
})

export const homeGet = () =>{
    return async(dispatch) =>{
        let url = 'http://localhost:8888/workouts'
        let options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let res = await fetch(url, options)
        let data = await res.json()
        dispatch(GET_WORKOUT(data))
    }
}


export const workoutGet = (value) =>{
    return async(dispatch) =>{
        let url = `http://localhost:8888/workouts/${value}`
        let options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let res = await fetch(url, options)
        let data = await res.json()
        dispatch(GET_WORKOUT_DETAIL(data))
    }
}



export const {GET_WORKOUT, GET_WORKOUT_DETAIL} = WorkoutReducer.actions

export default WorkoutReducer.reducer