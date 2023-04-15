import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";

import Item from "./Items";
import carousel1 from "../../assets/carousel1.png";
import carousel2 from "../../assets/carousel2.png";
import customerPP from "../../assets/customerPP.png";

const Customers = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [spacing, setSpacing] = useState();
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    if(width >= 1920) {
      setSpacing(280) 
    }else if (width >= 1280) {
      setSpacing(250)
    }
    window.addEventListener("resize", handleResize);
  }, [width]);
  return (
    <>
      <div className="mt-20 vl:mt-36 flex flex-col gap-[27px] vl:gap-12 xl:max-w-[1400px] vl:max-w-[1920px] xl:mx-auto customers">
        <h2 className="pl-16 sm:pl-20 md:pl-24 ms:pl-[148px] xl:pl-0 text-purpD font-medium text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] text-left xl:text-center">
          Our Happy Costumers
        </h2>

        <div className="px-16 sm:px-20 md:px-24 ms:px-[148px] xl:px-0 text-[18px] xxl:p-0 mx-auto xl:max-w-[755px] xl:text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim
        </div>
      </div>
      <div className="flex flex-col gap-10 xl:max-w-[1440px] vl:max-w-[1920px] xl:mx-auto customers">
        <Carousel
          className="relative px-[1rem] md:px-[2rem] lg:p-0"
          itemPadding={width >= 1280 ? [0, 0, 100] : [40, 0]}
          itemsToShow={1}
          showArrows={true}
          initialActiveIndex={1}
          outerSpacing={spacing}
          onChange={(pageIndex) => setCurrent(pageIndex.index)}
        >
          <Item
            className={`relative ${
              current === 0 ? "opacity-100" : "opacity-50"
            } h-[400px] md:h-[378px] xl:h-[600px]`}
          >
            <div className="xl:max-w-[1200px] vl:max-w-none">
              <img
                src={carousel2}
                alt=""
                className={`h-[300px] md:h-[378px] vl:max-h-none min-h-[100%] object-cover !w-[80vw] max-w-[798px] xl:w-[920px] vl:max-w-[1228px] ${
                  current === 0 ? "xl:h-[390px] vl:!h-[520px]" : "xl:!h-[320px] vl:!h-[420px]"
                }`}
              />
              <div className=" xl:mb-0 w-full mx-auto lg:w-[650px] xl:w-[800px]">
                <div className="absolute left-0 bottom-16 md:bottom-0 xl:bottom-[-5%] vl:bottom-[-20%] ">
                  <div className="w-full mx-auto ">
                    <div className="relative z-100 bg-white w-[90%] sm:w-[90%] xl:w-[70%] vl:w-[55%] mx-auto xl:drop-shadow-2xl md:mb-7 xl:mb-24">
                      <div className="absolute top-[-32%] sm:top-[-30%] lg:top-[-25%] w-full">
                        <div className="mx-auto w-full lg:w-[95%] xl:w-[90%]">
                          <img
                            src={customerPP}
                            alt=""
                            className="h-[100px] mx-auto block object-cover"
                          />
                        </div>
                      </div>
                      <p className="sm:text-[18px] lg:text-[20px] p-4 pt-10 sm:p-12 sm:pb-3 lg:px-24 lg:pt-16 lg:pb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor
                      </p>
                      <span className="font-semibold sm:text-[18px] lg:text-[22px] pb-3 sm:pb-4 block">
                        -Jeo Stanlee
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Item>
          <Item
            className={`relative ${
              current === 1 ? "opacity-100" : "opacity-50"
            } h-[400px] md:h-[378px] xl:h-[600px]`}
          >
            <div className="xl:max-w-[1200px] vl:max-w-none">
              <img
                src={carousel1}
                alt=""
                className={`h-[300px] md:h-[378px] vl:max-h-none min-h-[100%] object-cover !w-[80vw] max-w-[798px] xl:w-[920px] vl:max-w-[1228px] ${
                  current === 1 ? "xl:h-[390px] vl:!h-[520px]" : "xl:!h-[320px] vl:!h-[420px]"
                }`}
              />
              <div className=" xl:mb-0 w-full mx-auto lg:w-[650px] xl:w-[800px]">
                <div className="absolute left-0 bottom-16 md:bottom-0 xl:bottom-[-5%] vl:bottom-[-20%] ">
                  <div className="w-full mx-auto ">
                    <div className="relative z-100 bg-white w-[90%] sm:w-[90%] xl:w-[70%] vl:w-[55%] mx-auto xl:drop-shadow-2xl md:mb-7 xl:mb-24">
                      <div className="absolute top-[-32%] sm:top-[-30%] lg:top-[-25%] w-full">
                        <div className="mx-auto w-full lg:w-[95%] xl:w-[90%]">
                          <img
                            src={customerPP}
                            alt=""
                            className="h-[100px] mx-auto block object-cover"
                          />
                        </div>
                      </div>
                      <p className="sm:text-[18px] lg:text-[20px] p-4 pt-10 sm:p-12 sm:pb-3 lg:px-24 lg:pt-16 lg:pb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor
                      </p>
                      <span className="font-semibold sm:text-[18px] lg:text-[22px] pb-3 sm:pb-4 block">
                        -Jeo Stanlee
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Item>
          <Item
            className={`relative ${
              current === 2 ? "opacity-100" : "opacity-50"
            } h-[400px] md:h-[378px] xl:h-[600px]`}
          >
            <div className="xl:max-w-[1200px] vl:max-w-none">
              <img
                src={carousel2}
                alt=""
                className={`h-[300px] md:h-[378px] vl:max-h-none min-h-[100%] object-cover !w-[80vw] max-w-[798px] xl:w-[920px] vl:max-w-[1228px] ${
                  current === 2 ? "xl:h-[390px] vl:!h-[520px]" : "xl:!h-[320px] vl:!h-[420px]"
                }`}
              />
              <div className=" xl:mb-0 w-full mx-auto lg:w-[650px] xl:w-[800px]">
                <div className="absolute left-0 bottom-16 md:bottom-0 xl:bottom-[-5%] vl:bottom-[-20%] ">
                  <div className="w-full mx-auto ">
                    <div className="relative z-100 bg-white w-[90%] sm:w-[90%] xl:w-[70%] vl:w-[55%] mx-auto xl:drop-shadow-2xl md:mb-7 xl:mb-24">
                      <div className="absolute top-[-32%] sm:top-[-30%] lg:top-[-25%] w-full">
                        <div className="mx-auto w-full lg:w-[95%] xl:w-[90%]">
                          <img
                            src={customerPP}
                            alt=""
                            className="h-[100px] mx-auto block object-cover"
                          />
                        </div>
                      </div>
                      <p className="sm:text-[18px] lg:text-[20px] p-4 pt-10 sm:p-12 sm:pb-3 lg:px-24 lg:pt-16 lg:pb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor
                      </p>
                      <span className="font-semibold sm:text-[18px] lg:text-[22px] pb-3 sm:pb-4 block">
                        -Jeo Stanlee
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Item>
          <Item
            className={`relative ${
              current === 3 ? "opacity-100" : "opacity-50"
            } h-[400px] md:h-[378px] xl:h-[600px]`}
          >
            <div className="xl:max-w-[1200px] vl:max-w-none">
              <img
                src={carousel1}
                alt=""
                className={`h-[300px] md:h-[378px] vl:max-h-none min-h-[100%] object-cover !w-[80vw] max-w-[798px] xl:w-[920px] vl:max-w-[1228px] ${
                  current === 3 ? "xl:h-[390px] vl:!h-[520px]" : "xl:!h-[320px] vl:!h-[420px]"
                }`}
              />
              <div className=" xl:mb-0 w-full mx-auto lg:w-[650px] xl:w-[800px]">
                <div className="absolute left-0 bottom-16 md:bottom-0 xl:bottom-[-5%] vl:bottom-[-20%] ">
                  <div className="w-full mx-auto ">
                    <div className="relative z-100 bg-white w-[90%] sm:w-[90%] xl:w-[70%] vl:w-[55%] mx-auto xl:drop-shadow-2xl md:mb-7 xl:mb-24">
                      <div className="absolute top-[-32%] sm:top-[-30%] lg:top-[-25%] w-full">
                        <div className="mx-auto w-full lg:w-[95%] xl:w-[90%]">
                          <img
                            src={customerPP}
                            alt=""
                            className="h-[100px] mx-auto block object-cover"
                          />
                        </div>
                      </div>
                      <p className="sm:text-[18px] lg:text-[20px] p-4 pt-10 sm:p-12 sm:pb-3 lg:px-24 lg:pt-16 lg:pb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor
                      </p>
                      <span className="font-semibold sm:text-[18px] lg:text-[22px] pb-3 sm:pb-4 block">
                        -Jeo Stanlee
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Item>
 
        </Carousel>
      </div>
    </>
  );
};

export default Customers;
