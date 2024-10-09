import React from "react";
import MainImage from "./../images/Leonardo_Anime_XL_Type_of_Image_Digital_illustration_Subject_D_0.jpg"
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";
import HireMe from "./HireMe";
//import TransitionEffect from "./TransitionEffect";
//import { Link } from "react-router-dom";

const Base = () => {
    return (

        <>
            {/* <TransitionEffect /> */}
            
            <main className='w-[100%] flex items-center justify-between text-black dark:text-white'>
                <Layout className="pt-0 md:p-16 sm:pt-8">
                    <div className='flex items-center justify-between w-full lg:flex-col'>
                        <div className='w-1/2 md:w-full md:mt-4'>
                            <img src={MainImage} alt='base_image'
                                className='w-full h-auto lg:hidden md:inline-block md:w-full'

                            />
                        </div>
                        <div className="w-1/2 flex flex-col md:mt-4 items-center self-center lg:w-full lg:text-center">
                            <AnimatedText text='Web developer high on caffeine.' className="!text-6xl !text-left ml-5
                            xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
                            " />
                            <p className="my-4 ml-5 text-base md:text-sm sm:text-xs font-medium">Passionate web developer who loves making cool looking and scalable web applications. Having expertise in React.js and Django framework. Explore my articles and projects to see my work.</p>
                            <div className="flex items-center self-start mt-2 ml-5 lg:self-center">
                                <a href='/dummy.jpg' target="_blank"
                                    className="flex items-center
                                    md:p-2 md:px-4 md:text-base
                                    bg-black text-white px-6 p-2.5 rounded-lg text-lg  font-semibold hover:bg-light hover:text-black hover:bg-white dark:text-black dark:bg-white dark:hover:bg-blue-800 dark:hover:text-white border-2 border-solid border-transparent hover:border-dark ">
                                    Resume</a>
                                <a href="mailto:ketann539@gmail.com" target="_blank" rel="noreferrer"
                                    className="ml-5 md:text-base font-medium text-lg capitalize text-dark underline">
                                    Contact</a>

                            </div>
                        </div>
                    </div>
                </Layout>
                <HireMe />
            </main>


        </>
    );
}

export default Base;