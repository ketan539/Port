import { useScroll, motion } from "framer-motion";
import React, {  useRef } from "react";
import LiIcons from "./LiIcons";
const Details = ({ type, time, place, info }) => {
    const ref =useRef(null)
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
       <LiIcons reference={ref}/>
        <motion.div
        
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:'spring'}}>
            <h3 className="capitalize font-bold text-2xl">{type}</h3>
            <span className="capitalize font-medium text-black/75">
                {time} | {place}
            </span>
            <p>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const{scrollYProgress} = useScroll(
        {
            target: ref,
            offset:["start end", "center start"]
        }
    )
    return (

        <>
            <div className='mt-34 mb-40'>
                <h2 className="font-bold text-8xl text-center mb-32 w-full">

                    Education
                </h2>
                <div ref={ref} className="w-[75%] mx-auto relative" >
                    <motion.div
                    style={{scaleY: scrollYProgress}}
                    className="absolute left-20 top-0 w-[4px] h-full bg-black origin-top"/>
                    <ul className="w-full flex flex-col items-start justify-between ml-4 my-3"> 
                        <Details
                            type="PG in Python Full Stack Web-Development" 
                            time="Feb 2022 - Nov 2022" 
                            place="IT Vedant Institute, Mumbai"
                            info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum illum necessitatibus itaque est libero,
                            veniam laudantium tempore sint repellendus omnis eum,
                            iusto porro cupiditate maxime harum suscipit illo nostrum?'
                      
                          />
                    </ul>
                    <ul className="w-full flex flex-col items-start justify-between ml-4 my-3"> 
                        <Details
                            type="Bachelors of Engineering" 
                            time="Sep 2018 -  Jun 2021" 
                            place="Mumbai University, Mumbai"
                            info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum illum necessitatibus itaque est libero,
                            veniam laudantium tempore sint repellendus omnis eum,
                            iusto porro cupiditate maxime harum suscipit illo nostrum?'
                      
                          />
                    </ul>
                </div>
            </div>


        </>
    );
}

export default Education;