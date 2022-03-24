import Header from "../Header"
import { useEffect, useState } from "react"
import "./index.css"
import Card from "../Card"
import { homeGet } from "../Reducer/WorkoutReducer"
import { useSelector, useDispatch } from "react-redux"

export default function Home(){

// const get=async()=>{
//     const res=await fetch("http://localhost:8888/workouts",{method:"GET"
// })
// const data=await res.json()
// console.log(data)
// // return(data.map(each=>(<img src={each.imageurl}/>)))

// }
    const element = useSelector(state => state.workout.home)
    console.log(element)

    const[initial,setIntial]=useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(homeGet())
    }, [dispatch])


  const settingvalue=(event)=>{
        setIntial(event.target.value)
  }

    return(
        <div className="main-home-container">
        <Header/>
        <div className="main-home-container-2">
            <div>
            <div className="input-group input-cust">
                <span className="input-group-text">Search</span>
                {/* <textarea class="form-control" aria-label="With textarea" onChange={settingvalue}></textarea> */}
                <input type="text" onChange={settingvalue} className="input-cont"/>
             </div>
             </div>
             <ul className="list-item-container">
                {element.length === 0?"":element.filter((eachele)=>(eachele.heading.toLowerCase().includes(initial))).map(each=>(<Card key={each.id} each={each}/>))}
             </ul>
        </div>
        </div>
    )
}