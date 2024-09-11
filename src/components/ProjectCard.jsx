import React from "react";

function ProjectCard({ image, title, description, link }) {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200 p-5 rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-contain rounded-t-lg"
        />
        <h2 className="text-xl font-bold mt-3 text-gray-300">{title}</h2>
        <p className="mt-2 text-gray-400">{description}</p>
        <a
          href={link}
          target="_blank"
          className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-900 cursor-pointer hover:cursor-pointer hover:text-black hover:scale-105 duration-200"
        >
          View Details
        </a>
      </div>
    </>
  );
}

export default ProjectCard;
