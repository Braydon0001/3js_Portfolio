import { Variants } from "framer-motion";

// framer motion animations
export const textVariant = (delay?: any) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// export const fadeIn = (
//   direction = "up",
//   type: "spring" | "tween" = "spring",
//   delay = 0,
//   duration = 0.5
// ): Variants => {
//   const variant = {
//     hidden: {
//       y: direction === "up" ? 100 : -100,
//       opacity: 0,
//       scale: 0.8,
//     },
//     show: {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: type,
//         // stiffness: 100,
//         damping: 20, // Increase damping for a smoother animation
//         // mass: 1,
//         delay: delay,
//         duration: duration,
//         ease: "easeOut",
//       },
//     },
//   };

//   return variant;
// };

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
