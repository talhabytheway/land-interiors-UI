import React, { useState } from "react";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [open, setopen] = useState(false);

  return (
    <header className={`bg-dark sticky lg:relative top-0 font-medium text-[20px] z-[10000]`}>
      <div
        className={`xl:mx-auto px-[1.5rem] lg:max-w-[1440px] xl:max-w-[1600px]  flex py-5 justify-between items-center select-none transition-all ease-linear duration-650`}
      >
        <img
          src={logo}
          alt="Land Interior Logo"
          className="my-auto hover:cursor-pointer h-[50px] md:h-[70px] lg:h-[100px] "
        />
        <div className="my-auto text-purp [&>*]:pl-20 hidden lg:inline [&>*]:hover:cursor-pointer">
          <span>Join as Design Expert</span>
          <span>Partner with LAND Interiors</span>
        </div>
        <span
          className={`cursor-pointer lg:hidden block transition-all ease-in duration-500 content-center`}
          onClick={() => setopen(!open)}
        >
          <img src={open ? close : menu} alt="" className={open ? 'h-10' : 'h-6'} />
        </span>
      </div>
      <ul
        className={`block pb-5 absolute px-[2rem] lg:flex lg:justify-center flex-wrap transition-all ease-in duration-500 w-[100vw] left-[0] lg:w-auto lg:z-auto lg:sticky  lg:bg-none  lg:space-x-20 space-y-2.5 lg:space-y-0 my-auto p-3 lg:mb-auto hover:[&>*]:text-blue hover:[&>*]:duration-500 hover:[&>*]:cursor-pointer ${
          open
            ? " top-[70px] md:top-[100px] opacity-100 bg-dark lg:bg-transparent"
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
          >
            Contact
          </Link>
        </li>
        <li className="lg:hidden text-purp">Join as Design Expert</li>
        <li className="lg:hidden text-purp">Partner with LAND Interiors</li>
      </ul>
    </header>
  );
};

export default NavBar;
