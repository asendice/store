import React from "react";
import logo from "../img/logo.png";
import SearchBar from "./SearchBar";
import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import { connect } from "react-redux";
import { videoTerm } from "../actions/index"

const NavBar = (props) => {
  
  const onVideoSubmit = (formValues) => {
    console.log(formValues, "formValues")
    props.videoTerm(formValues);
  };

  return (
    <Popover className="relative  bg-white border-purple border-b">
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-10 ">
          <div className="flex justify-between items-center py-6">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <img className="h-8 w-auto sm:h-10" src={logo} />
              </a>
            </div>
            <div className="flex justify-center">
              <SearchBar onVideoSubmit={onVideoSubmit} />
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
                className="whitespace-nowrap text-base font-medium text-black hover:text-green cursor-pointer"
              >
                Log in
              </a>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-white bg-purple hover:bg-purple"
              >
                Register
              </a>
            </div>
          </div>
          <div className=" flex justify-center">
            <a className="px-2 font-sans" href="#">
              Categories
            </a>
            <a className="px-2 font-sans" href="#">
              Popular
            </a>
            <a className="px-2 font-sans" href="#">
              Categories
            </a>
          </div>
        </div>
      </>
    </Popover>
  );
};

const mapStateToProps = (state) => {
  return {
    videoTerm: state.videoTerm,
  };
};

const mapDispatchToProps = {
  videoTerm: (term) => videoTerm(term),
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
