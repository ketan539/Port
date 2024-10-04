import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { GithubIcon, GmailIcon, LinkedinIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion"
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import Moon from "./../images/3859138_cloud_forecast_moon_reflection_weather_icon.png"
import { useState } from "react";

const NavBar = () => {
    const location = useLocation();
    const [mode, setMode] = useThemeSwitcher();

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }


    const CustomLink = ({ to, title, className }) => {
        return (
            <Link to={to} className={`${className} relative group`}>{title}
                <span className={`h-[1px] inline-block  bg-black absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration-300 dark:bg-white ${location.pathname === to ? 'w-full' : 'w-0'}`}>&nbsp;</span>
            </Link>
        )
    }

    const CustomMobileLink = ({ to, title, className = "", toggle }) => {

        const navigate = useNavigate();

        const handleMobileClick = () => {
            toggle();
            navigate(to)
        }

        return (
            <button to={to} className={`${className} relative group text-white dark:text-black my-2`} onClick={handleMobileClick}>{title}
                <span className={`h-[1px] inline-block  bg-white dark:bg-black absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration-300  ${location.pathname === to ? 'w-full' : 'w-0'}`}>&nbsp;</span>
            </button>
        )
    }
    return (
        <>
            <header className="w-full px-32 py-8 font-medium dark:bg-black dark:text-white 
            flex items-center justify-between relative
            z-10 lg:px-16 md:px-12 sm:p-8
            ">

                <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                    <span className={`bg-black dark:bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-black dark:bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-black dark:bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </button>

                <div className="w-full flex justify-between items-center lg:hidden">
                    <nav>
                        <CustomLink to='/' title="Home" className="mr-4" />
                        <CustomLink to='/about' title="About" className="mx-4" />
                        <CustomLink to='/projects' title="Projects" className="mx-4" />
                    </nav>

                    <nav className="flex items-center justify-center flex-wrap">
                        <motion.a className="w-6 mx-3" href="/" target="_blank"
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                        ><LinkedinIcon /></motion.a>

                        <motion.a className="w-6 mx-3" href="/" target="_blank"
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                        ><GithubIcon className='dark:bg-white rounded-full' /></motion.a>

                        <motion.a className="w-6 ml-3" href="/" target="_blank"
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                        ><GmailIcon /></motion.a>

                        <button
                            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                            className="ml-3 flex items-end justify-center rounded-full p-1">

                            {mode === ' light ' ?
                                (
                                    <img src={Moon} alt='moon' className={'fill-black'} />
                                )
                                :
                                (
                                    <SunIcon className={'fill-black'} />
                                )

                            }

                        </button>

                    </nav>
                </div>

                {isOpen ?
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="min-w-[70vw] flex flex-col transition-all ease-out bg-black/80 dark:bg-white/75 rounded-lg backdrop-blur-md py-32 justify-between items-center 
                        fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
                        ">
                        <nav className="flex items-center flex-col justify-center">
                            <CustomMobileLink to='/' title="Home" className="" toggle={handleClick} />
                            <CustomMobileLink to='/about' title="About" className="" toggle={handleClick} />
                            <CustomMobileLink to='/projects' title="Projects" className="" toggle={handleClick} />
                        </nav>

                        <nav className="flex items-center justify-center flex-wrap mt-2">
                            <motion.a className="w-6 mx-3 sm:mx-2" href="/" target="_blank"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            ><LinkedinIcon /></motion.a>

                            <motion.a className="w-6 mx-3 sm:mx-2" href="/" target="_blank"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            ><GithubIcon className='bg-white rounded-full' /></motion.a>

                            <motion.a className="w-6 mx-3 sm:mx-2" href="/" target="_blank"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            ><GmailIcon /></motion.a>

                            <button
                                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                                className="ml-3 flex items-end justify-center rounded-full p-1">

                                {mode === ' light ' ?
                                    (
                                        <img src={Moon} alt='moon' className={'fill-black'} />
                                    )
                                    :
                                    (
                                        <SunIcon className={'fill-black'} />
                                    )

                                }

                            </button>

                        </nav>
                    </motion.div>
                    : null}

                <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                    <Logo />
                </div>





            </header>
        </>
    );
}

export default NavBar;