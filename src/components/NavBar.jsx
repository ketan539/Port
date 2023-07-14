import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { GithubIcon, GmailIcon, LinkedinIcon } from "./Icons";
import { motion } from "framer-motion"


const NavBar = () => {
    const location = useLocation();

    const CustomLink = ({ to, title, className }) => {
        return (
            <Link to={to} className={`${className} relative group`}>{title}
                <span className={`h-[1px] inline-block  bg-black absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration-300 ${location.pathname === to ? 'w-full' : 'w-0'}`}>&nbsp;</span>
            </Link>
        )
    }
    return (
        <>
            <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
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
                        whileTap={{scale:0.9}}
                        ><LinkedinIcon /></motion.a>

                    <motion.a className="w-6 mx-3" href="/" target="_blank"
                        whileHover={{ y: -3}}
                        whileTap={{scale:0.9}}
                        ><GithubIcon /></motion.a>

                    <motion.a className="w-6 ml-3" href="/" target="_blank"
                        whileHover={{ y: -3 }}
                        whileTap={{scale:0.9}}
                        ><GmailIcon /></motion.a>
                </nav>
            </header>
        </>
    );
}

export default NavBar;