import React, { useState } from "react";
import Header from "../../components/common/Header";
import receipt from "../../assets/images/receipt.svg";
import clipboard from "../../assets/images/clipboard.svg";
import validation from "../../assets/images/validation.png";
import infoCircle from "../../assets/images/infoCircle.svg";
import calendar from "../../assets/images/calendar.svg";
import cloud from "../../assets/images/cloud.svg";
import barsFilter from "../../assets/images/barsFilter.svg";
import {
  transactionTableData,
  transactionTableHeader,
} from "../../utils/marketplaceData";
import KandaTableTransaction from "../../components/transaction/KandaTableTransaction";

const TransactionSettlement = () => {
  const [transactionType, setTransactiontype] = useState("Pending");
  const [color, setColor] = useState("#F5A623");

  const modifiedData = transactionTableData.filter((item) =>
    item.includes(`${transactionType}`)
  );

  return (
    <div>
      <Header
        title="Transaction settlement"
        message="See your transactions in real time"
      />
      <div className="mt-8 p-2 bg-[#FAFAFA] rounded-[16px] flex gap-6 items-center">
        <div
          className={`${
            transactionType === "Pending"
              ? "flex gap-3 py-4 px-8 bg-white w-fit rounded-[16px] cursor-pointer"
              : "flex gap-3 py-4 px-8 bg-transparent w-fit rounded-[16px] cursor-pointer"
          }`}
          onClick={() => {
            setTransactiontype("Pending");
            setColor("#F5A623");
          }}
        >
          <img src={receipt} alt="down" />
          <p
            className={`${
              transactionType === "Pending"
                ? "text-[#296CD6]"
                : "text-[#121212]"
            }`}
          >
            Ongoing transactions
          </p>
        </div>
        <div
          className={`${
            transactionType === "Approved"
              ? "flex gap-3 py-4 px-8 bg-white w-fit rounded-[16px] cursor-pointer"
              : "flex gap-3 py-4 px-8 bg-transparent w-fit rounded-[16px] cursor-pointer"
          }`}
          onClick={() => {
            setTransactiontype("Approved");
            setColor("#18B377");
          }}
        >
          <img src={clipboard} alt="check" />
          <p
            className={`${
              transactionType === "Approved"
                ? "text-[#296CD6]"
                : "text-[#121212]"
            }`}
          >
            Completed transactions
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-col md:flex-row gap-6 items-start">
        <div className="bg-[#FAFAFA] rounded-[16px] p-6 md:w-fit w-full flex flex-col gap-7">
          <div className="flex gap-3 items-center">
            <img
              src={validation}
              alt="validation"
              className="bg-[#9BD89B] rounded-[12px] p-1"
            />
            <p className="text-[#797979]">Total amount borrowed</p>
            <img src={infoCircle} alt="infoCircle" />
          </div>
          <h2 className="text-[#101828] font-medium leading-6 text-[24px]">
            $10,000
          </h2>
        </div>
        <div className="flex justify-center gap-4 bg-[#FAFAFA] rounded-[12px] md:w-fit w-full py-[12px] px-[37px]">
          <img src={calendar} alt="calender" />
          <div>
            <select name="duration" id="duration" className="bg-[#FAFAFA]">
              <option value="7" className="text-[#121212] font-medium">
                Last 7 days
              </option>
            </select>
          </div>
        </div>
        <div className="flex gap-4 bg-[#296CD6] rounded-[12px] md:w-fit w-full py-[12px] px-[37px]">
          <p className="text-[#FFF] font-bold leading-6">Download Report</p>
          <img src={cloud} alt="calender" />
        </div>
      </div>

      <div className="mt-[39px] mb-6 flex justify-end">
        <div className="flex p-[18px] border border-[#F0F0F0] rounded-[8px] px-4 py-3 gap-4 items-center bg-[#FAFAFA] justify-center">
          <div className="flex gap-2  items-center cursor-pointer">
            <p className="w-fit text-[#B4B4B4] text-[14px]">Filter by</p>
            <img src={barsFilter} alt="filter" />
          </div>
          <div className="cursor-pointer relative">
            <select
              name="filterType"
              id="filterType"
              className=" text-[#9C9C9C] text-[14px] bg-[#FAFAFA]"
            >
              <option value="option">Equity</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-[70px]">
        <KandaTableTransaction
          header={transactionTableHeader}
          data={modifiedData}
          color={color}
        />
      </div>
    </div>
  );
};

export default TransactionSettlement;
