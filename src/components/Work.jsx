//import React from 'react'

import WorkItem from "./WorkItem";

const Work = () => {
  const data = [
    {
      year: '2019 - current',
      title: "Engineering Faculty",
      subtitle: "Computer Engineering",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis porro non ",
    },
    {
      year: 2019 - 2024,
      title: "Engineering Faculty",
      subtitle: "Computer Engineering",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis porro non ",
    },
    {
      year: 2019 - 2024,
      title: "Engineering Faculty",
      subtitle: "Computer Engineering",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis porro non ",
    },
    {
      year: 2019 - 2024,
      title: "Engineering Faculty",
      subtitle: "Computer Engineering",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis porro non ",
    },
    {
      year: 2019 - 2024,
      title: "Engineering Faculty",
      subtitle: "Computer Engineering",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis porro non ",
    }
  ];
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="tetx-4xl font-bold text-center text-[#001b5el]">Work</h1>
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
  );
};

export default Work;
