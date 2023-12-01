import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import EllipseLogo from "../../assets/common/Ellipse.png";
import Goal from "../../assets/common/goal.svg";
import Dollar from "../../assets/common/dollas.svg";
import { CheckCircleGreen } from "../../assets/signup";
// import InputField from "../../components/common/InputField";
import { Switch, Slider } from "antd";

function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const twoColors = { 0: "#296CD6", 12: "#F4F4F4" };

const KandaCartTable = ({ header, data }) => {
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
            <tr className="">
              {header.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 font-Figtree font-normal text-sm py-3"
                >
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
                        ? "w-6 p-4 flex flex-row space-x-1"
                        : "px-6 py-4"
                    }
                  >
                    {cellIndex === 0 ? (
                      <div className="flex items-center">
                        <img
                          className="w-[76px] h-[45px]"
                          src={cell.img}
                          alt=""
                        />
                        <p className="ml-3 spa font-figtree  font-normal">
                          {cell.name}
                        </p>
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
          <p className="text-[#262B33] font-figtree text-2xl font-semibold leading-normal">
            $ 100,000
          </p>
        </div>
        {/* <div className="mx-[0px] 2xl:max-w-[364px] w-[] 2xl:mx-[190px]"> */}
        <button
          onClick={() => setModal1Open(true)}
          className="flex items-center gap-4 bg-[#296CD6] px-20 py-6 text-[#FFFFFF] rounded-3xl mb-[80px]   font-bold   w-full  justify-center   mx-auto"
        >
          Continue{" "}
          <span>
            <FaArrowRight />
          </span>
        </button>
        {/* </div> */}

        {/* Request for offers modal */}
        <Modal
          open={modal1Open}
          onOk={() => setModal1Open(false)}
          onCancel={() => setModal1Open(false)}
          footer={null}
          className=""
          width={687}
        >
          <div className="flex flex-col gap-8 p-0.5">
            <p className="text-[#1C1E19] font-figtree text-2xl font-bold leading-9 border-b">
              Make an offer
            </p>
            <div className="bg-[#121212] rounded-2xl pl-6 pr-10 py-[30px] flex justify-between gap-6">
              <div className="flex items-center  gap-3">
                <img src={EllipseLogo} alt="Ellipse" className="rounded-full" />
                <p className="font-figtree text-base font-medium leading-6 spa text-[#fff]">
                  Paul cross
                </p>
              </div>
              <div className="flex bg-[#303030] justify-between rounded-xl p-4 gap-4 w-[371px]">
                <div className="flex flex-col ">
                  <div className="flex gap-1">
                    <img src={Goal} alt="" className="" />
                    <p className="text-[#7D8897] font-[14px] ml-1 font-figtree spa">
                      Asset type
                    </p>
                  </div>
                  <p className="text-[#fff] font-figtree font-medium mt-2 text-xl leading-normal text-center">
                    Equity
                  </p>
                </div>
                <div className="flex flex-col ">
                  <div className="flex gap-1">
                    <img src={Dollar} alt="" className="" />
                    <p className="text-[#7D8897] ml-1 spa">
                      Total asset valuation
                    </p>
                  </div>
                  <p className="text-[#fff] font-figtree text-xl mt-2 font-medium leading-normal text-center">
                    <span className="text-xs">$</span>300,000
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between pb-3">
                <p className="text-[#101828] font-figtree text-base font-normal leading-5 font-xs">
                  Enter loan offer
                </p>
                <div className="flex gap-2">
                  <Switch
                    defaultChecked={false}
                    onChange={onChange}
                    className="toggle-bg"
                  />

                  <p className="text-[#121212]">Borrow 50% of valuation</p>
                </div>
              </div>
              <div className="bg-[#F7F8FA] border border-[#E3E6EA] rounded-xl w-full p-4">
                <p className="text-[#7D8897] font-figtree text-base font-normal leading-6">
                  $ <span className="ml-2 text-[#121212]">90,000</span>
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#101828] font-figtree text-base font-normal leading-5 pb-2">
                Interest rate
              </p>
              <div className="bg-[#F7F8FA] border border-[#E3E6EA] rounded-xl w-full p-4">
                <p className="text-[#7D8897] font-figtree text-base font-normal leading-6">
                  % <span className="ml-2 text-[#121212]">5%</span>
                </p>
              </div>
            </div>
            <div>
              <p>Select loan duration</p>
              <div
                style={{ display: "flex", flexDirection: "column", rowGap: 8 }}
              >
                <Slider
                  defaultValue={6}
                  min={1}
                  className="bg-white text-black"
                  max={12}
                  style={{ background: "white" }}
                  tooltip={{
                    open: modal1Open,
                    placement: "bottom",
                    formatter: (value) => <div>{value} months</div>,
                  }}
                />
                {/* <InputField id="medium-range" type="range" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /> */}
              </div>
              {/* <div className="text-[#101828] font-figtree font-medium mt-2 leading-6 text-sm max-sm:text-sm">
                4 months
              </div> */}
            </div>
            <span className="border border-b mt-2"></span>
            <p className="text-[#101828] font-figtree text-base font-normal leading-6">
              Fees
              <span className="text-[#18B377] font-figtree text-base font-bold leading-6 pl-4">
                $45.00
              </span>
            </p>
            <div className="">
              <button
                onClick={handleContinueClick}
                className="flex items-center gap-4 bg-[#296CD6]  py-6 text-[#FFFFFF] rounded-3xl mb-4 w-[364px] font-bold     justify-center   mx-auto"
              >
                Send proposal
              </button>
            </div>
          </div>
        </Modal>

        {/* offer sent modal */}
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
                Offer sent
              </p>
            </div>

            <p className="text-fadedBlue text-center  font-figtree text-sm font-medium leading-6 mb-6">
              You have successfully sent your proposal for the asset
            </p>
            <Link
              to={`/financial/cart`}
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

export default KandaCartTable;
