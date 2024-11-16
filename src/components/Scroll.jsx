import {useEffect, useState} from "react";

const Scroll=()=>{
    const [scrollProgress, setScrollProgress] = useState(0);

    const updateScrollProgress = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollProgress);
        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 h-1 z-50" style={{ width: `${scrollProgress}%`, backgroundColor: '#8A2BE2' }}></div>
    );
};

export default Scroll;
