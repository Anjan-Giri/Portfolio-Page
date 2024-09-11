import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);

  const menus = [
    {
      id: 1,
      menu: "Home",
    },
    {
      id: 2,
      menu: "About",
    },
    {
      id: 3,
      menu: "Portfolio",
    },
    {
      id: 4,
      menu: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-20 text-white bg-black top-0 z-10">
      <h1 className="text-5xl text-violet-100 ml-4 font-signature">Anjan</h1>
      <ul className="hidden md:flex">
        {menus.map(({ id, menu }) => (
          <li
            key={id}
            className="px-5 text-gray-400 cursor-pointer capitalize hover:text-gray-200 hover:scale-105 duration-200"
          >
            <Link to={menu} smooth duration={500}>
              {menu}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-5 z-10 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
          {menus.map(({ id, menu }) => (
            <li key={id} className="px-5 cursor-pointer py-7 text-4xl">
              <Link
                onClick={() => setNav(!nav)}
                to={menu}
                smooth
                duration={500}
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
