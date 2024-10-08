import React, { useEffect, useRef } from "react";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";
import ProfileImage from "./../images/mana5280-bI_Fkt7p0Ks-unsplash.jpg"
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import TransitionEffect from "./TransitionEffect";



const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionvalue = useMotionValue(0);
    const springvalue = useSpring(motionvalue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });


    useEffect(() => {
        if (isInView) {
            motionvalue.set(value);
        }
    }, [isInView, value, motionvalue])


    useEffect(() => {
        springvalue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springvalue, value])

    return <span ref={ref}></span>
}



const About = () => {


    return (
        <>
        <TransitionEffect/>
            <main className="flex w-full flex-col items-center dark:bg-black dark:text-white justify-center">
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels Purpose" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase dark:text-white/75 text-black/75">About me</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum illum necessitatibus itaque est libero,
                                veniam laudantium tempore sint repellendus omnis eum,
                                iusto porro cupiditate maxime harum suscipit illo nostrum?
                            </p>

                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black dark:border-white bg-white dark:bg-black p-5 md:col-span-8 shadow-xl xl:col-span-4 md:order-1">
                            <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2.5rem] bg-black dark:bg-white rounded-br-3xl xs:-right-2 xs:h-[102] xs:w-full xs:rounded-[1.5rem]" />
                            <img src={ProfileImage} alt="ketan_nagpure" className="w-full rounded-2xl" />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between md:order-3 xl:col-span-8 xl:flex-row xl:items-center">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize dark:text-white/75 text-black/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Satisfied clients
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize dark:text-white/75 text-black/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Projects completed
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize dark:text-white/75 text-black/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Years of experience
                                </h2>
                            </div>
                        </div>
                    </div>
                </Layout>
                <Skills />
                <Experience />
                <Education />

            </main>






        </>
    );
}

export default About;