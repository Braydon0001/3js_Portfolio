import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import ParticleBackground from "./ParticleBackground";

const ParrallaxBg = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  //changing the isMobile state
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // const backgroundY1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  // const backgroundY3 = useTransform(scrollYProgress, [0, 1], ["0%", "33%"]);
  // const backgroundY4 = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  // const backgroundY1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "34%"]);
  const backgroundY3 = useTransform(scrollYProgress, [0, 1], ["0%", "24.5%"]);
  const backgroundY4 = useTransform(scrollYProgress, [0, 1], ["0%", "17%"]);

  return (
    <div
      ref={ref}
      className="w-full h-full overflow-hidden relative grid place-items-center md:px-0 px-[6px]"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          position: "fixed",
          zIndex: -1,
          top: 0,
          left: 0,
          backgroundImage: "url(/img/bg/parallax-bg/Layer-1.jpg)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // y: !isMobile && backgroundY1,
          transform: "translateZ(0)", // Add this line
        }}
      />
      <ParticleBackground />
      <motion.div
        className="absolute inset-0 z-[10]"
        style={{
          backgroundImage: "url(/img/bg/parallax-bg/Layer-2.png)",
          backgroundPosition: "bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          y: !isMobile && backgroundY2,
        }}
      />
      <motion.div
        className="absolute inset-0 z-[15]"
        style={{
          backgroundImage: "url(/img/bg/parallax-bg/Layer-3.png)",
          backgroundPosition: "bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          y: !isMobile && backgroundY3,
        }}
      />
      <motion.div
        className="absolute inset-0 z-[20]"
        style={{
          backgroundImage: "url(/img/bg/parallax-bg/Layer-4.png)",
          backgroundPosition: "bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          y: !isMobile && backgroundY4,
        }}
      />
      {children}
    </div>
  );
};

export default ParrallaxBg;
