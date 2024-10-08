import React from "react";


const Layout = ({ children, className }) => {
    return (
        <>
            <div className={` w-full h-full inline-block z-0 dark:bg-black xl:p-24 lg:p-16 md:p-12 sm:p-8 bg-white p-32 ${className}`}>
                {children}
            </div>
        </>
    );
}

export default Layout;