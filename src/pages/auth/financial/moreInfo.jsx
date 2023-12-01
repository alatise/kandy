import React from "react";
import { ArrowLeft } from "../../../assets/signup";
import CAC from "./step-form/CAC";
import StepFormSide from "../../../components/stepFormSide";

function moreInfo() {
  return (
    <main className="pr-4 md:pr-8 pl-4 md:pl-16 py-8">
      <div className="flex">
        <div className="w-[12%]">
          <button className="mt-0 mr-[-30px] flex items-center gap-2 md:mt-[18px]">
            <img src={ArrowLeft} alt="" className="w-4 h-4" />
            <p className="text-fadedBlue">Back</p>
          </button>
        </div>

        <div className="flex justify-between gap-[100px] md:w-[88%] ">
          <div className="w-80 md:w-full">
            <p className="ml-[50px] text-fadedBlue md:mt-[18px] md:ml-[0px]">
              1/5
            </p>

            <CAC />

            <div className="mt-10 md:max-w-[364px]">
              <button className="text-white bg-kandaBlue font-bold py-4 rounded-2xl w-full inline-flex justify-center items-center gap-2">
                Next
              </button>
            </div>
          </div>

          <StepFormSide />
        </div>
      </div>
    </main>
  );
}

export default moreInfo;
