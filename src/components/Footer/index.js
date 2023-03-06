import React from "react";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.svg";
import linkedIn from "../../assets/linkedIn.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";

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
          <li>landinteriors@gmail.com</li>
          <li>+91 98987 65656</li>
        </ul>
      </div>
      <div className="flex flex-row justify-center lg:justify-between">
        <div className="flex flex-row gap-6">
          <img src={facebook} alt="" />
          <img src={linkedIn} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />
          <img src={instagram} alt="" />
        </div>
        <div className="hidden lg:flex flex-row gap-10">
          <span>About</span>
          <span>Projects</span>
          <span>Studio</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
