import "./index.css"
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';

export default function Header(){
  const navigate=useNavigate()

  const logout=()=>{
    Cookies.remove('jwt_token')
    navigate("/login")

  }
  
  const clickHome = () =>{
    navigate('/workouts')
  }

    return(
        <div className="main-container">
          <h1 onClick={clickHome} className="logo-head"><img src= "https://us.123rf.com/450wm/sergeypykhonin/sergeypykhonin1804/sergeypykhonin180400037/98838883-gym-bodybuilding-sport-logo-or-label-bodybuilder-with-heavy-barbell-in-hands-vector-illustration.jpg?ver=6" alt='logo' className="weblogo"/>WorkoutApp</h1>
          {/* <button onClick={logout}>Logout</button> */}
          {/* <button type="button" class="btn btn-outline-secondary logout-button" onClick={logout} >Logout</button> */}
          <button type="button" className="btn btn-outline-primary logout-button" onClick={logout}>Logout</button>
          {/* <button type="button" class="btn btn-secondary" onClick={logout}>Logout</button> */}
        </div>
    )
}