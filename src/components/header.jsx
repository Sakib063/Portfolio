import {Link, useLocation} from "react-router-dom";
import {useState} from "react";

const Header=({label})=>{
    const word=label.includes(' ')?label.split(' '):[label]
    const [menu,setMenu]=useState(false)
    const toggle_menu=()=>{
        setMenu(!menu)
    }

    const location=useLocation()
    const path=location.pathname

    return (
        <>
            <header className='md:hidden fixed top-0 left-0 w-full bg-[#252525] flex justify-between items-center pb-2 z-50'>
                <h1 className='ml-4 text-3xl font-bold text-[#068BF7] mt-2'>{word[0]} <span className='text-white'>{word[1]}</span> {word[2]}</h1>
                <span className='cursor-pointer mr-6 text-[#068BF7] text-3xl mt-4' onClick={toggle_menu}>
                    <ion-icon name="menu-sharp"></ion-icon>
                </span>
            </header>
            {menu && (
                <div className={`md:hidden text-3xl fixed top-0 left-0 h-full bg-[#252525] shadow-lg z-50 p-4 transform transition-transform duration-1000 ${menu ? 'translate-x-0' : '-translate-x-full'} w-full md:w-1/3 lg:w-1/4`}>
                    <span className='flex justify-end cursor-pointer mx-2 text-[#068BF7] text-3xl' onClick={toggle_menu}>
                        <ion-icon name="close-outline"></ion-icon>
                    </span>
                    <nav>
                        <ul>
                            <li className={`my-4 ${path === '/' ? 'text-[#068BF7]' : 'text-white'}`}>
                                <ion-icon name="home-sharp"></ion-icon>
                                <Link to="/" className="ml-4">
                                    Home
                                </Link>
                            </li>
                            <hr className='border-t-2 border-[#333333]'/>
                            <li className={`my-4 ${path === '/about-me' ? 'text-[#068BF7]' : 'text-white'}`}>
                                <ion-icon name="person-sharp"></ion-icon>
                                <Link to="/about-me" className="ml-4">
                                    About Me
                                </Link>
                            </li>
                            <hr className='border-t-2 border-[#333333]'/>
                            <li className={`my-4 ${path === '/projects' ? 'text-[#068BF7]' : 'text-white'}`}>
                                <ion-icon name="code-slash-sharp"></ion-icon>
                                <Link to="/projects" className="ml-4">
                                    My Projects
                                </Link>
                            </li>
                            <hr className='border-t-2 border-[#333333]'/>
                            <li className={`my-4 ${path === '/my-stories' ? 'text-[#068BF7]' : 'text-white'}`}>
                                <ion-icon name="book-sharp"></ion-icon>
                                <Link to="/my-stories" className="ml-4">
                                    My Stories
                                </Link>
                            </li>
                            <hr className='border-t-2 border-[#333333]'/>
                            <li className={`my-4 ${path === '/contact' ? 'text-[#068BF7]' : 'text-white'}`}>
                                <ion-icon name="call-sharp"></ion-icon>
                                <Link to="/contact" className="ml-4">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    )
}

export default Header