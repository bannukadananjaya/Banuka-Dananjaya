//import React from 'react'
import ProjectItem from "./ProjectItem";


const Projects = () => {

  const data =[
    {
      image:'SMS.png',
      title:'Student Management System',
      details:'Developed an automated web app for universities to enhance managing students, staff, and academic activities',
      myRole:'Full-Stack development/Quality Assurance',
      techStack:'React/ Javascript/ Bootstrap/ Nodejs/ MySql',
      link:'https://github.com/bannukadananjaya/devhive2023.git'
    },
    {
      image:'LMS.png',
      title:'Library Management System ',
      details:'Developed an automated web app for universities to enhance managing students, staff, and academic activities',
      myRole:'Full-Stack development/Quality Assurance',
      techStack:'React/ Javascript/ Bootstrap/ Nodejs/ MySql',
      link:'https://github.com/bannukadananjaya/OnlineLibraryManagementSystem.git'
    },
    {
      image:'HMS.png',
      title:'Hostel Management System',
      details:'Developed an automated web app for universities to enhance managing students, staff, and academic activities',
      myRole:'Full-Stack development/Quality Assurance',
      techStack:'React/ Javascript/ Bootstrap/ Nodejs/ MySql',
      link:'https://github.com/bannukadananjaya/hostelManagementSystem'
    },
    {
      image:'LMS1.png',
      title:'Library Management System',
      details:'Developed an automated web app for universities to enhance managing students, staff, and academic activities',
      myRole:'Full-Stack development/Quality Assurance',
      techStack:'HTML/ CSS/ PHP/ MySQL/ XAMPP',
      link:'https://github.com/bannukadananjaya/devhive2023.git'
    },
    {
      image:'Fashionline.png',
      title:'Web App for Fashion Line textiles',
      details:'I designed and developed user interfaces which are visually stunning and responsive user interfaces, ensuring seamless navigation and optimal user experience across various devices.',
      myRole:'Front-end development',
      techStack:'React/ Javascript/ Css',
      link:'https://github.com/bannukadananjaya/fasion_line.git'
    },    

    {
      image:'chatbot.png',
      title:'E-commerce Assistant Chatbot ',
      details:'Developed an automated web app for universities to enhance managing students, staff, and academic activities',
      myRole:'Full-Stack development/Quality Assurance',
      techStack:'React/ Javascript/ Bootstrap/ Nodejs/ MySql',
      link:'https://github.com/bannukadananjaya/Chatbot.git'
    },
    {
      image:'#',
      title:'Machine Learning Approach to Identifying Obesity in Children using Molecular Data',
      details:'Developed an automated web app for universities to enhance managing students, staff, and academic activities',
      myRole:'Full-Stack development/Quality Assurance',
      techStack:'React/ Javascript/ Bootstrap/ Nodejs/ MySql',
      link:'https://github.com/bannukadananjaya/Machine-Learning-Approach-to-Identifying-Obesity-in-Children-using-Molecular-Data.git'
    },
    {
      image:'#',
      title:'Food Demand Forecasting System ',
      details:'Developed an automated web app for universities to enhance managing students, staff, and academic activities',
      myRole:'Full-Stack development/Quality Assurance',
      techStack:'React/ Javascript/ Bootstrap/ Nodejs/ MySql',
      link:'https://github.com/bannukadananjaya/Food-Demand-Forecasting-System.git'
    }
]


  return (
    <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-8">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
      Discover my hands-on experiences and academic projects that have shaped my skills and passion for Software Engineering. Explore the practical applications and creative solutions I've developed during my educational journey
      </p>
      
      <div className="grid sm:grid-cols-1 gap-12">
        {data.map((item,idx) =>(
          <ProjectItem
            key={idx}
            image={item.image}
            title={item.title}
            details={item.details}
            myRole={item.myRole}
            techStack={item.techStack}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
