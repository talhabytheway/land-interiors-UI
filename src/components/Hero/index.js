import React from "react";
import heroImg from "../../assets/heroImg.png";

const Hero = () => {
  return (
    <div className="max-w-[1440px] mx-auto relative min-h-[500px]">
      <img src={heroImg} alt="" className="w-full max-w-[786px]" />
      <div className="mx-auto w-full md:w-auto absolute top-[30%] sm:top-[50%] md:right-0 md:top-[70px] lg:top-[50px]">
      <div className="bg-white bg-opacity-80 max-w-[375] sm:max-w-auto mx-1.5 sm:mx-2 md:mx-0 sm:px-[2rem] py-[1rem] md:py-[2rem] md:px-[4rem] lg:py-[4rem] lg:px-[6rem]  text-center">
        <h2 className="text-[20px] md:text-[28px] ">Get personalised home interiors</h2>
        <p className="text-[36px] md:text-[42px]  font-semibold text-purpD">in just 50 days</p>
        <span className="text-[16px] md:text-[24px]  font-semibold py-[15px] md:py-[20px] lg:py-[25px] px-[20px] md:px-[30px] lg:px-[50px] bg-purp text-white inline-block mt-5">SPEAK WITH A ONLINE CONSULTANT</span>
      </div>
      </div>
    </div>
  );
};

export default Hero;
