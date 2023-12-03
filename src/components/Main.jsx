//import React from 'react'
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import image from "../assets/image.jpg";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={image}
        alt="#image"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] h-full w-full flex flex-col  m-auto justify-center items-center lg:items-start">
          <h1 className="sn:text-5xl text-4xl font-bold text-gray-800">I'm Banuka Dananjaya</h1>
          <h2 className="flex sn:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Software Engineer",
                2000,
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter size={20} />
            <FaFacebookF size={20}/>
            <FaInstagram size={20}/>
            <FaLinkedin size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
