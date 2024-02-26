import { useState } from "react";

function NavValue() {
  return (
    <>
      <li className="md:mx-5 md:mb-0 mb-5 text-md group/home overflow-hidden">
        <a href="#home" className="group-hover/home:text-[#4d648d]">
          Home
        </a>
        <div className="border-[1px] rounded-full border-slate-400 transition transform -translate-x-[110%] duration-[1s]  group-hover/home:transform group-hover/home:translate-x-[110%]  "></div>
      </li>
      <li className="md:mx-5 md:mb-0 mb-5 text-md group/about overflow-hidden">
        <a href="#about" className="group-hover/about:text-[#4d648d]">
          About
        </a>
        <div className="border-[1px] rounded-full border-slate-400 transition transform -translate-x-[110%] duration-[1s]  group-hover/about:transform group-hover/about:translate-x-[110%]  "></div>
      </li>
      <li className="md:mx-5 md:mb-0 mb-5 text-md group/experience overflow-hidden">
        <a href="#experience" className="group-hover/experience:text-[#4d648d]">
          Experience
        </a>
        <div className="border-[1px] rounded-full border-slate-400 transition transform -translate-x-[110%] duration-[1s]  group-hover/experience:transform group-hover/experience:translate-x-[110%]  "></div>
      </li>
      <li className="md:mx-5 md:mb-0 mb-5 text-md group/project overflow-hidden">
        <a href="#project" className="group-hover/project:text-[#4d648d]">
          Project
        </a>
        <div className="border-[1px] rounded-full border-slate-400 transition transform -translate-x-[110%] duration-[1s]  group-hover/project:transform group-hover/project:translate-x-[110%]  "></div>
      </li>
      <li className="md:mx-5 md:mb-0 mb-5 text-md group/contact overflow-hidden">
        <a href="#contact" className="group-hover/contact:text-[#4d648d]">
          Contact
        </a>
        <div className="border-[1px] rounded-full border-slate-400 transition transform -translate-x-[110%] duration-[1s]  group-hover/contact:transform group-hover/contact:translate-x-[110%]  "></div>
      </li>
    </>
  );
}

function NavBig() {
  return (
    <div className="font-poppins hidden md:block">
      <ul className="flex">
        <NavValue />
      </ul>
    </div>
  );
}

function NavSmall({ checked }) {
  return (
    <>
      <ul
        className={`md:hidden font-poppins fixed flex flex-col bg-slate-700 right-0 top-0 w-[75%] h-screen justify-start items-start pt-20 ps-10 ${
          checked ? "animate-slideIn" : "animate-slideOut"
        } `}>
        <NavValue />
      </ul>
    </>
  );
}

function NavbarBigSmall() {
  const [showLayer, setShowLayer] = useState(false);
  function handleChange() {
    setShowLayer(!showLayer);
  }
  return (
    <>
      <label
        htmlFor="burger"
        className={`z-20 md:hidden ${
          showLayer ? "fixed right-[10%]" : "absolute right-[10%]"
        } `}>
        <input
          type="checkbox"
          checked={showLayer}
          onChange={handleChange}
          id="burger"
          className="hidden"
        />
        <span
          className={`bg-white w-6 h-[3px] block mb-[4px] rounded-sm ${
            showLayer
              ? "transform origin-top-left rotate-45 transition duration-1000 translate-x-px -translate-y-[2px]"
              : "transform origin-top-left transition duration-1000"
          }`}></span>
        <span
          className={`bg-white w-6 h-[3px] block mb-[4px] rounded-sm ${
            showLayer
              ? "transform scale-0 opacity-0 transition duration-1000"
              : "transform scale-100 opacity-100 transition duration-1000"
          }`}></span>
        <span
          className={`bg-white w-6 h-[3px] block mb-[4px] rounded-sm ${
            showLayer
              ? "transform origin-top-left -rotate-45 transition duration-1000 -translate-x-px translate-y-px"
              : "transform origin-top-left transition duration-1000"
          }`}></span>
      </label>
      <NavBig />
      <NavSmall checked={showLayer} />
    </>
  );
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#1e1f26] shadow-lg px-12 md:py-6 py-4 font-bold text-white z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-poppins">
          <h1 className="text-xl">MasEeng_sf</h1>
        </div>
        <NavbarBigSmall />
      </div>
    </nav>
  );
}
