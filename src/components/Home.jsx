import React from "react";
import anjan1 from "../assets/anjan1.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mt-3">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-400 py-5 max-w-md">
            I am a fresher starting out as a Frontend Developer. I love to work
            on web applications using various technologies. Currently, I am
            working at BlueFox as a Frotend Developer Intern.
          </p>

          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to blue-400 cursor-pointer"
            >
              Portfolio{" "}
              <span className="px-2 group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={23} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={anjan1}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full h-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
