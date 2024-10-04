import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="w-full text-white border-t-2 border-solid sm:text-base border-black dark:text-white font-medium text-lg mt-5">
                <Layout className="py-8 flex items-center lg:flex-col lg:py-6 justify-between">
                    <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                    <div className="flex items-center">
                        <span>Made with <span className="text-[#db2777] text-2xl mt-1">&hearts;</span> by React.js</span>
                    </div>
                    <Link to='/'>My Portfolio</Link>
                </Layout>
            </footer>
        </>
    );
}

export default Footer;