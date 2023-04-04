import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";

import Item from "./Item";
import carousel1 from "../../assets/carousel1.png";
import customerPP from "../../assets/customerPP.png";

const Customers = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <>
      <div className="mt-20 flex flex-col gap-10 xl:max-w-[1400px] xl:mx-auto customers">
        <h2 className="text-purpD font-medium text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] text-center">
          Our Happy Costumers
        </h2>
        <div className="text-[14px] md:text-[18px] px-8 mx-auto max-w-[1000px] lg:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla
        </div>
      </div>
      <div className="flex flex-col gap-10 xl:max-w-[1440px] xl:mx-auto customers">
        <Carousel
          className="px-[1rem] md:px-[2rem] lg:p-0"
          disableArrowsOnEnd={true}
          itemsToScroll={1}
          itemPadding={width >= 1280 ? [0,100] : [0,0]}
          itemsToShow={1}
          initialActiveIndex={1}
          outerSpacing={width >= 1280 ? 200 : 0}
        >
          <Item className="relative h-[400px] md:h-[570px] xl:h-[600px]">
            <div className="lg:max-w-[1200px]">
            <img
              src={carousel1}
              alt=""
              className="h-[300px] md:max-h-[70%] min-h-[100%] object-cover lg:h-auto !w-[80vw] xl:w-[900px]"
            />
            <div className=" lg:mb-0 w-full mx-auto lg:w-[650px] xl:w-[800px]">
              <div className="absolute left-0 bottom-14 sm:bottom-0 lg:bottom-[-5%]">
                <div className="w-full mx-auto ">
                  <div className="relative z-100 bg-white w-[95%] lg:w-[80%] mx-auto md:drop-shadow-2xl sm:mb-5 lg:mb-20">
                    <div className="absolute top-[-35%] sm:top-[-30%] lg:top-[-25%] w-full">
                      <div className="mx-auto w-full lg:w-[95%] xl:w-[90%]">
                        <img
                          src={customerPP}
                          alt=""
                          className="h-[100px] mx-auto block object-cover"
                        />
                      </div>
                    </div>
                    <p className="sm:text-[18px] lg:text-[20px] p-4 pt-10 sm:p-12 sm:pb-3 lg:p-16 lg:pb-4 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor
                    </p>
                    <span className="font-semibold sm:text-[18px] lg:text-[22px] pb-3 sm:pb-4 block">
                      -Zain Ul Abideen
                    </span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Item>
          <Item className="relative h-[400px] md:h-[570px] xl:h-[600px]">
            <div className="lg:max-w-[1200px]">
            <img
              src={carousel1}
              alt=""
              className="h-[300px] md:max-h-[70%] min-h-[100%] object-cover lg:h-auto !w-[80vw] xl:w-[900px]"
            />
            <div className=" lg:mb-0 w-full mx-auto lg:w-[650px] xl:w-[800px]">
              <div className="absolute left-0 bottom-14 sm:bottom-0 lg:bottom-[-5%]">
                <div className="w-full mx-auto ">
                  <div className="relative z-100 bg-white w-[95%] lg:w-[80%] mx-auto md:drop-shadow-2xl sm:mb-5 lg:mb-20">
                    <div className="absolute top-[-35%] sm:top-[-30%] lg:top-[-25%] w-full">
                      <div className="mx-auto w-full lg:w-[95%] xl:w-[90%]">
                        <img
                          src={customerPP}
                          alt=""
                          className="h-[100px] mx-auto block object-cover"
                        />
                      </div>
                    </div>
                    <p className="sm:text-[18px] lg:text-[20px] p-4 pt-10 sm:p-12 sm:pb-3 lg:p-16 lg:pb-4 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor
                    </p>
                    <span className="font-semibold sm:text-[18px] lg:text-[22px] pb-3 sm:pb-4 block">
                      -Zain Ul Abideen
                    </span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Item>
          <Item className="relative h-[400px] md:h-[570px] xl:h-[600px]">
            <div className="lg:max-w-[1200px]">
            <img
              src={carousel1}
              alt=""
              className="h-[300px] md:max-h-[70%] min-h-[100%] object-cover lg:h-auto !w-[80vw] xl:w-[900px]"
            />
            <div className=" lg:mb-0 w-full mx-auto lg:w-[650px] xl:w-[800px]">
              <div className="absolute left-0 bottom-14 sm:bottom-0 lg:bottom-[-5%]">
                <div className="w-full mx-auto ">
                  <div className="relative z-100 bg-white w-[95%] lg:w-[80%] mx-auto md:drop-shadow-2xl sm:mb-5 lg:mb-20">
                    <div className="absolute top-[-35%] sm:top-[-30%] lg:top-[-25%] w-full">
                      <div className="mx-auto w-full lg:w-[95%] xl:w-[90%]">
                        <img
                          src={customerPP}
                          alt=""
                          className="h-[100px] mx-auto block object-cover"
                        />
                      </div>
                    </div>
                    <p className="sm:text-[18px] lg:text-[20px] p-4 pt-10 sm:p-12 sm:pb-3 lg:p-16 lg:pb-4 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor
                    </p>
                    <span className="font-semibold sm:text-[18px] lg:text-[22px] pb-3 sm:pb-4 block">
                      -Zain Ul Abideen
                    </span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Item>
          <Item className="relative h-[400px] md:h-[570px] xl:h-[600px]">
            <div className="lg:max-w-[1200px]">
            <img
              src={carousel1}
              alt=""
              className="h-[300px] md:max-h-[70%] min-h-[100%] object-cover lg:h-auto !w-[80vw] xl:w-[900px]"
            />
            <div className=" lg:mb-0 w-full mx-auto lg:w-[650px] xl:w-[800px]">
              <div className="absolute left-0 bottom-14 sm:bottom-0 lg:bottom-[-5%]">
                <div className="w-full mx-auto ">
                  <div className="relative z-100 bg-white w-[95%] lg:w-[80%] mx-auto md:drop-shadow-2xl sm:mb-5 lg:mb-20">
                    <div className="absolute top-[-35%] sm:top-[-30%] lg:top-[-25%] w-full">
                      <div className="mx-auto w-full lg:w-[95%] xl:w-[90%]">
                        <img
                          src={customerPP}
                          alt=""
                          className="h-[100px] mx-auto block object-cover"
                        />
                      </div>
                    </div>
                    <p className="sm:text-[18px] lg:text-[20px] p-4 pt-10 sm:p-12 sm:pb-3 lg:p-16 lg:pb-4 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor
                    </p>
                    <span className="font-semibold sm:text-[18px] lg:text-[22px] pb-3 sm:pb-4 block">
                      -Zain Ul Abideen
                    </span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Item>
         {/* <Item className="pb-[10%] relative h-[350px] sm:h-[400px] md:h-[500px] ">
        <img src={carousel1} alt="" className="w-full object-cover" />
        <div className="absolute bottom-[5%] left-[15%] z-8 ">
          <div className="relative bg-white w-[80%]">
            <img
              src={customerPP}
              alt=""
              className="absolute w-[100px] md:w-[150px] lg:w-[200px] sm:top-[-30%] md:top-[-60%] lg:top-[-80%] right-[27%] top-[-20%] sm:right-[40%] md:right-[37%] lg:right-[40%]"
            />
            <p className="!pt-16 p-1 sm:p-4 md:p-6 text-[14px] md:text-[16px] lg:text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
            <span>-Zain Ul Abideen</span>
          </div>
        </div>
      </Item> */}
        </Carousel>
      </div>
    </>
  );
};

export default Customers;
