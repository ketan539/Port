import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

const MotionLink = motion(Link)
const Logo = () => {
    return ( 

        <>
        <div className="flex items-center justify-center mt-2">
        <MotionLink to='/' className="w-16 h-16 bg-[#020617] dark:border-white border border-solid border-transparent  text-white flex items-center justify-center rounded-full text-2xl font-bold"
        
        whileHover={{
            backgroundColor:["#020617","#172554","#1e40af","#1d4ed8","#2563eb","#3b82f6","#60a5fa","#3b82f6","#2563eb","#1d4ed8","#1e40af","#172554"],
            transition:{duration:1.2, repeat:Infinity}
        }}
        >
        KN
        </MotionLink>
        </div>
        </>
     );
}
 
export default Logo;