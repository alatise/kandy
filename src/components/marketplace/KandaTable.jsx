import React, { useState } from "react";
import options from "../../assets/images/images/options.svg";
import eye from "../../assets/images/images/eye.svg";
import { Modal, Progress } from "antd";
import Pdf from "../../assets/common/pdf.svg";
import Dot from "../../assets/common/dot.svg";
import Verify from "../../assets/common/verify.svg";
import { CheckCircle } from "../../assets/signup";
import EllipseLogo from "../../assets/common/Ellipse.png";
import Goal from "../../assets/common/goal.svg";
import Dollar from "../../assets/common/dollar.svg";
import { Link } from "react-router-dom";

const twoColors = { 0: "#296CD6", 12: "#F4F4F4" };

const KandaTable = ({ header, data, tableType }) => {
  const [checkOfferPosition, setCheckOfferPosition] = useState({
    top: 50,
    left: 50,
  });
  const [showCheckOffer, setShowCheckOffer] = useState(false);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [modal4Open, setModal4Open] = useState(false);

  const handleContinueClick = (modalStae, setSetModalState) => {
    setModal1Open(false);
    setModal2Open(false);
    setModal3Open(false);
    setModal4Open(false);

    setSetModalState(true);
  };

  const handleOptionClick = (event) => {
    console.log("hello");
    const optionRect = event.currentTarget.getBoundingClientRect();
    setCheckOfferPosition({
      top: optionRect.bottom + window.scrollY - 20,
      left: optionRect.left + window.scrollX + optionRect.width / 2,
    });
    setShowCheckOffer(!showCheckOffer);
    console.log(checkOfferPosition);
  };

  return (
    <div className="w-full bg-[#FAFAFA] overflow-x-auto shadow-md sm:rounded-lg">
      {/* CHECK OFFER */}

      <label className="flex items-center">
        <table className="mx-[20px] mt-5 w-[98%] bg-[#FAFAFA] text-sm text-left text-gray-500">
          {showCheckOffer && (
            <div
              onClick={() => setModal1Open(true)}
              style={{
                top: checkOfferPosition.top,
                left: checkOfferPosition.left,
              }}
              className={`absolute flex bg-black w-max py-4 px-3 rounded-[8px] gap-2 text-white text-[16px] translate-x-[-50%] translate-y-[20px] z-[999] cursor-pointer`}
            >
              <img src={eye} alt="eye" />
              <p>Check offer</p>
            </div>
          )}
          <thead className="text-xs border-b text-[#7D8897] font-extralight">
            <tr>
              {header.map((column, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {column.text}
                </th>
              ))}
              <th></th>
            </tr>
          </thead>

          <tbody className="text-[#121212] font-semibold">
            {data.map((rowData, rowIndex) => (
              <tr key={rowIndex} className="border-b hover:bg-white">
                <td className={"px-6 py-4"}>
                  <div className="flex flex-row space-x-1 items-center">
                    <img
                      className="w-[32px] h-[32px] object-contain rounded-full"
                      src={rowData.company.img}
                      alt=""
                    />
                    <p className="text-center mt-[5px]">
                      {rowData.company.name}
                    </p>
                  </div>
                </td>
                <td className={"px-6 py-4"}>{rowData.contactPerson}</td>
                <td className={"px-6 py-4"}>{rowData.revenue}</td>
                {tableType === "pending" && (
                  <td className={"px-6 py-4"}>{rowData.netIncome}</td>
                )}
                {tableType === "completed" && (
                  <>
                    <td className={"px-6 py-4"}>{rowData.repayment}</td>
                    <td className={"px-6 py-4"}>{rowData.agreement}</td>
                  </>
                )}
                {/* OPTION */}
                <td>
                  <div
                    className="bg-[#EFEFEF] rounded-full w-6 h-6 flex items-center justify-center relative"
                    onClick={handleOptionClick}
                  >
                    <img src={options} alt="options" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </label>

      <div className="flex flex-row justify-between mx-[50px] mt-[2rem] mb-[2rem] text-[#7D8897] items-center">
        <div className="flex flex-row">
          <svg
            className="w-3.5 h-3.5 me-2 mt-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          <p>Previous</p>
        </div>

        <div className="flex flex-row space-x-8 items-center">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>...</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>

          <div className="flex border border-[#F0F0F0] rounded-[8px] px-4 py-3 gap-4 items-center">
            <div className="flex gap-2  items-center cursor-pointer">
              <p className="w-fit text-[#9C9C9C] text-[14px]">Entries</p>
            </div>
            <span className="border bg-[#DDD] h-[24px] w-[1px]"></span>
            <div className="cursor-pointer relative">
              <select
                name="filterType"
                id="filterType"
                className=" text-[#9C9C9C] text-[14px]"
              >
                <option value="option">10</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <p>Next</p>
          <svg
            className="w-3.5 h-3.5 ml-2 mt-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>

      {/* User  Information  modal */}
      <Modal
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
        // onClick={() => setModal1Open(false)}
        footer={null}
      >
        <div className="flex flex-col gap-8 p-0.5">
          <p className="text-[#1C1E19] font-figtree text-2xl font-bold leading-9 border-b">
            User information
          </p>
          <div className="flex justify-between">
            <main className="flex flex-col">
              <p className="text-[#7D8897] text-center font-figtree text-base font-medium leading-6">
                Equity owner
              </p>
              <p className="text-[#121212] font-figtree text-base font-medium leading-6">
                Paul Cross
              </p>
            </main>
            <main className="flex flex-col">
              <p className="text-[#7D8897] text-center font-figtree text-base font-medium leading-6">
                Current valuation
              </p>
              <p className="text-[#121212] font-figtree text-base font-medium leading-6">
                $400,000,000.00
              </p>
            </main>
            <main className="flex flex-col">
              <p className="text-[#7D8897] text-center font-figtree text-base font-medium leading-6">
                Equity type{" "}
              </p>
              <p className="text-[#121212] font-figtree text-base font-medium leading-6">
                MTN shares
              </p>
            </main>
          </div>
          <main className="flex flex-col">
            <p className="text-[#7D8897]  font-figtree text-base font-medium leading-6">
              Date requested{" "}
            </p>
            <p className="text-[#121212] font-figtree text-base font-medium leading-6">
              23 Oct, 2023
            </p>
          </main>
          <main className="flex items-center justify-between ">
            <p className="text-[#121212] font-figtree text-base font-bold leading-6 flex items-center">
              Check document status
            </p>
            <button
              // onClick={() => setModal2Open(true)}
              onClick={() => handleContinueClick(modal2Open, setModal2Open)}
              className="flex items-center gap-4 bg-[#296CD6]  py-4 text-[#FFFFFF] rounded-2xl    font-bold   w-1/3  justify-center "
            >
              Check verification{" "}
            </button>
          </main>
          <span className="border border-b"></span>
          <div className="flex justify-between">
            <main className="flex flex-col">
              <p className="text-[#7D8897] text-center font-figtree text-sm font-medium leading-6">
                Title document number
              </p>
              <p className="text-[#121212] font-figtree text-sm font-medium leading-6">
                4956878549320123-HJ
              </p>
            </main>
            <main className="flex flex-col">
              <p className="text-[#7D8897] text-center font-figtree text-sm font-medium leading-6">
                BVN
              </p>
              <p className="text-[#121212] font-figtree text-sm font-medium leading-6">
                4059049501
              </p>
            </main>
            <main className="flex flex-col">
              <p className="text-[#7D8897] text-center font-figtree text-sm font-medium leading-6">
                Document{" "}
              </p>
              <p className="text-[#121212] font-figtree text-sm font-medium leading-6 flex">
                <img src={Pdf} alt="" />
                <span>securitiesstatement.pdf</span>
              </p>
            </main>
          </div>
          <div className="mx-[0px] mt-6 mb-2 2xl:max-w-[364px] 2xl:mx-[190px] flex gap-4 justify-betwen">
            <button
              onClick={() => handleContinueClick(modal3Open, setModal3Open)}
              className="flex items-center gap-4 bg-[#296CD6]  py-4 text-[#FFFFFF] rounded-2xl    font-bold   w-2/3  justify-center   mx-auto mt-10"
            >
              Make an offer{" "}
            </button>
            <Link to="/financial/marketplace"></Link>
            <button
              onClick={() => setModal1Open(false)}
              className="flex items-center gap-4 border border-[#DADADA]  py-4 text-[#121212] rounded-2xl   font-bold   w-2/3  justify-center   mx-auto mt-10"
            >
              Reject{" "}
            </button>
          </div>
        </div>
      </Modal>

      {/* Verification */}
      <Modal
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <div className="flex flex-col gap-8 p-0.5">
          <p className="text-[#1C1E19] font-figtree text-2xl font-bold leading-9 border-b">
            Verification
          </p>
          <main className="flex justify-between">
            <p>We need to check if user documents has been verified...</p>
            <div className="bg-[#18B377] p-2 rounded-full">
              <img src={Dot} alt="" />
            </div>
          </main>
          <main className="flex bg-[#fff] border border-[#E3E6EA] p-6 rounded-3xl gap-6">
            <div className="flex flex-col gap-4 items-center">
              <img src={Verify} alt="" />
              <p className="text-center font-figtree text-xs font-medium leading-6">
                Bank verification number (BVN)
              </p>
              <img src={CheckCircle} alt="" className="w-4 h-4" />
            </div>
            <div className="flex flex-col gap-4 items-center mb-4">
              <img src={Verify} alt="" />
              <p className="text-center font-figtree text-xs font-medium leading-6">
                Security ownership
              </p>
              <img src={CheckCircle} alt="" className="w-4 h-4" />
            </div>
          </main>
          <Link
            to="/financial/marketplace"
            className="flex items-center w-full"
          >
            <button
              onClick={() => setModal2Open(false)}
              className="flex items-center bg-[#296CD6] w-3/5 py-4 text-[#FFFFFF] rounded-2xl font-bold mt-10 justify-center hover:text-white"
            >
              Okay
            </button>
          </Link>
        </div>
      </Modal>

      {/* Make an offer modal */}
      <Modal
        open={modal3Open}
        onOk={() => setModal3Open(false)}
        onCancel={() => setModal3Open(false)}
        footer={null}
      >
        <div className="flex flex-col gap-8 p-0.5">
          <p className="text-[#1C1E19] font-figtree text-2xl font-bold leading-9 border-b">
            Make an offer
          </p>
          <div className="bg-[#121212] rounded-2xl p-3 flex gap-6">
            <div className="flex items-center gap-3">
              <img src={EllipseLogo} alt="Ellipse" className="rounded-full" />
              <p className="font-figtree text-base font-medium leading-6 text-[#fff]">
                Paul cross
              </p>
            </div>
            <div className="flex bg-[#303030]  rounded-xl p-4 gap-4">
              <div className="flex flex-col ">
                <div className="flex gap-1">
                  <img src={Goal} alt="" className="bg-[#000] [rounded-full" />
                  <p className="text-[#7D8897]">Asset type</p>
                </div>
                <p className="text-[#fff] font-figtree text-1.5xl font-medium leading-normal text-center">
                  Equity{" "}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-1">
                  <img src={Dollar} alt="" className="bg-[#000] rounded-full" />
                  <p className="text-[#7D8897]">Total asset valuation</p>
                </div>
                <p className="text-[#fff] font-figtree text-1.5xl font-medium leading-normal text-center">
                  $ 300,000
                </p>
              </div>
            </div>
          </div>
          <main>
            <div className="flex justify-between ">
              <p className="text-[#101828] font-figtree text-base font-normal leading-5">
                Enter loan offer
              </p>
              <div className="flex gap-2">
                <label className="">
                  {/* TOGGLE SWITCH */}
                  <input
                    className="relative toggle-switch w-10 h-5 transition-all duration-200 ease-in-out bg-gray-400 rounded-full shadow-inner outline-none appearance-none "
                    type="checkbox"
                  />
                </label>
                <p className="text-[#121212]">Borrow 50% of valuation</p>
              </div>
            </div>
            <div className="bg-[#F7F8FA] border border-[#E3E6EA] rounded-xl w-full p-4">
              <p className="text-[#7D8897] font-figtree text-base font-normal leading-6">
                $ <span className="ml-2 text-[#121212]">90,000</span>
              </p>
            </div>
          </main>
          <main>
            <p className="text-[#101828] font-figtree text-base font-normal leading-5">
              Interest rate
            </p>
            <div className="bg-[#F7F8FA] border border-[#E3E6EA] rounded-xl w-full p-4">
              <p className="text-[#7D8897] font-figtree text-base font-normal leading-6">
                % <span className="ml-2 text-[#121212]">5%</span>
              </p>
            </div>
          </main>
          <main>
            <p>Select loan duration</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: 16,
              }}
            >
              <Progress
                // percent={50}
                strokeColor={twoColors}
                className="w-[500px] max-sm:w-[360px]"
              />
            </div>
            <div className="text-[#101828] font-figtree font-medium mt-2 leading-6 text-sm max-sm:text-sm">
              4 months
            </div>
          </main>
          <span className="border border-b mt-6"></span>
          <p className="text-[#101828] font-figtree text-base font-normal leading-6">
            Fees{" "}
            <span className="text-[#18B377] font-figtree text-base font-bold leading-6">
              $ 45.00
            </span>
          </p>
          <div className="mx-[0px] 2xl:max-w-[364px] 2xl:mx-[190px]">
            <button
              onClick={() => handleContinueClick(modal4Open, setModal4Open)}
              className="flex items-center gap-4 bg-[#296CD6]  py-6 text-[#FFFFFF] rounded-3xl mb-[80px]   font-bold   w-2/3  justify-center   mx-auto mt-10"
            >
              Send proposal{" "}
            </button>
          </div>
        </div>
      </Modal>

      {/* Offer sent modal */}
      <Modal
        open={modal4Open}
        onOk={() => setModal4Open(false)}
        onCancel={() => setModal4Open(false)}
        footer={null}
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
              Offer sent
            </p>
          </div>

          <p className="text-fadedBlue text-center  font-figtree text-sm font-medium leading-6 mb-6">
            You have successfully sent your proposal for the asset
          </p>

          <button
            onClick={() => setModal4Open(false)}
            className="flex text-white bg-kandaBlue font-bold py-4 rounded-2xl w-[80%]  justify-center items-center gap-2"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default KandaTable;
