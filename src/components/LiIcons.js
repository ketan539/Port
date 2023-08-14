import { motion, useScroll } from 'framer-motion'
const LiIcons = ({ reference }) => {
    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end ", "center center"]
        }
    )
    return (


        <>
            <figure className="absolute left-11 stroke-black">
                <svg className='-rotate-90' width='75' height='75' viewBox="0 0 100 100">
                    <circle cx='75' cy='50' r='20' className="stroke-blue-600 stroke-1 fill-none" />
                    <motion.circle cx='75' cy='50' r='20' className="stroke-[5px] fill-white"
                        style={{
                            pathLength: scrollYProgress
                        }} />
                    <circle cx='75' cy='50' r='10' className=" animate-pulse stroke-1 fill-blue-800" />
                </svg>
            </figure>

        </>
    );
}

export default LiIcons;