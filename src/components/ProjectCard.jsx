import React from "react";

function ProjectCard({ image, title, description, link }) {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200 p-5 rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <h2 className="text-xl font-bold mt-3 text-gray-200">{title}</h2>
        <p className="mt-2 text-gray-300">{description}</p>
        <a
          href={link}
          target="_blank"
          className="text-white bg-gradient-to-r from-cyan-800 to-blue-900 mt-4 block px-6 py-4 text-center mx-14 rounded-lg hover:cursor-pointer hover:text-black hover:scale-105 duration-200"
        >
          View Details
        </a>
      </div>
    </>
  );
}

export default ProjectCard;
