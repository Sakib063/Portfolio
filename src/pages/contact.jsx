import Header from "../components/header.jsx";
import {useRef} from "react";
import emailjs from '@emailjs/browser';

const Contact=()=>{
    const form=useRef()
    const send_mail=(e)=>{
        e.preventDefault()

        emailjs.sendForm('service_fk09fp2','template_xuna3if', form.current,{
            publicKey:'S9nQhuUlez6wAQ0QD'
        }).then(
            ()=>{
                console.log('successfully sent mail')
                form.current.reset();
            },
            (error)=>{
                console.log('Error ',error.text)
            }
        )
    }

    return(
        <>
            <Header label={'GET IN TOUCH'}></Header>
            <h1 className='hidden md:block text-white text-[60px] font-black text-center leading-[62px] mt-10'>
                GET IN <span className='text-[#8A2BE2]'>TOUCH</span>
            </h1>
            <div className='md:flex justify-between items-center mx-auto my-28 text-white w-11/12 md:w-3/5'>
                <div className='md:w-1/4 text-left'>
                    <h2 className='text-2xl font-bold'>Shoot me a DM!</h2>
                    <p className='my-4'>
                        Please do not hesitate to contact me. I am always up for talking about fresh
                        endeavors, original concepts, or chances to contribute to your goals.
                    </p>
                    <p className='text-5xl flex'>
                        <ion-icon name="mail-unread-sharp"></ion-icon>
                        <span className='text-sm ml-2 my-auto'>
                            Mail Me
                            <br/>
                            saadmansakib275@gmail.com
                        </span>
                    </p>
                    <p className='text-5xl flex my-4'>
                        <ion-icon name="phone-portrait"></ion-icon>
                        <span className='text-sm ml-2 my-auto'>
                            Call Me
                            <br/>
                            +8801635028005
                        </span>
                    </p>
                </div>
                <div>
                    <form ref={form} onSubmit={send_mail}>
                        <input type='text' name='form_name' placeholder='Your Name' className='bg-[#252525] rounded-full p-2.5 mr-4 w-full sm:w-auto mt-12 mb-4 md:my-0'/>
                        <input type='text' name='form_email' placeholder='Your Email' className='bg-[#252525] rounded-full p-2.5 mr-4 w-full sm:w-auto my-4 md:my-0'/>
                        <input type='text' name='form_suject' placeholder='Your Subject' className='bg-[#252525] rounded-full p-2.5 w-full sm:w-auto my-4 md:my-0'/>
                        <br/>
                        <textarea name='message' placeholder='Your Message' rows='5' className='bg-[#252525] w-full rounded-xl p-4 my-8'></textarea>
                        <button type='submit'>THIS IS A SUBMIT BUTTON</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact