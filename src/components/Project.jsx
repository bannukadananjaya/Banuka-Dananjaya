//import React from 'react'
import ProjectItem from "./ProjectItem";
import projectImage from "../assets/project.jpeg";

const Projects = () => {
  return (
    <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
        dignissimos aliquid consequuntur ea totam consequatur nobis accusantium
        id laudantium. Magnam?
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={projectImage} title="React Application" />
        <ProjectItem img={projectImage} title="React Application" />
        <ProjectItem img={projectImage} title='React Application'/>
        <ProjectItem img={projectImage} title='React Application'/>
      </div>
    </div>
  );
};

export default Projects;
