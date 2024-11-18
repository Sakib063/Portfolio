import {Link} from "react-router-dom";

const ButtonCircle=({label,link,icon,page})=>{
    return (
        <div className='mb-8'>
            <div className={`flex flex-row transform origin-right justify-center items-center duration-300 rounded-full ${page === true ? 'bg-[#068BF7]' : 'bg-[#252525]'} h-12 w-12 group hover:w-28`}>
                <Link to={link} className='flex items-center text-white'>
                      <span className='hidden text-center group-hover:inline-block origin-left text-sm py-2 mr-2'>
                        {label}
                      </span>
                    <ion-icon name={icon}></ion-icon>
                </Link>
            </div>
        </div>
    )
}
export default ButtonCircle