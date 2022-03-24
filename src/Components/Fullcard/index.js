import Header from "../Header"
import { useEffect} from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import "./index.css"
import { workoutGet } from "../Reducer/WorkoutReducer"

export default function Fullcard(){

    const final = useSelector(state => state.workout.fitness)
    // console.log(final);

    const dispatch = useDispatch()

    const req=useParams()
    useEffect(()=>{
        console.log("initailize")
        dispatch(workoutGet(req.id))
    },[req.id])


    return(
        <div className="main-home-container">
            <Header/>
            <div className="final-card-container for-look">
                {final ==={}?"": (
                    <div className="fullcard-image-container">
                        <img src={final.imageurl} className="fullcard-image" alt='name'/>
                        <h1 className="card-head-calorie">calorie/hour:{final.Calorieburnperhour} calorie</h1>
                        <h1>{final.heading}</h1>
                        <p className="full-card-para-cont">{final.fulldiscription}</p>
                    </div>
                )}

            </div>
        </div>

    )
}