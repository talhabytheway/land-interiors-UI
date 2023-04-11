import React from "react";

const Talk = () => {
  return (
    <div id="Contact" className="my-16 px-16 sm:px-20 md:px-24 ms:px-[140px] vl:px-52 flex flex-col gap-10 xl:max-w-[1440px] vl:max-w-[1920px] xl:mx-auto">
      <h2 className="font-medium text-[20px] sm:text-[24px] md:text-[30px] ms:text-[36px]">
        Let talk about your Dream home
      </h2>
      <div className="mx-auto w-full">
        <div className="flex flex-col xl:flex-row justify-between gap-14 xl:gap-10">
          <input
            type="text"
            placeholder="Name"
            className="border-b-2 placeholder:xl:text-[24px] w-full xl:max-w-[35%] p-2 focus-visible:outline-none"
          />
          <input
            type="text"
            placeholder="Email/Phone"
            className="border-b-2 placeholder:xl:text-[24px] w-full xl:max-w-[35%] p-2 focus-visible:outline-none"
          />
          <button className="text-[16px] md:text-[20px] xl:text-[24px] font-semibold py-[20px] px-[80px] bg-purp text-white block mx-auto xl:mx-0">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Talk;
