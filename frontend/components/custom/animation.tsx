import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const main = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
      delay: 0.2,
    },
  },
};

// const slide = {
//   hidden: {
//     x: 0,
//   },
//   show: {
//     x: "110%",
//     transition: {
//       duration: 0.8,
//       ease: "easeIn",
//     },
//   },
// };

const scale = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const Reveal = ({
  children,
  width,
}: // dark,
{
  children: React.ReactNode;
  width?: boolean;
  // dark?: boolean;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainAnimation = useAnimation();
  const slideAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      mainAnimation.start("show");
      slideAnimation.start("show");
    }
  }, [mainAnimation, inView, slideAnimation]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      // whileInView="show"
      // viewport={{ once: true, amount: 0.2}}
      animate={mainAnimation}
      className={`relative overflow-hidden ${width ? "w-full" : "max-w-fit"}`}
    >
      <motion.div variants={main}>{children}</motion.div>
      {/* <motion.div
        variants={slide}
        initial="hidden"
        animate={slideAnimation}
        className={`absolute inset-0 w-full h-full ${dark ? 'bg-amber-700' : 'bg-amber-100'}`}
      /> */}
    </motion.div>
  );
};

export const Scale = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      variants={scale}
      initial="initial"
      animate={inView && "animate"}
      className="relative"
    >
      {children}
    </motion.div>
  );
};
