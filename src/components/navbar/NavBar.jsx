import React, { useState } from "react";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import logo from "../../assets/logo.svg";
import { Link } from "react-scroll";

const NavBar = () => {
  const [open, setopen] = useState(false);

  return (
    <header className={`bg-dark sticky xl:relative top-0 text-[20px] z-[10000] xl:py-[1.5rem]`}>
      <div
        className={`xl:mx-auto px-[2rem] xl:max-w-[1600px] vl:max-w-[1920px] flex py-5 xl:pb-0 vl:pb-5 justify-between items-center select-none transition-all ease-linear duration-650`}
      >
        <img
          src={logo}
          alt="Land Interior Logo"
          className="my-auto hover:cursor-pointer h-[70px] md:h-[133px] xl:h-[111px] "
        />
        <div className="my-auto text-[#451A64] font-medium [&>*]:pl-20 xl:mr-[1.5rem] hidden xl:inline [&>*]:hover:cursor-pointer">
          <span>Join as Design Expert</span>
          <span>Partner with LAND Interiors</span>
        </div>
        <span
          className={`cursor-pointer xl:hidden block transition-all ease-in duration-500 content-center`}
          onClick={() => setopen(!open)}
        >
          <img src={open ? close : menu} alt="hamburger" className="h-14" />
        </span>
      </div>
      <ul
        className={`block pb-5 absolute px-[3.3rem] xl:flex xl:justify-center flex-wrap transition-all ease-in duration-500 w-[100vw] left-[0] xl:w-auto xl:z-auto xl:sticky  xl:bg-none  xl:space-x-20 space-y-2.5 xl:space-y-0 my-auto p-3 xl:pt-0 vl:pt-4 xl:mb-auto hover:[&>*]:text-blue hover:[&>*]:duration-500 hover:[&>*]:cursor-pointer  ${
          open
            ? " top-[100px] md:top-[170px] opacity-100 bg-dark xl:bg-transparent"
            : " top-[-300px]"
        } `}
      >
        <li>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            to="About"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            to="Projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            to="Studio"
          >
            Our Studio
          </Link>
        </li>
        <li>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            to="Blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            to="Contact"
            className="xl:pr-[30px]"
          >
            Contact
          </Link>
        </li>
        <li className="xl:hidden text-purp">Join as Design Expert</li>
        <li className="xl:hidden text-purp">Partner with LAND Interiors</li>
      </ul>
    </header>
  );
};

export default NavBar;
