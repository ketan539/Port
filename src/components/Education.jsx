import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import LiIcons from "./LiIcons";


const Details = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between">
        <LiIcons reference={ref} />
        <motion.div

            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}>
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
            <span className="capitalize font-medium text-black/75 xs:text-sm dark:text-white/75">
                {time} | {place}
            </span>
            <p className="font-medium w-full md:text-sm">
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (

        <>
            <div className='mt-26 mb-40'>
                <h2 className="font-bold text-8xl text-center mb-32 w-full md:text-6xl xs:text-4xl md:mb-16">
                    Education
                </h2>
                <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" >
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="absolute md:w-[2px] md:left-[30px] xs:left-[20px] left-9 top-0 w-[4px] h-full dark:bg-white bg-black origin-top" />
                    <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                        <Details
                            type="PG in Python Full Stack Web-Development"
                            time="Feb 2022 - Nov 2022"
                            place="IT Vedant Institute, Mumbai"
                            info={`Certification of Python for Web Development by IBM Developer Skills Network.
Certification of Python Programming by IT Vedant Institute.
Certification of Web Designing by IT Vedant Institute.
`}
                        />
                    </ul>
                    <ul className="w-full flex flex-col items-start justify-between ml-4 my-3">
                        <Details
                            type="Bachelors of Engineering"
                            time="Sep 2018 -  Jun 2021"
                            place="Mumbai University, Mumbai"
                            info={`Completed Bachelors of Engineering with First class distinction.
                                Participated in various technical events and workshops.
                                 .`
                                
                            }

                        />
                    </ul>
                </div>
            </div>


        </>
    );
}

export default Education;