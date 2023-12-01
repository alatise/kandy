import React, { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import arrowRight from "../../assets/images/arrowRight.svg";
import { Modal } from "antd";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { CheckCircleGreen } from "../../assets/signup";

const Password = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const handleContinueClick = (modalStae, setSetModalState) => {
    setModal1Open(false);
    setModal2Open(false);

    setSetModalState(true);
  };

  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [showOldPin, setShowOldPin] = useState(false);
  const [showNewPin, setShowNewPin] = useState(false);

  const handleOldPinChange = (e) => {
    setOldPin(e.target.value);
  };

  const handleNewPinChange = (e) => {
    setNewPin(e.target.value);
  };

  const toggleShowOldPin = () => {
    setShowOldPin(!showOldPin);
  };

  const toggleShowNewPin = () => {
    setShowNewPin(!showNewPin);
  };

  // Clear PIN fields on component mount
  useEffect(() => {
    setOldPin("");
    setNewPin("");
  }, []);

  return (
    <div className="my-8 p-8 pb-[200px] rounded-[32px] bg-[#F7F8FA]">
      <ProfileHeader text="Account password & security" edit={false} />

      <div className="mt-[35px] flex flex-col gap-10 justify-between">
        <div className="flex  p-6 w-fit justify-between items-center">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setModal1Open(true)}>
            <div className="mr-[151px] flex flex-col gap-3 items-start">
              <p className="text-[#AFAFAF] font-normal">Transaction PIN</p>
              <h2 className="font-medium">
                Set 4 digit PIN to authenticate transactions
              </h2>
            </div>
          </div>
          <img

            src={arrowRight}
            alt="arrowRight"
            className="cursor-pointer"
          />
        </div>

        <Modal
          open={modal1Open}
          onOk={() => setModal1Open(false)}
          onCancel={() => setModal1Open(false)}
          footer={null}
          centered
        >
          <div className="flex flex-col gap-8 p-0.5">
            <div className="flex flex-col">
              <p className="text-[#1C1E19] font-figtree text-2xl font-bold leading-9 ">
                Edit PIN
              </p>
              <p className="font-figtree text-sm font-bold leading-normal text-[#7D8897] border-b py-2">
                Edit PIN to complete transaction
              </p>
            </div>

            <div className=" relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="oldPin"
              >
                Old PIN
              </label>
              <div className="flex items-center relative">
                <input
                  type={showOldPin ? "text" : "password"}
                  id="oldPin"
                  className="bg-[#F7F8FA] border border-[#E3E6EA]  rounded-lg px-3 py-3 w-full text-center"
                  value={oldPin}
                  onChange={handleOldPinChange}
                  placeholder="Enter old pin"

                />
                <button
                  type="button"
                  className="ml-2 text-gray-500 focus:outline-none bg-transparent absolute top-1/2 right-5 transform -translate-y-1/2"
                  onClick={toggleShowOldPin}
                >
                  {showOldPin ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* New PIN */}
            <div className=" relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="newPin"
              >
                New PIN
              </label>
              <div className="flex items-center relative">
                <input
                  type={showNewPin ? "text" : "password"}
                  id="newPin"
                  className="bg-[#F7F8FA] border border-[#E3E6EA]  rounded-lg px-3 py-3 w-full text-center"
                  value={newPin}
                  onChange={handleNewPinChange}
                  placeholder="Enter new pin"
                />
                <button
                  type="button"
                  className="ml-2 text-gray-500 focus:outline-none bg-transparent absolute top-1/2 right-5 transform -translate-y-1/2"
                  onClick={toggleShowNewPin}
                >
                  {showNewPin ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="">
              <button
                onClick={() => handleContinueClick(modal2Open, setModal2Open)}
                className="flex items-center gap-4 bg-[#296CD6]  py-6 text-[#FFFFFF] rounded-3xl mb-6  font-bold   w-2/3  justify-center   mx-auto mt-10"
              >
                Continue
              </button>
            </div>
            {/* <button className="flex text-white bg-kandaBlue font-bold py-4 rounded-2xl w-[80%]  justify-center items-center gap-2"></button> */}
          </div>
        </Modal>


        <Modal
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
          footer={null}
          centered
        >
          <div className="flex flex-col gap-4 items-center justify-center px-14 py-14">
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-[32px] h-[32px] mt-1"
                width="64px"
                height="64px"
                alt="check"
                src={CheckCircleGreen}
              />
              <p className="text-center text-[#1C1E19] font-figtree text-2xl font-bold leading-9 mt-2">
                PIN change successful
              </p>
            </div>

            <p className="text-fadedBlue text-center  font-figtree text-sm font-medium leading-6 mb-6">
              You have successfully changed your transaction PIN on Kanda
            </p>

            <button
              onClick={() => setModal2Open(false)}
              className="flex text-white bg-kandaBlue font-bold py-4 rounded-2xl w-[80%]  justify-center items-center gap-2"
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Password;
