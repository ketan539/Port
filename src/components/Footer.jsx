import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="w-full text-white border-t-2 border-solid border-dark font-medium text-lg mt-5">
                <Layout className="py-16 !bg-black flex items-center justify-between">
                    <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                    <div className="absolute left-[50%]  translate-x-[-50%]">
                        <span>Made with <span className="text-[#db2777] text-2xl mt-1">&hearts;</span> by React.js</span>
                    </div>
                    <Link to='/home'>My Portfolio</Link>
                </Layout>
            </footer>
        </>
    );
}

export default Footer;