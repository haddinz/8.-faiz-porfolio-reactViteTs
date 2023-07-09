import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-[80px] py-5 font-montserrat font-semibold bg-gray-100 ">
      <div className="container">
        <div className="grid h-full">
          <div className="flex flex-col md:flex-row justify-between items-center paragraf text-gray-700">
            <p>@ 2023 hilmilawyer, All rights reserved</p>
            <Link to='/'>Made by rutes.ID</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
