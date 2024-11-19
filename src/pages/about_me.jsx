import laravel from '../assets/laravel.png'
import prisma from '../assets/prisma.png'
import laragon from '../assets/Laragon.png'
import tailwind from '../assets/tailwind.png'
import c from '../assets/c.png'
import cpp from '../assets/C++.png'
import java from '../assets/java.png'
import react from '../assets/react.png'
import next from '../assets/next.png'
import Header from "../components/header.jsx";
import ButtonBig from "../components/button_big.jsx";
import Scroll from "../components/Scroll.jsx";
import Animate from "../components/animate.jsx";
import ButtonCircle from "../components/button_circle.jsx";

const AboutMe=()=>{
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
                <Header label={'ABOUT ME'}/>
                <Scroll/>
                <div className='hidden text-white lg:block fixed right-10 top-[30%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'HOME'} icon={'home-sharp'} link={'/'} page={false}/>
                </div>
                <div className='hidden text-white md:block fixed right-10 top-[40%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'ABOUT'} icon={'person-sharp'} page={true}/>
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
                <h1 className='hidden md:block text-white text-[60px] font-black text-center leading-[62px] mt-10'>
                    ABOUT <span className='text-[#068BF7]'>ME</span>
                </h1>
                <p className='text-white font-bold text-center text-3xl mt-8 pt-10'>Personal Information</p>
                <table className='text-white w-4/5 mt-8 text-sm lg:text-lg mx-auto border-separate border-spacing-y-5 md:border-spacing-x-60'>
                    <tbody>
                    <tr>
                        <td><b className='font-black'>Fullname</b>: <br className='md:hidden'/> Saadman Sakib</td>
                        <td><b className='font-black text-right'>Address</b>: <br className='md:hidden'/> Mirpur, Dhaka</td>
                    </tr>
                    <tr>
                        <td><b className='font-black'>Age</b>: <br className='md:hidden'/> 24</td>
                        <td><b className='font-black'>Blood-Group</b>: <br className='md:hidden'/> O +ve</td>
                    </tr>
                    <tr>
                        <td><b className='font-black'>Languages</b>: <br className='md:hidden'/> English, Bangla</td>
                        <td><b className='font-black'>Country</b>: <br className='md:hidden'/> Bangladesh</td>
                    </tr>
                    <tr>
                        <td><b className='font-black'>Employment <br className='md:hidden'/>Status</b>: <br
                            className='md:hidden'/> <b className='text-green-600'>Actively
                            Seeking</b></td>
                        <td><b className='font-black'>Open To</b>: <br className='md:hidden'/> On-Site, Remote, <br className='md:hidden'/>Hybrid</td>
                    </tr>
                    <tr>
                        <td><b className='font-black'>Fun Fact</b>: <br className='md:hidden'/> I make the best cup <br className='md:hidden'/>of Tea</td>
                        <td><b className='font-black'>Hobbies</b>: <br className='md:hidden'/> Reading, Gaming, <br className='md:hidden'/>Traveling</td>
                    </tr>
                    </tbody>
                </table>
                <div onClick={download} className='mx-auto lg:mx-0 flex justify-start lg:justify-end w-4/5 my-4 lg:w-[35%]'>
                    <ButtonBig label={'Download cv'} icon={'cloud-download-sharp'}/>
                </div>
                <div className='flex justify-center my-14 mx-auto md:justify-end md:w-3/5'>
                    <ButtonBig label={'More of Me'} icon={'arrow-forward-sharp'} link={'/my-stories'}/>
                </div>
                <hr className='w-1/2 mx-auto my-10 md:w-1/4 border-t-2 border-[#252525]'/>
                <p className='text-white font-bold text-center text-[26px] mt-8'>MY SKILLS</p>
                <div className='w-[60%] flex justify-between gap-6 items-center mx-auto mt-10'>
                    <div className='flex flex-col gap-4'>
                        <img src={c} className='w-44 h-44 object-contain my-10'/>
                        <img src={laravel} className='w-44 h-44 object-contain my-10'/>
                        <img src={laragon} className='w-44 h-44 object-contain my-10'/>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <img src={cpp} className='w-44 h-44 object-contain my-10'/>
                        <img src={next} className='w-44 h-44 object-contain my-10'/>
                        <img src={tailwind} className='w-44 h-44 object-contain my-10'/>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <img src={java} className='w-44 h-44 object-contain my-10'/>
                        <img src={react} className='w-44 h-44 object-contain my-10'/>
                        <img src={prisma} className='w-44 h-44 object-contain my-10'/>
                    </div>
                </div>
                <div className='flex justify-center my-14 mx-auto md:justify-end md:w-3/5'>
                    <ButtonBig label={'Explore More'} icon={'arrow-forward-sharp'} link={'/projects'}/>
                </div>
                <hr className='w-1/2 mx-auto my-10 md:w-1/4 border-t-2 border-[#252525]'/>
                <p className='hidden md:block text-white font-bold text-center text-[26px] mt-8'>
                    Education & Experience
                </p>
                <table className='hidden md:table text-white mt-8 md:text-[20px] sm:text-[14px] mx-auto border-separate border-spacing-y-10 md:border-spacing-x-56'>
                    <tbody>
                    <tr>
                        <td className='align-text-top'>
                            <span
                                className='-ml-10 mr-2 p-2.5 text-[13px] text-white rounded-full bg-[#068BF7] text-center'>
                                <ion-icon name="book-sharp"></ion-icon>
                            </span>
                            <small className='text-[13px] bg-[#252525] rounded-xl py-1 px-2 mb-2 inline-block'>2024</small>
                            <p className='mb-2.5'><b>B.Sc in CSE</b></p>
                            <p className='mb-1'>United International University</p>
                            <p className='mb-1'>Major: Software Engineer</p>
                            <p className='mb-1'>CGPA: 3.45</p>
                        </td>
                        <td className='align-text-top'>
                            <span className='-ml-10 mr-2 p-2.5 text-[13px] text-white rounded-full bg-[#068BF7] text-center'>
                                <ion-icon name="briefcase-sharp"></ion-icon>
                            </span>
                            <small className='text-[13px] bg-[#252525] rounded-xl py-1 px-2 mb-2 inline-block'>May,2024 - August,2024</small>
                            <p className='mb-2.5'><b>Laravel Developer Intern</b></p>
                            <p className='mb-1'>Mircodeft</p>
                        </td>
                    </tr>
                    <tr>
                        <td className='align-text-top'>
                            <span className='-ml-10 mr-2 p-2.5 text-[13px] text-white rounded-full bg-[#068BF7] text-center'>
                                <ion-icon name="book-sharp"></ion-icon>
                            </span>
                            <small className='text-[13px] bg-[#252525] rounded-xl py-1 px-2 mb-2 inline-block'>2019</small>
                            <p className='mb-2.5'><b>Higher Secondary (School) Certificate (H.S.C)</b></p>
                            <p className='mb-1'>Monipur High School & College</p>
                            <p className='mb-1'>GPA: 4.00</p>
                        </td>
                        <td className='align-text-top'>
                            <span className='-ml-10 mr-2 p-2.5 text-[13px] text-white rounded-full bg-[#068BF7] text-center'>
                                <ion-icon name="briefcase-sharp"></ion-icon>
                            </span>
                            <small className='text-[13px] bg-[#252525] rounded-xl py-1 px-2 mb-2 inline-block'>2021 - 2022</small>
                            <p className='mb-2.5'><b>IT Support</b></p>
                            <p className='mb-1'>Quantabit</p>
                        </td>
                    </tr>
                    <tr>
                        <td className='align-text-top'>
                            <span className='-ml-10 mr-2 p-2.5 text-[13px] text-white rounded-full bg-[#068BF7] text-center'>
                                <ion-icon name="book-sharp"></ion-icon>
                            </span>
                            <small className='text-[13px] bg-[#252525] rounded-xl py-1 px-2 mb-2 inline-block'>2017</small>
                            <p className='mb-2.5'><b>Secondary School Certificate (S.S.C)</b></p>
                            <p className='mb-1'>Monipur High School & College</p>
                            <p className='mb-1'>GPA: 5.00</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className='md:hidden mx-8 my-10'>
                    <p className='text-white font-bold text-left text-[26px] mt-8'>Experience</p>
                    <ul className='text-white mt-8 space-y-8'>
                        <li className='gap-2'>
                            <span className='p-2.5 mr-4 text-[13px] text-white rounded-full bg-[#068BF7]'>
                                <ion-icon name="briefcase-sharp"></ion-icon>
                            </span>
                            <small className='text-[13px] bg-[#252525] rounded-xl py-1 px-2'>May, 2024 - August, 2024</small>
                            <div className='ml-12 mt-4'>
                                <p className='mb-2.5'><b>Laravel Developer Intern</b></p>
                                <p className='mb-1'>Mircodeft</p>
                            </div>
                        </li>
                        <li className='gap-2'>
                            <span className='p-2.5 mr-4 text-[13px] text-white rounded-full bg-[#068BF7]'>
                                <ion-icon name="briefcase-sharp"></ion-icon>
                            </span>
                            <small className='text-[13px] bg-[#252525] rounded-xl py-1 px-2'>2021 - 2022</small>
                            <div className='ml-12 mt-4'>
                                <p className='mb-2.5'><b>IT Support</b></p>
                                <p className='mb-1'>Quantabit</p>
                            </div>
                        </li>
                    </ul>
                    <p className='text-white font-bold text-left text-[26px] mt-8'>Education</p>
                    <ul className='text-white mt-8 space-y-8'>
                        <li className='gap-2'>
                            <span className='p-2.5 mr-4 text-[13px] text-white rounded-full bg-[#068BF7]'>
                                <ion-icon name="book-sharp"></ion-icon>
                            </span>
                            <small className='text-[13px] bg-[#252525] rounded-xl py-1 px-2'>2024</small>
                            <div className='ml-12 mt-4'>
                                <p className='mb-2.5'><b>B.Sc in CSE</b></p>
                                <p className='mb-1'>United International University</p>
                                <p className='mb-1'>Major: Software Engineer</p>
                                <p className='mb-1'>CGPA: 3.45</p>
                            </div>
                        </li>
                        <li className='gap-2'>
                            <span className='p-2.5 mr-4 text-[13px] text-white rounded-full bg-[#068BF7]'>
                                <ion-icon name="book-sharp"></ion-icon>
                            </span>
                            <small className='text-[13px] bg-[#252525] rounded-xl py-1 px-2'>2019</small>
                            <div className='ml-12 mt-4'>
                                <p className='mb-2.5'><b>Higher Secondary (School) Certificate (H.S.C)</b></p>
                                <p className='mb-1'>Monipur High School & College</p>
                                <p className='mb-1'>GPA: 4.00</p>
                            </div>
                        </li>

                        <li className='gap-2'>
                            <span className='p-2.5 mr-4 text-[13px] text-white rounded-full bg-[#068BF7]'>
                                <ion-icon name="book-sharp"></ion-icon>
                            </span>
                            <small className='text-[13px] bg-[#252525] rounded-xl py-1 px-2'>2017</small>
                            <div className='ml-12 mt-4'>
                                <p className='mb-2.5'><b>Secondary School Certificate (S.S.C)</b></p>
                                <p className='mb-1'>Monipur High School & College</p>
                                <p className='mb-1'>GPA: 5.00</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </Animate>
        </>
    )
}
export default AboutMe