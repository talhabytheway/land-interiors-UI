import React from "react";
import heroImg from "../../assets/heroImg.png";

const Hero = () => {
  return (
    <div className="xl:!max-w-[1600px] xxl:!max-w-[1920px] vl:w-[1920px] mx-auto relative min-h-[450px] xs:min-h-[400px] sm:min-h-[500px] xl:mt-[3rem]">
      <img
        src={heroImg}
        alt="heroImg"
        className="w-full md:max-w-[1280px] xl:max-w-[850px] xxl:max-w-none sm:max-w-none xl:w-[900px] vl:w-[1090px] lg:h-[757px] xl:h-[500px] vl:h-[613px] object-cover"
      />
      <div className="mx-auto w-full xl:w-auto absolute top-[40%] sm:top-[45%] right-0 vl:right-0 md:top-[50%] lg:top-[53.5%] xl:top-[50px] vl:top-[20%]">
        <div className="bg-white bg-opacity-80 max-w-[375] sm:max-w-auto mx-2 sm:mx-4 md:mx-12 xl:mx-0 py-[1rem] md:py-[2rem] lg:py-10 md:px-[6rem] xl:py-[4rem] xl:pr-[6rem] xl:pl-[8rem] xxl:px-[174px] xxl:[py-69px] text-center">
          <h2 className="text-[20px] sm:text-[28px] lg:text-[36px] pt-5">
            Get personalised home interiors
          </h2>
          <p className="text-[36px] sm:text-[42px] font-semibold text-purpD">
            in just 50 days
          </p>
          <span className="text-[16px] sm:text-[24px] lg:text-[30px] font-semibold py-[15px] sm:py-[20px] lg:py-[25px] px-[20px] sm:px-[30px] lg:px-[50px] bg-purp text-white inline-block mt-10 lg:mt-20 xl:mt-[44px]">
            SPEAK WITH A ONLINE CONSULTANT
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
