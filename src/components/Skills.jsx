import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Skill = ({ name, desktopX, desktopY, mobileX, mobileY }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-black text-white 
                 dark:bg-white dark:text-black py-3 px-6 shadow-black cursor-pointer absolute
                 lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:text-xs"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      // animate={{ x: isMobile ? mobileX : desktopX, y: isMobile ? mobileY : desktopY }}
      whileInView={{x: isMobile ? mobileX : desktopX, y: isMobile ? mobileY : desktopY, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-36 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full 
                      bg-circularLight dark:bg-circularDark 
                      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
                      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
                      md:bg-circularLightMd md:dark:bg-circularDarkMd
                      sm:bg-circularLightSm sm:dark:bg-circularDarkSm">

        <motion.div className="flex items-center justify-center rounded-full font-semibold
                              bg-black text-white dark:bg-white dark:text-black p-8 shadow-black
                              lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.1 }}>
          Web
        </motion.div>

        {/* Original coordinates preserved for desktop, new coordinates for mobile */}
        <Skill
          name="CSS3"
          desktopX="-5vw"
          desktopY="-10vw"
          mobileX="-4vw"
          mobileY="-10vw"
        />
        <Skill
          name="HTML5"
          desktopX="-20vw"
          desktopY="-12vw"
          mobileX="-12vw"
          mobileY="5vw"
        />
        <Skill
          name="JavaScript"
          desktopX="-20vw"
          desktopY="-2vw"
          mobileX="-30vw"
          mobileY="20vw"
        />
        <Skill
          name="React.js"
          desktopX="0vw"
          desktopY="12vw"
          mobileX="10vw"
          mobileY="10vw"
        />
        <Skill
          name="Python"
          desktopX="15vw"
          desktopY="0vw"
          mobileX="0vw"
          mobileY="-45vw"
        />
        <Skill
          name="Django"
          desktopX="-10vw"
          desktopY="0vw"
          mobileX="30vw"
          mobileY="-35vw"
        />
        <Skill
          name="Next.js"
          desktopX="0vw"
          desktopY="-16vw"
          mobileX="0vw"
          mobileY="40vw"
        />
        <Skill
          name="Django (DRF)"
          desktopX="15vw"
          desktopY="-8vw"
          mobileX="-10vw"
          mobileY="-35vw"
        />
        <Skill
          name="RESTful APIs"
          desktopX="-12vw"
          desktopY="5vw"
          mobileX="-35vw"
          mobileY="0vw"
        />
        <Skill
          name="Postman"
          desktopX="12vw"
          desktopY="-15vw"
          mobileX="20vw"
          mobileY="30vw"
        />
        <Skill
          name="Vercel"
          desktopX="-12vw"
          desktopY="-18vw"
          mobileX="-30vw"
          mobileY="-10vw"
        />
        <Skill
          name="Microsoft SQL Server"
          desktopX="12vw"
          desktopY="7vw"
          mobileX="-25vw"
          mobileY="30vw"
        />
        <Skill
          name="Tailwind-CSS"
          desktopX="-20vw"
          desktopY="10vw"
          mobileX="0vw"
          mobileY="20vw"
        />
        <Skill
          name="Framer Motion"
          desktopX="23vw"
          desktopY="-18vw"
          mobileX="0vw"
          mobileY="-20vw"
        />
        <Skill
          name="VSCode"
          desktopX="25vw"
          desktopY="2vw"
          mobileX="25vw"
          mobileY="2vw"
        />
        <Skill
          name="Git"
          desktopX="-23vw"
          desktopY="-18vw"
          mobileX="-24vw"
          mobileY="-18vw"
        />
        <Skill
          name="GitHub"
          desktopX="30vw"
          desktopY="-5vw"
          mobileX="28vw"
          mobileY="-24vw"
        />
        <Skill
          name="Nginx"
          desktopX="-30vw"
          desktopY="-8vw"
          mobileX="-28vw"
          mobileY="-26vw"
        />
        <Skill
          name="Vercel"
          desktopX="10vw"
          desktopY="15vw"
          mobileX="26vw"
          mobileY="20vw"
        />
        <Skill
          name="Flask"
          desktopX="-12vw"
          desktopY="15vw"
          mobileX="-28vw"
          mobileY="10vw"
        />
        <Skill
          name="Render"
          desktopX="25vw"
          desktopY="10vw"
          mobileX="35vw"
          mobileY="10vw"
        />
        <Skill
          name="Bootstrap"
          desktopX="10vw"
          desktopY="-20vw"
          mobileX="26vw"
          mobileY="-14vw"
        />
      </div>
    </>
  );
};

export default SkillsSection;