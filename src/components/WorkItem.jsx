//import React from 'react'

const WorkItem = ({ year, title, subtitle, details }) => {
  return (
    <ol className="lex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-300 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 items-center justify-start text-xs md:text-sm md:inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
        {year}
        </p>
        <p className="text-lg font-semibold text-[#001b5e]">{title}
        </p>
        <p className="my-1 text-sm font-normal leading-none text-stone-400">
        {subtitle}
        </p>
        <p className="my-1 text-sm font-normal leading-none text-stone-400">
        {details}
        </p>
      </li>
    </ol>
  );
};

export default WorkItem;
