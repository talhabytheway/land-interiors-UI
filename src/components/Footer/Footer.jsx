import React from "react";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/facebook.svg";
import linkedIn from "../../assets/linkedIn.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";
import { Link } from "react-scroll";


const Footer = () => {
  return (
    <div className="px-16 md:px-24 lg:px-36 flex flex-col gap-6 lg:gap-8 py-8 md:py-12 lg:py-16 xl:max-w-[1440px] xl:mx-auto">
      <div className="w-full">
        <img
          src={logo}
          alt=""
          className="h-16 md:h-20 lg:h-24 mx-auto lg:mx-0"
        />
      </div>
      <div className="lg:flex lg:flex-row lg:justify-between align-top">
        <p className="hidden lg:inline-block lg:max-w-[500px] xl:max-w-[600px] w-[40%]">
          We introduce our selves as LAND Interior and Architectural Design
          Consultancy – one of the best interior designers in Chennai. Chennai
          Luxury Interior and Architectural Design Consultancy has challenged
          the conventional way of interior designing and given new dimensions to
          the art of interior designing.
        </p>
        <ul className="hidden lg:inline-block [&>*]:pb-1">
          <li className=" font-semibold lg:!pb-4 text-[#4F4F4F]">WHAT WE DO</li>
          <li>Interior Design</li>
          <li>Kitchen</li>
          <li>Ceiling</li>
          <li>Bedroom</li>
          <li>Smart Home</li>
        </ul>
        <ul className="mx-auto lg:mx-0 inline text-center lg:text-left [&>*]:pb-1">
          <li className="hidden lg:inline-block m-0 font-semibold lg:!pb-4 text-[#4F4F4F]">
            Get in touch
          </li>
          <li><a href="mailto:landinteriors@gmail.com">landinteriors@gmail.com</a></li>
          <li><a href="tel:+923047916775">+92 304 7916775</a></li>
        </ul>
      </div>
      <div className="flex flex-row justify-center lg:justify-between">
        <div className="flex flex-row gap-6">
          <a href="http://www.facebook.com/talhabytheway" target={"_blank"}><img src={facebook} alt="" /></a>
          <a href="https://www.linkedin.com/in/talhabytheway" target={"_blank"}><img src={linkedIn} alt="" /></a>
          <a href="https://twitter.com/talhaism_" target={"_blank"}><img src={twitter} alt="" /></a>
          <a href="http://www.youtube.com/talhabytheway" target={"_blank"}><img src={youtube} alt="" /></a>
          <a href="http://www.instagram.com/talhabytheway" target={"_blank"}><img src={instagram} alt="" /></a>
        </div>
        <div className="hidden lg:flex flex-row gap-10 hover:[&>*]:cursor-pointer">
        <span>
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
        </span>
        <span>
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
        </span>
        <span>
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
        </span>
        <span>
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
        </span>
        <span>
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
        </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
