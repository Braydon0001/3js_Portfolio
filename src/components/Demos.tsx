import { styles } from "@/style";
import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { MdArrowRightAlt } from "react-icons/md";
import LinkButton from "./LinkButton";
import Tilt from "react-tilt";
import { Icon } from "./Icon";
import LightGalleryWrapper from "./LightGalleryWrapper";

const Demos = () => {
  return (
    <div className="max-w-[1600px] xs:mx-auto xs:py-[80px] relative z-40">
      <motion.div variants={textVariant()} className="xl:mx-0 xs:mx-[60px]">
        <p className={`${styles.sectionSubText} text-slate-100 w-fit`}>
          My Apps & Solutions
        </p>
        <h2 className={`${styles.sectionHeadText} w-fit text-accent`}>
          My Demos
        </h2>
      </motion.div>

      {/* work cards */}
      <div className="mx-[60px] xl:mx-0 mt-14 flex flex-wrap gap-7  relative">
        <VideoDemo
          index={0}
          title={"Illovo Fiscal Calendar"}
          image={"/img/thumbnails/illovo-thumb.jpg"}
          videoUrl={
            "https://www.youtube.com/embed/fgGxjS85b6U?si=9OClaGYIU5-5lftB"
          }
        />
        <VideoDemo
          index={1}
          title={"Clerk Auth Solution"}
          image={"/img/thumbnails/clerk-thumb.jpg"}
          videoUrl={
            "https://www.youtube.com/embed/HgmA5pqZEuI?si=E7ZdcUxYfGFPxrcd"
          }
        />
        <VideoDemo
          index={2}
          title={"Dynamic Theming Solution"}
          image={"/img/thumbnails/theming-thumb.jpg"}
          videoUrl={
            "https://www.youtube.com/embed/u5nE3pJudxs?si=8kccrqERhmc4usgb"
          }
        />
        <div className="mr-[-3px] flex w-full justify-end mt-6">
          <LinkButton
            url={`#`}
            typography={{ value: "View All" }}
            container={{ className: "mr-[-16px]" }}
          />
        </div>
      </div>
    </div>
  );
};

const VideoDemo = ({ index = 1, videoUrl, title, image }) => {
  return (
    <LightGalleryWrapper
      elementClassNames={
        "sm:w-[calc(33.33%-19px)] cursor-pointer w-full h-full transition-transform duration-300 ease-in-out rounded-2xl"
      }
    >
      <a
        className="text-[18px] text-white"
        id={title}
        data-iframe="true"
        data-src={videoUrl}
      >
        <motion.div
          className=""
          variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
          <Tilt>
            <div
              // options={{ max: 45, scale: 1, speed: 450 }}
              className="flex flex-col justify-between glass p-5 rounded-2xl h-fit  "
            >
              <div className="relative w-full h-full">
                <div className="relative w-full h-[230px] xl:h-[280px]">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex z-30">
                    <div className="red-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer ">
                      <Icon name="Play" size={20} color="white" />
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="text-white font-bold text-[24px]">{title}</h3>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </a>
    </LightGalleryWrapper>
  );
};

export default Demos;
