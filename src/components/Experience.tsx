import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
// import { SectionWrapper } from '../utils/motion'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          "linear-gradient(to bottom right,rgba(255, 255, 255, 0.3) 0%,rgba(255, 255, 255, 0.1) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(9px)",
        color: "#fff",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255,255,255,0.7)",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[18px] md:text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="max-w-[1600px] xs:mx-auto xs:py-[80px] z-40 relative">
      <motion.div variants={textVariant()} className="xl:mx-0 xs:mx-[60px]">
        <p
          className={`${styles.sectionSubText} text-slate-100 text-center w-full`}
        >
          My career
        </p>
        <h2
          className={`${styles.sectionHeadText} text-accent text-center w-full`}
        >
          Work Experience
        </h2>
      </motion.div>

      {/* timeline */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences?.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
