import { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import FrontEndDevModel from "./canvas/FrontEndDevModel";

const About = () => {
  const [skill, setSkill] = useState(0);
  const ReactModel = services[skill].model;

  return (
    <div id="about" className="w-fit mx-6 xs:mx-auto my-[80px]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-slate-100 w-fit`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} w-fit text-accent`}>
          Overview
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-slate-100 text-[18px] max-w-3xl leading-[30px]"
      >
        I'm a Senior UI/UX designer and Intermediate full stack developer from
        South Africa. With a Higher Certificate in Information Systems &
        Software Development and a Bachelor of Science Degree in I.T, I'm
        constantly innovating and pushing the boundaries beyond expectations. My
        interests include playing musical instruments, gaming, gyming and art.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 w-fit">
        <div className="w-[1600px] flex justify-between relative">
          <div>
            <ul className="list-none flex flex-col gap-1">
              {services.map((service, index) => (
                <li
                  onClick={() => setSkill(index)}
                  data-content={service.title}
                  className={`lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] font-bold cursor-pointer text-transparent stroke-white stroke-1 listItems relative ${
                    skill == index && "active"
                  }`}
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass w-[350px] rounded-lg absolute right-[70px]  p-5 top-[100px]">
            <p className="text-[21px]">{services[skill].skillGroups[2]}</p>
          </div>

          <div className="glass w-[350px] rounded-lg absolute  right-[90px]  z-10  p-5 top-[350px]">
            <p className="text-[21px]">{services[skill].skillGroups[3]}</p>
          </div>

          <div className="glass w-[350px] rounded-lg absolute  z-10 p-5 top-[50px] right-[670px]">
            <p className="text-[21px]">{services[skill].skillGroups[0]}</p>
          </div>

          <div className="glass w-[350px] rounded-lg absolute  p-5 top-[300px] right-[690px]">
            <p className="text-[21px]">{services[skill].skillGroups[1]}</p>
          </div>

          <div className="flex-[1]">
            <ReactModel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
