//import React from 'react'

const ProjectItem = ({image,title,details,myRole,techStack,link}) => {
  return (
    <div className="flex flex-col md:flex-row h-auto w-full shadow-xl shadow-gray-200 rounded-xl">
        <div className="flex-1/2 w-[500px]">
          <img src={`./projects/${image}`} alt="/" className="rounded-xl group-hover:opacity-10 w-full"/>
        </div>
        <div className="flex flex-1/2 max-w-[500px] flex-col ml-4">
            <h3 className="text-3xl font-bold text-[#001b5e] ">{title}</h3>
            <p className="pb-2 pt-2 text-stone-800">{details}</p>
            <p className="pb-2 pt-2 text-stone-600">My Role{myRole}</p>
            <p className="pb-2 pt-2 text-skyblue">TechStack {techStack}</p>
            <a href={link}>
                <p className="px-1 rounded-md inline-block bg-stone-600  text-white font-bold cursor-pointer text-lg">Link</p>
            </a>
        </div>
        
    </div>
  )
}

export default ProjectItem