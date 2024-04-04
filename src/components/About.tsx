import { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronsLeft } from "lucide-react";

const About = () => {
  const [skill, setSkill] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const ReactModel = services[skill].model;

  return (
    <div
      id="about"
      className="w-fit max-w-[1600px] mx-6 xs:mx-auto my-[80px] relative"
    >
      <motion.div variants={textVariant()} className="xl:mx-0 xs:mx-[60px]">
        <p className={`${styles.sectionSubText} text-slate-100 w-fit`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} w-fit text-accent`}>
          Overview
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="xl:mx-0 xs:mx-[60px] mt-4 text-slate-100 text-[18px] max-w-3xl leading-[30px]"
      >
        I am an Intermediate full stack developer and Senior UI/UX designer from
        South Africa. With a Higher Certificate in Information Systems &
        Software Development and a Bachelor of Science Degree in IT, I am
        constantly innovating and pushing the boundaries beyond expectations. My
        interests include playing musical instruments, going to the gym, gaming,
        and art.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 w-fit mr-5">
        <div className="xl:w-[1600px] flex flex-wrap justify-between relative">
          <div className="w-full xl:w-[800px] flex justify-between relative z-10">
            <ul className="list-none flex flex-wrap flex-row xl:flex-col min-w-[510px]  justify-center gap-x-10 xl:px-0 px-5 xl:gap-1">
              {services.map((service, index) => (
                <li
                  key={service.title + index}
                  onClick={() => setSkill(index)}
                  data-content={service.title}
                  className={`lg:text-[74px] flex justify-between items-center gap-5 text-center xl:text-left w-[45%] xl:w-full sm:text-[60px] xs:text-[50px] text-[40px] font-bold cursor-pointer text-transparent stroke-white stroke-1 listItems relative ${
                    skill == index && "active"
                  }`}
                >
                  {service.title}
                  {skill == index && (
                    <ChevronLeft
                      style={{ width: "50px", height: "50px", marginTop: 5 }}
                      color="rgba(255,255,255,0.7)"
                      // color="#de4444"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full xl:w-[800px] flex justify-between relative ">
            <div className="glass w-[350px] rounded-lg absolute right-[140px] xl:right-[60px]  p-5 top-[40px] xl:top-[90px]">
              <p className="text-[21px] text-white">
                {services[skill].skillGroups[2]}
              </p>
            </div>

            <div className="glass w-[350px] rounded-lg absolute right-[160px] xl:right-[80px]  z-10  p-5 top-[150px] xl:top-[330px]">
              <p className="text-[21px] text-white">
                {services[skill].skillGroups[3]}
              </p>
            </div>

            <div className="glass w-[350px] rounded-lg absolute  z-10 p-5 top-[40px] left-[160px] xl:left-auto  xl:right-[610px]">
              <p className="text-[21px] text-white">
                {services[skill].skillGroups[0]}
              </p>
            </div>

            <div className="glass w-[350px] rounded-lg absolute  p-5 top-[150px] xl:top-[290px] xl:left-auto left-[140px]  xl:right-[630px]">
              <p className="text-[21px] text-white">
                {services[skill].skillGroups[1]}
              </p>
            </div>

            <div
              onMouseDown={() => setIsGrabbing(true)}
              onMouseUp={() => setIsGrabbing(false)}
              className={cn(
                "w-full mt-10 xl:mt-0 xl:w-2/3 cursor-grab",
                isGrabbing && "cursor-grabbing"
              )}
            >
              <ReactModel />
            </div>
          </div>

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
                    className="absolute w-[90px] xl:w-[140px] h-[90px] xl:h-[140px] xl:left-[24.5%] left-[35.6%] translate-x-[-35.6%] xl:translate-x-0 bottom-[150px] xl:bottom-[30px] opacity-20"
                  >
                    <img
                      src={"img/icons/click-white.png"}
                      alt={"move icon"}
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </motion.div>
                )}
              </div>
            )}
          </InView>
        </div>
      </div>
    </div>
  );
};

export default About;
