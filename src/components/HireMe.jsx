import React from "react";
import { HireMeIcon } from "./Icons";
import { Link } from "react-router-dom";


const HireMe = () => {
    return (

        <>
            <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:absolute sm:right-0 md:left-auto md:top-1 md:bottom-auto">
            {/* <div className="fixed left-4 bottom-4 flex items-center justify-center md:hidden"> */}
                <div className="w-48 md:w-24 h-auto  flex items-center justify-center relative">
                    <HireMeIcon className={'fill-black animate-spin-slow dark:fill-white z-20'} />

                    <Link to="mailto:ketann539@gmail.com" className="flex items-center justify-center z-20
                    bg-black text-white shadow-md border border-solid border-black w-20 h-20 rounded-full font-semibold
                    hover:bg-white hover:text-black hover:dark:bg-black hover:dark:text-white 
                    dark:bg-white dark:text-black 
                    md:w-12 md:h-12 md:text-[10px]
                    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        Hire Me
                    </Link>

                </div>


            </div>


        </>
    );
}

export default HireMe;