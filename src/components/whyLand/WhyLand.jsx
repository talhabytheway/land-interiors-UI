import React from "react";
import home from "../../assets/home.svg";
import certificate from "../../assets/certificate.svg";
import calendar from "../../assets/calander.svg";
import rectangle from "../../assets/rectangleWhyLand.svg";
import hero from "../../assets/heroImg2.png";
import modularKitchen from "../../assets/modularKitchen.png";
import bedroom from "../../assets/bedroom.png";
import livingRoom from "../../assets/livingRoom.png";
import homeOffice from "../../assets/homeOffice.png";

const WhyLand = () => {
  return (
    <div
      className="lg:max-w-[1440px] xl:max-w-[1600px] vl:max-w-[1920px] lg:mx-auto bg-cover"
      style={{ backgroundImage: `url(${rectangle})` }}
    >
      <h2 className=" font-medium md:pt-[4rem] max-w-[800px] text-[24px] md:text-[30px] lg:text-[36px] text-center mx-auto my-6 lg:my-10">
        Why LAND Interiors
      </h2>
      <div className="text-[14px] md:text-[18px] py-12 flex gap-10 flex-col md:flex-row justify-between md:max-w-[800px] lg:max-w-[1024px] xxl:max-w-[1300px] text-center mx-auto">
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
        <div className=" text-purpD text-center lg:max-w-[600px] vl:max-w-none bg-white bg-opacity-80 absolute h-full md:h-auto left-0 xl:left-[0%] md:top-[-1%] lg:top-8 xl:top-4 vl:top-[72px] max-w-[50%]">
          <div className="h-full flex flex-col justify-center px-5 lg:px-16 xl:px-24 md:py-6 lg:py-10 vl:py-[72px] vl:px-40">
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] font-medium">
              Make your dream interior in
            </h2>
            <p className="text-[36px] md:text-[40px] xxl:text-[48px] pb-2 vl:pb-[18px] font-medium">
              3 easy steps
            </p>
            <div className="[&>div>h4]:text-purp [&>div>h4]:font-semibold [&>div>h4]:vl:pt-[58px] [&>div>h4]:text-[20px] [&>div>h4]:sm:text-[24px] [&>div>h4]:md:text-[30px] [&>div>h4]:lg:text-[36px] [&>div>span]:text-[12px] [&>div>span]:sm:text-[14px] [&>div>span]:md:text-[16px] [&>div>span]:lg:text-[18px] [&>div>span]:inline-block [&>div>span]:max-w-[300px] [&>div>span]:lg:max-w-[400px]">
              <div>
                <h4>Explore</h4>
                <span>
                  Explore more than just modular design ideas with our experts.
                </span>
              </div>
              <div>
                <h4>Design</h4>
                <span>
                  Complete the designs with painting, flooring and other decor
                  solutions
                </span>
              </div>
              <div>
                <h4>Move-in</h4>
                <span>
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
            className="object-cover h-[550px] lg:h-[600px] sm:h-[500px] md:min-w-[786px] lg:min-w-[1000px] xl:min-w-[1100px] vl:w-[1386px] vl:h-[924px]"
          />
        </div>
      </div>
      <h2
        id="About"
        className=" font-medium md:pt-[4rem] max-w-[800px] text-[24px] md:text-[30px] lg:text-[36px] text-center mx-auto pt-10"
      >
        What we do?
      </h2>
      <div className="p-10 mx-auto mt-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 vl:max-w-[1360px] vl:mx-auto [&>*]:justify-self-center [&>div>span]:text-purp [&>div>span]:block [&>div>span]:p-4 [&>div>span]:text-center [&>div>span]:text-[24px] font-semibold">
          <div>
            <img src={modularKitchen} alt="modularKitchen" />
            <span>Modular Kitchen</span>
          </div>
          <div>
            <img src={bedroom} alt="bedroom" />
            <span>Bedroom</span>
          </div>
          <div>
            <img src={livingRoom} alt="livingRoom" />
            <span>Living Room</span>
          </div>
          <div>
            <img src={homeOffice} alt="homeOffice" />
            <span>Home Office</span>
          </div>
        </div>
      </div>
      <div className="text-[14px] md:text-[18px] px-8 xl:px-0 pb-2 lg:pb-4 vl:pb-8  mx-auto max-w-[1000px] vl:max-w-[1041px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
        fringilla est ullamcorper eget nulla
      </div>
    </div>
  );
};

export default WhyLand;
