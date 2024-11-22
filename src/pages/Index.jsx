import image from '../assets/self.jpg'
import Header from "../components/header.jsx";
import ButtonBig from "../components/button_big.jsx";
import Animate from "../components/animate.jsx";
import ButtonCircle from "../components/button_circle.jsx";
import Scroll from "../components/Scroll.jsx";
import CountUp from "react-countup";
const Index=()=>{
    const download=()=>{
        const link=document.createElement('a')
        link.href='/cv.pdf'
        link.download='saadman-resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

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
                    <img src={image} className='mt-28 mb-16 mx-auto border lg:border-none border-[#068BF7] rounded-full object-cover object-top block w-[250px] h-[250px] lg:block lg:ml-[5%] lg:mt-[5%] lg:rounded-lg lg:w-[600px] lg:h-[800px]'/>
                    <div className='flex flex-col items-center justify-center lg:block lg:ml-60'>
                        <h1 className='text-4xl font-bold text-[#068BF7] text-left w-4/5 lg:text-5xl'>I'M SAADMAN</h1>
                        <p className='text-2xl font-bold text-white text-left w-4/5 lg:text-4xl my-2'>SOFTWARE
                            ENGINEER</p>
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
                        <div className="text-left mx-auto my-8">
                            <div className="flex flex-col lg:flex-row gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                                <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                                    <CountUp className="text-4xl xl:text-6xl font-extrabold text-[#068BF7]" end={1} duration={5} />
                                    <p className="max-w-20 leading-snug text-white">Year Of Experience</p></div>
                                <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                                    <CountUp className="text-4xl xl:text-6xl font-extrabold text-[#068BF7]" end={11} duration={5} />
                                    <p className="max-w-20 leading-snug text-white">Projects Completed</p>
                                </div>
                                <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                                    <CountUp className="text-4xl xl:text-6xl font-extrabold text-[#068BF7]" end={271} duration={2} />
                                    <p className="max-w-20 leading-snug text-white">GitHub Commits</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-10 my-8 mx-auto'>
                            <div>
                                <ButtonBig label={'view my projects'} icon={'desktop-sharp'} link={'/projects'}/>
                            </div>
                            <div onClick={download}>
                                <ButtonBig label={'Download My CV'} icon={'cloud-download-sharp'}/>
                            </div>
                            <div>
                                <ButtonBig label={'more about me'} icon={'arrow-forward-sharp'} link={'/about-me'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Animate>
        </>
    )
}

export default Index