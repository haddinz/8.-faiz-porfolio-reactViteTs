import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.4,
    },
  },
};

const item = {
  hidden: { y: '110vh' },
  show: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    transition: {
      delay: 1.2
    }
  },
};

const animateLetter = {
  hidden: {
    y: 400,
  },
  show: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.8,
    },
  },
};

const Loader = ({ setLoading }: { setLoading: (value: boolean) => void }) => {
  return (
    <div className="w-full h-[100vh] bg-amber-200 absolute top-0 left-0 z-50 overflow-hidden">
      <motion.div
        className="w-full h-full relative flex justify-center items-start"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
      >
        <motion.div
          variants={item}
          className="w-full h-full absolute top-0 left-0"
        >
          <div className="w-full h-full bg-gray-900" />
        </motion.div>

        <motion.div
          variants={item}
          className="w-full h-full absolute top-0 left-0"
        >
          <motion.div className="w-full h-full bg-gray-100" />
        </motion.div>

        <motion.div className="flex flex-col items-center relative overflow-hidden mt-20">
          <Branding text="THE LAW IS A TOOL " layoutID="branding_top" />
          <Branding text="BUT JUSTICE IS A " layoutID="branding_center" />
          <Branding text="CALLING" layoutID="branding_bottom" />
        </motion.div>

      </motion.div>
    </div>
  );
};

const Branding = ({ text, layoutID }: { text?: string; layoutID: string }) => {
  return (
    <motion.div
      variants={animateLetter}
      className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase"
    >
      <motion.h1 layoutId={layoutID} className="leading-snug">
        {text}
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
