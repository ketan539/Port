import React from "react";

import { motion } from 'framer-motion';

const Skill = ({name, x, y}) => {
    return (
        <motion.div className="flex items-center absolute cursor-pointer justify-center rounded-full font-semibold bg-black text-white py-3 px-6 shadow-black"
            whileHover={{ scale: 1.1 }}
            initial={{x:0, y:0}}
            animate={{x:x, y:y}}
            transition={{duration:1.5}}>
            {name}
        </motion.div>

    )

}


const Skills = () => {
    return (

        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">
                Skills
            </h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
                <motion.div className="flex items-center cursor-pointer justify-center rounded-full font-semibold bg-black text-white p-8 shadow-black"
                    whileHover={{ scale: 1.1 }}>
                    Web

                </motion.div>
                <Skill name='CSS' x="-5vw" y="-10vw" />


            </div>

        </>
    );
}

export default Skills;