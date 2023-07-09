import { Reveal } from "../../components/custom/animation";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "../../components/custom/icon";
// import { motion } from "framer-motion";

const cardExperince = [
  {
    title: "Exchequer, Legal Staff & Drafting MOU",
    name: "PT. SASTRA CEMERLANG ABADI SEMARANG",
    desc: "Taking care of financial entry and exit and negotiating with government and non-government institutions regarding budgetingin the implementation of training/seminars",
    date: "2022 - 2023",
  },
  {
    title: "Legal Drafter, co-advocate & Office Admin",
    name: "KANTOR ADVOKAT DAN KONSULTAN HUKUM AHMAD HADI PRAYITNO & PATNERS",
    desc: "Provide legal opinion to clients as well Assist clients in court proceedings. Record court schedules, outgoing letters and letters enter",
    date: "2022 - 2023",
  },
  {
    title: "Divisi Ditjen AHU (Administrasi Hukum Umum)",
    name: "KEMENTERIAN HUKUM & HAM JAWA TENGAH",
    desc: "Processing of LBH accreditation data and annual budget in collaboration with the Ministry of Law and Human Rights of Central Java",
    date: "2022",
  },
  {
    title: "Divisi Kepaniteraan Perdata & Pidana",
    name: "PENGADILAN NEGERI BREBES",
    desc: "Process copies of case verdict files, deeds, securities, and evidence of criminal and civil cases. Attend and prepare for trials online and offline until the final decision of the case",
    date: "2021",
  },
];

const Experience = () => {
  // const [current, setCurrent] = useState<number>(0);
  // const currentHandler = (quantity: number) => {
  //   setCurrent(quantity);
  // };
  // const gotoHandler = (index: number) => {
  //   setCurrent(index);
  //   console.log("urutan index:", index);
  //   console.log("urutan current:", current);
  // };

  return (
    <div id="experience" className="w-full py-20 line-odd">
      <div className="container">
        <div className="grid space-y-14">
          <div className="font-montserrat flex flex-col items-center space-y-3">
            <Reveal>
              <h5 className="text-base text-gray-700">experience</h5>
            </Reveal>
            <Reveal>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
                what i have do
              </h3>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-5 font-poppins ">
            {cardExperince.map((card, index) => (
              <Reveal key={index}>
                <div className="p-10 min-h-full bg-gray-900 text-white rounded-lg border-2 border-white border-opacity-30">
                  <div className="space-y-1 mb-5 font-semibold text-amber-200">
                    <p>{card.title}</p>
                    <p>{card.name}</p>
                  </div>
                  <div className="space-y-5">
                    <p className="paragraf">{card.desc}</p>
                    <p className="font-bold text-amber-900 inline-block py-3 px-6 bg-amber-200 rounded-lg border-2 border-amber-900 border-opacity-30 ">
                      {card.date}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* <div className="hidden md:grid md:grid-cols-2 gap-10 group">
            <div className="flex items-center overflow-hidden">
              <button
                onClick={() => currentHandler(current - 1)}
                disabled={current === 0}
                className="opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft />
              </button>
              <Card>
                <motion.div
                  key={cardExperince[current].name}
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  className="p-10 bg-gray-900 text-white rounded-lg border-2 border-white border-opacity-30"
                >
                  <div className="space-y-1 mb-5 font-semibold text-amber-200">
                    <p>{cardExperince[current].title}</p>
                    <p>{cardExperince[current].name}</p>
                  </div>
                  <div className="space-y-5">
                    <p className="paragraf">{cardExperince[current].desc}</p>
                    <p className="font-bold text-amber-900 inline-block py-3 px-6 bg-amber-200 rounded-lg border-2 border-amber-900 border-opacity-30 ">
                      in {cardExperince[current].date}
                    </p>
                  </div>
                </motion.div>
              </Card>
            </div>

            <div className="flex items-center overflow-hidden">
              <Card>
                <motion.div
                  key={cardExperince[current].name}
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  className="p-10 bg-gray-900 text-white rounded-lg border-2 border-white border-opacity-30"
                >
                  <div className="space-y-1 mb-5 font-semibold text-amber-200">
                    <p>{cardExperince[current + 1].title}</p>
                    <p>{cardExperince[current + 1].name}</p>
                  </div>
                  <div className="space-y-5">
                    <p className="paragraf">
                      {cardExperince[current + 1].desc}
                    </p>
                    <p className="font-bold text-amber-900 inline-block py-3 px-6 bg-amber-200 rounded-lg border-2 border-amber-900 border-opacity-30 ">
                      in {cardExperince[current + 1].date}
                    </p>
                  </div>
                </motion.div>
              </Card>
              <button
                onClick={() => currentHandler(current + 1)}
                disabled={current === cardExperince.length - current}
                className="opacity-0 group-hover:opacity-100"
              >
                <ChevronRight />
              </button>
            </div>

            <div className="col-span-2 flex justify-center items-center space-x-5">
              {cardExperince.slice(0, 3).map((dots, index) => (
                <div
                  key={index}
                  onClick={() => gotoHandler(index)}
                  className={`h-3 w-3 rounded-full cursor-pointer ${
                    current === index ? "bg-amber-500" : "bg-gray-900"
                  }`}
                />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
