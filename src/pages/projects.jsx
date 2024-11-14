import '../styles/global.css';
import Header from "../components/header.jsx";
const Projects=()=>{
    return(
        <>
            <Header label={'MY PROJECTS'}></Header>
            <h1 className='hidden md:block text-white text-[60px] font-black text-center leading-[62px] mt-10'>
                MY <span className='text-[#8A2BE2]'>PROJECTS</span>
            </h1>
            <div className='w-3/4 flex justify-between gap-4 items-center mx-auto my-12 text-white'>
                <div className="flex min-h-screen items-center justify-center bg-yellow-500 text-black rounded">
                    <div className="max-w-sm bg-white p-6 rounded-xl space-y-2  border-t-2 border-l-2  border-r-8 border-b-8 border-black">
                        <button className="bg-yellow-500 rounded-md p-2 text-sm font-bold">Learning</button>
                        <p className="">Published 21 Dec 2023</p>
                        <h1 className="font-bold text-2xl">HTML & CSS foundations</h1>
                        <p className="">These languages are the backbone of every website, defining structure, content,
                            and presentation.</p>


                        <div className="flex  items-center space-x-4 ">
                            <h1 className="font-bold">Greg Hooper</h1>

                        </div>
                    </div>
                </div>
                {/*<div className='flex-1'>*/}
                {/*    <div className='bg-[#252525] py-12 px-4 mx-auto my-8 w-full max-w-md'>*/}
                {/*        <h1 className='text-center font-bold text-[#8A2BE2] text-3xl p-4'>CEHRSR</h1>*/}
                {/*        <p>*/}
                {/*            <small>Multichain, Nextjs 14, Prisma, PostgreSQL, spaCy, Tailwind CSS</small>*/}
                {/*            <br/>*/}
                {/*            A permission blockchain-based web application for patients and doctors*/}
                {/*            to enter and store patient medical data as well as summarize patient*/}
                {/*            medical history using NLP.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*        <div className='bg-[#252525] py-8 px-4 mx-auto my-8 w-full max-w-md'>*/}
                {/*            <h1 className='text-center font-bold text-[#8A2BE2] text-3xl p-4'>Easy E-Waste</h1>*/}
                {/*            <p>*/}
                {/*                <small>Laravel, Blade, HTML, CSS, MySQL</small>*/}
                {/*                <br/>*/}
                {/*                A web-application for electrical and electronics device manufacturing*/}
                {/*                companies to manage their electronic waste by recycling, reusing, and*/}
                {/*                reducing it.*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <div className='bg-[#252525] py-8 px-4 mx-auto my-8 w-full max-w-md'>*/}
                {/*            <h1 className='text-center font-bold text-[#8A2BE2] text-3xl p-4'>AutoCare</h1>*/}
                {/*            <p>*/}
                {/*                <small>PHP, HTML, CSS, Bootstrap, MySQL</small>*/}
                {/*                <br/>*/}
                {/*                A web-application that creates a bridge between car owners and car*/}
                {/*                service providers by allowing car owners to make appointments for car*/}
                {/*                servicing to the service providers. It also has an online marketplace for*/}
                {/*                car accessories.*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className='flex-1'>*/}
                {/*        <div className='bg-[#252525] py-8 px-4 mx-auto my-8 w-full max-w-md'>*/}
                {/*            <h1 className='text-center font-bold text-[#8A2BE2] text-3xl p-4'>UIU Content Bank</h1>*/}
                {/*            <p>*/}
                {/*                <small>Java, JavaFX</small>*/}
                {/*                <br/>*/}
                {/*                A JavaFX software to store, share, and download study materials such as*/}
                {/*                PDFs, images, and papers.*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <div className='bg-[#252525] py-8 px-4 mx-auto my-8 w-full max-w-md'>*/}
                {/*            <h1 className='text-center font-bold text-[#8A2BE2] text-3xl p-4'>Funding Future</h1>*/}
                {/*            <p>*/}
                {/*                <small>PHP, HTML, CSS, Bootstrap, MySQL, JavaScript</small>*/}
                {/*                <br/>*/}
                {/*                A web-application to create donation campaigns and donate money to*/}
                {/*                selected campaigns using mobile or online banking.*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <div className='bg-[#252525] py-8 px-4 mx-auto my-8 w-full max-w-md'>*/}
                {/*            <h1 className='text-center font-bold text-[#8A2BE2] text-2xl p-4'>Home Automation For The*/}
                {/*                Physically Challenged</h1>*/}
                {/*            <p>*/}
                {/*                <small>Arduino, ESP32, JavaScript</small>*/}
                {/*                <br/>*/}
                {/*                An IoT-based embedded automated system for physically challenged*/}
                {/*                people to navigate with ease at their home, with a web-application as an*/}
                {/*                interface for family members to monitor.*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className='flex-1'>*/}
                {/*        <div className='bg-[#252525] py-8 px-4 mx-auto my-8 w-full max-w-md'>*/}
                {/*            <h1 className='text-center font-bold text-[#8A2BE2] text-3xl p-4'>Bike Parking System</h1>*/}
                {/*            <p>*/}
                {/*                <small>Arduino, C++</small>*/}
                {/*                <br/>*/}
                {/*                An Arduino-based embedded system that eases bike*/}
                {/*                parking and strengthens bike’s security against malicious*/}
                {/*                intents and environmental hazards. This system also has the feature*/}
                {/*                to store rainwater in a designated container.*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <div className='bg-[#252525] py-8 px-4 mx-auto my-8 w-full max-w-md'>*/}
                {/*            <h1 className='text-center font-bold text-[#8A2BE2] text-3xl p-4'>FireFighting Robot</h1>*/}
                {/*            <p>*/}
                {/*                <small>Arduino, ESP32-CAM, Yolov8</small>*/}
                {/*                <br/>*/}
                {/*                A four-wheeled IoT-based robot that detects fire using*/}
                {/*                computer vision and extinguishes fire via a water pump. An Arduino and ESP32 Cam*/}
                {/*                have been used to build this robot.*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <div className='bg-[#252525] py-8 px-4 mx-auto my-8 w-full max-w-md'>*/}
                {/*            <h1 className='text-center font-bold text-[#8A2BE2] text-3xl p-4'>Covid Registration System</h1>*/}
                {/*            <p>*/}
                {/*                <small>Laravel, Blade</small>*/}
                {/*                <br/>*/}
                {/*                A web application for patients to register and select their desired vaccine centers,*/}
                {/*                with an automated mail notification system. This system implements Laravel Task Scheduling*/}
                {/*                and a custom Artisan command. <b>This is an ongoing project.</b>*/}
                {/*            </p>*/}
                {/*        </div>*/}
            {/*</div>*/}
        </div>
</>
)
}

export default Projects