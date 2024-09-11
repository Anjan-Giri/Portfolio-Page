import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black via-black to-gray-800 text-white p-14"
    >
      <div className="p-12">
        <p className="text-4xl font-bold inline border-b-4 border-gray-400">
          Portfolio
        </p>
        <p className="pt-8">Check some of my previous works!</p>
      </div>
      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-10 items-center justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </div>
  );
}

export default ProjectList;
