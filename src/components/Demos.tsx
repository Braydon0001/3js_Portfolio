import { styles } from "@/style";
import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { Icon } from "./Icon";
import LightGalleryWrapper from "./LightGalleryWrapper";
import { useState } from "react";
import GlassPopup from "./custom-ui/GlassPopup";
import { MdArrowRightAlt } from "react-icons/md";
import { cn } from "@/lib/utils";
import { Button } from "./aceternity-ui/moving-border";
import { useInView } from "react-intersection-observer";

const Demos = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  // Use the useInView hook to track when the element enters the viewport
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  return (
    <>
      <GlassPopup
        heading="My Demos"
        isOpen={isDemoModalOpen}
        setIsOpen={setIsDemoModalOpen}
      >
        {/* work cards */}
        <div className="mx-0 mt-6 flex flex-wrap gap-7  relative">
          <VideoDemo
            className="shadow-custom"
            index={0}
            title={"Advanced Surgeon Forms App"}
            image={"/img/thumbnails/surgeon-demo-thumb.jpg"}
            videoUrl={
              "https://www.youtube.com/embed/k0A38OoG_wo?si=48B_n7GrZ-6UQl0K"
            }
            isLight
          />
          <VideoDemo
            className="shadow-custom"
            index={1}
            title={"Illovo Fiscal Calendar"}
            image={"/img/thumbnails/illovo-thumb.jpg"}
            videoUrl={
              "https://www.youtube.com/embed/V6ZwApN66dU?si=wkQEOe7tSQkq0L5v"
            }
            isLight
          />
        </div>
      </GlassPopup>
      <div className="md:px-0 px-4 py-20 max-w-[1600px] xs:mx-auto xs:py-[80px] relative z-40">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.5 * 0.2 }} // Add a delay based on the index
          variants={fadeIn("", "tween", 0.3, 1)}
          className="xl:mx-0 md:mx-[60px]"
        >
          <p className={`${styles.sectionSubText} text-slate-100 w-fit`}>
            My Apps & Solutions
          </p>
          <h2 className={`${styles.sectionHeadText} w-fit text-accent`}>
            My Demos
          </h2>
        </motion.div>

        {/* work cards */}
        <div className="md:mx-[60px] xl:mx-0 mt-9 md:mt-14 flex flex-wrap gap-7  relative">
          <VideoDemo
            index={0}
            title={"Data Hierarchy Tree Renderer"}
            image={"/img/thumbnails/organogram-demo-thumb.jpg"}
            videoUrl={
              "https://www.youtube.com/embed/_vPxPHYdemY?si=JLw5hVQLIm5TIKjy"
            }
          />
          {/* <VideoDemo
            index={1}
            title={"Data Hierarchy Tree Renderer"}
            image={"/img/thumbnails/organogram-demo-thumb.jpg"}
            videoUrl={
              "https://www.youtube.com/embed/ATioOmdy0QU?si=awcIojnD_Fvzw_wo"
            }
          /> */}
          <VideoDemo
            index={2}
            title={"Expense Claims Admin Backend"}
            image={"/img/thumbnails/expense-claims-admin-thumb.jpg"}
            videoUrl={
              "https://www.youtube.com/embed/D8GQOih-mR0?si=RbHtz8-o_1nLAJAZ"
            }
          />
          <VideoDemo
            index={3}
            title={"Clerk Auth Solution"}
            image={"/img/thumbnails/clerk-thumb.jpg"}
            videoUrl={
              "https://www.youtube.com/embed/XOaxkhZBzFg?si=JS4Bb7zpLLgqP0Pe"
            }
          />
          <VideoDemo
            index={0}
            title={"Dynamic Theming Solution"}
            image={"/img/thumbnails/theming-thumb.jpg"}
            videoUrl={
              "https://www.youtube.com/embed/OB_N6iv07Wg?si=LburBzs9h1S1FFsI"
            }
          />
          <VideoDemo
            index={2}
            title={"Azure Image Export Client Feedback"}
            image={"/img/thumbnails/image-export-thumb.png"}
            videoUrl={
              "https://www.youtube.com/embed/KBuKT0dobXg?si=wp0XpwhFzuJsccIN"
            }
          />
          <VideoDemo
            index={3}
            title={"Products Module"}
            image={"/img/thumbnails/product-module-thumb.jpg"}
            videoUrl={
              "https://www.youtube.com/embed/OOeQQqqmUJA?si=i9sj_AZcQfqIBAqW"
            }
          />
          <div className="mr-[-3px] flex w-full justify-end mt-4 md:mt-6">
            <Button
              borderRadius="1rem"
              borderClassName="bg-[radial-gradient(var(--purple-500)_40%,transparent_60%)]"
              className="text-white px-2 pt-[2px] bg-primary hover:bg-[#031249]"
              onClick={() => setIsDemoModalOpen(true)}
            >
              View More{" "}
              <MdArrowRightAlt className="ml-2 text-[#de4444]" size={25} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const VideoDemo = ({
  index = 1,
  videoUrl,
  title,
  image,
  isLight,
  className,
}: {
  index: number;
  videoUrl: string;
  title: string;
  image: string;
  isLight?: boolean;
  className?: string;
}) => {
  // Use the useInView hook to track when the element enters the viewport
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  return (
    <LightGalleryWrapper
      elementClassNames={cn(
        "md:w-[calc(33.33%-19px)] cursor-pointer w-full sm:w-[calc(50%-14px)] h-full transition-transform duration-300 ease-in-out rounded-2xl",
        className
      )}
    >
      <a
        ref={ref}
        className="text-[18px] text-white"
        id={title}
        data-iframe="true"
        data-src={videoUrl}
      >
        <motion.div
          className=""
          variants={fadeIn("up", "spring", index * 0.15, 1)}
          initial="hidden"
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: index * 0.2 }} // Add a delay based on the index
        >
          <Tilt>
            <div
              // options={{ max: 45, scale: 1, speed: 450 }}
              className="flex flex-col justify-between glass p-5 rounded-2xl h-full"
              title={title}
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
                  <h3
                    className={cn(
                      "text-white font-bold text-[24px]",
                      isLight && "text-[#333]"
                    )}
                  >
                    {title}
                  </h3>
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
