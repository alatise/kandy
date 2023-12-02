import React, { useEffect, useState, useSyncExternalStore } from "react";
import Header from "../components/common/Header";
import bg from "../assets/images/bgmarket.png";
import altbg from "../assets/images/altbgmarket.png";
import downActive from "../assets/images/images/down.svg";
import downInactive from "../assets/images/images/down-inactive.svg";
import checkActive from "../assets/images/images/check-active.svg";
import checkInactive from "../assets/images/images/check.svg";
import search from "../assets/images/images/search.svg";
import filter from "../assets/images/images/filter.svg";
import { marketplaces, tableData, tableHeader } from "../utils/marketplaceData";
import KandaTable from "../components/marketplace/KandaTable";
// import { Link } from "react-router-dom";
import { Modal } from "antd";
import { Mtn } from "../assets/common";
import Decrease from "../assets/common/decrease.svg";
import { CheckCircle } from "../assets/signup";
import Reject from "../assets/common/reject.svg";
import { FaAngleRight } from "react-icons/fa";

const MarketPlaceScreen = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const [tableType, setTableType] = useState("pending");
  const [filteredHeader, setFilteredHeader] = useState([]);

  const handleContinueClick = (modalStae, setSetModalState) => {
    setModal1Open(false);
    setModal2Open(false);
    setModal3Open(false);

    setSetModalState(true);
  };

  useEffect(() => {
    if (tableType === "pending") {
      setFilteredHeader(
        tableHeader.filter((item) => item.type !== "completed")
      );
    } else if (tableType === "completed") {
      setFilteredHeader(tableHeader.filter((item) => item.type !== "pending"));
    }
  }, [tableType]);

  return (
    <div className="mb-40">
      <span></span>
      <Header title="Marketplace" message="You find assets here" />
      <div className="flex justify-between bg-[#E1E1E1] rounded-xl px-6">
        <div className="flex flex-col my-8">
          <div className="flex">
            <p className="text-[rgb(18,18,18)] font-figtree text-2xl font-bold leading-normal capitalize">
              Find the <span className="text-[#296CD6]">best</span> <br /> deals
              from the marketplace
            </p>
            <img src={altbg} alt="altbg" className="mt-5" />
          </div>
          <p className="text-[#595959] font-figtree text-xs font-medium leading-5">
            You find assets here, get more information and <br /> decide if you
            want to offer the loan
          </p>
        </div>

        <img src={bg} alt="bg" />
      </div>
      <div className="mt-14 flex gap-12">
        {marketplaces.map((item, index) => {
          const { image, text, active } = item;

          return (
            <div
              className=" border border-[#EAEAEA] p-1 w-[273px] rounded-[20px]"
              key={index}
            >
              <div
                className={`${
                  active && "bg-[#296CD6]"
                } w-full rounded-[20px] p-1 text-white flex gap-4 items-center`}
              >
                <img src={image} alt="realEstate" className="rounded-[20px]" />
                <p
                  className={` ${
                    active ? "text-white " : " text-[#34363A]"
                  } text-[16px] leading-6`}
                >
                  {text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 p-2 bg-[#FAFAFA] rounded-[16px] flex gap-6 items-center">
        <div
          className={`${
            tableType === "pending" ? "bg-white" : "bg-transparent"
          } flex gap-3 py-4 px-8  w-fit rounded-[16px] cursor-pointer`}
          onClick={() => setTableType("pending")}
        >
          <img src={downActive} alt="down" />
          <p>New requests</p>
        </div>
        <div
          className={`${
            tableType === "completed" ? "bg-white" : "bg-transparent"
          } flex gap-3 py-4 px-8  w-fit rounded-[16px] cursor-pointer`}
          onClick={() => setTableType("completed")}
        >
          <img src={checkInactive} alt="check" />
          <p>Completed requests</p>
        </div>
      </div>

      <div className="mt-8 mb-8 flex gap-6">
        <div className="p-4 flex items-center border border-[#F0F0F0] rounded-[8px] w-full">
          <img src={search} alt="search" />
          <span className="border bg-[#DDD] h-[38px] w-[1px] ml-2 mr-6"></span>
          <input
            type="text"
            placeholder="Search by asset security & CHN number"
            className="w-full h-full border-none"
          />
        </div>
        <div className="flex w-[314px] border border-[#F0F0F0] relative rounded-[8px] px-4 py-3 gap-4 items-center">
          <div className="flex gap-2  items-center cursor-pointer">
            <p className="w-fit text-[#9C9C9C] text-[14px]">Filter by</p>
            <img src={filter} alt="filter" />
          </div>
          <span className="border bg-[#DDD] h-[38px] w-[1px]"></span>
          <div className="cursor-pointer relative">
            <p
              name="filterType"
              id="filterType"
              className=" text-[#9C9C9C] text-[14px] flex gap-3 items-center"
              onClick={() => {
                setFilterOpen(!filterOpen);
              }}
            >
              {/* <option value="option">Select Filter</option> */}
              Select Filter
              <FaAngleRight />
            </p>
            {/* MODAL */}
            {filterOpen && (
              <div className="absolute top-4 w-[294px] left-0 bg-black p-3 text-white translate-x-[-50%] translate-y-10 rounded-xl modal-arrow z-[99] filter-modal">
                <p className="w-[270px]  py-3 text-center rounded-[12px] hover:bg-[#333]">
                  New assets
                </p>
                <p
                  onClick={() => setModal1Open(true)}
                  className="w-[270px] py-3 text-center rounded-[12px] hover:bg-[#333]"
                >
                  Agreed offer
                </p>
              </div>
            )}
          </div>

          {/* confirm lending */}
          <Modal
            open={modal1Open}
            onOk={() => setModal1Open(false)}
            onCancel={() => setModal1Open(false)}
            footer={null}
            className="rounded-[24px]"
            width={687}
            // style={{ "width": "687px;" }}
            centered
          >
            <div className="flex flex-col gap-8 ">
              <p className="text-[#1C1E19] font-figtree text-[32px] font-bold leading-9 border-b pb-3">
                Confirm lending
              </p>

              <main className="flex justify-between">
                <p className="text-[#1C1E19] font-figtree text-base font-medium leading-6 pt-4">
                  Confirm you want to lend to the user against this asset?
                </p>
              </main>
              <div className="flex justify-between">
                <div className="w-[64px] h-[64px]">
                  <img src={Mtn} alt="" className="w-full h-full" />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="font-figtree text-[#262B33] text-2xl font-bold leading-normal">
                    MTN Nigeria
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className="text-[#262B33] font-figtree text-base font-bold leading-normal">
                      -20%
                    </p>
                    <img src={Decrease} alt="" />
                    <p className="text-[#121212] font-figtree text-xs font-normal leading-normal">
                      -0.01%
                    </p>
                  </div>
                  <p className="text-[#8C8C8C] font-figtree text-[10px] font-medium">
                    $198 Per Unit Share
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[#121212] font-figtree text-xs font-normal leading-normal">
                    Your value
                  </p>
                  <p className="text-[#121212] font-figtree text-sm font-bold leading-normal">
                    $ 3,000,000.00
                  </p>
                  <p className="text-[#121212] font-figtree text-xs font-normal leading-normal mt-2">
                    Market valuation
                  </p>
                  <p className="text-[#121212] font-figtree text-sm font-bold leading-normal">
                    $ 4,000,000.00
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[#121212] font-figtree text-xs font-normal leading-normal">
                    Loan request
                  </p>
                  <p className="text-[#121212] font-figtree text-sm font-bold leading-normal">
                    $ 100,000.00
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[#121212] font-figtree text-xs font-normal leading-normal">
                    Interest rate
                  </p>
                  <p className="text-[#121212] font-figtree text-sm font-bold leading-normal">
                    20%
                  </p>
                </div>
              </div>
              <hr />
              {/* <span className="border border-b mt-12"></span> */}
              <div className="mb-2 flex gap-4 mx-[35px] justify-between">
                <button
                  onClick={() => handleContinueClick(modal2Open, setModal2Open)}
                  className="flex items-center gap-4 bg-[#296CD6]  py-4 text-[#FFFFFF] rounded-2xl    font-bold   w-2/3  justify-center   mx-auto mt-10"
                >
                  Confirm
                </button>
                <button
                  onClick={() => handleContinueClick(modal3Open, setModal3Open)}
                  className="flex items-center gap-4 border border-[#DADADA]  py-4 text-[#121212] rounded-2xl   font-bold   w-2/3  justify-center   mx-auto mt-10"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal>

          {/* lending request accepted */}
          <Modal
            open={modal2Open}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
            footer={null}
            centered
            // width={687}
          >
            <div className="flex flex-col gap-4 items-center justify-center px-14 py-14">
              <div className="flex flex-col items-center justify-center">
                <img
                  className="w-[32px] h-[32px] mt-1"
                  width="64px"
                  height="64px"
                  alt="check"
                  src={CheckCircle}
                />
                <p className="text-center text-[#1C1E19] font-figtree text-2xl font-bold leading-9 mt-2">
                  Lending request accepted
                </p>
              </div>

              <p className="text-fadedBlue text-center font-figtree text-sm font-medium leading-6 mb-6">
                You have successfully accepted to lend to{" "}
                <span className="font-bold text-[#121212]">Paul Cross</span>{" "}
                with his asset
              </p>

              <button
                onClick={() => setModal2Open(false)}
                className="flex text-white bg-kandaBlue font-bold py-4 rounded-2xl w-[80%]  justify-center items-center gap-2"
              >
                Close
              </button>
            </div>
          </Modal>

          {/* lending  offer rejected */}
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
                  src={Reject}
                />
                <p className="text-center text-[#1C1E19] font-figtree text-2xl font-bold leading-9 mt-2">
                  Lending offer rejected
                </p>
              </div>

              <p className="text-fadedBlue text-center  font-figtree text-sm font-medium leading-6 mb-6">
                You have successfully rejected to lend to the user
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
      </div>

      <KandaTable
        header={filteredHeader}
        data={tableData}
        tableType={tableType}
      />
    </div>
  );
};

export default MarketPlaceScreen;
