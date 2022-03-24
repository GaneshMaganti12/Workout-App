// import React, {useState} from 'react'
// import Login from './Login'
// import Register from './Register'

// export default function LoginRegister() {

//     const[isLoginForm, setLoginForm] = useState(true)

//     const changeToRegister = () =>{
//         setLoginForm(!isLoginForm)
//     }

//     const changeToLogin = () =>[
//         setLoginForm(!isLoginForm)
//     ]

//   return (
//     <div>
//         {isLoginForm ? 
//         <div>
//             <button onClick={changeToRegister}>Register</button>
//             <Login/>
//         </div> 
//         :
//         <div>
//             <button onClick={changeToLogin}>Login</button>
//             <Register/>
//         </div>
//         }
//     </div>
//   )
// }

import React, {useState} from 'react'
import Login from './Login'
import Register from './Register'
import "./LoginRegister.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LoginRegister() {

    const navigate = useNavigate()

    const[isLoginForm, setLoginForm] = useState(true)

    const changeToRegister = () =>{
        setLoginForm(!isLoginForm)
        navigate("/register")
    }

    const changeToLogin = () =>{
        setLoginForm(!isLoginForm)
        navigate("/login")
    }

  return (
      <div className='finaltouch'>
      <h1 className='main-style'><img src="https://us.123rf.com/450wm/sergeypykhonin/sergeypykhonin1804/sergeypykhonin180400037/98838883-gym-bodybuilding-sport-logo-or-label-bodybuilder-with-heavy-barbell-in-hands-vector-illustration.jpg?ver=6" alt='logo' className="weblogo1"/> WorkoutApp</h1>
    <div className='app-container'>
        <img className='workout-image' src="https://img.freepik.com/free-vector/athletes-doing-fitness-exercise-gym-with-panoramic-windows-isolated-flat-vector-illustration-cartoon-people-cardio-training-weight-lifting_74855-8225.jpg?t=st=1647401572~exp=1647402172~hmac=eeb0ef11e13e8a5915ff749c640181cebfe33d919dc9aa9ec3cebb7fa1a57536&w=1060" alt="workout" />
        {isLoginForm ? 
        <div className='form-container shadow'>
            <Login/>
            <p className='text'>Don't have an account? <Link to="/register"><button className='reg-btn' onClick={changeToRegister}>Register</button></Link></p>
        </div> 
        :
        <div className='form-container shadow'>
            <Register/>
            <p className='text'>Have already an account? <Link to="/login"><button className='login-btn' onClick={changeToLogin}>Login</button></Link></p>
        </div>
        }
    </div>
    </div>
  )
}