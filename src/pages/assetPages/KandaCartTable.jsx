import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Modal, Progress } from "antd";
import EllipseLogo from "../../assets/common/Ellipse.png";
import Goal from "../../assets/common/goal.svg";
import Dollar from "../../assets/common/dollar.svg";
import { CheckCircle } from "../../assets/signup";

const twoColors = { 0: "#296CD6", 12: "#F4F4F4" };

const KandaCartTable2 = ({ header, data }) => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const handleContinueClick = () => {
    setModal1Open(false);
    setModal2Open(true);
  };

  return (
    <div className="flex justify-even">
      <div className="flex items-center w-3/4">
        {/* Your existing table code */}
        <table className="mx-[20px] mt-5 w-[98%] bg-[#FAFAFA] text-sm text-left text-gray-500">
          <thead className="text-xs border-b text-[#7D8897] font-extralight">
            <tr>
              {header.map((column, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#121212] font-semibold">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b hover:bg-white  "bg-gray-200" : ""
                }`}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={
                      cellIndex === 0
                        ? "w-4 p-4 flex flex-row space-x-1"
                        : "px-6 py-4"
                    }
                  >
                    {cellIndex === 0 ? (
                      <div className="flex items-center">
                        <img
                          className="w-[32px] h-[32px]"
                          src={cell.img}
                          alt=""
                        />
                        <p className="ml-1">{cell.name}</p>
                      </div>
                    ) : cellIndex === 1 ? (
                      <div className="flex flex-row space-x-1 items-center">
                        <img
                          className="w-[32px] h-[32px]"
                          src={cell.img}
                          alt=""
                        />
                        <p className="text-center mt-[5px]">{cell.name}</p>
                      </div>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col w-1/4">
        <h3 className="text-lg font-semibold mb-6">Valuation</h3>
        <div className="flex flex-col gap-2 bg-[#F6F6F6] w-full rounded-2xl px-8 py-10 mb-8">
          <p className="font-figtree text-base font-medium leading-normal text-[#A9AAAA]">
            Total valuation of assets
          </p>
          <p className="text-[#262B33] font-figtree text-2xl font-bold leading-normal">
            $ 100,000
          </p>
        </div>
        <div className="mx-[0px] 2xl:max-w-[364px] 2xl:mx-[190px]">
          <button
            onClick={() => setModal1Open(true)}
            className="flex items-center gap-4 bg-[#296CD6] px-20 py-6 text-[#FFFFFF] rounded-3xl mb-[80px]   font-bold   w-full  justify-center   mx-auto mt-10"
          >
            Continue{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
        <Modal
          open={modal1Open}
          onOk={() => setModal1Open(false)}
          onCancel={() => setModal1Open(false)}
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
                    <img
                      src={Goal}
                      alt=""
                      className="bg-[#000] [rounded-full"
                    />
                    <p className="text-[#7D8897]">Asset type</p>
                  </div>
                  <p className="text-[#fff] font-figtree text-1.5xl font-medium leading-normal text-center">
                    Equity{" "}
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-1">
                    <img
                      src={Dollar}
                      alt=""
                      className="bg-[#000] rounded-full"
                    />
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
                style={{ display: "flex", flexDirection: "column", rowGap: 16 }}
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
                onClick={handleContinueClick}
                className="flex items-center gap-4 bg-[#296CD6]  py-6 text-[#FFFFFF] rounded-3xl mb-[80px]   font-bold   w-2/3  justify-center   mx-auto mt-10"
              >
                Send proposal{" "}
              </button>
            </div>
          </div>
        </Modal>
        <Modal
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
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
            <Link
              to={`/asset/cart`}
              className="w-full flex items-center justify-center"
            >
              <button
                onClick={() => setModal2Open(false)}
                className="flex text-white bg-kandaBlue font-bold py-4 rounded-2xl w-[80%]  justify-center items-center gap-2"
              >
                Close
              </button>
            </Link>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default KandaCartTable2;
