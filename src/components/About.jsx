import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return <p>{title}</p>;
};

const About = () => {
  return (
    <div id="about" className="w-fit mx-6 xs:mx-auto my-[80px]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-slate-100 w-fit`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} w-fit`}>Overview</h2>
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
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;
