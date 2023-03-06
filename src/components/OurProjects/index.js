import React from "react";
import projects1 from "../../assets/projects1.png";
import projects2 from "../../assets/projects2.png";
import projects3 from "../../assets/projects3.png";
import projects4 from "../../assets/projects4.png";
import modernInterior from "../../assets/modernInterior.png";
import exteriorProject from "../../assets/exteriorProject.png";
import greyBeauty from "../../assets/greyBeauty.png";
import plantainInterior from "../../assets/plantainInterior.png";
import roleOfFurniture from "../../assets/roleOfFurniture.png";
import rectangle from "../../assets/rectangleProj.svg";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 300, itemsToShow: 2 },
  { width: 500, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  // { width: 1040, itemsToShow: 4 },
];

const OurProjects = () => {
  return (
    <div id="Projects"
      className="lg:max-w-[1440px] xl:max-w-[1600px] mx-auto relative min-h-[400px] sm:min-h-[500px] py-20 bg-cover"
      style={{ backgroundImage: `url(${rectangle})` }}
    >
      <div className="grid sm:grid-cols-2 md:w-full lg:max-w-[780px] px-10 [&>div>img]:p-[2.5%] [&>div>img]:mx-auto">
        <div>
          <img src={projects1} alt="" />
          <img src={projects2} alt="" />
        </div>
        <div>
          <img src={projects3} alt="" />
          <img src={projects4} alt="" />
        </div>
      </div>
      <div className="mx-auto w-full md:w-auto lg:absolute right-0 lg:right-0 lg:top-[150px]">
        <div className="bg-white bg-opacity-80 lg:max-w-[700px] xl:max-w-[1000px] sm:max-w-auto px-10 sm:mx-4 md:mx-0 py-[1rem] md:p-[2rem] text-center [&>*]:pt-3">
          <h2 className="text-purpD font-medium text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]">
            Our Projects
          </h2>
          <p className="text-[16px] md:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla
          </p>
          <p className="text-[16px] md:text-[18px]">
            {" "}
            magna fringilla urna, porttitor rhoncus dolor purus non enim
            praesent elementum facilisis leo, vel fringilla est ullamcorper eget
            nulla
          </p>
          <span className="text-[16px] md:text-[24px] font-semibold py-[15px] md:py-[20px] lg:py-[25px] px-[20px] md:px-[30px] lg:px-[50px] bg-purp text-white inline-block mt-5">
            View All
          </span>
        </div>
      </div>
      <div id="Blog" className="blogs px-2 md:pt-[4rem]">
        <h2 className=" font-medium max-w-[800px] text-[24px] md:text-[30px] lg:text-[36px] px-7 sm:px-10 md:px-15 lg:px-20">
          Blogs
        </h2>
        <Carousel
          breakPoints={breakPoints}
          disableArrowsOnEnd={true}
          className="relative px-[1rem] md:px-[2rem]"
        >
          <Item>
            <img src={modernInterior} alt="" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Modern Interior
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={exteriorProject} alt="" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Exterior Project
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={greyBeauty} alt="" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Grey Beauty
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={plantainInterior} alt="" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Plantation interior
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={roleOfFurniture} alt="" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Role of furnitures
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={modernInterior} alt="" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Modern Interior
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={exteriorProject} alt="" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Exterior Project
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={greyBeauty} alt="" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Grey Beauty
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={plantainInterior} alt="" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Plantation interior
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
          <Item>
            <img src={roleOfFurniture} alt="" />
            <h5 className="w-full font-medium text-[16px] md::text-[20px] lg:text-[24px] mt-1 mb-2">
              Role of furnitures
            </h5>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </span>
          </Item>
        </Carousel>
        <button className="text-[16px] md:text-[24px] font-semibold py-[10px] md:py-[15px] lg:py-[20px] px-[20px] md:px-[30px] lg:px-[50px] bg-purp text-white block mt-5 mx-auto">
          View All
        </button>
      </div>
    </div>
  );
};

export default OurProjects;
