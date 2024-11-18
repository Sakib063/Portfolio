import {useEffect, useState} from "react";
import animate from "../styles/animation.module.css";
import Lottie from "lottie-react";
import animation from "../assets/Animation - 1730385140839.json";

const Animate=({children})=>{
    const[isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setIsLoading(false)
        },1000)
        return ()=>clearTimeout(timer)
    },[])

    const Loader=()=>{
        return(
            <div className={animate.loader_container}>
                <Lottie animationData={animation} loop={true} className={animate.loader_animation}/>
            </div>
        )
    }

    if(isLoading){
        return <Loader/>
    }
    return <>{children}</>
}

export default Animate