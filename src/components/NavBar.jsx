import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { GithubIcon, GmailIcon, LinkedinIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion"
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import Moon from "./../images/3859138_cloud_forecast_moon_reflection_weather_icon.png"

const NavBar = () => {
    const location = useLocation();
    const [mode, setMode] = useThemeSwitcher();
    console.log(mode)


    const CustomLink = ({ to, title, className }) => {
        return (
            <Link to={to} className={`${className} relative group`}>{title}
                <span className={`h-[1px] inline-block  bg-black absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration-300 dark:bg-white ${location.pathname === to ? 'w-full' : 'w-0'}`}>&nbsp;</span>
            </Link>
        )
    }
    return (
        <>
            <header className="w-full px-32 py-8 font-medium dark:bg-black dark:text-white flex items-center justify-between">
                <nav>
                    <CustomLink to='/' title="Home" className="mr-4" />
                    <CustomLink to='/about' title="About" className="mx-4" />
                    <CustomLink to='/projects' title="Projects" className="mx-4" />
                </nav>

                <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                    <Logo />
                </div>


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


            </header>
        </>
    );
}

export default NavBar;