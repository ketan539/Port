import { motion, useScroll } from 'framer-motion'
const LiIcons = ({ reference }) => {
    const { scrollYProgress } = useScroll(
        {
            layoutEffect: false,
            target: reference,
            offset: ["center end ", "center center"]
        }
    )
    return (


        <>
            <figure className="absolute left-0 stroke-black dark:stroke-white">
                <svg className='-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]' width='75' height='75' viewBox="0 0 100 100">
                    <circle cx='75' cy='50' r='20' className="stroke-blue-600 stroke-1 dark:stroke-blue-800 fill-none" />
                    <motion.circle cx='75' cy='50' r='20' className="stroke-[5px] fill-white dark:fill-black"
                        style={{
                            pathLength: scrollYProgress
                        }} />
                    <circle cx='75' cy='50' r='10' className=" animate-pulse stroke-1 dark:fill-violet-600 fill-blue-800" />
                </svg>
            </figure>

        </>
    );
}

export default LiIcons;