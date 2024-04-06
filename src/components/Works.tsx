import { ProjectType } from "@/common/constantTypes";
import { FigmaLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { projects } from "../constants";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import LightGalleryWrapper from "./LightGalleryWrapper";
import GlassPopup from "./custom-ui/GlassPopup";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  video_iframe_links,
  figma_links,
}: ProjectType & { index: number }) => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const hasFigmaLinks = figma_links && figma_links?.length > 0;
  const hasVideoLinks = video_iframe_links && video_iframe_links?.length > 0;
  return (
    <>
      <GlassPopup
        isOpen={isProfileModalOpen}
        setIsOpen={setIsProfileModalOpen}
        lightBg
      >
        <div className="flex flex-col justify-between relative p-5 rounded-2xl h-full min-h-[486px] xl:min-h-[601px] ">
          <div>
            <div className="relative w-full h-[230px] xl:h-[510px]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="w-full flex gap-2 absolute top-0 right-0">
              {hasVideoLinks &&
                video_iframe_links?.map((video_link, index) => (
                  <LightGalleryWrapper key={index}>
                    <a
                      className="text-[18px] text-white"
                      id={video_link}
                      data-iframe="true"
                      data-src={video_link}
                    >
                      <div className="bg-gray-800  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#de4444]">
                        <Play color="white" width={27} height={27} />
                      </div>
                    </a>
                  </LightGalleryWrapper>
                ))}
              {hasFigmaLinks &&
                figma_links?.map((figma_link, index) => (
                  <div key={index}>
                    <LightGalleryWrapper key={index}>
                      <a
                        className="text-[18px] text-white"
                        id={figma_link}
                        data-iframe="true"
                        data-src={figma_link}
                      >
                        <div className="bg-gray-800 hover:bg-[#de4444] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ">
                          <FigmaLogoIcon color="white" width={27} height={27} />
                        </div>
                      </a>
                    </LightGalleryWrapper>
                  </div>
                ))}
            </div>

            <div className="mt-5">
              <h3 className=" font-bold text-[24px]">{name}</h3>
              <p className=" text-[rgba(0,0,0,0.9)] mt-2 text-[16px]">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <p
                key={tag?.name}
                className={`text-[15px] ${tag?.color} font-medium`}
              >
                {tag?.name}
              </p>
            ))}
          </div>
        </div>
      </GlassPopup>
      <motion.div
        onClick={() => setIsProfileModalOpen(true)}
        className="sm:w-[calc(33.33%-19px)] cursor-pointer w-full h-full min-h-[486px] xl:min-h-[601px] hover:scale-[1.02] transition-transform duration-300 ease-in-out rounded-2xl "
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      >
        <div className="flex flex-col justify-between glass p-5 rounded-2xl h-full min-h-[486px] xl:min-h-[601px] ">
          <div>
            <div className="relative w-full h-[230px] xl:h-[330px]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="w-full flex gap-2 absolute top-0 right-0  p-8">
              {hasVideoLinks &&
                video_iframe_links?.map((video_link, index) => (
                  <LightGalleryWrapper key={index}>
                    <a
                      className="text-[18px] text-white"
                      id={video_link}
                      data-iframe="true"
                      data-src={video_link}
                    >
                      <div className="bg-gray-800 hover:bg-[#de4444] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ">
                        <Play color="white" width={27} height={27} />
                      </div>
                    </a>
                  </LightGalleryWrapper>
                ))}
              {hasFigmaLinks &&
                figma_links?.map((figma_link, index) => (
                  <div
                    key={index}
                    // className="absolute inset-0 flex justify-end m-8 card-img_hover Z-30"
                  >
                    <LightGalleryWrapper key={index}>
                      <a
                        className="text-[18px] text-white"
                        id={figma_link}
                        data-iframe="true"
                        data-src={figma_link}
                      >
                        <div className="bg-gray-800 hover:bg-[#de4444] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ">
                          <FigmaLogoIcon color="white" width={27} height={27} />
                        </div>
                      </a>
                    </LightGalleryWrapper>
                  </div>
                ))}
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
