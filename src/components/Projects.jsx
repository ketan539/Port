//import { Link } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";
import { GithubIcon } from "./Icons";
import Django_Blog_App from "./../images/Django_Blog_SS.PNG"
import Weather_App from "./../images/Weather_App.PNG"
import Django_Ecommerce from "./../images/Django_Ecommerce.PNG"




const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full  flex items-center justify-between dark:bg-black rounded-3xl border border-solid relative dark:border-white border-black bg-white shadow-2xl p-8">
            <a href={link} target="_blank" rel="noopener noreferrer" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <img src={img} alt={title} className="w-full h-auto" />
            </a>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6"> 
                <span className="text-blue-400 font-medium dark:text-teal-500 text-xl">{type}</span>
                <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full tex-left dark:text-white text-2xl font-bold">{title}</h2>
                </a>
                <p className="my-2 font-medium dark:text-white text-black">{summary}</p>
            </div>
            <div className="mt-2 flex items-center">
                <a href={github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 dark:bg-white p-1 rounded-full"><GithubIcon /></a>
                <a href={link} target="_blank" rel="noopener noreferrer" className="ml-1 rounded-lg bg-black text-white dark:bg-white dark:text-black p-2 px-6 text-sm font-semibold">Visit</a>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <>
            <article className="w-full flex flex-col relative items-center justify-between rounded-2xl border border-solid dark:border-white border-black bg-light shadow-2xl p-6 ">
        
                <a href={link} target="_blank" rel="noopener noreferrer" className="w-full cursor-pointer overflow-hidden rounded-lg">
                    <img src={img} alt={title} className="w-full h-auto" />
                </a>

                <div className="w-full flex flex-col items-start justify-between mt-4">
                    <span className="text-blue-400 font-medium text-xl">{type}</span>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
                        <h2 className="my-2 w-full tex-left text-2xl font-bold">{title}</h2>
                    </a>
                    <div className="w-full mt-2 flex items-center justify-between">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="ml-1 text-base dark:text-black dark:bg-white p-1 px-4 rounded-lg hover:underline font-semibold">Visit </a>
                        <a href={github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 dark:bg-white p-1 rounded-full"><GithubIcon /></a>
                    </div>
                </div>
            </article>
        </>
    )
}

const Projects = () => {
    return (

        <>
            <main className="w-full mb-16 flex flex-col items-center  dark:text-white justify-center">
                <Layout className='pt-16'>
                    <AnimatedText text='Imagination Trumps Knowledge!' />
                    <div className="grid grid-cols-12 mt-12 gap-24">
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
                        <div className="col-span-6">
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
                        <div className="col-span-6">
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