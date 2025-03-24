import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaChevronLeft, FaChevronRight, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

export default function Header({setTransform}) {

    const [isSmall, setIsSmall] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth > 600){
                setIsSmall(false);
            }
            else{
                setIsSmall(true);
            }
        }
        
        handleWindowResize();

        window.addEventListener("resize", handleWindowResize);
        return () => {window.removeEventListener("resize", handleWindowResize)};
    }, []);

    const handleClick = () => {
        setClicked(!clicked);
    }

    useEffect(() => {
        if(clicked){
            setTransform("10");
        }
        else{
            setTransform("0");
        }
    }, [clicked]);

    useEffect(() => {
        if(!isSmall){
            setClicked(false);
        }
    }, [isSmall])

  return (

    <div className='w-full'>
    
        <header className='relative py-5'>

            <div className='max-w-3xl md:max-w-6xl mx-auto px-6 md:px-8'>
                <div className='flex items-center justify-between'>

                    <div className='flex items-center gap-6'>

                        <Link className='text-xl logo' to={"/"}>

                            <div className='flex items-center gap-1'>
                                <h4 className='flex items-center'>
                                    <FaChevronLeft className='text-sm text-[#052935]'/>
                                    <span className='text-[#028041]'>O</span>
                                    <span className='text-[#052935]'>T</span>
                                    <FaChevronRight className='text-sm text-[#052935]'/>
                                </h4>
                                
                                <h4 className='text-[#052935]'>Otmar Tchenga</h4>
                            </div>

                        </Link>

                        <div className={` ${isSmall ? "hidden" : "flex"} items-center gap-6 text-[#052935]`}>
                            
                            <HashLink smooth to={"#about"}>
                                About me
                            </HashLink>

                            <HashLink smooth to={"#portfolio"}>
                                My Work
                            </HashLink>
                        
                            <HashLink smooth to={"#services"}>
                                My Services
                            </HashLink>
                        </div>

                    </div>

                    <div className={`${isSmall ? "hidden" : "flex"} items-center gap-4`}>
                        <HashLink smooth to={"#contact"} className='border-[#028041] border-1 text-[#028041] px-4 py-2 text-[1rem] rounded-xl shadow-3xs shadow-[#028041] hover:bg-[#028041] hover:text-[#fff] transition-colors'>
                            Contact Me
                        </HashLink>
                    </div>

                    <div className={`${isSmall ? "block" : "hidden"} border-1 p-2 rounded-sm cursor-pointer`}
                    onClick={handleClick}>
                        <FaBars className='text-sm'/>
                    </div>

                    
                </div>
            </div>

            <div className={`${isSmall ? "absolute" : "hidden"} w-full h-[8rem] left-0 top-[100%] pt-9 pb-8`}>

                <div className='max-w-3xl md:max-w-6xl mx-auto px-6 md:px-8 h-full'>

                    <div className={`flex flex-col gap-3 text-[#052935] h-full justify-center`}>
                        
                        <HashLink smooth to={"#about"}>
                            About me
                        </HashLink>

                        <HashLink smooth to={"#portfolio"}>
                            My Work
                        </HashLink>

                        <HashLink smooth to={"#services"}>
                            My Services
                        </HashLink>

                        <div className='flex items-center gap-2'>

                            <Link className='hover:scale-120 transition-all' to={"https://github.com/Robots-Pixels"}>
                                <FaLinkedin className='text-2xl'/>
                            </Link>

                            <Link className='hover:scale-120 transition-all' to={"/https://www.linkedin.com/in/otmar-tchenga-953988319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                                <FaGithub className='text-2xl'/>
                            </Link>

                            <Link className='hover:scale-120 transition-all' to={"mailto:otmartch23@gmail.com"}>
                                <FaEnvelope className='text-2xl'/>
                            </Link>

                        </div>

                        <div cassName='mt-2 -ml-1'>
                            <HashLink smooth to={"#contact"} className='border-[#028041] border-1 text-[#028041] px-2 py-2 text-[1rem] rounded-xl shadow-3xs shadow-[#028041] hover:bg-[#028041] hover:text-[#fff] transition-colors'>
                                Contact Me
                            </HashLink>
                        </div>
                            

                        
                    </div>

                </div>
            </div>

        </header>
        
    </div>

  )
}
