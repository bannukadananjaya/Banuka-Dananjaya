//import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { FaEnvelope, FaGithub, FaMobile, FaLinkedin } from "react-icons/fa";
import image from "../assets/coverImg.jpg";
import profileImg from "../assets/profileImg.jpg";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={image}
        alt="#image"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-white/50 flex flex-col md:flex-row items-center pl-20 ">
        <div className="flex flex-1/3 ml-[100px]">
          <img
            src={profileImg}
            alt="profile Image"
            className="aspect-square rounded-full max-w-[300px] m-auto  "
          />
        </div>
        <div className="flex flex-1/3 flex-col  m-auto justify-center items-center lg:items-start">
          <h1 className="sn:text-5xl text-4xl font-bold text-gray-800">
            I'm Banuka Dananjaya
          </h1>
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
        </div>
        <div className="flex flex-1/3 flex-col m-auto max-w-[500px] w-full p-6">
          <h1 className=" sn:text-4xl text-4xl font-bold text-gray-600 p-4">Contact me!</h1>
          <div className="flex flex-row p-2  "><FaMobile size={20} /><a href=""> <span className="ml-4">0765346469</span></a></div>
          <div className="flex flex-row p-2 "><FaLinkedin size={20}/><a href="">  <span className="ml-4">Linkedin</span></a></div>
          <div className="flex flex-row p-2 "><FaGithub size={20} /><a href=""> <span className="ml-4">GitHub</span></a></div>
          <div className="flex flex-row p-2 "><FaEnvelope size={20}/><a href="">  <span className="ml-4">banukasubasinghe13@gmail.com</span></a></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
