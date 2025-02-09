"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ibudget",
    description: "FinTech project aimed at democratizing access to financial services in Tunisia.An integrated digital solution for budget management and categorization, virtual account creation, payments, savings, investments, and insurance.Built with Spring Boot, Angular, ORM, and MySQL.",
    image: "/images/projects/unnamed.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",

  },
  {
    id: 2,
    title: "E-bank Website",
    description: "An online banking platform developed with Symfony, Doctrine ORM, and MySQL. This site allows customers to manage their accounts, make transfers, and handle loans and insurance, all with an optimized and secure user experience.",
    image: "/images/projects/mock4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/emnanaija/-website-ebank2-symfony",
   
  },
  {
    id: 3,
    title: "E-bank Application",
    description: "  Desktop application designed for bank clients developed with JavaFX, Scene Builder, and MySQL. This application features various functionalities including secure authentication using Face ID, management of your savings accounts, transfers, credits, and insurances. You can download your transactions as PDFs, send email notifications for account deactivation requests, scan a QR code to extract encrypted information from your checks, and receive SMS notifications when a credit request is approved",
    image: "/images/projects/mock3.png",
    tag: ["All", "Desktop"],
    gitUrl: "https://github.com/emnanaija/Ebank2_JAVAFX",
  
  },
  {
    id: 4,
    title: "Ticket easy Website",
    description: "A platform for selling and managing tickets for cinemas. This application enables online ticket booking, management of movie sessions and cinema halls, thereby facilitating access to services and enhancing the user experience,developed with HTML, CSS, JavaScript, and PHP."

    ,
    image: "/images/projects/mock2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    
  },
  {
    id: 5,
    title: "Gestion-air  Application",
    description: "A desktop application for data management and Arduino for controlling peripheral systems. This application is designed to manage airport operations, including flight planning and tracking, thus optimizing operational processes and enhancing airport security,developed with C++,Oracle and Arduino",
    image: "/images/projects/mock1.png",
    tag: ["All", "Desktop"],
    gitUrl: "/",

  }
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Desktop"
          isSelected={tag === "Desktop"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
             
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
