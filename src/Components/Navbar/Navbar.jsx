import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar flex justify-between relative bg-lightGrayishBlue pt-4 py-4 px-4 md:px-32 items-center">
      {/* Home link */}
      <div>
        <Link
          className="text-veryDarkBlue hover:text-desaturatedBlue cursor-pointer font-bold"
          to="/"
        >
          DOCS HUB
        </Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden flex items-center relative">
        <div className="ml-4">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="black"
            easing="ease-in"
            size={28}
          />
        </div>
        {/* Mobile Navbar */}
        {isOpen && (
          <div className=" absolute flex top-full bg-white mt-4 py-4  items-center mr-10">
            <nav className="p-4">
              <ul className="list-none flex flex-col items-center">
                <li className="text-veryDarkBlue hover:text-desaturatedBlue cursor-pointer font-bold mb-4 inline-block">
                  <Link to="/unsplash">UNSPLASH</Link>
                </li>
                <li className="text-veryDarkBlue hover:text-desaturatedBlue cursor-pointer font-bold mb-4 inline-block">
                  <Link to="/rickandmorty">RICK & MORTY</Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex">
        <nav className="flex">
          <ul className="list-none gap-8 flex">
            <li className="text-veryDarkBlue hover:text-desaturatedBlue cursor-pointer font-bold">
              <Link to="/unsplash">UNSPLASH</Link>
            </li>
            <li className="text-veryDarkBlue hover:text-desaturatedBlue cursor-pointer font-bold">
              <Link to="/rickandmorty">RICK AND MORTY</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Button for large screens */}
      <div className="hidden md:flex">
        <button className="px-3 p-2 rounded-full text-white cursor-pointer hover:bg-desaturatedBlue bg-veryDarkBlue">
          Schedule a Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
