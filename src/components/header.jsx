import {Link} from "react-router-dom";
import {useState} from "react";

const Header = ({label}) => {
    const [menu, setMenu] = useState(false)
    const toggle_menu = () => {
        setMenu(!menu)
    }
    return (
        <>
            <header className='md:hidden fixed top-0 left-0 w-full bg-[#252525] flex justify-between items-center pb-2 z-50'>
                <h1 className='ml-4 text-3xl font-[700] text-[#8A2BE2] mt-2'>{label}</h1>
                <span className='cursor-pointer mx-2 text-[#8A2BE2] text-3xl mt-2' onClick={toggle_menu}>
                    <ion-icon name="grid-outline"></ion-icon>
                </span>
            </header>
            {menu && (
                <div className={`md:hidden fixed top-0 left-0 h-full bg-[#252525] shadow-lg z-50 p-4 transform transition-transform duration-1000 ${menu ? 'translate-x-0' : '-translate-x-full'} w-full md:w-1/3 lg:w-1/4`}>
                    <span className='cursor-pointer mx-2 text-[#8A2BE2] text-3xl mt-2' onClick={toggle_menu}>
                        <ion-icon name="close-outline"></ion-icon>
                    </span>
                    <nav>
                        <ul>
                            <li className="mb-4">
                                <Link to="/" className="text-[#8A2BE2]">
                                    Home
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/about-me" className="text-[#8A2BE2]">
                                    About Me
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/projects" className="text-[#8A2BE2]">
                                    My Projects
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="" className="text-[#8A2BE2]">
                                    My Stories
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