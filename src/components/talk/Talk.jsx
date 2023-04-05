import React from "react";

const Talk = () => {
  return (
    <div id="Contact" className="my-16 px-[1.5rem] md:px-[4rem] lg:px-[6rem] flex flex-col gap-10 xl:max-w-[1440px] xl:mx-auto">
      <h2 className="font-medium text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]">
        Let talk about your Dream home
      </h2>
      <div className="mx-auto w-full">
        <div className="flex flex-col lg:flex-row justify-between gap-5 md:gap-6 xl:gap-10">
          <input
            type="text"
            placeholder="Name"
            className="border-b-2 placeholder:lg:text-[24px] w-full lg:max-w-[35%] p-2 focus-visible:outline-none"
          />
          <input
            type="text"
            placeholder="Email/Phone"
            className="border-b-2 placeholder:lg:text-[24px] w-full lg:max-w-[35%] p-2 focus-visible:outline-none"
          />
          <button className="text-[16px] md:text-[20px] font-semibold py-[10px] md:py-[15px] lg:py-[20px] px-[20px] md:px-[30px] lg:px-[70px] xl:px-[80px]  bg-purp text-white block mx-auto lg:mx-0">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Talk;
