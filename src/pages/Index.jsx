import image from '../assets/IMG_20241031_214626_931.jpg'
import Header from "../components/header.jsx";
import ButtonBig from "../components/button_big.jsx";
import Scroll from "../components/Scroll.jsx";
import Animate from "../components/animate.jsx";
import ButtonCircle from "../components/button_circle.jsx";
const Index=()=>{
    return(
        <>
            <Animate>
                <Header label={'HOME'}/>
                <Scroll/>
                <div className='hidden text-white md:block fixed right-10 top-[35%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'HOME'} icon={'home-sharp'} page={true}/>
                </div>
                <div className='hidden text-white md:block fixed right-10 top-[42%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'ABOUT'} icon={'person-sharp'} link={'/about-me'} page={false}/>
                </div>
                <div className='hidden text-white md:block fixed right-10 top-[49%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'PROJECTS'} icon={'code-slash-sharp'} link={'/projects'} page={false}/>
                </div>
                <div className='hidden text-white md:block fixed right-10 top-[56%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'STORIES'} icon={'book-sharp'} link={'/my-stories'} page={false}/>
                </div>
                <div className='hidden text-white md:block fixed right-10 top-[63%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'CONTACT'} icon={'call-sharp'} link={'/contact'} page={false}/>
                </div>
                <div className='hidden lg:block bg-[#068BF7] h-[100%] w-screen [clip-path:polygon(0%_0%,15%_0%,25%_100%,0%_100%)] absolute top-0 left-0 -z-10 min-h-screen'></div>
                <div className='text-left relative flex flex-col lg:flex-row items-center justify-center min-h-screen'>
                    <img src={image} className='my-20 rounded-full object-cover object-top block w-[220px] h-[220px] lg:block lg:ml-[5%] lg:mt-[5%] lg:rounded-lg lg:w-[521px] lg:h-[810px]'/>
                    <div className='flex flex-col items-center justify-center lg:block lg:ml-[20%]'>
                        <h1 className='text-[35px] font-bold text-[#068BF7] text-left w-[80%] md:text-center lg:text-left lg:text-[55px]'>I'M SAADMAN</h1>
                        <p className='text-[30px] font-bold text-white text-left w-[80%] md:text-center lg:text-left lg:text-[50px]'>SOFTWARE ENGINEER</p>
                        <p className='w-[80%] text-[15px] font-[400] text-white text-left lg:w-[50%]'>
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