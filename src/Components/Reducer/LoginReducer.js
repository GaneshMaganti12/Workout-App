import { createSlice } from "@reduxjs/toolkit";


const LoginReducer = createSlice({
    name: 'login',
    initialState: {login: []},
    reducers: {
        FETCHPOST(state, action){
            let newlogin = [...state.login, action.payload]
            return {login: newlogin}
        },
        FETCHGET(state, action){
            return {login: action.payload}
        }
    }
})


export const fetchPost = (values) =>{
    return async(dispatch) =>{
        let url = 'http://localhost:8888/Login'
        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({...values, jwtToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ"})
        }
        let res = await fetch(url, options)
        let data = await res.json()
        dispatch(FETCHPOST(data))
    }
}

export const fetchGet = () =>{
    return async(dispatch) =>{
        let url = 'http://localhost:8888/Login'
        let options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let res = await fetch(url, options)
        let data = await res.json()
        dispatch(FETCHGET(data))
    }
}



export const {FETCHPOST, FETCHGET} = LoginReducer.actions

export default LoginReducer.reducer