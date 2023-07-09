import { useState } from "react";
import { ArrowLeft, Send } from "../../components/custom/icon";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal, Scale } from "../../components/custom/animation";

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const submitHandler = (e: React.SyntheticEvent ) => {
    e.preventDefault
    navigate("/message");
    console.log("ok");
  };

  return (
    <div
      id="contact"
      className="w-full py-20 bg-gray-900 text-white line-even scroll-mt-28"
    >
      <div className="container space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-12">
            <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat uppercase font-semibold">
              <Reveal>
                <h1 className="leading-snug">Let's work</h1>
              </Reveal>
              <Reveal>
                <h1 className="leading-snug">together!</h1>
              </Reveal>
            </div>
            <Reveal>
              <p className="paragraf max-w-md">
                A lawyer who has not only strong legal expertise, but also an
                extraordinary ability to work in a team. Together, we can
                provide comprehensive and effective legal solutions and let's be
                connected!
              </p>
            </Reveal>
          </div>

          <div className="flex justify-center items-center relative ">
            <Scale>
              <div className="h-56 w-56 rounded-full bg-amber-200 relative flex justify-center items-center">
                <Circle text="GET IN TOUCH - GET IN TOUCH - GET IN TOUCH -" />
                <ArrowLeft />
              </div>
            </Scale>
          </div>
        </div>

        <div id="message" className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form className="space-y-10" onSubmit={submitHandler}>
            <Reveal width>
              <div className="flex flex-col paragraf">
                <label>Your Full Name ?</label>
                <input
                  name="name"
                  id={name}
                  type="name"
                  required
                  placeholder="type your full name"
                  className="pt-5 pb-3 max-w-md bg-transparent focus:outline-none border-b-2 border-gray-100"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </Reveal>

            <Reveal width>
              <div className="flex flex-col paragraf">
                <label>Your Email Address ?</label>
                <input
                  name="email"
                  id={email}
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  className="pt-5 pb-3 max-w-md bg-transparent focus:outline-none border-b-2 border-gray-100"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </Reveal>

            <Reveal width>
              <div className="flex flex-col paragraf">
                <label>Enter Your Message ?</label>
                <input
                  name="message"
                  id={message}
                  type="text"
                  required
                  placeholder="please enter your message"
                  className="pt-5 pb-3 max-w-md bg-transparent focus:outline-none border-b-2 border-gray-100"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </Reveal>

            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.8,
              }}
              type="submit"
              className="px-4 py-2 paragraf rounded-2xl border-2 border-gray-100 flex items-center justify-center space-x-3"
            >
              <p>send message</p>
              <Send />
            </motion.button>
          </form>

          <div className="paragraf space-y-10 md:mx-auto">
            <div>
              <Reveal>
                <h4 className="font-semibold text-base text-gray-300">
                  Call Phone
                </h4>
              </Reveal>
              <Reveal>
                <p>(+62) 852 2725 0395</p>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <h4 className="font-semibold text-base text-gray-300">
                  Language
                </h4>
              </Reveal>
              <Reveal>
                <p>English</p>
              </Reveal>
              <Reveal>
                <p>Arabic</p>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <h4 className="font-semibold text-base text-gray-300">
                  Address
                </h4>
              </Reveal>
              <Reveal>
                <p>Dukuhbadag, RT.01 RW.02</p>
              </Reveal>
              <Reveal>
                <p>Ketanggungan, Brebes.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Circle = ({ text }: { text: string }) => {
  return (
    <div className="text-black absolute w-full h-full animate-spin-slow">
      <p className="text-base transform">
        {[...text].map((char, index) => (
          <span
            key={index}
            className={`inline-block absolute top-0 left-[50%] font-bold origin-[0_110px]`}
            style={{
              transform: `rotate(${index * 8.1}deg)`,
            }}
          >
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Contact;
