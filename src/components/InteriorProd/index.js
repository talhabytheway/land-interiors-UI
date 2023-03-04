import React from "react";
import prod1 from "../../assets/prod1.png";
import prod2 from "../../assets/prod2.png";
import prod3 from "../../assets/prod3.png";
import prod4 from "../../assets/prod4.png";
import prod5 from "../../assets/prod5.png";
import prod6 from "../../assets/prod6.png";

const InteriorProd = () => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-purpD font-medium text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] text-center">
        Our Interior Design Products
      </h2>
      <div class=" grid md:grid-cols-4 max-md:grid-cols-2 grid-rows-2 gap-2 max-h-[70vh] w-[80.333%] mx-auto [&>img]:w-full [&>img]:h-full [&>img]:object-cover">
        <img src={prod1} alt="" />
        <img src={prod3} alt="" class=" row-start-1 row-end-3 col-start-2 " />
        <img src={prod2} alt="" />
        <img src={prod4} alt="" />
        <img src={prod5} alt="" />
        <img
          src={prod6}
          alt=""
          class="row-start-1 row-end-3 col-start-4 column-end-5 "
        />
      </div>
      <div className="text-[14px] md:text-[18px] px-8 mx-auto max-w-[600px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim
      </div>
      <button className="text-[16px] md:text-[24px] font-semibold py-[10px] md:py-[15px] lg:py-[20px] px-[20px] md:px-[30px] lg:px-[50px] bg-purp text-white block mt-5 mx-auto">
        View All
      </button>
    </div>
  );
};

export default InteriorProd;
