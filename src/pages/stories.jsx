import Header from "../components/header.jsx";

const Stories=()=>{
    return(
        <>
            <Header label={'MY STORIES'}></Header>
            <h1 className='hidden md:block text-white text-[60px] font-black text-center leading-[62px] mt-10'>
                MY <span className='text-[#8A2BE2]'>STORIES</span>
            </h1>

        </>
    )
}

export default Stories