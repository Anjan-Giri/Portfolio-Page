import React from "react";

function About() {
  return (
    <div
      name="About"
      className="w-full h-screen p-15 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-blod inline border-b-4 border-gray-400 ">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          quidem assumenda incidunt. Incidunt numquam quibusdam, soluta eaque
          facere commodi consequuntur amet placeat nostrum corporis reiciendis
          atque labore deleniti delectus, ex neque accusantium voluptatibus a
          culpa totam autem voluptatem? Ut repudiandae officiis repellat, unde
          laboriosam expedita placeat impedit quas possimus rem?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
          corporis labore voluptatibus tenetur, illum eaque accusantium deserunt
          fugiat illo, laudantium possimus, odit amet? Reprehenderit, dolor id
          necessitatibus sit labore praesentium deserunt. Alias explicabo
          recusandae cupiditate molestias rerum non ab voluptatum, sint esse
          aliquam cumque voluptates vero neque ipsa laboriosam voluptas!
        </p>
      </div>
    </div>
  );
}

export default About;
