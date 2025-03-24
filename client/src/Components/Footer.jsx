import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default function Footer() {
  return (
    <footer className='bg-[#d5fadd]'>
        <div className="max-w-3xl md:max-w-6xl mx-auto px-6 md:px-8] py-20">
            <div className='flex h-full'>

            <div className='flex flex-col items-center w-full gap-10'>

                <div className='flex text-center items-center flex-col md:flex-row gap-5 md:gap-10'>

                    <div className='flex flex-col gap-2 text-sm md:text-lg'>
                        <h3 className='text-lg sm:text-xl font-bold'>GET IN TOUCH</h3>

                        <Link to={"mailto:otmartch23@gmail.com"}>
                            otmartch23@gmail.com
                        </Link>

                        <Link to={"tel:+229 01 40 82 04 93"}>
                            +229 01 40 82 04 93
                        </Link>

                    </div>

                    <div className='flex flex-col gap-2 text-sm md:text-lg'>
                        <h3 className='text-xl font-bold'>QUICK LINKS</h3>

                        <HashLink smooth to={"#about"}>
                            About Me
                        </HashLink>

                        <HashLink smooth to={"#portfolio"}>
                            My Work
                        </HashLink>

                        <HashLink smooth to={"#services"}>
                            My Services
                        </HashLink>

                        <HashLink smooth to={"#contact"}>
                            Contact Me
                        </HashLink>
                    </div>

                    <div className='flex flex-row md:flex-col gap-4 items-center text-center'>

                        <Link className='hover:scale-120 transition-all' to={"/https://www.linkedin.com/in/otmar-tchenga-953988319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} >
                            <FaLinkedin className='text-2xl'/>
                        </Link>


                        <Link className='hover:scale-120 transition-all' to={"https://github.com/Robots-Pixels"}>
                            <FaGithub className='text-2xl'/>
                        </Link>
                        
                    </div>

                </div>

                <div>
                    © Otmar Tchenga 2025
                </div>

            </div>

            </div>
        </div>
    </footer>
  )
}
