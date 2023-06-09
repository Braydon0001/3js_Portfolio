import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-[90vh] xs:h-screen mx-auto`}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[160px] max-w-[1600px] mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            I'm <span className="text-[#915eff]">Braydon</span>
          </h1>
          <p className={`${styles.heroSubText} mt-7 text-white-100`}>
            UI/UX Designer <br /> Fullstack Software Developer
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-6 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      <img
        className="w-[700px] mr-0 ml-auto absolute right-0 bottom-[-450px] opacity-[20%]"
        src="img/computer-desk-light-4.png"
      />
    </section>
  );
};

export default Hero;
