import image from '../assets/self.jpg'
import Header from "../components/header.jsx";
import ButtonBig from "../components/button_big.jsx";
import Animate from "../components/animate.jsx";
import ButtonCircle from "../components/button_circle.jsx";
import Scroll from "../components/Scroll.jsx";
const Index=()=>{
    return(
        <>
            <Animate>
                <Header label={'PORTFOLIO'}/>
                <Scroll/>
                <div className='hidden text-white md:block fixed right-10 top-[30%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'HOME'} icon={'home-sharp'} page={true}/>
                </div>
                <div className='hidden text-white md:block fixed right-10 top-[40%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'ABOUT'} icon={'person-sharp'} link={'/about-me'} page={false}/>
                </div>
                <div className='hidden text-white md:block fixed right-10 top-[50%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'PROJECTS'} icon={'code-slash-sharp'} link={'/projects'} page={false}/>
                </div>
                <div className='hidden text-white md:block fixed right-10 top-[60%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'STORIES'} icon={'book-sharp'} link={'/my-stories'} page={false}/>
                </div>
                <div className='hidden text-white md:block fixed right-10 top-[70%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'CONTACT'} icon={'call-sharp'} link={'/contact'} page={false}/>
                </div>
                <div className='hidden md:block bg-[#068BF7] h-screen w-full [clip-path:polygon(0%_0%,15%_0%,25%_100%,0%_100%)] fixed top-0 left-0 -z-10'></div>
                <div className='text-left relative flex flex-col lg:flex-row items-center justify-center w-11/12'>
                    <img src={image} className='mt-28 mb-16 rounded-full object-cover object-mid block w-[220px] h-[220px] lg:block lg:ml-[5%] lg:mt-[5%] lg:rounded-lg lg:w-[521px] lg:h-auto'/>
                    <div className='flex flex-col items-center justify-center lg:block lg:ml-60'>
                        <h1 className='text-4xl font-bold text-[#068BF7] text-left w-4/5 lg:text-5xl'>I'M SAADMAN</h1>
                        <p className='text-2xl font-bold text-white text-left w-4/5 lg:text-4xl my-2'>SOFTWARE ENGINEER</p>
                        <p className='w-4/5 text-white'>
                            Greetings and salutations, I am Saadman a programming enthusiast and a skilled software
                            engineer. I am
                            well versed in various programming languages and frameworks. I consider myself a team player
                            as
                            well as a
                            quick and adaptive learner. I want to apply my knowledge and skills in the software
                            development
                            field and
                            become a successful individual.
                        </p>
                        <div className='my-8 ml-0 md:mx-auto'>
                            <ButtonBig label={'more about me'} icon={'arrow-forward-sharp'} link={'/about-me'}/>
                        </div>
                    </div>
                </div>
            </Animate>
        </>
    )
}

export default Index