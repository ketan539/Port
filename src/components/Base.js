import React from "react";
import MainImage from "./../images/nasa-jlV2k_Fx0fc-unsplash.jpg"
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";
import HireMe from "./HireMe";
//import { Link } from "react-router-dom";

const Base = () => {
    return (

        <>
            <main className='w-full flex items-center justify-between text-black dark:text-white'>
                <Layout className="pt-3">
                    <div className='flex items-center justify-between w-full'>
                        <div className='w-1/2'>
                            <img src={MainImage} alt='ketan_nagpure' className='w-full h-auto' />
                        </div>
                        <div className="w-1/2 flex flex-col items-center self-center">
                            <AnimatedText text='Web developer high on caffeine.' className="!text-6xl !text-left ml-5" />
                            <p className="my-4 ml-5 text-base font-medium">Passionate web developer who loves making cool looking and scalable web applications. Having expertise in React.js and Django framework. Explore my articles and projects to see my work.</p>
                            <div className="flex items-center self-start mt-2 ml-5">
                                <a href='/dummy.jpg' target="_blank" 
                                    className="flex items-center bg-black text-white px-6 p-2.5 rounded-lg text-lg  font-semibold hover:bg-light hover:text-black hover:bg-white dark:text-black dark:bg-white dark:hover:bg-blue-800 dark:hover:text-white border-2 border-solid border-transparent hover:border-dark ">
                                        Resume</a>
                                <a href="mailto:ketann539@gmail.com" target="_blank"  rel="noreferrer"
                                className="ml-5 font-medium text-lg capitalize text-dark underline"> 
                                Contact</a> 
                              
                            </div>
                        </div>
                    </div>
                </Layout>
                <HireMe/>
            </main>


        </>
    );
}

export default Base;