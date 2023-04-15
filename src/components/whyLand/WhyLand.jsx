import React from "react";
import home from "../../assets/home.svg";
import certificate from "../../assets/certificate.svg";
import calendar from "../../assets/calander.svg";
import hero from "../../assets/heroImg2.png";
import modularKitchen from "../../assets/modularKitchen.png";
import bedroom from "../../assets/bedroom.png";
import livingRoom from "../../assets/livingRoom.png";
import homeOffice from "../../assets/homeOffice.png";

const WhyLand = () => {
  return (
    <div
      className="ms:max-w-[1440px] xl:max-w-[1600px] vl:max-w-[1920px] ms:mx-auto bgWhyLand">
      <h2 className=" font-medium md:pt-[4rem] max-w-[800px] text-[24px] md:text-[30px] ms:text-[36px] text-center mx-auto my-6 ms:my-10">
        Why LAND Interiors
      </h2>
      <div className="text-[14px] md:text-[18px] py-12 ms:!pb-[84px] xl:pb-12 flex gap-10 flex-col md:flex-row justify-between md:max-w-[800px] ms:max-w-[1024px] xxl:max-w-[1300px] text-center mx-auto">
        <div className="w-[100px] md:w-[150px] mx-auto">
          <img src={calendar} alt="calendar" className="mx-auto" />
          <span className="pt-3 inline-block">50 days or we pay you rent</span>
        </div>
        <div className="w-[100px] md:w-[150px] mx-auto">
          <img src={home} alt="home" className="mx-auto" />
          <span className="pt-3 inline-block">1500+happy customers</span>
        </div>
        <div className="w-[100px] md:w-[150px] mx-auto">
          <img src={certificate} alt="certificate" className="mx-auto" />
          <span className="pt-3 inline-block">300+ design experties</span>
        </div>
      </div>
      <div className="relative xl:my-12 vl:mt-16 ">
        <div className=" text-purpD xl:text-center ms:max-w-[635px] ms:h-[800px] vl:max-w-none bg-white bg-opacity-80 absolute h-full xl:h-auto left-0 xl:top-6 vl:top-[58px] max-w-[60%]">
          <div className="h-full flex flex-col justify-center px-5 ms:px-16 ms:pr-5 xl:px-24 md:py-6 ms:py-10 vl:py-[72px] vl:px-40">
            <h2 className="text-[24px] md:text-[30px] ms:text-[36px] font-medium">
              Make your dream interior in
            </h2>
            <p className="text-[36px] md:text-[40px] ms:text-[48px] pb-2 ms:pb-[12px] vl:pb-[18px] font-medium">
              3 easy steps
            </p>
            <div className="[&>div>h4]:text-purp [&>div>span]:text-black [&>div>h4]:font-semibold [&>div>h4]:ms:pt-[36px] [&>div>h4]:vl:pt-[58px] [&>div>h4]:text-[20px] [&>div>h4]:sm:text-[24px] [&>div>h4]:md:text-[30px] [&>div>h4]:ms:text-[36px] [&>div>span]:text-[12px] [&>div>span]:sm:text-[16px] [&>div>span]:md:text-[18px] [&>div>span]:ms:text-[22px] [&>div>span]:xl:text-[18px] [&>div>span]:pt-2 [&>div>span]:inline-block">
              <div>
                <h4>Explore</h4>
                <span className="max-w-[300px] ms:max-w-[425px] xl:max-w-[348px]">
                  Explore more than just modular design ideas with our experts.
                </span>
              </div>
              <div>
                <h4>Design</h4>
                <span className="max-w-[300px] ms:max-w-[486px] xl:max-w-[397px]">
                  Complete the designs with painting, flooring and other decor
                  solutions
                </span>
              </div>
              <div>
                <h4>Move-in</h4>
                <span className="max-w-[300px] ms:max-w-[537px] xl:max-w-[439px]">
                  Move in with ease, with our hassle-free civil work and
                  installation services.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full h-full justify-end">
          <img
            src={hero}
            alt="hero"
            className="object-none xl:object-cover h-[550px] ms:h-[800px] sm:h-[600px] w-full xl:w-[1280px] vl:w-[1386px] vl:h-[924px]"
          />
        </div>
      </div>
      <h2
        id="About"
        className="pl-16 sm:pl-20 md:pl-24 ms:pl-[148px] xl:pl-0 font-medium md:pt-[4rem] xl:max-w-[800px] text-[24px] md:text-[30px] ms:text-[36px] xl:text-center mx-auto pt-10"
      >
        What we do?
      </h2>
      <div className=" mx-auto mt-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-2 vl:grid-cols-4 gap-10 ms:gap-x-[96px] ms:gap-y-[43px] xl:gap-[75px]  mx-auto ms:max-w-[782px] vl:max-w-[1360px] vl:mx-auto [&>*]:justify-self-center [&>div>span]:text-purp [&>div>span]:block [&>div>span]:pt-[33px] [&>div>span]:text-center [&>div>span]:text-[24px] font-semibold">
          <div>
            <img src={modularKitchen} className="ms:w-[343px] ms:h-[407px] w-[286px] h-[340px] xl:w-[286px] xl:h-[340px]" alt="modularKitchen" />
            <span>Modular Kitchen</span>
          </div>
          <div>
            <img src={bedroom} className="ms:w-[343px] ms:h-[407px] w-[286px] h-[340px] xl:w-[286px] xl:h-[340px]" alt="bedroom" />
            <span>Bedroom</span>
          </div>
          <div>
            <img src={livingRoom} className="ms:w-[343px] ms:h-[407px] w-[286px] h-[340px] xl:w-[286px] xl:h-[340px]" alt="livingRoom" />
            <span>Living Room</span>
          </div>
          <div>
            <img src={homeOffice} className="ms:w-[343px] ms:h-[407px] w-[286px] h-[340px] xl:w-[286px] xl:h-[340px]" alt="homeOffice" />
            <span>Home Office</span>
          </div>
        </div>
      </div>
      <div className="hidden xl:block xl:text-[18px] px-8 xl:px-0 xl:pt-[12px] pb-2 ms:pb-4 vl:pb-8 mx-auto max-w-[1000px] vl:max-w-[1041px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
        fringilla est ullamcorper eget nulla
      </div>
    </div>
  );
};

export default WhyLand;
