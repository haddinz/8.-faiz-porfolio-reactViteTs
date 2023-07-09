import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout";
import { Reveal, Scale } from "../../components/custom/animation";

const Message = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };
  return (
    <Layout title="Message">
      <div className="w-full bg-gray-900 line-odd pt-20 space-y-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 text-white items-center">
            <div className="text-4xl md:text-5xl lg:text-7xl font-montserrat">
              <Thanks text="Thanks you" />
              <Thanks text="for sending" />
              <Thanks text="messages" />
            </div>

            <div className="space-y-8">
              <Reveal>
                <h4 className="font-semibold font-montserrat">
                  We have received your message
                </h4>
              </Reveal>
              <Reveal>
                <p className="paragraf">
                  Your message has been received. If you have any other
                  questions or need further urgent assistance, please call me
                  back by phone. May all your affairs be smooth and successful!
                  Thanks for asking
                </p>
              </Reveal>
              <Reveal>
                <button
                  onClick={() => navigateHandler()}
                  className="px-4 py-2 paragraf rounded-2xl border-2 border-gray-100 flex items-center justify-center space-x-3"
                >
                  back to homepage
                </button>
              </Reveal>
            </div>
          </div>
        </div>
        <Scale>
          <div className="w-full h-96">
            <img
              alt="meeting"
              src="./images/meeting.jpg"
              className="object-cover w-full h-full"
            />
          </div>
        </Scale>
      </div>
    </Layout>
  );
};

const Thanks = ({ text }: { text: string }) => {
  return (
    <Reveal>
      <h1>{text}</h1>
    </Reveal>
  );
};

export default Message;
