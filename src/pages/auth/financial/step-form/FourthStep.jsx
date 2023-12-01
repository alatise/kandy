/* eslint-disable jsx-a11y/anchor-is-valid */
import UploadField from "../../../../components/common/UploadField";
import React from "react";

const FourthStep = () => {

  const [show, setShow] = React.useState(true)

  function handleSkip() {
    setShow(false)
  }
  return (
    <div className="mt-4">
      <h1>Make payment</h1>
      <p className="text-sm text-fadedBlue ">
        Make payment to use Kanda’s services
      </p>

      <div className="mt-11 max-w-[454px] space-y-6">
        <div>
          <p className=" text-[#121212] font-normal">
            {" "}
            You will be required to pay{" "}
            <strong className="text-lg text-kandaBlack">$1000 </strong> to use
            Kanda’s full services. See how to pay to below
          </p>

          <div className="border-b border-b-[#DADADA] "></div>
        </div>

        <div>
          <div className="flex justify-between">
            <p className="text-fadedBlue">Make payment</p>
            <p className="text-[#296CD6] cursor-pointer" onClick={handleSkip}>SKIP</p>
          </div>

          {show &&
            <div class="max-w-lg p-6 bg-white border-2 border-gray-200 rounded-xl ">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-fadedBlue ">Account details</p>
                  <p className="text-kondaBlack">GTB - 0431570067</p>
                </div>
                <div className="rounded-lg bg-[#DDFFF2] px-5 py-2.5 ">
                  <p className="text-[#18B377]">03:34</p>
                </div>
              </div>
              <div className="flex justify-between mt-[70px] mb-3">
                <div>
                  <p className="text-sm text-fadedBlue ">Total amount to pay</p>
                  <p className="text-kondaBlack">$1000.40</p>
                </div>
                <div>
                  <p className="text-sm text-fadedBlue ">Account name</p>
                  <p className="text-kondaBlack">Kanda</p>
                </div>
              </div>
              <button className="text-white bg-kandaBlue font-bold py-4 rounded-2xl w-full inline-flex justify-center items-center gap-2">
                Pay via Paystack
              </button>
            </div>
          }
        </div>

        <div class="max-w-lg p-6 bg-white border border-gray-200 rounded-xl ">
          <div className="flex-row">
            <UploadField
              label={"Pay offline & upload proof of payment here"}
              fieldName={"Upload proof of payment"}
            />
            <p className="text-[12px] text-right text-contentFade">
              Max size: 4MB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthStep;
