import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../components/sidebar";

const animateNav = {
  initial: {
    y: -180,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6,
      delay: 1,
    },
  },
};

const navbar = ["Home", "About", "Experience", "Contact"];

const Header = () => {
  const navigate = useNavigate();
  const navbarHandler = (navbar: string) => {
    navigate(`/#${navbar}`, { state: { targetID: navbar } });
  };
  return (
    <div className="w-full h-[80px] relative font-montserrat bg-gray-100">
      <motion.div
        variants={animateNav}
        initial="initial"
        animate="animate"
        className="container flex items-center justify-between"
      >
        <nav className="text-xl md:text-2xl font-medium font-montserrat">
          <Link to="/">
            <span className="font-extrabold text-gray-900 uppercase">
              hilmi
            </span>
            lawyer
          </Link>
        </nav>
        <nav className="hidden font-semibold md:flex space-x-5 cursor-pointer">
          {navbar.map((navbar, index) => (
            <nav
              key={index}
              className="paragraf"
              onClick={() => navbarHandler(navbar.toLowerCase())}
            >
              {navbar}
            </nav>
          ))}
        </nav>
        <nav className="hidden md:block relative font-semibold cursor-pointer">
          <nav onClick={() => navbarHandler("message")} className="paragraf">
            Make an appointment
          </nav>
          <div className="w-full bg-gray-900 h-1 absolute -bottom-3" />
        </nav>

        <nav
          className="md:hidden block"
        >
          <Sidebar />
        </nav>
      </motion.div>
    </div>
  );
};

export default Header;
