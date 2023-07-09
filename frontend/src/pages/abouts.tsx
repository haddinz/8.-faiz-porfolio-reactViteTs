/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { AboutType } from "../../types/about";
import { Reveal } from "../../components/custom/animation";
import { motion } from "framer-motion";

const about: AboutType[] = [
  {
    name: "University icons created by Freepik - Flaticon",
    slug: "https://www.flaticon.com/free-icons/university",
    title: "university icons",
    image: "./images/logo1.png",
    descriptions: "Individuals who love to study and learn new things",
  },
  {
    name: "Team icons created by Freepik - Flaticon",
    slug: "https://www.flaticon.com/free-icons/team",
    title: "team icons",
    image: "./images/logo2.png",
    descriptions: "capable of working together to achieve it common goals",
  },
  {
    name: "logo_lawyer_reepick-flaticon.com",
    slug: "https://www.flaticon.com/free-icons/lawyer",
    title: "lawyer icons",
    image: "./images/logo3.png",
    descriptions: "always updated about the knowledge of law and diplomacy",
  },
];

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full bg-gray-900 text-white py-24 line-even scroll-mt-28 scroll-smooth md:scroll-auto"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-16">
            <div className="font-montserrat">
              <Reveal>
                <h5 className="text-base text-gray-300">about</h5>
              </Reveal>
              <Reveal>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
                  Who Am I?
                </h3>
              </Reveal>
            </div>
            <div className="font-poppins">
              <Reveal>
                <Paragraft />
              </Reveal>
            </div>
          </div>

          <div className="m-auto space-y-3">
            {about.map((about, index) => (
              <div key={index} className="space-x-5 flex items-center">
                <Reveal>
                  {" "}
                  <Link
                    to={about.slug}
                    title={about.title}
                    className="p-5 bg-gray-500 rounded-lg border-2 border-white border-opacity-30 inline-block"
                  >
                    <img alt={about.name} src={about.image} className="w-16" />
                  </Link>
                </Reveal>

                <Reveal>
                  <div>
                    <p className="paragraf max-w-[200px]">
                      {about.descriptions}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Paragraft = () => {
  return (
    <p className="paragraf max-w-lg">
      Hallo my name{" "}
      <span className="italic text-amber-200 font-semibold">
        Muhammad Faiz Hilmi
      </span>{" "}
      a law graduate with a strong understanding ability. I have several
      experiences such as professional internships and externships, as well as
      internal and external committee responsibilities within campus
      organizations entrusted to me. These experiences have made me an
      individual who can think objectively, quickly understand situations, and
      work collaboratively to achieve shared goals. I am highly passionate about
      the world of Law, diplomacy, and exploring new things
    </p>
  );
};

export default About;
