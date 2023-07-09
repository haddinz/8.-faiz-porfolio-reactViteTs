import { Reveal } from "./custom/animation";
import Layout from "./layout";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <Layout title="NOT FOUND">
      <div className="w-full bg-gray-100 mt-36">
        <div className="container">
          <div className="grid grid-cols-1 h-full place-items-center md:grid-cols-2 gap-10">
            <div className="font-montserrat">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:text-7xl md:before:text-9xl before:font-bold before:-top-10 md:before:-top-16 before:opacity-10 before:content-['ERROR'] relative inline-block"
              >
                <span className="relative text-7xl md:text-9xl font-semibold">
                  404
                </span>
              </motion.span>

              <Reveal>
                <p className="text-xl my-10 text-center">
                  Sorry, the page you are looking for could not be found.
                </p>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <img alt="logo-404" src="./notfound.svg" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
