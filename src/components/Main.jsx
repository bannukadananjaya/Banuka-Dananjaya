//import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { FaEnvelope, FaGithub, FaMobile, FaLinkedin } from "react-icons/fa";
import image from "../assets/coverImg.jpg";
import profileImg from "../assets/profileImg.jpg";

const Main = () => {
  return (
    <div id="main" className="min-h-screen bg-no-repeat bg-cover" style={{backgroundImage: `url(${image})`}}>
      {/* <img
        className="w-full object-cover object-left  h-screen"
        src={image}
        alt="#image"
      /> */}
       <section className="h-screen bg-white/50 flex flex-col justify-center sm:flex-row items-center p-6 mb-12"> 
        <div className="sm:w-1/3">
          <img
            src={profileImg}
            alt="profile Image"
            className="aspect-square rounded-full max-w-[300px] m-auto  "
          />
        </div>
        <div className="flex flex-col sm:w-1/3 m-auto justify-center items-center lg:items-start">
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
        <div className="flex flex-col sm:w-1/3 m-auto max-w-[500px] w-full p-6">
          <h1 className=" sn:text-4xl text-4xl font-bold text-gray-600 p-4">Contact me!</h1>
          <div className="flex flex-row p-2  "><FaMobile size={20} /><a href="#"> <span className="ml-4">0765346469</span></a></div>
          <div className="flex flex-row p-2 "><FaLinkedin size={20}/><a href="https://www.linkedin.com/in/bannukadananjaya/ ">  <span className="ml-4">Linkedin</span></a></div>
          <div className="flex flex-row p-2 "><FaGithub size={20} /><a href="https://github.com/bannukadananjaya"> <span className="ml-4">GitHub</span></a></div>
          <div className="flex flex-row p-2 "><FaEnvelope size={20}/><a href="banukasubasinghe13@gmail.com">  <span className="ml-4">banukasubasinghe13@gmail.com</span></a></div>
        </div>
      </section>
   </div>
  );
};

export default Main;
