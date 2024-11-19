import Header from "../components/header.jsx";
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import Scroll from "../components/Scroll.jsx";
import Animate from "../components/animate.jsx";
import ButtonCircle from "../components/button_circle.jsx";
import ButtonLink from "../components/button_link.jsx";
import {toast, Toaster} from "react-hot-toast";

const Contact=()=>{
    const form=useRef()
    const send_mail=(e)=>{
        e.preventDefault()

        emailjs.sendForm('service_fk09fp2','template_xuna3if', form.current,{
            publicKey:'S9nQhuUlez6wAQ0QD'
        }).then(
            ()=>{
                toast.success('Mail Sent Successfully!')
                form.current.reset();
            },
            (err)=>{
                toast.error("An Error Occurred.")
                console.log(err.text)
            }
        )
    }

    return(
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <Animate>
                <Header label={'GET IN TOUCH'}/>
                <Scroll/>
                <div className='hidden text-white md:block fixed right-10 top-[30%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'HOME'} icon={'home-sharp'} link={'/'} page={false}/>
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
                    <ButtonCircle className='cursor-pointer' label={'CONTACT'} icon={'call-sharp'} page={true}/>
                </div>
                <h1 className='hidden md:block text-white text-6xl font-black text-center leading-[62px] mt-10'>
                    GET IN <span className='text-[#068BF7]'>TOUCH</span>
                </h1>
                <div className='md:flex justify-between items-center mx-auto my-28 text-white w-3/4'>
                    <div className='md:w-1/4 text-left'>
                        <h2 className='text-2xl font-bold'>Shoot me a DM!</h2>
                        <p className='my-4'>
                            Please do not hesitate to contact me. I am always up for talking about fresh
                            endeavors, original concepts, or chances to contribute to your goals.
                        </p>
                        <p className='text-5xl flex'>
                            <ion-icon name="mail-unread-sharp"></ion-icon>
                            <span className='text-base ml-2 my-auto'>
                                Mail Me
                                <p className='text-sm'>saadmansakib275@gmail.com</p>
                            </span>
                        </p>
                        <p className='text-5xl flex my-4'>
                            <ion-icon name="phone-portrait"></ion-icon>
                            <span className='text-base ml-2 my-auto'>
                                Call Me
                                <p className='text-sm'>+8801635028005</p>
                            </span>
                        </p>
                        <p className='my-8 flex justify-center'>
                            <a href='https://github.com/Sakib063' target="_blank"
                               className='m-4 text-3xl p-2 bg-[#252525] hover:bg-[#068BF7] rounded-full flex justify-center items-center'>
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                            <a href='https://www.linkedin.com/in/saadman-sakib-mihad-507000279/' target="_blank"
                               className='m-4 text-3xl p-2 bg-[#252525] hover:bg-[#068BF7] rounded-full flex justify-center items-center'>
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                            <a href='https://www.facebook.com/share/14hPRpySP1/' target="_blank"
                               className='m-4 text-3xl p-2 bg-[#252525] hover:bg-[#068BF7] rounded-full flex justify-center items-center'>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </p>
                    </div>
                    <div>
                        <form ref={form} onSubmit={send_mail}>
                            <input type='text' name='name' autoComplete="off" placeholder='Your Name' className='bg-[#252525] rounded-full p-2.5 px-6 mr-4 w-full sm:w-auto mt-12 mb-4 md:my-2 focus:outline-none focus:border-[#068BF7] focus:ring focus:ring-[#068BF7]'/>
                            <input type='email' name='email' autoComplete="off" placeholder='Your Email' className='bg-[#252525] rounded-full p-2.5 px-6 mr-4 w-full sm:w-auto my-4 md:my-2 focus:outline-none focus:border-[#068BF7] focus:ring focus:ring-[#068BF7]'/>
                            <input type='text' name='form_subject' autoComplete="off" placeholder='Your Subject' className='bg-[#252525] rounded-full p-2.5 px-6 w-full sm:w-auto my-4 md:my-2 focus:outline-none focus:border-[#068BF7] focus:ring focus:ring-[#068BF7]'/>
                            <br/>
                            <textarea name='message' autoComplete="off" placeholder='Your Message' rows='5' className='bg-[#252525] w-full rounded-xl p-4 my-8 focus:outline-none focus:border-[#068BF7] focus:ring focus:ring-[#068BF7]'></textarea>
                            <button type='submit'><ButtonLink label={'Send Your Message'} icon={'chatbox-sharp'} /></button>
                        </form>
                    </div>
                </div>
            </Animate>
        </>
    )
}

export default Contact