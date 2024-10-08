//import { Link } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";
import { motion } from "framer-motion";
import { GithubIcon } from "./Icons";
import Django_Blog_App from "./../images/Django_Blog_SS.PNG"
import Weather_App from "./../images/Weather_App.PNG"
import Django_Ecommerce from "./../images/Django_Ecommerce.PNG"
import TransitionEffect from "./TransitionEffect";




const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full  flex items-center justify-between dark:bg-black rounded-3xl border border-solid relative dark:border-white border-black bg-white shadow-2xl p-8
            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black dark:bg-white rounded-br-3xl xs:-right-2 sm:h-[102] xs:w-full xs:rounded-[1.5rem]" />

            <a href={link} target="_blank" rel="noopener noreferrer" className="w-1/2 lg:w-full  cursor-pointer overflow-hidden rounded-lg">
                <motion.img src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ scale: 0.2 }}
                />
            </a>
            <div className="w-1/2 lg:w-full flex flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6">
                <span className="text-blue-400 font-medium dark:text-teal-500 text-xl xs:text-base">{type}</span>
                <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full tex-left dark:text-white text-2xl font-bold sm:text-sm">{title}</h2>
                </a>
                <p className="my-2 font-medium dark:text-white text-black sm:text-sm">{summary}</p>
            </div>
            <div className="mt-2 flex items-center">
                <a href={github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 dark:bg-white p-1 rounded-full"><GithubIcon /></a>
                <a href={link} target="_blank" rel="noopener noreferrer" className="ml-1 rounded-lg bg-black text-white dark:bg-white dark:text-black p-2 px-6 text-sm font-semibold sm:px-4 sm:text-base">Visit</a>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <>
            <article className="w-full flex flex-col relative items-center justify-between rounded-2xl border border-solid dark:border-white border-black bg-white dark:bg-black shadow-2xl p-6 xs:p-4">

                <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black dark:bg-white rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>
                <a href={link} target="_blank" rel="noopener noreferrer" className="w-full cursor-pointer overflow-hidden rounded-lg">
                    <img src={img} alt={title} className="w-full h-auto" />
                </a>

                <div className="w-full flex flex-col items-start justify-between mt-4">
                    <span className="text-blue-400 font-medium text-xl lg:text-lg md:text-base">{type}</span>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
                        <h2 className="my-2 w-full tex-left text-2xl font-bold lg:text-2xl">{title}</h2>
                    </a>
                    <div className="w-full mt-2 flex items-center justify-between">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="ml-1 text-base dark:text-black md:text-base dark:bg-white p-1 px-4 rounded-lg hover:underline font-semibold">Visit </a>
                        <a href={github} target="_blank" rel="noopener noreferrer" className="w-10 h-10  dark:bg-white p-1 rounded-full"><GithubIcon /></a>
                    </div>
                </div>
            </article>
        </>
    )
}

const Projects = () => {
    return (

        <>
             <TransitionEffect/>
            <main className="w-full mb-16 flex flex-col items-center  dark:text-white justify-center">
                <Layout className='pt-16'>
                    <AnimatedText text='Imagination Trumps Knowledge!'
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="grid grid-cols-12 mt-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Django Blog App"
                                summary="A simple blog app in Django is a web application that allows users to create, read, update, and delete blog posts. The app usually consists of two main components: 
                                a backend that manages the database and handles user requests, 
                                and a frontend that displays the blog posts to users"
                                type="Featured Project"
                                link="/"
                                github="https://github.com/ketan539/Django_BlogApp"
                                img={Django_Blog_App}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="React Weather App"
                                summary="A simple blog app in Django is a web application that allows users to create, read, update, and delete blog posts. The app usually consists of two main components: 
                               a backend that manages the database and handles user requests, 
                               and a frontend that displays the blog posts to users"
                                type="Featured Project"
                                link="/"
                                github="https://github.com/ketan539/React_WeatherApp"
                                img={Weather_App} />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Django Ecommerce App"
                                summary="A simple blog app in Django is a web application that allows users to create, read, update, and delete blog posts. The app usually consists of two main components: 
                           a backend that manages the database and handles user requests, 
                           and a frontend that displays the blog posts to users"
                                type="Featured Project"
                                link="/"
                                github="https://github.com/ketan539/Django-Ecommerce-App"
                                img={Django_Ecommerce} />
                        </div>
                        {/* <div className="col-span-12">
                            <FeaturedProject />
                        </div>
                        <div className="col-span-6">
                            Project-3
                        </div>
                        <div className="col-span-6">
                            Project-4
                        </div> */}
                    </div>

                </Layout>

            </main>
        </>
    );
}

export default Projects;