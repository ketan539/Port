//import { Link } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";
import { GithubIcon } from "./Icons";
import Django_Blog_App from "./../images/Django_Blog_SS.PNG"




const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full  flex items-center justify-between rounded-3xl border border-solid relative border-black bg-light shadow-2xl p-8">
            <a href={link} target="_blank" rel="noopener noreferrer" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <img src={img} alt={title} className="w-full h-auto" />
            </a>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6"> 
                <span className="text-blue-400 font-medium text-xl">{type}</span>
                <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full tex-left text-2xl font-bold">{title}</h2>
                </a>
                <p className="my-2 font-medium text-black">{summary}</p>
            </div>
            <div className="mt-2 flex items-center">
                <a href={github} target="_blank" rel="noopener noreferrer" className="w-10"><GithubIcon /></a>
                <a href={link} target="_blank" rel="noopener noreferrer" className="ml-1 rounded-lg bg-black text-white p-2 px-6 text-sm font-semibold">Visit</a>
            </div>
        </article>
    )
}

const Project = ({ title, type, summary, img, link, github }) => {
    return (
        <>
            <article className="w-full flex flex-col relative items-center justify-between rounded-2xl border border-solid border-black bg-light shadow-2xl p-6 ">

                <a href={link} target="_blank" rel="noopener noreferrer" className="w-full cursor-pointer overflow-hidden rounded-lg">
                    <img src={img} alt={title} className="w-full h-auto" />
                </a>

                <div className="w-full flex flex-col items-start justify-between mt-4">
                    <span className="text-blue-400 font-medium text-xl">{type}</span>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
                        <h2 className="my-2 w-full tex-left text-2xl font-bold">{title}</h2>
                    </a>
                    <div className="w-full mt-2 flex items-center justify-between">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="ml-1 tex-base hover:underline font-semibold">Visit </a>
                        <a href={github} target="_blank" rel="noopener noreferrer" className="w-10"><GithubIcon /></a>
                    </div>
                </div>
            </article>
        </>
    )
}

const Projects = () => {
    return (

        <>
            <main className="w-full mb-16 flex flex-col items-center justify-center">
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
                                title="Django Blog App"
                                summary="A simple blog app in Django is a web application that allows users to create, read, update, and delete blog posts. The app usually consists of two main components: 
                               a backend that manages the database and handles user requests, 
                               and a frontend that displays the blog posts to users"
                                type="Featured Project"
                                link="/"
                                github="https://github.com/ketan539/Django_BlogApp"
                                img={Django_Blog_App} />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Django Blog App"
                                summary="A simple blog app in Django is a web application that allows users to create, read, update, and delete blog posts. The app usually consists of two main components: 
                           a backend that manages the database and handles user requests, 
                           and a frontend that displays the blog posts to users"
                                type="Featured Project"
                                link="/"
                                github="https://github.com/ketan539/Django_BlogApp"
                                img={Django_Blog_App} />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject />
                        </div>
                        <div className="col-span-6">
                            Project-3
                        </div>
                        <div className="col-span-6">
                            Project-4
                        </div>
                    </div>

                </Layout>

            </main>
        </>
    );
}

export default Projects;