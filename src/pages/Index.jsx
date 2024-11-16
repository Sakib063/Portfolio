import animate from '../styles/animation.module.css'
import image from '../assets/IMG_20241031_214626_931.jpg'
import animation from '../assets/Animation - 1730385140839.json'
import Lottie from "lottie-react";
import {useEffect, useState} from "react";
import Header from "../components/header.jsx";
import ButtonBig from "../components/button_big.jsx";
import Scroll from "../components/Scroll.jsx";
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
            <Header label={'HOME'} />
            <Scroll />
            <div className='hidden lg:block bg-[#8A2BE2] h-[100%] w-screen [clip-path:polygon(0%_0%,15%_0%,25%_100%,0%_100%)] absolute top-0 left-0 -z-10 min-h-screen'></div>
            <div className='text-left relative flex flex-col lg:flex-row items-center justify-center min-h-screen'>
                <img src={image} className='mb-20 rounded-full object-cover object-top block w-[220px] h-[220px] lg:block lg:ml-[5%] lg:mt-[5%] lg:rounded-lg lg:w-[521px] lg:h-[810px]'/>
                <div className='flex flex-col items-center justify-center lg:block lg:ml-[20%]'>
                    <h1 className='text-[35px] font-bold text-[#8A2BE2] text-left w-[80%] md:text-center lg:text-left lg:text-[55px]'>I'M SAADMAN</h1>
                    <p className='text-[30px] font-bold text-white text-left w-[80%] md:text-center lg:text-left lg:text-[50px]'>SOFTWARE ENGINEER</p>
                    <p className='w-[80%] text-[15px] font-[400] text-white text-left lg:w-[50%]'>
                        Greetings and salutations, I am Saadman a programming enthusiast and a skilled software
                        engineer. I am
                        well versed in various programming languages and frameworks. I consider myself a team player as
                        well as a
                        quick and adaptive learner. I want to apply my knowledge and skills in the software development
                        field and
                        become a successful individual.
                    </p>
                    <div className='my-8 ml-0 md:mx-auto'>
                        <ButtonBig label={'more about me'} icon={'arrow-forward-sharp'} link={'/about-me'}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index