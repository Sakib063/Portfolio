import index from '../styles/index.module.css'
import animate from '../styles/animation.module.css'
import image from '../assets/IMG_20241031_214626_931.jpg'
import animation from '../assets/Animation - 1730385140839.json'
import Lottie from "lottie-react";
import {useEffect, useState} from "react";
const Index=()=>{
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

    return(
        <>
            <div className={index.bg_purple}></div>
            <div className={index.content}>
                <img src={image} className={index.image}/>
                <div className={index.content_div}>
                    <h1 className={index.big_text}>I'M Saadman</h1>
                    <p className={index.p1}>SOFTWARE ENGINEER</p>
                    <p className={index.p2}>Greetings and salutations, I am Saadman a programming enthusiast and a skilled software engineer. I am well versed in various programming languages and frameworks. I consider myself a team player as well as a quick and adaptive learner. I want to apply my knowledge and skills in the software development field and become a successful individual.</p>
                </div>
            </div>
        </>
    );
}

export default Index