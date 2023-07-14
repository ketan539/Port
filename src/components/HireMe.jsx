import React from "react";
import {motion} from 'framer-motion'



const HireMe = () => {
    return (

        <>
            <div className="fixed left-3   flex items-center justify-center ">
                <div className="w-48 h-auto  flex items-center justify-center relative">
                    <motion.a href="/" className='flex items-center text-center justify-center absolute  text-white bg-black
                    font-semibold px-4 py-9 shadow-md rounded-full'
                    whileHover={{
                        backgroundColor:["#475569","#94a3b8"],
                        transition:{duration:1.2, ease: 'easeInOut'},
                        scale:1.2
                        
                    }}
                    initial={{ backgroundColor:["#475569"]}}
                    animate={{ backgroundColor:["#020617","#172554","#1e40af","#1d4ed8","#2563eb","#3b82f6","#60a5fa","#3b82f6","#2563eb","#1d4ed8","#1e40af","#172554"] }}
                    transition={{ duration: 5, ease: 'easeInOut', repeat:Infinity }}
                
>
                  Hire me

                    </motion.a>

                </div>


            </div>


        </>
    );
}

export default HireMe;