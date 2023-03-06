import React from "react";
import home from "../../assets/home.svg";
import certificate from "../../assets/certificate.svg";
import calendar from "../../assets/calander.svg";
import rectangle from "../../assets/rectangleWhyLand.svg";
import img from "../../assets/heroImg2.png";
import modularKitchen from "../../assets/modularKitchen.png";
import bedroom from "../../assets/bedroom.png";
import livingRoom from "../../assets/livingRoom.png";
import homeOffice from "../../assets/homeOffice.png";

const WhyLand = () => {
  return (
    <div
      className="lg:max-w-[1440px] xl:max-w-[1600px] lg:mx-auto bg-cover"
      style={{ backgroundImage: `url(${rectangle})` }}
    >
      <h2 className=" font-medium md:pt-[4rem] max-w-[800px] text-[24px] md:text-[30px] lg:text-[36px] text-center mx-auto">
        Why LAND Interiors
      </h2>
      <div className="text-[14px] md:text-[18px] py-12 flex gap-10 flex-col md:flex-row justify-between md:max-w-[800px] lg:max-w-[1024px] text-center mx-auto">
        <div className="w-[100px] md:w-[150px] mx-auto">
          <img src={home} alt="home" className="mx-auto" />
          <span className="pt-3 inline-block">1500+happy customers</span>
        </div>
        <div className="w-[100px] md:w-[150px] mx-auto">
          <img src={certificate} alt="" className="mx-auto" />
          <span className="pt-3 inline-block">300+ design experties</span>
        </div>
        <div className="w-[100px] md:w-[150px] mx-auto">
          <img src={calendar} alt="" className="mx-auto" />
          <span className="pt-3 inline-block">50 days or we pay you rent</span>
        </div>
      </div>
      <div className="relative">
        <div className=" text-purpD text-center lg:max-w-[600px] bg-white bg-opacity-80 absolute h-full md:h-auto left-0 lg:left-10 xl:left-[20%] md:top-5 mix-w-[40%] max-w-[50%] py-4">
          <div className="h-full flex flex-col justify-center px-5">
            <h2 className="text-[24px] md:text-[30px] lg:[36px]">
              Make your dream interior in
            </h2>
            <p className="text-[36px] md:text-[42px] font-semibold">
              3 easy steps
            </p>
            <div className="[&>div>h4]:text-purp [&>div>h4]:text-[20px] [&>div>h4]:sm:text-[24px] [&>div>h4]:md:text-[30px] [&>div>h4]:lg:text-[36px] [&>div>span]:text-[12px] [&>div>span]:sm:text-[14px] [&>div>span]:md:text-[16px] [&>div>span]:lg:text-[18px] [&>div>span]:inline-block [&>div>span]:max-w-[300px] [&>div>span]:lg:max-w-[400px]">
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
            src={img}
            alt=""
            className="object-cover h-[550px] sm:h-[500px] md:min-w-[786px] lg:min-w-[900px]"
          />
        </div>
      </div>
      <h2 id="About" className=" font-medium md:pt-[4rem] max-w-[800px] text-[24px] md:text-[30px] lg:text-[36px] text-center mx-auto pt-10">
        What we do?
      </h2>
      <div className="p-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 [&>*]:justify-self-center [&>div>span]:text-purp [&>div>span]:block [&>div>span]:p-4 [&>div>span]:text-center [&>div>span]:text-[24px] font-semibold">
          <div>
            <img src={modularKitchen} alt="" />
            <span>Modular Kitchen</span>
          </div>
          <div>
            <img src={bedroom} alt="" />
            <span>Bedroom</span>
          </div>
          <div>
            <img src={livingRoom} alt="" />
            <span>Living Room</span>
          </div>
          <div>
            <img src={homeOffice} alt="" />
            <span>Home Office</span>
          </div>
        </div>
      </div>
      <div className="text-[14px] md:text-[18px] px-8 mx-auto max-w-[1000px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
        fringilla est ullamcorper eget nulla
      </div>
    </div>
  );
};

export default WhyLand;
