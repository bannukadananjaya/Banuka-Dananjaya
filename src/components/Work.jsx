//import React from 'react'

import WorkItem from "./WorkItem";

const Work = () => {
  const data = [
    {
      year: '2019 - current',
      title: "BSc Eng (Hons.) in Computer Engineering ",
      subtitle: "Faculty of Engineering, University of Jaffna",
     
    },
    {
      year: '2018 - 2020',
      title: "Diploma in Information Technology",
      subtitle: "University of Wayamba",
    },
    {
      year: '2018 - 2020',
      title: "Diploma in English Language & Liteature",
      subtitle: "Aquinas College of Higher Studies",
    },
    {
      year: '2015 - 2018',
      title: "G.C.E Advanced Level-Physical Science Stream",
      subtitle: "3B's",
      details:"Dhammissara National College",
    },
    {
      year: '2008 - 2014',
      title: "G.C.E Ordinary Level",
      subtitle: "9A's",
      details:"Dhammissara National College",
    }
  ];
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5el]">Education</h1>
      <div className="my-8">
        {data.map((item,idx) => (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            subtitle={item.subtitle}
            details={item.details}
          />
          ))}
      </div>
    </div>
  );
};

export default Work;
