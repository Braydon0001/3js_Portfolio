import { motion } from "framer-motion";
import { styles } from "../style";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { slideIn } from "@/utils/motion";
import { Icon } from "./Icon";
import Map from "./Map";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);
  return (
    <div className="max-w-[1600px] xs:mx-auto xs:py-[80px] relative z-40">
      <StarsCanvas />
      <div className="xl:pt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75]  p-5 rounded-2xl glass-no-border border-0 min-h-[600px]"
        >
          <p
            className={`${styles.sectionSubText} text-slate-100 w-fit  relative z-10`}
          >
            Get in touch
          </p>
          <h2
            className={`${styles.sectionHeadText} w-fit text-accent mb-3  relative z-10`}
          >
            Contact
          </h2>
          <div className="w-full absolute top-0 left-0 h-[500px] mb-3">
            <Map />
          </div>

          <div className="w-full  absolute bottom-5">
            <div className="w-full py-2 relative flex gap-4 items-center">
              <Icon
                className="mb-[3px]"
                name="Phone"
                color="#de4444"
                size={26}
              />
              <a href="tel:+27848816464">
                <h3 className={"text-white font-bold text-[24px]"}>
                  +27 84 881 6464
                </h3>
              </a>
            </div>

            <div className="w-full py-2 relative flex gap-4 items-center">
              <Icon className="mb-[1px]" name="Mail" color="#de4444" />

              <a href="mailto:braydz0001@gmail.com">
                <h3 className={"text-white font-bold text-[24px] ml-[2px]"}>
                  braydz0001@gmail.com
                </h3>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className={cn(
            "xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative z-50 cursor-grab",
            isGrabbing && "cursor-grabbing"
          )}
          onMouseDown={() => setIsGrabbing(true)}
          onMouseUp={() => setIsGrabbing(false)}
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
