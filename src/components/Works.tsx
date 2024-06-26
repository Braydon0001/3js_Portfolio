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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./aceternity-ui/moving-border";
import { Icon } from "./Icon";
import { useInView } from "react-intersection-observer";

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
  // Use the useInView hook to track when the element enters the viewport
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  const stagger = [0, 2, 3, 0, 2, 3];
  return (
    <>
      <GlassPopup
        className="pt-0"
        isOpen={isProfileModalOpen}
        setIsOpen={setIsProfileModalOpen}
        lightBg
      >
        <div className="flex flex-col justify-between relative p-5 pt-0 rounded-2xl h-full min-h-[486px] xl:min-h-[601px] ">
          <div>
            <div className="relative w-full h-[230px] xl:h-[510px]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/*<div className="w-full flex gap-2 absolute top-0 right-0">
              {hasVideoLinks &&
                video_iframe_links?.map((video_link, index) => (
                  <LightGalleryWrapper key={index}>
                    <a
                      className="text-[18px] text-white"
                      id={video_link.url}
                      data-iframe="true"
                      data-src={video_link.url}
                    >
                      <div className="bg-gray-800  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#de4444]">
                        <TooltipProvider delayDuration={0}>
                          <Tooltip>
                            <TooltipTrigger>
                              <Play color="white" width={27} height={27} />
                            </TooltipTrigger>
                            <TooltipContent side="bottom" sideOffset={15}>
                              Demo Video
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
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
                        id={figma_link.url}
                        data-iframe="true"
                        data-src={figma_link.url}
                      >
                        <div className="bg-gray-800 hover:bg-[#de4444] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ">
                          <TooltipProvider delayDuration={0}>
                            <Tooltip>
                              <TooltipTrigger>
                                <FigmaLogoIcon
                                  color="white"
                                  width={27}
                                  height={27}
                                />
                              </TooltipTrigger>
                              <TooltipContent side="bottom" sideOffset={15}>
                                Figma Prototype
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </a>
                    </LightGalleryWrapper>
                  </div>
                ))} 
            </div>*/}

            <div className="mt-[22px]">
              <h3 className="font-bold text-[24px]">{name}</h3>
              <div className=" text-[rgba(0,0,0,0.9)] mt-3 text-[16px] flex flex-col gap-3">
                {description.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
              </div>
            </div>
            {(hasVideoLinks || hasFigmaLinks) && (
              <div className="flex flex-wrap w-full gap-3 mt-8 mb-5">
                {hasVideoLinks &&
                  video_iframe_links?.map((video_link, index) => (
                    <LightGalleryWrapper key={index}>
                      <a
                        className="text-[18px] text-white"
                        id={video_link.url}
                        data-iframe="true"
                        data-src={video_link.url}
                      >
                        <Button
                          containerClassName="w-full"
                          borderRadius="1rem"
                          borderClassName="bg-[radial-gradient(var(--purple-500)_40%,transparent_60%)]"
                          className="text-primary px-2 pt-[2px] bg-white hover:bg-gray-100/80 border-0"
                          onClick={() => null}
                        >
                          <Icon
                            name="MonitorPlay"
                            size={20}
                            className="mr-2 text-secondary mb-[2px]"
                          />
                          {video_link.name}{" "}
                          <MdArrowRightAlt
                            className="ml-2 text-[#de4444]"
                            size={25}
                          />
                        </Button>
                      </a>
                    </LightGalleryWrapper>
                  ))}
                {hasFigmaLinks &&
                  figma_links?.map((figma_link, index) => (
                    <div key={index}>
                      <LightGalleryWrapper key={index}>
                        <a
                          className="text-[18px] text-white"
                          id={figma_link.url}
                          data-iframe="true"
                          data-src={figma_link.url}
                        >
                          <Button
                            containerClassName="w-full"
                            borderRadius="1rem"
                            borderClassName="bg-[radial-gradient(var(--purple-500)_40%,transparent_60%)]"
                            className="text-primary px-3 pt-[2px] bg-white hover:bg-gray-100/80 border-0"
                            onClick={() => null}
                          >
                            <Icon
                              name="Figma"
                              size={17}
                              className="mr-2 text-secondary mb-[2px]"
                            />
                            {figma_link.name}{" "}
                            <MdArrowRightAlt
                              className="ml-2 text-[#de4444]"
                              size={25}
                            />
                          </Button>
                        </a>
                      </LightGalleryWrapper>
                    </div>
                  ))}
              </div>
            )}
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
        ref={ref}
        variants={fadeIn("up", "spring", stagger[index] * 0.1, 1)}
        initial="hidden"
        // animate={inView ? "show" : "hidden"}
        // transition={{ delay: stagger[index] * 0.2 }} // Add a delay based on the index

        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: stagger[index] * 0.2 }} // Add a delay based on the index
        onClick={() => setIsProfileModalOpen(true)}
        className="sm:w-[calc(50%-14px)] md:w-[calc(33.33%-19px)] cursor-pointer w-full h-full min-h-[505px] xl:min-h-[617px] rounded-2xl "
        // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      >
        <div className="flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 ease-in-out  glass p-5 rounded-2xl h-full min-h-[505px] xl:min-h-[617px] ">
          <div>
            <div className="relative w-full h-[230px] xl:h-[330px]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="w-full flex gap-2 absolute top-0 right-0  p-8">
              {
                hasVideoLinks && (
                  <div className="bg-gray-800 hover:bg-[#de4444] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ">
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger>
                          <Play color="white" width={27} height={27} />
                        </TooltipTrigger>
                        <TooltipContent side="bottom" sideOffset={15}>
                          Includes Demo Videos
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                )
                // video_iframe_links?.map((video_link, index) => (
                //   <LightGalleryWrapper key={index}>
                //     <a
                //       className="text-[18px] text-white"
                //       id={video_link.url}
                //       data-iframe="true"
                //       data-src={video_link.url}
                //     >
                //       <div className="bg-gray-800 hover:bg-[#de4444] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ">
                //         <TooltipProvider delayDuration={0}>
                //           <Tooltip>
                //             <TooltipTrigger>
                //               <Play color="white" width={27} height={27} />
                //             </TooltipTrigger>
                //             <TooltipContent side="bottom" sideOffset={15}>
                //               Demo Video
                //             </TooltipContent>
                //           </Tooltip>
                //         </TooltipProvider>
                //       </div>
                //     </a>
                //   </LightGalleryWrapper>
                // ))
              }
              {
                hasFigmaLinks && (
                  <div className="bg-gray-800 hover:bg-[#de4444] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ">
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger>
                          <FigmaLogoIcon color="white" width={27} height={27} />
                        </TooltipTrigger>
                        <TooltipContent side="bottom" sideOffset={15}>
                          Includes Figma Prototypes
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                )
                // figma_links?.map((figma_link, index) => (
                //   <div
                //     key={index}
                //     // className="absolute inset-0 flex justify-end m-8 card-img_hover Z-30"
                //   >
                //     <LightGalleryWrapper key={index}>
                //       <a
                //         className="text-[18px] text-white"
                //         id={figma_link.url}
                //         data-iframe="true"
                //         data-src={figma_link.url}
                //       >
                //         <div className="bg-gray-800 hover:bg-[#de4444] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ">
                //           <TooltipProvider delayDuration={0}>
                //             <Tooltip>
                //               <TooltipTrigger>
                //                 <FigmaLogoIcon
                //                   color="white"
                //                   width={27}
                //                   height={27}
                //                 />
                //               </TooltipTrigger>
                //               <TooltipContent side="bottom" sideOffset={15}>
                //                 Figma Prototype
                //               </TooltipContent>
                //             </Tooltip>
                //           </TooltipProvider>
                //         </div>
                //       </a>
                //     </LightGalleryWrapper>
                //   </div>
                // ))
              }
            </div>

            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="line-clamp-3 text-[rgba(255,255,255,0.7)] mt-3 text-[16px]">
                {description[0]}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <span
                key={tag?.name}
                className={`text-[15px] font-semibold leading-4 mt-1 ${tag?.color}`}
              >
                {tag?.name}
              </span>
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
  // Use the useInView hook to track when the element enters the viewport
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  return (
    <div className="max-w-[1600px] xs:mx-auto xs:py-[80px] relative z-40 md:px-0 px-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        transition={{ delay: 0.5 * 0.2 }} // Add a delay based on the index
        variants={fadeIn("", "tween", 0.3, 1)}
        className="xl:mx-0 md:mx-[60px]"
      >
        <p className={`${styles.sectionSubText} text-slate-100 w-fit`}>
          But Not Limited To
        </p>
        <h2 className={`${styles.sectionHeadText} w-fit text-accent`}>
          My Projects
        </h2>
      </motion.div>

      {/* work cards */}
      <div className="md:mx-[60px] xl:mx-0">
        <div className="mt-9 md:mt-14 flex flex-wrap gap-7 w-full relative min-h-[486px] xl:min-h-[601px]">
          {projects?.map((project, index) => (
            <ProjectCard index={index} key={`project-${index}`} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
