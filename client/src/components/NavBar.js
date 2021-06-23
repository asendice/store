import React from "react";
import logo from "../img/logo.png";
import SearchBar from "./SearchBar";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";

const NavBar = () => {
  return (
    <Popover className="relative  bg-white-200">
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="flex justify-between items-center py-6">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <img className="h-8 w-auto sm:h-10" src={logo} />
              </a>
            </div>
            <div className=" flex justify-center">
              <SearchBar />
            </div>
            {/* hamburger menu at md vp */}
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-end text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-purple-500">
                <MenuIcon className="h-8 w-8" aria-hidden="true" />
              </Popover.Button>
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-white-900 hover:text-white-500"
              >
                Log in
              </a>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-white-50 bg-purple-400 hover:bg-purple-300"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </>
    </Popover>
  );
};

export default NavBar;
