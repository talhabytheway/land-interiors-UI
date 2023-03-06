import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import carousel1 from "../../assets/carousel1.png";
import customerPP from "../../assets/customerPP.png";

const Customers = () => {
  return (
    <div className="my-20 flex flex-col gap-10 xl:max-w-[1400px] xl:mx-auto">
      <h2 className="text-purpD font-medium text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] text-center">
        Our Happy Costumers
      </h2>
      <div className="text-[14px] md:text-[18px] px-8 mx-auto max-w-[1000px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
        fringilla est ullamcorper eget nulla
      </div>
      <Carousel
        disableArrowsOnEnd={true}
        className="relative px-[1rem] md:px-[2rem]"
      >
        <Item className="pb-[10%] relative h-[350px] sm:h-[400px] md:h-[500px] ">
          <img src={carousel1} alt="" className="w-full object-cover" />
          <div className="absolute bottom-[5%] left-[15%] z-8 ">
            <div className="relative bg-white w-[80%]">
              <img
                src={customerPP}
                alt=""
                className="absolute w-[100px] md:w-[150px] lg:w-[200px] top-[-30%] md:top-[-60%] lg:top-[-80%] right-[40%] md:right-[37%] lg:right-[40%]"
              />
              <p className="!pt-16 p-1 sm:p-4 md:p-6 text-[14px] md:text-[16px] lg:text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
              <span>-Jeo Stanlee</span>
            </div>
          </div>
        </Item>
        <Item className="pb-[10%] relative h-[350px] sm:h-[400px] md:h-[500px] ">
          <img src={carousel1} alt="" className="w-full object-cover" />
          <div className="absolute bottom-[5%] left-[15%] z-8 ">
            <div className="relative bg-white w-[80%]">
              <img
                src={customerPP}
                alt=""
                className="absolute w-[100px] md:w-[150px] lg:w-[200px] top-[-30%] md:top-[-60%] lg:top-[-80%] right-[40%] md:right-[37%] lg:right-[40%]"
              />
              <p className="!pt-16 p-1 sm:p-4 md:p-6 text-[14px] md:text-[16px] lg:text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
              <span>-Zain Ul Abideen</span>
            </div>
          </div>
        </Item>
        <Item className="pb-[10%] relative h-[350px] sm:h-[400px] md:h-[500px] ">
          <img src={carousel1} alt="" className="w-full object-cover" />
          <div className="absolute bottom-[5%] left-[15%] z-8 ">
            <div className="relative bg-white w-[80%]">
              <img
                src={customerPP}
                alt=""
                className="absolute w-[100px] md:w-[150px] lg:w-[200px] top-[-30%] md:top-[-60%] lg:top-[-80%] right-[40%] md:right-[37%] lg:right-[40%]"
              />
              <p className="!pt-16 p-1 sm:p-4 md:p-6 text-[14px] md:text-[16px] lg:text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
              <span>-Muhammad Talha</span>
            </div>
          </div>
        </Item>
      </Carousel>
    </div>
  );
};

export default Customers;
