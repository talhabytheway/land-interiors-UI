import React from "react";
import prod1 from "../../assets/prod1.png";
import prod2 from "../../assets/prod2.png";
import prod3 from "../../assets/prod3.png";
import prod4 from "../../assets/prod4.png";
import prod5 from "../../assets/prod5.png";
import prod6 from "../../assets/prod6.png";

const InteriorProd = () => {
  return (
    <div
      id="Studio"
      className="flex flex-col gap-10 xl:max-w-[1440px] vl:max-w-[1920px] xl:mx-auto"
    >
      <h2 className="text-purpD font-medium text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] text-center py-6">
        Our Interior Design Products
      </h2>
      <div className=" grid xl:grid-cols-10 max-md:grid-cols-5 grid-rows-2 gap-2 xl:gap-4 max-h-[70vh] px-16 sm:px-20 md:px-24 ms:px-[148px] xl:px-0 w-full xl:w-[80.333%] mx-auto [&>img]:w-full [&>img]:h-full [&>img]:object-cover">
        <img src={prod1} alt="product1" className="col-span-2" />
        <img
          src={prod3}
          alt="product3"
          className="xl:row-start-1 xl:row-end-3 col-start-3 col-span-3 row-span-2"
        />
        <img src={prod2} alt="product2" className="col-span-2" />
        <img
          src={prod4}
          alt="product4"
          className="hidden xl:inline xl:col-span-2"
        />
        <img
          src={prod5}
          alt="product5"
          className="hidden xl:inline xl:col-span-2"
        />
        <img
          src={prod6}
          alt="product6"
          className="hidden xl:inline xl:row-start-1 xl:row-end-3 xl:col-start-8 xl:col-span-3"
        />
      </div>
      <div className="text-[18px] md:text-[24px] text-left xl:text-[18px] pb-3 ms:pb-6 xl:pb-3 px-10 md:px-[76px] ms:px-[148px] mx-auto xl:max-w-[600px] xl:text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim
      </div>
      <button className="text-[16px] md:text-[20px] lg:text-[24px] font-semibold py-[20px] px-[80px] bg-purp text-white block mt-2 vl:px-[86px] vl:py-5 mx-auto">
        View All
      </button>
    </div>
  );
};

export default InteriorProd;
