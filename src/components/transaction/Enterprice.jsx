import React from "react";
import pdf from "../../assets/images/pdf.png";
import trash from "../../assets/images/trash.svg";
import ProfileHeader from "./ProfileHeader";

const Enterprice = () => {
  return (
    <div className="my-8 p-8 rounded-[32px] bg-[#F7F8FA]">
      <ProfileHeader text="Enterprise details" edit={true} />

      <div className="mt-[35px] flex gap-6 justify-between">
        <div className="border border-[#E2E2E8] rounded-[24px] p-6 pb-24 w-[55%] flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <p className="text-[#7D8897] font-medium leading-4">
              Enterprise name
            </p>
            <h3 className="text-[#121212] font-medium leading-4">
              Access Global
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[#7D8897] font-medium leading-4">
              Email address
            </p>
            <h3 className="text-[#121212] font-medium leading-4">
              accessglobal@gmail.com
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[#7D8897] font-medium leading-4">
              Enterprise number
            </p>
            <h3 className="text-[#121212] font-medium leading-4">
              08068108356
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[#7D8897] font-medium leading-4">
              Location address
            </p>
            <h3 className="text-[#121212] font-medium leading-4">
              No 23, Victoria Island, Lagos
            </h3>
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

export default Enterprice;
