import React from "react";
import { motion } from 'framer-motion'


const quote = {
    initial: {
        opacity: 1,
        
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

const slide = {
    initial: {
        opacity: 1,
       y:50,
    },
    animate: {
        opacity: 1,
        y:0,
        transition: {
            duration:0.8,
          
        }
    }
}
const AnimatedText = ({ text, className = "" }) => {

    return (
        <>
            <div className="w-full mx-auto py-2 sm:py-0 flex items-center justify-center text-center overflow-hidden">
                <motion.h1 className={`inline-block w-full text-black dark:text-white font-bold capitalize text-6xl ${className}`}
                    variants={quote}
                    initial='initial'
                    animate='animate'
                >

                    {
                    text.split(" ").map((word, index) => {
                        return <motion.span key={word + '-' + index} className="inline-block"
                            variants={slide}
                        >
                            {word}&nbsp;
                        </motion.span>
                    })
                    }
                </motion.h1>
            </div>
        </>
    );
}

export default AnimatedText;