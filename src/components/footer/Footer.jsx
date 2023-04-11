import React from "react";
import logo from "../../assets/footerLogo.png";
import facebook from "../../assets/facebook.svg";
import linkedIn from "../../assets/linkedIn.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";
import { Link } from "react-scroll";


const Footer = () => {
  return (
    <div className="flex flex-col gap-6 ms:gap-8 py-8 md:py-12 ms:py-16 xl:max-w-[1440px] vl:max-w-[1920px] xl:mx-auto text-[18px] bg-[#F8F8F8]">
      <div className="ms:flex ms:flex-row ms:!justify-between align-top px-16 md:px-24 ms:px-36 vl:px-52">
        <div className="ms:max-w-[500px] xl:max-w-[635px] w-[45%] mx-auto ms:!mx-0 ">
        <img
          src={logo}
          alt="logo"
          className="h-16 md:h-20 ms:h-24 mx-auto ms:ml-0 mb-6"
          />
        <p className="hidden ms:inline-block leading-[195.5%] text-[#3D3D3D]">
          We introduce our selves as LAND Interior and Architectural Design
          Consultancy – one of the best interior designers in Chennai. Chennai
          Luxury Interior and Architectural Design Consultancy has challenged
          the conventional way of interior designing and given new dimensions to
          the art of interior designing.
        </p>
          </div>
        <ul className="hidden ms:inline-block [&>*]:pb-2 [&>*]:vl:pb-[10px] ms:pt-[5%] text-[#4f4f4f]">
          <li className=" font-semibold ms:!pb-4 vl:!pb-6">WHAT WE DO</li>
          <li>Interior Design</li>
          <li>Kitchen</li>
          <li>Ceiling</li>
          <li>Bedroom</li>
          <li>Smart Home</li>
        </ul>
        <ul className="mx-auto ms:mx-0 inline text-center ms:text-left [&>*]:pb-2 ms:pt-[5%] [&>*]:vl:pb-[10px] text-[#4f4f4f]">
          <li className="hidden ms:inline-block m-0 font-semibold ms:!pb-4 vl:!pb-6">
            Get in touch
          </li>
          <li><a href="mailto:landinteriors@gmail.com">landinteriors@gmail.com</a></li>
          <li><a href="tel:+923047916775">+92 304 7916775</a></li>
        </ul>
      </div>
      <div className="flex flex-row flex-wrap justify-center ms:justify-between px-16 md:px-24 ms:px-36 vl:pl-52 vl:pr-9">
        <div className="flex flex-row gap-3 [&>a]:p-[8px] [&>a]:bg-[#E5E5E5] [&>a]:rounded-md">
          <a href="http://www.facebook.com/talhabytheway" target={"_blank"} rel="noreferrer"><img src={facebook} alt="facebook" /></a>
          <a href="https://www.linkedin.com/in/talhabytheway" target={"_blank"} rel="noreferrer"><img src={linkedIn} alt="linkedIn" /></a>
          <a href="https://twitter.com/talhaism_" target={"_blank"} rel="noreferrer"><img src={twitter} alt="twitter" /></a>
          <a href="http://www.youtube.com/talhabytheway" target={"_blank"} rel="noreferrer"><img src={youtube} alt="youtube" /></a>
          <a href="http://www.instagram.com/talhabytheway" target={"_blank"} rel="noreferrer"><img src={instagram} alt="instagram" /></a>
        </div>
        <div className="hidden ms:flex flex-row items-center gap-10 hover:[&>*]:cursor-pointer pr-[-40px]">
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
            Studio
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
