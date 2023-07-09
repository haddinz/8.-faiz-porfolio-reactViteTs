import { useState } from "react";
import { Close, Navbar } from "./custom/icon";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const background = {
  hidden: {
    y: 700,
  },
  show: {
    y: 0,
    transition: {
      ease: easeInOut,
    },
  },
  exit: {
    y: -700,
    transition: {
      ease: easeInOut,
    },
  },
};

const mainItems = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 200,
  },
};

const Sidebar = () => {
  const navbar = ["Home", "About", "Experience", "Contact"];
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const navbarHandler = (navbar: string) => {
    navigate(`/#${navbar}`, { state: { targetID: navbar } });
    setOpen(!open);
  };
  return (
    <div className="relative w-full h-full">
      <button onClick={() => setOpen(!open)}>
        <Navbar />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            key="sidebar"
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={() => setOpen(!open)}
            className="w-full h-full fixed top-0 left-0"
          >
            <div>
              <div className="grid grid-cols-2 h-[100vh]">
                <motion.div
                  variants={background}
                  className="bg-gray-950 h-full border-gray-950 border"
                />
                <motion.div
                  variants={background}
                  className="bg-gray-950 h-full border-gray-950 border"
                />
              </div>
              <motion.div
                variants={mainItems}
                className="absolute top-0 right-0 h-[80px] w-full px-5 flex items-center justify-end font-poppins space-x-2 text-white"
              >
                <p>close</p>
                <Close />
              </motion.div>
              <div className="absolute top-[10%] right-0 p-5 space-y-4">
                {navbar.map((navbar, index) => (
                  <motion.nav
                    variants={mainItems}
                    key={index}
                    onClick={() => navbarHandler(navbar.toLowerCase())}
                    className="text-xl font-montserrat font-semibold text-white"
                  >
                    {navbar}
                  </motion.nav>
                ))}
              </div>
              <div className="absolute bottom-[10%]">
                <motion.img
                  initial={{ scaleY: 0 }}
                  animate={{
                    scaleY: 1,
                    transition: { delay: 0.6 },
                  }}
                  exit={{ scaleY: 0 }}
                  alt="deal"
                  src="./images/deal.jpg"
                  className="object-cover p-5"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
