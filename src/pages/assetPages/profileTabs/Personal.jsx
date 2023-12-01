import React from "react";
import pdf from "../../../assets/images/pdf.png";
import trash from "../../../assets/images/trash.svg";
import ProfileHeader from "../../../components/transaction/ProfileHeader";

const Personal = () => {
  return (
    <div className="my-8 p-8 rounded-[32px] bg-[#F7F8FA]">
      <ProfileHeader text="Personal details" edit={true} />

      <div className="mt-[35px] flex gap-6 justify-between">
        <div className="border border-[#E2E2E8] rounded-[24px] p-6 pb-24 w-[55%] flex gap-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <p className="text-[#7D8897] font-medium leading-4">
                Personal name
              </p>
              <h3 className="text-[#121212] font-medium leading-4">
                Jane Warrios
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-[#7D8897] font-medium leading-4">
                Email address
              </p>
              <h3 className="text-[#121212] font-medium leading-4">
                janewarrios@gmail.com
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-[#7D8897] font-medium leading-4">
                phone number
              </p>
              <h3 className="text-[#121212] font-medium leading-4">
                08068108356
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-[#7D8897] font-medium leading-4">
                Date of birth
              </p>
              <h3 className="text-[#121212] font-medium leading-4">
                21 Oct, 2002
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[#7D8897] font-medium leading-4">Gender</p>
            <h3 className="text-[#121212] font-medium leading-4">Female</h3>
          </div>
        </div>
        <div className="border border-[#E2E2E8] rounded-[24px] p-6 w-[40%] flex flex-col gap-9 ">
          <p className="text-[#7D8897] font-medium leading-4">Documents</p>

          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img src={pdf} alt="" />
              <p>CACdocument.pdf</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-[#296CD6] font-medium leading-4 underline">
                View document
              </p>
              <img src={trash} alt="trash" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img src={pdf} alt="" />
              <p>RCnumber.pdf</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-[#296CD6] font-medium leading-4 underline">
                View document
              </p>
              <img src={trash} alt="trash" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img src={pdf} alt="" />
              <p>TIN.pdf</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-[#296CD6] font-medium leading-4 underline">
                View document
              </p>
              <img src={trash} alt="trash" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img src={pdf} alt="" />
              <p>LendingLicence.pdf</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-[#296CD6] font-medium leading-4 underline">
                View document
              </p>
              <img src={trash} alt="trash" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
