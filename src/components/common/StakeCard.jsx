import React from "react";
import { Increament } from "../../assets/common";
import { Check } from "../../assets/signup";

const StakeCard = ({
  numbersOfShares,
  marketValuation,
  StakeTag,
  StakeLogo,
  pricePerShare,
  cardName,
  isSelected,
  onSelect,
}) => {
  return (
    <div>
      <div
        className={`cursor-pointer ${
          isSelected ? "border border-[#296CD6] rounded-2xl" : "" // Add your selected background color
        }`}
        onClick={onSelect}
      >
        <div className="flex relative flex-col w-[288px] p-6 bg-white rounded-[1.4rem] shadow-lg hover:shadow">
          {/* <input name="yinka" type="radio" class="absolute" /> */}
          <div className="flex justify-between">
            <div className="flex flex-col">
              <img src={StakeLogo} className="w-[48px] h-[48px]" alt="" />
              <p className="text-md font-bold mt-1 text-[#000000]">
                {cardName}
              </p>
            </div>
            <div className="flex relative flex-col space-y-2 bg-white border-[0.9px] border-gray-200 rounded-lg p-[8px]  ">
              <div className="flex flex-col ">
                <p className="text-[#A8A9A9] ">Total no of shares</p>
                <p className="text-[#000000] font-semibold">
                  {numbersOfShares} shares
                </p>
              </div>

              <div className="flex flex-col ">
                <p className="text-[#A8A9A9]">Price per share</p>
                <p className="text-[#000000] font-semibold">
                  $ {pricePerShare}
                </p>
              </div>
              {isSelected ? 
                <div className="absolute -top-4 -right-2">
                    <img src={Check} alt="" />
                </div>
              : null}
              
            </div>
          </div>

          

          <div className="flex flex-col">
            <p className="text-[#A8A9A9]">Market valuation</p>
            <p className="text-[#000000]  font-bold text-xl">
              $ {marketValuation}
            </p>
          </div>
          <div className="mt-[25px] ">
            <button
              type="button"
              className="inline-flex font-extrabold items-center px-5 py-2.5 text-sm  text-center text-[#262B33] bg-[#F9F9F9] rounded-[2em] "
            >
              20%
              <img className="ml-2" src={Increament} alt="" />
            </button>
          </div>

          <div className="absolute bottom-0 right-0 ">
            <img className="w-20 " alt="" src={StakeTag} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeCard;
