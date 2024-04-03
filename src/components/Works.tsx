import { motion } from "framer-motion";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import Tilt from "react-tilt";
import { github } from "../assets";
import { MdArrowRightAlt } from "react-icons/md";
import CustomModal from "./custom-ui/CustomModal";
import { useState } from "react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  return (
    <>
      <CustomModal
        isOpen={isProfileModalOpen}
        setIsOpen={setIsProfileModalOpen}
      >
        <div
          // options={{ max: 45, scale: 1, speed: 450 }}
          className="flex flex-col justify-between relative p-5 rounded-2xl h-full min-h-[486px] xl:min-h-[601px] "
        >
          <div>
            <div className="relative w-full h-[230px] xl:h-[330px]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="absolute inset-0 flex justify-end m-8 card-img_hover Z-30">
              <Tilt
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer "
              >
                <img src={github} alt={"github"} className="w-1/2 h-1/2" />
              </Tilt>
            </div>

            <div className="mt-5">
              <h3 className=" font-bold text-[24px]">{name}</h3>
              <p className=" text-[rgba(0,0,0,0.7)] mt-2 text-[16px]">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <p key={tag?.name} className={`text-[14px] ${tag?.color}`}>
                {tag?.name}
              </p>
            ))}
          </div>
        </div>
      </CustomModal>
      <motion.div
        onClick={() => setIsProfileModalOpen(true)}
        className="sm:w-[calc(33.33%-19px)] cursor-pointer w-full h-full min-h-[486px] xl:min-h-[601px] hover:scale-[1.02] transition-transform duration-300 ease-in-out rounded-2xl "
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      >
        <div
          // options={{ max: 45, scale: 1, speed: 450 }}
          className="flex flex-col justify-between glass p-5 rounded-2xl h-full min-h-[486px] xl:min-h-[601px] "
        >
          <div>
            <div className="relative w-full h-[230px] xl:h-[330px]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="absolute inset-0 flex justify-end m-8 card-img_hover Z-30">
              <Tilt
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer "
              >
                <img src={github} alt={"github"} className="w-1/2 h-1/2" />
              </Tilt>
            </div>

            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="line-clamp-3 text-[rgba(255,255,255,0.7)] mt-2 text-[14px]">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <p key={tag?.name} className={`text-[14px] ${tag?.color}`}>
                {tag?.name}
              </p>
            ))}
          </div>

          <div className="mt-4 flex w-full justify-end gap-[10px]">
            <p className=" bg-none text-[rgba(255,255,255,0.7)] border-0 text-[14px] flex gap-2 items-center">
              Click card to read more
              <MdArrowRightAlt
                style={{ width: "20px", height: "20px" }}
                color="rgba(255,255,255,0.7)"
              />
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Works = () => {
  return (
    <div className="max-w-[1600px] xs:mx-auto xs:my-[80px]">
      <motion.div variants={textVariant()} className="xl:mx-0 xs:mx-[60px]">
        <p className={`${styles.sectionSubText} text-slate-100 w-fit`}>
          But Not Limited To
        </p>
        <h2 className={`${styles.sectionHeadText} w-fit text-accent`}>
          My Projects
        </h2>
      </motion.div>

      {/* work cards */}
      <div className="mx-[60px] xl:mx-0">
        <div className="mt-14 flex flex-wrap gap-7 w-full relative min-h-[486px] xl:min-h-[601px]">
          {projects?.map((project, index) => (
            <ProjectCard index={index} key={`project-${index}`} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
