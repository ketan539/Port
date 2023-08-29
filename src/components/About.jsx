import React, { useEffect, useRef } from "react";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";
import ProfileImage from "./../images/mana5280-bI_Fkt7p0Ks-unsplash.jpg"
import {  useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";



const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionvalue = useMotionValue(0);
    const springvalue = useSpring(motionvalue, { duration: 3000 })
    const isInView = useInView(ref, {once: true});


    useEffect(() => {
        if (isInView) {
            motionvalue.set(value);
        }
    }, [isInView, value, motionvalue])


    useEffect(() => {
        springvalue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContext =latest.toFixed(0);
            }
        })
    }, [springvalue, value])

    return <span ref={ref}></span>
}



const About = () => {

 
    return (
        <>
            {/* <head>
                <title>About Page</title>
                <meta name="description" content=""></meta>
            </head> */}
            <main className="flex w-full flex-col items-center dark:bg-black dark:text-white justify-center">
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels Purpose" className="mb-16" />
                    <div className="grid w-full grid-cols-8 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase dark:text-white/75 text-black/75">About me</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum illum necessitatibus itaque est libero,
                                veniam laudantium tempore sint repellendus omnis eum,
                                iusto porro cupiditate maxime harum suscipit illo nostrum?
                            </p>

                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-5 shadow-xl">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black" />
                            <img src={ProfileImage} alt="ketan_nagpure" className="w-full rounded-2xl" />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between">
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                <AnimatedNumbers value={50}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize dark:text-white/75 text-black/75">
                                    Satisfied clients
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                <AnimatedNumbers value={40}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize dark:text-white/75 text-black/75">
                                    Projects completed
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    1.5
                                </span>
                                <h2 className="text-xl font-medium capitalize dark:text-white/75 text-black/75">
                                    Years of experience
                                </h2>
                            </div>
                        </div>
                    </div>
                </Layout>
                <Skills/>
                <Experience/>
                <Education/>

            </main>






        </>
    );
}

export default About;