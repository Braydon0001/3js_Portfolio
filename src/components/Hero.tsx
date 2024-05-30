import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { InView } from "react-intersection-observer";

const Hero = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading the data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <section className={"relative w-full h-[90vh] xs:h-screen mx-auto"}>
      <div
        className={`absolute inset-0 top-[160px] mx-4 md:mx-14 max-w-[1600px] xl:mx-auto flex flex-row items-start gap-5`}
      >
        {/* purple line next to name */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            I'm <span className="text-[#915eff]">Braydon</span>
          </h1>
          <p className={`${styles.heroSubText} mt-7 text-white-100`}>
            Fullstack Software Developer <br /> UI/UX Designer
          </p>
        </div>
        {!isLoading && (
          <InView>
            {({ inView, ref }) => (
              <div ref={ref}>
                {inView && (
                  <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{
                      opacity: [0, 0.7, 0, 0.6, 0, 0],
                      scale: [1, 1.1, 1, 1.1, 1, 1, 0],
                    }}
                    transition={{
                      times: [0, 0.2, 0.4, 0.6],
                      duration: 4,
                    }}
                    className="absolute w-[80px] md:w-[145px] h-[80px] md:h-[145px] left-[46.5%] translate-x-[-46.5%] bottom-1/2 md:bottom-[31%] translate-y-[-31%] opacity-20 z-20"
                  >
                    <img
                      src={"img/icons/move-white.png"}
                      alt={"move icon"}
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </motion.div>
                )}
              </div>
            )}
          </InView>
        )}
      </div>
      <div
        onMouseDown={() => setIsGrabbing(true)}
        onMouseUp={() => setIsGrabbing(false)}
        className={cn(
          `m-auto  sm:pr-4 w-full sm:w-3/4 h-full cursor-grab`,
          isGrabbing && "cursor-grabbing"
        )}
      >
        <ComputersCanvas />
      </div>
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
