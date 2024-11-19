const ButtonLink=({icon,label,link})=>{
    return(
        <>
            <a target="_blank" href={link} className="relative outline-none inline-block overflow-hidden rounded-full whitespace-nowrap text-ellipsis text-center cursor-pointer align-middle select-none duration-500 uppercase no-underline px-[35px] pr-[70px] py-[16px] text-white font-semibold border border-[#068BF7] hover:bg-[#068BF7]">
                <span className="button-text">{label}</span>
                <span className="absolute right-[-1px] top-[-1px] bottom-0 w-[55px] flex justify-center items-center bg-[#068BF7] rounded-full">
                    <ion-icon name={icon}></ion-icon>
                </span>
            </a>
        </>
    )
}

export default ButtonLink