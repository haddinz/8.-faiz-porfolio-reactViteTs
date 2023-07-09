import { easeInOut, motion } from "framer-motion";

const heading = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: easeInOut,
      duration: 1.4,
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      id="home"
      initial="hidden"
      animate="show"
      className="w-full h-full bg-gray-100 pb-20 line-odd"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-montserrat">
          <div className="flex justify-center md:justify-start items-start col-span-1 md:col-span-2">
            <div className="space-y-14">
              <motion.div className="flex flex-col items-center md:items-start relative">
                <Branding text="THE LAW IS A TOOL " layoutID="branding_top" />
                <Branding text="BUT JUSTICE IS A " layoutID="branding_center" />
                <Branding text="CALLING" layoutID="branding_bottom" />
              </motion.div>
              <motion.div
                variants={heading}
                className="font-poppins space-y-14"
              >
                <p className="paragraf max-w-xs md:max-w-md">
                  Clear and open communication in producing a smart and
                  efficient solution to a legal case. Thus facilitating the
                  achievement of the desired objectives in legal settlement.
                </p>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  className="w-full md:w-72 h-20 text-sm text-center bg-gray-900 rounded text-white"
                >
                  <a href="FaizCV.pdf" download="my_cv">
                    Book my resume / cv
                  </a>
                </motion.button>
              </motion.div>
            </div>
          </div>

          <div className="col-span-1">
            <motion.div className="flex justify-center items-center relative">
              <motion.img
                variants={heading}
                alt="bacground-profile"
                src="./images/image1.png"
                className="object-cover z-10"
              />
              <motion.div
                initial={{
                  opacity: 0,
                  scale:0,
                }}
                animate={{
                  opacity: 1,
                  scale:1,
                  transition: {
                    ease: [0.6, 0.01, 0.05, 0.95],
                    duration: 1.6,
                  },
                }}
                className="bg-gray-900 h-[70%] w-[75%] rounded-t-full absolute bottom-0"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Branding = ({ text, layoutID }: { text?: string; layoutID: string }) => {
  return (
    <motion.div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase">
      <motion.h1
        transition={{
          ease: [0.6, 0.01, 0.05, 0.95],
          duration: 1.4,
        }}
        layoutId={layoutID}
        className="leading-snug"
      >
        {text}
      </motion.h1>
    </motion.div>
  );
};

export default Hero;
