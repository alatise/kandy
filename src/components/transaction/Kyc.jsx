import React from "react";
import ProfileHeader from "./ProfileHeader";
import arrowRight from "../../assets/images/arrowRight.svg";
import verified from "../../assets/images/verified.png";
import { CheckCircleGreen } from "../../assets/signup";

const Kyc = () => {
  return (
    <div className="my-8 p-8 pb-[100px] rounded-[32px] bg-[#F7F8FA]">
      <ProfileHeader text="KYC compliance" edit={false} />

      <div className="mt-[35px] flex flex-col gap-10 justify-between">
        <div className="flex bg-white border border-[#EFEFF0] rounded-[12px] p-6 w-[430px] justify-between items-start">
          <div className="flex justify-between items-start">
            <p className="mr-3 text-[#AFB2B8] font-extrabold">1</p>
            <div className="mr-[151px] flex flex-col gap-3 items-start">
              <h2 className="font-medium">Address verification</h2>
              <p className="text-[#AFAFAF] font-normal">Verify your address</p>
              <div className="flex gap-2 bg-[#BEFFE6] rounded-2xl px-2 py-1 items-center">
                <img src={CheckCircleGreen} alt="" className="w-4 h-4" />
                <p className="font-figtree text-xs font-medium leading-5 text-[#18B377]">
                  Verified
                </p>
              </div>
            </div>
          </div>
          <img src={arrowRight} alt="arrowRight" />
        </div>
        <div className="flex bg-white border border-[#EFEFF0] rounded-[12px] p-6 w-[430px] justify-between items-start">
          <div className="flex justify-between items-start">
            <p className="mr-3 text-[#AFB2B8] font-extrabold">2</p>
            <div className="mr-[151px] flex flex-col gap-3 items-start">
              <h2 className="font-medium">Business verification</h2>
              <p className="text-[#AFAFAF] font-normal">
                Verify business documents
              </p>
              <div className="flex gap-2 bg-[#BEFFE6] rounded-2xl px-2 py-1 items-center">
                <img src={CheckCircleGreen} alt="" className="w-4 h-4" />
                <p className="font-figtree text-xs font-medium leading-5 text-[#18B377]">
                  Verified
                </p>
              </div>
            </div>
          </div>
          <img src={arrowRight} alt="arrowRight" />
        </div>
        <div className="flex bg-white border border-[#EFEFF0] rounded-[12px] p-6 w-[430px] justify-between items-start">
          <div className="flex justify-between items-start">
            <p className="mr-3 text-[#AFB2B8] font-extrabold">3</p>
            <div className="mr-[151px] flex flex-col gap-3 items-start">
              <h2 className="font-medium">Bank verification number</h2>
              <p className="text-[#AFAFAF] font-normal">Verify your BVN</p>
              <div className="flex gap-2 bg-[#BEFFE6] rounded-2xl px-2 py-1 items-center">
                <img src={CheckCircleGreen} alt="" className="w-4 h-4" />
                <p className="font-figtree text-xs font-medium leading-5 text-[#18B377]">
                  Verified
                </p>
              </div>
            </div>
          </div>
          <img src={arrowRight} alt="arrowRight" />
        </div>
      </div>
    </div>
  );
};

export default Kyc;
