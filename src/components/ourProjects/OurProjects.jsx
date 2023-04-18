import React, { useState, useEffect } from "react";
import projects1 from "../../assets/projects1.png";
import projects2 from "../../assets/projects2.png";
import projects3 from "../../assets/projects3.png";
import projects4 from "../../assets/projects4.png";
import modernInterior from "../../assets/modernInterior.png";
import exteriorProject from "../../assets/exteriorProject.png";
import greyBeauty from "../../assets/greyBeauty.png";
import plantainInterior from "../../assets/plantainInterior.png";
import roleOfFurniture from "../../assets/roleOfFurniture.png";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 768, itemsToShow: 2.3 },
  { width: 1100, itemsToShow: 3 },
  { width: 1280, itemsToShow: 4 },
  { width: 1600, itemsToShow: 4.7 },
];

const OurProjects = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [spacing, setSpacing] = useState(0)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize);
    if(window.innerWidth >= 1920) {
      setSpacing(60) 
    } else if (window.innerWidth >= 1280) {
      setSpacing(40) 
    } else if (window.innerWidth >= 1080) {
      setSpacing(110)
    }  else if (window.innerWidth >= 768) {
      setSpacing(10)
    } else {
      setSpacing(0)
    }
  }, [width]);
  return (
    <div
      id="Projects"
      className="sm:max-w-[1440px] xl:max-w-none vl:max-w-[1920px] mx-auto relative min-h-[400px] sm:min-h-[500px] py-20"
    >
      <h2 className=" xl:hidden px-6 sm:px-10 md:px-16 ms:px-[148px] text-purpD font-medium text-[36px] text-left pb-[26px] ">
        Our Projects
      </h2>
      <div className="px-4 sm:px-8 ms:px-0 mx-auto grid sm:grid-cols-1 md:grid-cols-2 md:w-full max-w-[784px] ms:w-[784px] xl:max-w-[784px] xl:mr-0 xl:mx-10 vl:ml-24 vl:mr-0 [&>div>img]:mx-auto [&>div>img]:lg:mx-0 [&>div>img]:object-cover">
        <div className="ms:pl-0 ms:pr-[12px]">
          <img
            src={projects1}
            alt="projects1"
            className="py-2 ms:py-0 [380px] h-auto md:h-[380px] xl:h-[380px] ms:mb-[12px]"
          />
          <img
            src={projects2}
            alt="projects2"
            className="py-2 ms:py-0 [380px] h-auto md:h-[190px] ms:mt-[12px]"
          />
        </div>
        <div className="ms:pl-[12px] ms:pr-0">
          <img
            src={projects3}
            alt="projects3"
            className="py-2 ms:py-0 [380px] h-auto md:h-[190px] xl:h-[190px] ms:mb-[12px]"
          />
          <img
            src={projects4}
            alt="projects4"
            className="py-2 ms:py-0 w-[380px] h-auto md:h-[380px] ms:mt-[12px]"
          />
        </div>
      </div>
      <div className="mx-auto w-full md:w-auto xl:absolute right-0 xl:right-[1%] xxl:right-[3%] xl:top-[150px] vl:top-[106px] vl:right-[106px]">
        <div className="bg-white bg-opacity-80 xl:max-w-[800px] xxl:max-w-[1000px] vl:max-w-none sm:max-w-auto py-[1rem] xl:px-[69px] md:py-[60px] text-center">
          <h2 className="hidden xl:block text-purpD font-medium text-[36px] text-left xl:text-center pb-3 vl:p-0 vl:pb-[45px]">
            Our Projects
          </h2>
          <p className="text-[18px] md:text-[24px] text-left xl:text-center xl:text-[18px] pb-3 px-6 sm:px-10 md:px-16 ms:px-[148px] xl:px-0 ms:pb-6 xl:pb-3 vl:p-0 vl:w-[860px] vl:pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla
          </p>
          <p className="text-[18px] md:text-[24px] text-left xl:text-center xl:text-[18px] pb-6 px-6 sm:px-10 md:px-16 ms:px-[148px] xl:px-0 ms:pb-14 xl:pb-3 vl:p-0 vl:w-[860px] vl:pb-14">
            magna fringilla urna, porttitor rhoncus dolor purus non enim
            praesent elementum facilisis leo, vel fringilla est ullamcorper eget
            nulla
          </p>
          <button className="text-[16px] sm:text-[24px] font-semibold py-[20px] px-[80px] bg-purp text-white block mx-auto mt-6 md:mt-0">
            View all
          </button>
        </div>
      </div>
      <div id="Blog" className="blogs md:pt-[4rem]">
        <h2 className="text-purpD font-medium max-w-[800px] text-[24px] md:text-[30px] lg:text-[36px] pl-6 sm:pl-12 md:pl-16 ms:pl-[148px] xl:pl-24 sm:py-4 lg:py-6 vl:py-10 !pb-[58px]">
          Blogs
        </h2>
        <Carousel
          breakPoints={breakPoints}
          disableArrowsOnEnd={true}
          itemPadding={width <= 768 ? [0, 20] : [0, 0]}
          outerSpacing={spacing}
          className="relative px-2 sm:px-6 md:px-8 ms:px-0"
        >
          <Item>
            <img src={modernInterior} className="!w-[330px] h-[333px]" alt="modernInterior" />
            <h5 className="w-full font-medium text-[16px] md:text-[20px] lg:text-[24px] my-2 sm:my-4">
              Modern Interior
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={exteriorProject} className="!w-[330px] h-[333px]" alt="exteriorProject" />
            <h5 className="w-full font-medium text-[16px] md:text-[20px] lg:text-[24px] my-2 sm:my-4">
              Exterior Project
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={greyBeauty} className="!w-[330px] h-[333px]" alt="greyBeauty" />
            <h5 className="w-full font-medium text-[16px] md:text-[20px] lg:text-[24px] my-2 sm:my-4">
              Grey Beauty
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={plantainInterior} className="!w-[330px] h-[333px]" alt="plantainInterior" />
            <h5 className="w-full font-medium text-[16px] md:text-[20px] lg:text-[24px] my-2 sm:my-4">
              Plantation interior
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={roleOfFurniture} className="!w-[330px] h-[333px]" alt="roleOfFurniture" />
            <h5 className="w-full font-medium text-[16px] md:text-[20px] lg:text-[24px] my-2 sm:my-4">
              Role of furnitures
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={modernInterior} className="!w-[330px] h-[333px]" alt="modernInterior" />
            <h5 className="w-full font-medium text-[16px] md:text-[20px] lg:text-[24px] my-2 sm:my-4">
              Modern Interior
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={exteriorProject} className="!w-[330px] h-[333px]" alt="exteriorProject" />
            <h5 className="w-full font-medium text-[16px] md:text-[20px] lg:text-[24px] my-2 sm:my-4">
              Exterior Project
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={greyBeauty} className="!w-[330px] h-[333px]" alt="greyBeauty" />
            <h5 className="w-full font-medium text-[16px] md:text-[20px] lg:text-[24px] my-2 sm:my-4">
              Grey Beauty
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={plantainInterior} className="!w-[330px] h-[333px]" alt="plantainInterior" />
            <h5 className="w-full font-medium text-[16px] md:text-[20px] lg:text-[24px] my-2 sm:my-4">
              Plantation interior
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={roleOfFurniture} className="!w-[330px] h-[333px]" alt="roleOfFurniture" />
            <h5 className="w-full font-medium text-[16px] md:text-[20px] lg:text-[24px] my-2 sm:my-4">
              Role of furnitures
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
        </Carousel>
        <button className="hidden xl:block text-[16px] lg:text-[24px] font-semibold py-[20px] px-[80px] bg-purp text-white mt-5 lg:mt-8 xl:mt-16 mx-auto">
          View all
        </button>
      </div>
    </div>
  );
};

export default OurProjects;
