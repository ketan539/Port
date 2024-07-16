import { useScroll, motion } from "framer-motion";
import React, {  useRef } from "react";
import LiIcons from "./LiIcons";
const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref =useRef(null)
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
       <LiIcons reference={ref}/>
        <motion.div
        
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:'spring'}}>
            <h3 className="capitalize font-bold text-2xl">{position}&nbsp;<a className="text-blue-600" href={companyLink}>@{company}</a></h3>
            <span className="capitalize font-medium text-black/75">
                {time} | {address}
            </span>
            <p>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const{scrollYProgress} = useScroll(
        {
            target: ref,
            offset:["start end", "center start"]
        }
    )
    return (

        <>
            <div className='my-64'>
                <h2 className="font-bold text-8xl text-center mb-32 w-full">

                    Experience
                </h2>
                <div ref={ref} className="w-[75%] mx-auto relative" >
                    <motion.div
                    style={{scaleY: scrollYProgress}}
                    className="absolute left-20 top-0 w-[4px] h-full dark:bg-white   bg-black origin-top"/>
                    <ul className="w-full flex flex-col items-start justify-between ml-4 my-3"> 
                        <Details position="Jr. Software Engineer" company="Unilactic Enterprise"
                            time="January 2023 - Present" address="Mumbai."
                            companyLink="https://www.linkedin.com/in/ketan-nagpure-7a763a214/"
                            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum illum necessitatibus itaque est libero,
                            veniam laudantium tempore sint repellendus omnis eum,
                            iusto porro cupiditate maxime harum suscipit illo nostrum?"/>
                    </ul>
                    <ul className="w-full flex flex-col items-start justify-between ml-4 my-3"> 
                        <Details position="Jr. Software Engineer" company="Unilactic Enterprise"
                            time="January 2023 - Present" address="Mumbai."
                            companyLink="https://www.linkedin.com/in/ketan-nagpure-7a763a214/"
                            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum illum necessitatibus itaque est libero,
                            veniam laudantium tempore sint repellendus omnis eum,
                            iusto porro cupiditate maxime harum suscipit illo nostrum?"/>
                    </ul>
               
                </div>
            </div>


        </>
    );
}

export default Experience;