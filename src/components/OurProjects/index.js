import React from "react";
import projects1 from "../../assets/projects1.png";
import projects2 from "../../assets/projects2.png";
import projects3 from "../../assets/projects3.png";
import projects4 from "../../assets/projects4.png";
import rectangle from "../../assets/rectangleProj.svg";

const OurProjects = () => {
  return (
    <div className="lg:max-w-[1440px] xl:max-w-[1600px] mx-auto relative min-h-[400px] sm:min-h-[500px] py-20 bg-cover"
    style={{ backgroundImage: `url(${rectangle})` }}>
    <div className="grid sm:grid-cols-2 md:w-full lg:max-w-[780px] px-10 [&>div>img]:p-[2.5%] [&>div>img]:mx-auto">
      <div><img src={projects1} alt="" />
      <img src={projects2} alt="" /></div>
      <div><img src={projects3} alt="" />
      <img src={projects4} alt="" /></div>
    </div>
    <div className="mx-auto w-full md:w-auto lg:absolute right-0 lg:right-0 lg:top-[150px]">
    <div className="bg-white bg-opacity-80 lg:max-w-[700px] xl:max-w-[1000px] sm:max-w-auto px-10 sm:mx-4 md:mx-0 py-[1rem] md:p-[2rem] text-center [&>*]:pt-3">
      <h2 className="text-purpD font-medium text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]">Our Projects</h2>
      <p className="text-[16px] md:text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
      <p className="text-[16px] md:text-[18px]"> magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
      <span className="text-[16px] md:text-[24px] font-semibold py-[15px] md:py-[20px] lg:py-[25px] px-[20px] md:px-[30px] lg:px-[50px] bg-purp text-white inline-block mt-5">View All</span>
    </div>
    </div>
  </div>
  );
};

export default OurProjects;
