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
    <div className="bg-[#F8F8F8]">
      <div className="flex flex-col gap-6 ms:gap-8 vl:gap-[50px] py-8 md:py-12 ms:py-16 vl:max-w-[1920px] xl:mx-auto sm:text-[18px] md:text-[24px] xl:text-[18px] ">
      <div className="xl:flex xl:flex-row xl:!justify-between align-top px-16 md:px-24 ms:px-36 vl:px-52">
        <div className="ms:max-w-[500px] xl:max-w-[635px] vl:max-w-[419px] w-[45%] mx-auto xl:!mx-0 ">
        <img
          src={logo}
          alt="logo"
          className="h-16 md:h-20 ms:h-[111px] xl:h-24 mx-auto xl:ml-0 mb-6"
          />
        <p className="hidden xl:inline-block leading-[195.5%] text-[#3D3D3D]">
          We introduce our selves as LAND Interior and Architectural Design
          Consultancy – one of the best interior designers in Chennai. Chennai
          Luxury Interior and Architectural Design Consultancy has challenged
          the conventional way of interior designing and given new dimensions to
          the art of interior designing.
        </p>
          </div>
        <ul className="hidden xl:inline-block [&>*]:pb-2 [&>*]:vl:pb-[10px] xl:pt-[5%] vl:pt-[60px] text-[#4f4f4f]">
          <li className="text-[16px] font-semibold xl:!pb-4 vl:!pb-[33px]">WHAT WE DO</li>
          <li>Interior Design</li>
          <li>Kitchen</li>
          <li>Ceiling</li>
          <li>Bedroom</li>
          <li>Smart Home</li>
        </ul>
        <ul className="mx-auto xl:mx-0 inline text-center xl:text-left [&>*]:pb-2 xl:pt-[5%] vl:pt-[60px] [&>*]:vl:pb-[10px] vl:pr-[236px] text-[#4f4f4f]">
          <li className="text-[16px] hidden xl:inline-block m-0 font-semibold xl:!pb-4 vl:!pb-[33px]">
            Get in touch
          </li>
          <li><a href="mailto:landinteriors@gmail.com">landinteriors@gmail.com</a></li>
          <li><a href="tel:+923047916775">+92 304 7916775</a></li>
        </ul>
      </div>
      <div className="flex flex-row flex-wrap justify-center xl:justify-between px-16 md:px-24 xl:px-36 vl:pl-52 vl:pr-9">
        <div className="flex flex-row gap-3 [&>a]:vl:p-[9px] [&>a]:p-[9px] [&>a]:md:p-[15px] [&>a]:bg-[#E5E5E5] [&>a>img]:vl:h-[29px] [&>a>img]:md:h-[48px] [&>a]:rounded-md">
          <a href="http://www.facebook.com/talhabytheway" target={"_blank"} rel="noreferrer"><img src={facebook} alt="facebook" /></a>
          <a href="https://www.linkedin.com/in/talhabytheway" target={"_blank"} rel="noreferrer"><img src={linkedIn} alt="linkedIn" /></a>
          <a href="https://twitter.com/talhaism_" target={"_blank"} rel="noreferrer"><img src={twitter} alt="twitter" /></a>
          <a href="http://www.youtube.com/talhabytheway" target={"_blank"} rel="noreferrer"><img src={youtube} alt="youtube" /></a>
          <a href="http://www.instagram.com/talhabytheway" target={"_blank"} rel="noreferrer"><img src={instagram} alt="instagram" /></a>
        </div>
        <div className="hidden xl:flex flex-row items-center gap-10 vl:gap-[84px] hover:[&>*]:cursor-pointer pr-[-40px] vl:mt-[-6rem]">
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
    </div>
  );
};

export default Footer;
