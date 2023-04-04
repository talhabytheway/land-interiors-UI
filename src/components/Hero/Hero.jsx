import React from "react";
import heroImg from "../../assets/heroImg.png";

const Hero = () => {
  return (
    <div className="lg:max-w-[1440px] xl:max-w-[1600px] mx-auto relative min-h-[450px] xs:min-h-[400px] sm:min-h-[500px] lg:mt-[3rem] xl:mt-[3rem]">
      <img src={heroImg} alt="" className="w-full md:max-w-[786px] lg:max-w-[850px] xl:w-[900px] lg:h-[500px] object-cover" />
      <div className="mx-auto w-full md:w-auto absolute top-[40%] sm:top-[45%] right-0 lg:right-[1%] md:top-[70px] lg:top-[50px]">
      <div className="bg-white bg-opacity-80 max-w-[375] sm:max-w-auto mx-2 sm:mx-4 md:mx-0 py-[1rem] md:py-[2rem] md:px-[6rem] lg:py-[4rem] lg:pr-[6rem] lg:pl-[8rem]  text-center">
        <h2 className="text-[20px] md:text-[28px] lg:text-[36px]">Get personalised home interiors</h2>
        <p className="text-[36px] md:text-[42px] font-semibold text-purpD">in just 50 days</p>
        <span className="text-[16px] md:text-[24px] font-semibold py-[15px] md:py-[20px] lg:py-[25px] px-[20px] md:px-[30px] lg:px-[50px] bg-purp text-white inline-block mt-10 lg:mt-[44px]">SPEAK WITH A ONLINE CONSULTANT</span>
      </div>
      </div>
    </div>
  );
};

export default Hero;
