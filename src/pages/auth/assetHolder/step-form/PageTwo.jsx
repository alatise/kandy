import React from "react";
import { FacialRecongnition } from "../../../../assets/common";
import { CheckCircle } from "../../../../assets/signup";



const PageTwo = () => {
  return (
    <div className="mt-4">
      <h1>Last thing to do...</h1>
      <p className="text-sm text-fadedBlue ">
        We want to be sure you own the information supplied
      </p>

      <div className="mt-11 max-w-[454px] space-y-6">
        <div>
          <p className=" text-[#121212] font-normal">
            Please begin facial capture liveliness
          </p>

          <div className="border-b border-b-[#DADADA] "></div>
        </div>

        <div>
          <p className="text-fadedBlue ">Click button to start</p>
          <img className="rounded-lg" src={FacialRecongnition} alt="" />
        </div>
        <div className="flex space-x-2">
          <p>Facial capture is now complete</p>
          <img
            className="w-[18px] h-[18px] mt-1"
            width="18px"
            height="18px"
            alt=""
            src={CheckCircle}
          />
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
