import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaDotCircle, FaArrowRight, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom'

export default function Home({transform}) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("http://localhost:3000/api/message/newMessage",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            }
        )

        const data = await res.json();
        if (data.success === false){
            setError(data.message);
            setLoading(false);
            return;
        }

        if (data.success === true){
            setSuccessful(data.message);
            setLoading(false);
        }

        setTimeout(() => {
            navigate("/");
        }, 2000);
    }

  return (

    <div className={`relative bg-[#faf8ff] w-full translate-y-[${transform}rem]`}
    style={{transition: "all 0.5s ease"}}>

        <section id='hero' className='max-w-3xl md:max-w-6xl mx-auto px-6 md:px-8] sm:pb-20'>

            <div className='flex flex-col sm:flex-row gap-4 sm:gap-0  sm:h-[70vh] items-center py-10 sm:py-0'>

                <div className='flex flex-1 flex-col gap-3'>

                    <h3 className='text-xl sm:text-3xl'>
                        Hi, I'm
                    </h3>

                    <h2 className='text-4xl sm:text-6xl'>
                        Web Developer<span className='text-[#028041]'>.</span>
                    </h2>

                    <h4 className='mb-4'>My name is Otmar — I design and develop scalable digital products, blending precision with intuitive user experiences.</h4>

                    <div className='hidden sm:flex items-center gap-2 sm:gap-4'>

                        <div className='flex gap-2'>

                        <Link className='hover:scale-120 transition-all' to={"/https://www.linkedin.com/in/otmar-tchenga-953988319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} >
                            <FaLinkedin className='text-2xl'/>
                        </Link>

                        <Link className='hover:scale-120 transition-all' to={"https://github.com/Robots-Pixels"}>
                            <FaGithub className='text-2xl'/>
                        </Link>

                        <Link className='hover:scale-120 transition-all' to={"mailto:otmartch23@gmail.com"}>
                            <FaEnvelope className='text-2xl'/>
                        </Link>

                        </div>


                        <div className=''>
                            <HashLink smooth to={"#contact"} className='border-[#028041] border-1 text-[#028041] px-2 py-2 text-[1rem] rounded-xl shadow-3xs shadow-[#028041] hover:bg-[#028041] hover:text-[#fff] transition-colors'>
                                Contact Me
                            </HashLink>
                        </div>

                    </div>
                            
                </div>

                <div className='relative w-full z-20 sm:flex-1 bg-cover h-[15rem] sm:h-100 rounded-[80px] sm:rounded-[100px]'
                style={{backgroundImage: `url("/1.jpg")`, backgroundSize: "120%", backgroundPosition: 'top -40px center'}}>

                    <div className='hidden z-2 absolute bottom-0 text-[#79af87] -left-10 text-[0.5rem] sm:grid grid-cols-5 gap-4'>

                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>

                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>

                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>

                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>

                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>

                    </div>

                </div>

                <div className='sm:hidden flex self-start items-center gap-2 sm:gap-4 mt-4 ml-3'>

                    <div className='flex gap-2'>

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

                    <div className=''>
                        <Link className='border-[#028041] border-1 text-[#028041] px-2 py-2 text-[1rem] rounded-xl shadow-3xs shadow-[#028041] hover:bg-[#028041] hover:text-[#fff] transition-colors'>
                            Contact Me
                        </Link>
                    </div>

                </div>
            
            </div>


        </section>

        <section id="about" className="py-20 bg-[#d5fadd]">
            <div className="max-w-3xl md:max-w-6xl mx-auto px-6 md:px-8]">
                <h2 className="text-3xl font-semibold mb-6">More About Me</h2>
                <p className="text-md sm:text-lg">
                <span className='text-3xl'>I</span>'m Otmar, a professional web developer focused on creating scalable, user-friendly applications. With <span className='font-bold'>over 3 years of experience</span>, I specialize in full-stack technologies using <span className='font-bold'>the MERN Stack</span>, always striving for clean, efficient code and seamless user experiences.</p>
                <p className="mt-4 text-md sm:text-lg">
                <span className='text-3xl'>C</span>uriosity and continuous learning drive my work. I thrive in the fast-paced, ever-evolving tech world, <span className='font-bold'>adapting quickly to new tools and frameworks.</span></p>
                <p className="mt-4 text-md sm:text-lg">
                <span className='text-3xl'>I</span>  <span className='font-bold'>believe in collaboration and enjoy working in teams</span>, and mentoring others. It's important to me to not only develop my technical skills but also embrace a startup mindset—understanding business goals and taking initiative to lead projects.</p>
            </div>
        </section>

        <section id="portfolio" className='py-20'>

            <div className="max-w-3xl md:max-w-6xl mx-auto px-6 md:px-8]">
                <h1 className="text-3xl font-semibold mb-10">My Work</h1>
                <div className="flex flex-col gap-5">

                    <Link to={"https://celeste-sand.vercel.app/"} target='_blank' className="relative project overflow-hidden group">

                        <div className='project-layer absolute w-full h-full bg-[#000]/60 gap-3 rounded-3xl flex flex-col items-center justify-center translate-y-[100%] group-hover:translate-y-[0%]' 
                        style={{transition: "translate 0.7s"}}>

                            <div>
                                <h3 className='text-[#faf8ff] w-[30rem] text-center font-bold'>
                                    A clean, responsive portfolio platform with dynamic sections and smooth animations.
                                </h3>
                            </div>

                            <div className='flex items-center justify-center text-2xl gap-10'>
                                <Link className='text-4xl text-black' to={"https://github.com/Robots-Pixels/Celeste-Restaurant"} target='_blank'>
                                    <button className='flex items-center bg-[#028041] rounded-sm gap-2 p-1 text-[#faf8ff]'>
                                        <span className='text-xl'>Code Here</span>
                                        <FaGithub className='text-[2rem]'/>
                                    </button>
                                </Link>

                                <Link className='text-4xl text-black' to={"https://celeste-sand.vercel.app/"} target='_blank'>
                                    <button className='flex items-center bg-[#028041] rounded-sm gap-2 p-1 text-[#faf8ff]'>
                                        <span className='text-xl'>Live Preview</span>
                                        <FaEye className='text-[2rem]'/>
                                    </button>
                                </Link>

                            </div>
                        </div>

                        <img className='rounded-3xl' src="/project1.png" />

                    </Link>

                    <Link to={"https://yumking-frontend.vercel.app/"} target='_blank' className="relative project overflow-hidden group">

                        <div className='project-layer absolute w-full h-full bg-[#000]/60 gap-3 rounded-3xl flex flex-col items-center justify-center translate-y-[100%] group-hover:translate-y-[0%]' 
                        style={{transition: "translate 0.7s"}}>

                            <div>
                                <h3 className='text-[#faf8ff] w-[30rem] text-center font-bold'>
                                    A fast and intuitive food delivery app with real-time reservation, smart filters and authentication.
                                </h3>
                            </div>

                            <div className='flex items-center justify-center text-2xl gap-10'>
                                <Link className='text-4xl text-black' to={"https://github.com/Robots-Pixels/yumking-fast-food-app"} target='_blank'>
                                    <button className='flex items-center bg-[#028041] rounded-sm gap-2 p-1 text-[#faf8ff]'>
                                        <span className='text-xl'>Code Here</span>
                                        <FaGithub className='text-[2rem]'/>
                                    </button>
                                </Link>

                                <Link className='text-4xl text-black' to={"https://yumking-frontend.vercel.app/"} target='_blank'>
                                    <button className='flex items-center bg-[#028041] rounded-sm gap-2 p-1 text-[#faf8ff]'>
                                        <span className='text-xl'>Live Preview</span>
                                        <FaEye className='text-[2rem]'/>
                                    </button>
                                </Link>

                            </div>
                        </div>

                        <img className='rounded-3xl' src="/project2.png" />

                    </Link>

                </div>

            </div>
        </section>

        <section id="skills" className='py-20 bg-[#d5fadd]'>

            <div className="max-w-3xl md:max-w-6xl mx-auto px-6 md:px-8]">

                <div id="services">

                    <div className="container">
                        <h1 className="text-3xl font-bold">My Services</h1>
                        <div className="services-list">
                            
                        <div>
                            <i className="fa-brands fa-app-store"></i>
                            <h2>FullStack Web Development</h2>
                            <p>
                            Building complete, scalable web applications from idea to deployment using the MERN stack.
                            </p>

                            <HashLink smooth to="#contact" className='flex items-center gap-2 text-sm'> <span>Let's Get in touch </span> <span><FaArrowRight/></span> </HashLink>

                        </div>
                    
                        <div>
                            <i className="fa-brands fa-app-store"></i>
                            <h2>Front-End Development</h2>
                            <p>
                            Crafting responsive, user-friendly interfaces with React and modern design principles.
                            </p>

                            <HashLink smooth to="#contact" className='flex items-center gap-2 text-sm' > <span>Let's Get in touch </span> <span><FaArrowRight/></span> </HashLink>

                        </div>
                             
                        <div>
                            <i className="fa-brands fa-app-store"></i>
                            <h2>Back-End Development</h2>
                            <p>
                            Designing robust APIs, managing databases, and ensuring secure, high-performance server-side logic with Node.js and MongoDB.
                            </p>

                            <HashLink smooth to="#contact" className='flex items-center gap-2 text-sm'> <span>Let's Get in touch </span> <span><FaArrowRight/></span> </HashLink>

                        </div>
                        
                        </div>
                    </div>
                    
                </div>

            </div>

        </section>

        <section id='contact'>
            <div className="max-w-3xl md:max-w-6xl mx-auto px-6 md:px-8] py-20">
                <div className="flex flex-col items-center gap-5">
                    <h2 className='text-2xl sm:text-4xl font-bold text-[#028041] text-center mb-4'>Send me a message!</h2>

                    <h3 className='text-md sm:text-xl text-center mb-4'>
                    Have a project in mind or just want to connect? Let's talk.
                    </h3>
                    
                    <form className='flex flex-col gap-6' onSubmit={handleSubmit}>

                        <div className='flex flex-col sm:flex-row gap-8'>

                            <div className='flex flex-col gap-1'>
                                <label className='text-xs sm:text-md'>Your Name</label>
                                <input id='name' onChange={handleChange} value={formData.name} required className='text-md sm:text-md outline-none pb-2 border-b-1 w-full text-[#052935]' type="text" placeholder='Enter your name'/>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label className='text-xs sm:text-md'>Your Email Address</label>
                                <input id='email' onChange={handleChange} value={formData.email} required className='text-md sm:text-md outline-none pb-2 border-b-1 w-full text-[#052935]' type="text" placeholder='Enter your email'/>
                            </div>

                        </div>

                        <div className='flex flex-col gap-1 flex-1'>
                            <label className='text-xs sm:text-md'>Your Message</label>
                            <textarea id='message' onChange={handleChange} value={formData.message} rows={5} required className='text-md sm:text-md outline-none pb-2 border-b-1 text-[#052935]' type="text" placeholder="Hi, we're looking for someone who can help us build fast web app at Company X. When would you be available to discuss this?"/>
                        </div>

                        <div>
                            
                        </div>

                        <button className='mx-auto border-[#028041] border-1 p-2 text-[#028041] hover:bg-[#028041] hover:text-[#faf8ff] transition-all rounded-xl w-full sm:w-[70%]'>
                            Send
                        </button>


                    </form>

                </div>
            </div>
        </section>

        <Footer/>
        
    </div>

  )
}
