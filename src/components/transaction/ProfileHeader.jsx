import React, { useState } from "react";
import { Modal } from "antd";
import Upload from "../../assets/common/upload.svg";
import { CheckCircleGreen } from "../../assets/signup";

const ProfileHeader = ({ text, edit }) => {
  const [formData, setFormData] = useState({
    name: "Access Global", // Prefilled info
    loans: "Loans & Investment", // Prefilled info
    address: "No 24059, Lagos Island, Lekki, Lagos", // Prefilled info
    phone: "08068108356", // Prefilled info
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [address, setAddress] = useState(null);
  const [passport, setPassport] = useState(null);

  const handleFile1Change = (e) => {
    setAddress(e.target.files[0]);
  };

  const handleFile2Change = (e) => {
    setPassport(e.target.files[0]);
  };

  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);

  const handleContinueClick = (modalStae, setSetModalState) => {
    setModal1Open(false);
    setModal2Open(false);
    setModal3Open(false);

    setSetModalState(true);
  };

  return (
    <div className="flex gap-12 border-b border-[#ECECEC] pb-3">
      <p className="text-[#121212] font-medium leading-4 ">{text}</p>
      {edit && (
        <p
          onClick={() => setModal1Open(true)}
          className="text-[#296CD6] font-medium leading-4 underline cursor-pointer"
        >
          Edit details
        </p>
      )}


      {/* eidt  enterprise details modal */}
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
              Edit enterprise details
            </p>
            <p className="font-figtree text-sm font-bold leading-normal text-[#7D8897] border-b py-2">
              Change information below to save the update
            </p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Enterprise name
            </label>
            <input
              className="bg-[#F7F8FA] border border-[#E3E6EA]  rounded-lg px-3 py-3 w-full"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="loans"
            >
              Lender type
            </label>
            <input
              className="bg-[#F7F8FA] border border-[#E3E6EA]  rounded-lg px-3 py-3 w-full"
              type="text"
              id="loans"
              name="loans"
              value={formData.loans}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Location address
            </label>
            <input
              className="bg-[#F7F8FA] border border-[#E3E6EA]  rounded-lg px-3 py-3 w-full"
              type="address"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Enter phone number
            </label>
            <input
              className="bg-[#F7F8FA] border border-[#E3E6EA]  rounded-lg px-3 py-3 w-full"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <button
              onClick={() => handleContinueClick(modal2Open, setModal2Open)}
              className="flex items-center gap-4 bg-[#296CD6]  py-6 text-[#FFFFFF] rounded-3xl mb-[80px]   font-bold w-2/3 justify-center  mx-auto mt-10"
            >
              Save
            </button>
          </div>
          {/* <button className="flex text-white bg-kandaBlue font-bold py-4 rounded-2xl w-[80%]  justify-center items-center gap-2"></button> */}
        </div>
      </Modal>

      {/* edit enterprise documents modal */}
      <Modal
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
        centered
      >
        <div className="flex flex-col gap-8 p-0.5">
          <div className="flex flex-col">
            <p className="text-[#1C1E19] font-figtree text-2xl font-bold leading-9 ">
              Edit enterprise documents
            </p>
            <p className="font-figtree text-sm font-bold leading-normal text-[#7D8897] border-b py-2">
              Change information below to save the update
            </p>
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-[#101828] font-figtree text-sm font-normal leading-6 mb-2"
              htmlFor="address"
            >
              Upload proof of address
            </label>
            <div className="border-dashed border-2 bg-[#F7F8FA] border-gray-300 rounded-md p-4 relative">
              <input
                type="file"
                id="address"
                className="hidden"
                onChange={handleFile1Change}
              />
              <label
                htmlFor="address"
                className="cursor-pointer flex gap-4 text-[#121212]"
              >
                <img src={Upload} alt="" />
                {address ? address.name : "Upload"}
              </label>
            </div>

            <p className="text-xs text-gray-500 absolute -bottom-6 right-0 mb-1 mr-1">
              Max 5MB
            </p>
          </div>

          {/* File 2 Upload */}
          <div className="mb-4 relative">
            <label
              className="block text-[#101828] font-figtree text-sm font-normal leading-6 mb-2"
              htmlFor="passport"
            >
              Upload Government issued ID
            </label>
            <div className="border-dashed bg-[#F7F8FA] border-2 border-gray-300 rounded-md p-4 relative">
              <input
                type="file"
                id="passport"
                className="hidden"
                onChange={handleFile2Change}
              />

              <label
                htmlFor="passport"
                className="cursor-pointer text-[#121212] flex gap-4"
              >
                <img src={Upload} alt="" />
                {passport ? passport.name : "Upload"}
              </label>
              <span class="absolute -bottom-6 right-0 mr-2 mt-2 text-gray-500 text-xs">
                Max 5MB
              </span>
            </div>
          </div>

          <div className="mx-auto w-full">
            <button
              onClick={() => handleContinueClick(modal3Open, setModal3Open)}
              className="flex items-center gap-4 bg-[#296CD6]  py-6 text-[#FFFFFF] rounded-3xl mb-[80px]   font-bold w-2/3 justify-center mx-auto mt-10"
            >
              Save
            </button>
          </div>
          {/* <button className="flex text-white bg-kandaBlue font-bold py-4 rounded-2xl w-[80%]  justify-center items-center gap-2"></button> */}
        </div>
      </Modal>

      {/* update saved */}
      <Modal
        open={modal3Open}
        onOk={() => setModal3Open(false)}
        onCancel={() => setModal3Open(false)}
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
              Update saved
            </p>
          </div>

          <p className="text-fadedBlue text-center  font-figtree text-sm font-medium leading-6 mb-6">
            You have successfully saved the update made on your profile
          </p>

          <button
            onClick={() => setModal3Open(false)}
            className="flex text-white bg-kandaBlue font-bold py-4 rounded-2xl w-[80%]  justify-center items-center gap-2"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileHeader;
