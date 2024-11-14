import '../styles/global.css';
import Header from "../components/header.jsx";
import ButtonBig from "../components/button_big.jsx";

const Projects=()=>{
    return (
        <>
            <Header label={'MY PROJECTS'}></Header>
            <h1 className='hidden md:block text-white text-[60px] font-black text-center leading-[62px] mt-8'>
                MY <span className='text-[#8A2BE2]'>PROJECTS</span>
            </h1>
            <h2 className='text-4xl md:hidden text-white md:text-5xl font-black text-center leading-[62px] my-20'>
                MY <span className='text-[#8A2BE2]'>PROJECTS</span>
            </h2>
            <div className='w-3/4 flex flex-col sm:flex-row justify-between gap-6 items-center mx-auto mt-10'>
                <div>
                    <div className="m-6 bg-[#252525] border border-[#8A2BE2] rounded-lg w-96 h-[300px] overflow-hidden">
                        <div className="p-4 h-full flex flex-col justify-between">
                            <h2 className="mb-2 text-[#8A2BE2] text-4xl font-bold text-center">
                                CEHRSR
                            </h2>
                            <p className='mt-4 text-white text-sm font-bold mb-4'>NextJS14,Multichain,PostgreSQL,spaCy</p>
                            <p className="text-white leading-normal">
                                A permission blockchain based web-application for patients and doctors
                                to view and store patient medical data as well as summarize patient
                                medical history using NLP.
                            </p>
                        </div>
                    </div>
                    <div className="m-6 bg-[#252525] border border-[#8A2BE2] rounded-lg w-96 h-[300px] overflow-hidden">
                        <div className="p-4 h-full flex flex-col justify-between">
                            <h2 className="mb-2 text-[#8A2BE2] text-4xl font-bold text-center">
                                UIU Content Bank
                            </h2>
                            <p className='mt-4 text-white text-sm font-bold mb-4'>Java, JavaFX</p>
                            <p className="text-white leading-normal">
                                A software developed with Java to upload, store, share and download
                                study materials such as pdf, images and papers. The GUI has been developed
                                with JavaFX.
                            </p>
                        </div>
                    </div>
                    <div className="m-6 bg-[#252525] border border-[#8A2BE2] rounded-lg w-96 h-[300px] overflow-hidden">
                        <div className="p-4 h-full flex flex-col justify-between">
                            <h2 className="mb-2 text-[#8A2BE2] text-4xl font-bold text-center">
                                Smart Bike Parking
                            </h2>
                            <p className='mt-4 text-white text-sm font-bold mb-4'>Arduino, C++</p>
                            <p className="text-white leading-normal">
                                An arduino based embedded system that eases bike
                                parking and strengthens bike’s security against malicious
                                intends and environmental hazards.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="m-6 bg-[#252525] border border-[#8A2BE2] rounded-lg w-96 h-[300px] overflow-hidden">
                        <div className="p-4 h-full flex flex-col justify-between">
                            <h2 className="mb-2 text-[#8A2BE2] text-4xl font-bold text-center">
                                Easy E-waste
                            </h2>
                            <p className='mt-4 text-white text-sm font-bold mb-4'>Laravel, Bootstrap, MySQL</p>
                            <p className="text-white leading-normal">
                                A web-application for electrical and electronics device manufacturing
                                companies to manage their electronic waste by recycling, reusing and
                                reducing it.
                            </p>
                        </div>
                    </div>
                    <div className="m-6 bg-[#252525] border border-[#8A2BE2] rounded-lg w-96 h-[300px] overflow-hidden">
                        <div className="p-4 h-full flex flex-col justify-between">
                            <h2 className="mb-2 text-[#8A2BE2] text-4xl font-bold text-center">
                                Funding Future
                            </h2>
                            <p className='mt-4 text-white text-sm font-bold mb-4'>PHP, HTML, CSS, Bootstrap, MySQL,
                                JavaScript</p>
                            <p className="text-white leading-normal">
                                A web-application to create donation campaign and donate money to
                                selected campaigns using mobile or online banking.
                            </p>
                        </div>
                    </div>
                    <div className="m-6 bg-[#252525] border border-[#8A2BE2] rounded-lg w-96 h-[300px] overflow-hidden">
                        <div className="p-4 h-full flex flex-col justify-between">
                            <h2 className="mb-2 text-[#8A2BE2] text-base font-bold text-center">
                                Home Automation for Physically Challenged Individuals
                            </h2>
                            <p className='mt-4 text-white text-sm font-bold mb-4'>Arduino, ESP32, C++, php,
                                JavaScript</p>
                            <p className="text-white leading-normal">
                                An iot based embedded automated system for physically
                                challenged people to navigate with ease at their home
                                with a web-application as an interface for family members
                                to monitor.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="m-6 bg-[#252525] border border-[#8A2BE2] rounded-lg w-96 h-[300px] overflow-hidden">
                        <div className="p-4 h-full flex flex-col justify-between">
                            <h2 className="mb-2 text-[#8A2BE2] text-4xl font-bold text-center">
                                AutoCare System
                            </h2>
                            <p className='mt-4 text-white text-sm font-bold mb-4'>PHP, HTML, CSS, MySQL, Javascript</p>
                            <p className="text-white leading-normal">
                                A web-application that creates a bridge between car owners and car
                                service providers by allowing car owners to make appointments for car
                                servicing to the service providers. It also has an online marketplace for
                                car accessories.
                            </p>
                        </div>
                    </div>
                    <div className="m-6 bg-[#252525] border border-[#8A2BE2] rounded-lg w-96 h-[300px] overflow-hidden">
                        <div className="p-4 h-full flex flex-col justify-between">
                            <h2 className="mb-2 text-[#8A2BE2] text-4xl font-bold text-center">
                                Covid Registration
                            </h2>
                            <p className='mt-4 text-white text-sm font-bold mb-4'>Laravel</p>
                            <p className="text-white leading-normal my-4 text-sm">
                                A web-application for users to register and choose their desired vaccination
                                centers. This has an automated system that assigns vaccination dates to
                                users and a notification system that sends email notification to users at a designated
                                time before the vaccination date. This system features laravel task scheduler and custom
                                Artisan command.
                                <b><small>This project is still under development</small></b>
                            </p>
                        </div>
                    </div>
                    <div className="m-6 bg-[#252525] border border-[#8A2BE2] rounded-lg w-96 h-[300px] overflow-hidden">
                        <div className="p-4 h-full flex flex-col justify-between">
                            <h2 className="mb-2 text-[#8A2BE2] text-4xl font-bold text-center">
                                Firefighting Robot
                            </h2>
                            <p className='mt-4 text-white text-sm font-bold'>Arduino, ESP32-CAM, Yolov8, C++, Python</p>
                            <p className="text-white leading-normal">
                                A four wheeled iot based robot that detects fire using
                                computer vision and extinguishes fire via water pump.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end w-11/12 my-16 mx-auto'>
                <ButtonBig label={'Check out my github'} link={'https://github.com/Sakib063'} icon={'logo-github'}/>
            </div>
            <hr className='w-1/2 mx-auto my-10 md:w-1/4 border-t-2 border-[#252525]'/>
            <h2 className='text-3xl md:block text-white md:text-5xl font-black text-center leading-[62px] my-10'>
                MY <span className='text-[#8A2BE2]'>PUBLICATIONS</span>
            </h2>
            <div className='w-4/5 mx-auto text-white m-4 p-4 bg-[#252525] justify-center items-center rounded-md'>
                <p className='md:text-3xl'>IoT-Based Object-Detection System to Safeguard Endangered Animals and Bolster Agricultural Farm Security</p>
                <p className='my-4'>
                    Significant threats to ecological equilibrium and sustainable agriculture are posed by
                    the extinction of animal species and the subsequent effects on farms. Farmers face
                    difficult decisions, such as installing electric fences to protect their farms,
                    although these measures can harm animals essential for maintaining ecological
                    equilibrium. To tackle these essential issues, this research introduces an innovative
                    solution in the form of an object-detection system.
                </p>
                <div className='flex justify-end text-center'>
                    <button className='p-4 border border-[#8A2BE2] rounded-xl hover:bg-[#8A2BE2] duration-300'>
                        <a target="_blank" href='https://www.researchgate.net/publication/375816952_IoT-Based_Object-Detection_System_to_Safeguard_Endangered_Animals_and_Bolster_Agricultural_Farm_Security'>
                            Read all about it
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Projects