/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  Mtn,
  MtnTag,
  Airtel,
  AirtelTag,
  CardBury,
  CardBuryTag,
  FaceBook,
  FaceBookTag,
  Julius,
  JuliusTag,
} from "../../assets/common";

import KandaTable from "../../components/common/KandaTable";
import { MdGridOn } from "react-icons/md";
import { FaArrowRight, FaList } from "react-icons/fa";
import Grid from "./SearchResultGridView";
import { Link } from "react-router-dom";
import SearchHeader from "../../components/dashboard/SearchHeader";
import { tableData } from "../../utils/data";

const columns = [
  {
    title: "S/N",
    dataIndex: "key",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Equity name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Total no of shares",
    dataIndex: "age",
  },
  {
    title: "Price per share",
    dataIndex: "age",
  },
  {
    title: "Market valuation",
    dataIndex: "age",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    name: record.name,
  }),
};

const stakeData = [
  {
    StakeLogo: Mtn,
    cardName: "MTN",
    marketValuation: 100.04,
    StakeTag: MtnTag,
    pricePerShare: 300,
    numbersOfShares: 10,
  },
  {
    StakeLogo: CardBury,
    cardName: "Cardbury",
    StakeTag: CardBuryTag,
    marketValuation: 400.04,
    pricePerShare: 10,
    numbersOfShares: 10,
  },
  {
    StakeLogo: Airtel,
    cardName: "Airtel",
    StakeTag: AirtelTag,
    marketValuation: 610.12,
    pricePerShare: 10,
    numbersOfShares: 10,
  },
  {
    StakeLogo: FaceBook,
    cardName: "Facebook",
    StakeTag: FaceBookTag,
    marketValuation: 234.01,
    pricePerShare: 10,
    numbersOfShares: 10,
  },
  {
    StakeLogo: Julius,
    cardName: "Julius Berger",
    StakeTag: JuliusTag,
    marketValuation: 500.04,
    pricePerShare: 10,
    numbersOfShares: 10,
  },
];

const tableHeader = [
  "S/N",
  "Equity name",
  "Total no of shares",
  "Price per share",
  "Market valuation",
];

const FinancialSearchResult = () => {
  const [isChecked, setChecked] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [activeView, setActiveView] = useState("list");

  const handleToggle = () => {
    if (isChecked) {
      setSelectedRows([]); // If checked, unselect all items
    } else {
      setSelectedRows(tableData.map((_, index) => index)); // If unchecked, select all items
    }
    setChecked(!isChecked);
  };

  const switchView = (view) => {
    setActiveView(view);
  };

  const handleCheckboxChange = (rowIndex) => {
    const isSelected = selectedRows.includes(rowIndex);
    if (isSelected) {
      setSelectedRows(selectedRows.filter((row) => row !== rowIndex));
    } else {
      setSelectedRows([...selectedRows, rowIndex]);
    }
    setChecked(selectedRows.length === tableData.length - 1); // Update isChecked based on the selection status
  };

  const isAllSelected = data.length > 0 && selectedRows.length === data.length;

  return (
    <div>
      {/* Heading */}
      <SearchHeader />
      {/* Search result section */}

      <div className="w-full">
        {/* FILTER FUNCTIONALITY */}
        <div className="flex w-full justify-between items-end">
          {selectedRows.length === 0 ? (
            <p className="text-[#121212] mt-4 mb-8 font-figtree text-base font-semibold leading-normal">
              Select one or more shares to stake as collateral.
            </p>
          ) : (
            <div className="flex gap-10">
              <div className="py-[1.2rem] px-2 w-[37rem] border-2 rounded-[2rem] flex flex-row justify-between">
                <p className="pl-4 font-medium text-lg ">
                  {selectedRows.length > 0
                    ? `${selectedRows.length} ${
                        selectedRows.length === 1 ? "share" : "shares"
                      } selected`
                    : "No shares selected"}
                </p>

                <div>
                  <label className="flex items-center">
                    {/* TOGGLE SWITCH */}
                    <input
                      className="relative toggle-switch w-10 h-5 transition-all duration-200 ease-in-out bg-gray-400 rounded-full shadow-inner outline-none appearance-none "
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleToggle}
                    />
                    <span className="ml-2 pr-4 font-medium text-base">
                      {isChecked ? (
                        <p>You've selected all</p>
                      ) : (
                        <p>Select all shares?</p>
                      )}
                    </span>
                  </label>
                </div>
              </div>
              <div className="flex">
                <Link to={`/financial/cart`} className="">
                  <button className="flex items-center gap-4 text-base bg-[#296CD6] px-20 py-6 text-[#FFFFFF] rounded-full">
                    Continue
                    <span>
                      <FaArrowRight />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <div
              className={`flex flex-col gap-1 items-center cursor-pointer ${
                activeView === "grid"
                  ? "text-blue-500 border border-[#296CD6] p-2 rounded-xl px-[13px]"
                  : "text-[#B1B1B1] p-2"
                  
              }`}
              onClick={() => switchView("grid")}
            >
              <p className="font-figtree text-xs font-bold leading-normal ">
                Grid
              </p>
              <MdGridOn size={18} />
            </div>

            <div
              className={`flex flex-col gap-1 items-center cursor-pointer ${
                activeView === "list"
                  ? "text-blue-500 border border-[#296CD6] p-2 rounded-xl px-[13px]"
                  : "text-[#B1B1B1] p-2"
              }`}
              onClick={() => switchView("list")}
            >
              <p className="font-figtree text-xs font-bold leading-normal">
                List
              </p>
              <FaList size={18} />
            </div>
          </div>
        </div>

        <div className="mt-[40px] flex flex-wrap gap-5">
          {activeView === "list" && (
            <KandaTable
              header={tableHeader}
              data={tableData}
              rowSelection={{
                selectedRows,
                onChange: handleCheckboxChange,
              }}
            />
          )}
          {activeView === "grid" && (
            <Grid
              data={tableData}
              selectedRows={selectedRows}
              onCheckboxChange={handleCheckboxChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FinancialSearchResult;
