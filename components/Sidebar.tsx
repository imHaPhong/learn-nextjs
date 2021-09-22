import React from "react";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1n4f-fAiOQc-G8WmzFceAoKiv4c3X5iv4Hw&usqp=CAU"
        alt="user avatart"
        className="w-32 h-32 mx-auto rounded-full "
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span>Vins</span> Sanjs
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web developer</p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full "
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      <div className="flex justify-around w-9/12 mx-auto my-5  text-green md:w-full">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Dong Anh, Ha Noi</span>
        </div>

        <p className="my-2">sumax@sdjas.com</p>
        <p className="my-2">076270234934</p>

        <button
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full  bg-gradient-to-r from-green to to-blue-400 focus:outline-none"
          onClick={() => window.open("mailto:tuanna@gmail.com")}
        >
          Email Me
        </button>
        <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to to-blue-400 focus:outline-none">
          Toggle theme
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
