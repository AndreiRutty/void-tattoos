import React, { useState, useEffect } from "react";
import { headerData } from "../data";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";
import { TiThMenuOutline } from "react-icons/ti";

const Header = () => {
  const { logo } = headerData;

  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  //Scroll Event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "h-[100px] lg:h-[110px]" : "h-[120px] lg:h-[150px]"
      } fixed bg-white left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-[250ms]`}
    >
      <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">
        {/* Logo */}
        <a href="/">
          <img className="w-[188px] h-[90px]" src={logo} alt="logo" />
        </a>
        {/* Navbar */}
        <div className="hidden xl:flex">
          <Nav />
        </div>
        {/* Mobile Version */}
        {/* Nav Menu Button for Mobile */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="xl:hidden absolute bg-black text-white right-[5%] p-2 rounded-md cursor-pointer"
        >
          <TiThMenuOutline className="text-3xl" />
        </div>
        {/* Nav Menu for Mobile */}
        <div
          className={`${navMobile ? "max-h-full" : "max-h-0"} ${
            isActive
              ? "top-[100px] lg:top-[110px]"
              : "top-[120px] lg:top-[150px]"
          } fixed bg-white w-full h-full left-0 -z-10 transition-all duration-[250ms]`}
        >
          <NavMobile />
        </div>
        {/* Social Icons  */}
        <div className="hidden xl:flex">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
