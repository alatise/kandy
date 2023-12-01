import React from "react";
import { EclipseLogo, FaceLogo } from "../../assets/common";

const SearchHeader = () => {
  return (
    <div className="flex justify-between mb-[38px] h-[200px] border-b-2 border-grey-500">
      <div className="flex h-[160px] flex-col">
        <div className="flex justify-between h-[60pxpx] border-b-2 border-grey-500">
          <div className="h-[60px] w-[400px] flex">
            <div className="mr-[10px]">
              <img src={EclipseLogo} alt="" srcset="" />
            </div>
            <p className="text-kandaBlack text-[24px] font-normal mt-2">
              5 shares result found for:{" "}
            </p>
          </div>

          <div className="flex mt-[10px]">
            <p className="bg-[#296CD6] h-[24px] w-[24px] text-center text-white rounded-[24px] mr-[8px]">
              x
            </p>

            <p className="font-bold text-kandaBlue text-[14px]">Clear search</p>
          </div>
        </div>

        <div className="flex mt-[30px] text-kandaBlack">
          <div className="mr-[50px]">
            <p className="text-[#A9AAAA] text-[14px]">Name</p>
            <p className="font-semibold text-[16px] font-Figtree">Tunde Idiamin</p>
          </div>

          <div>
            <p className="text-[#A9AAAA] text-[14px]">CHN Number</p>
            <p className="font-semibold text-[16px] font-Figtree">30495894303454</p>
          </div>
        </div>
      </div>

      <div className="h-8 flex items-center">
        <div className="h-[28px] w-[48px] bg-gradient-to-r from-[#296CD6] to-[#9438EF] mr-[16px] rounded-[14px] flex gap-1 px-2 items-center justify-center">
          <img src={Notification} alt="" />
          <p className="text-[#fff] text-right font-helvetica-neue text-xs font-medium leading-normal">
            15
          </p>
        </div>
        <div className="h-8 w-8 bg-kandaBlue mr-[8px] rounded-md">
          <img src={FaceLogo} alt="" srcset="" />
        </div>
        <p className="text-[13px] text-kandaBlack font-medium mr-[4px]">
          Emmanuel Odo
        </p>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.72388 12L12.2411 14.7108C12.6367 15.1369 13.311 15.1369 13.7067 14.7108L16.2239 12"
            stroke="#2B3F6C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchHeader;
