import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Pagination } from "antd";

const KandaTable = ({ header, data, rowSelection }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // const pageSize = 5;
  // const total = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Perform any additional actions, like fetching data for the new page.
  };

  // const handlePageSizeChange = (value) => {
  //   // Handle the change in the number of items per page
  //   // You can perform any relevant actions here
  //   console.log(`Selected ${value} entries per page`);
  // };
  const { selectedRows, onChange } = rowSelection;

  return (
    <div className=" w-full bg-[#FAFAFA]   overflow-x-auto shadow-md sm:rounded-lg">
      <label className="flex items-center">
        {/* Your existing table code */}
        <table className="mx-[20px] mt-5 w-[98%] bg-[#FAFAFA] text-sm text-left text-gray-500 ">
          <thead className="text-xs border-b text-[#7D8897] font-extralight">
            <tr>
              {header.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 font-[14px] font-Figtree"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#121212] font-normal font-Figtree">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b hover:bg-white ${
                  selectedRows.includes(rowIndex) ? "bg-gray-200" : ""
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
                        <input
                          id={`checkbox-table-${rowIndex}`}
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-[2em] focus:ring-blue-500 focus:ring-2"
                          checked={selectedRows.includes(rowIndex)}
                          onChange={() => onChange(rowIndex)}
                        />
                        <label
                          htmlFor={`checkbox-table-${rowIndex}`}
                          className="sr-only"
                        >
                          checkbox
                        </label>
                        <p className="ml-2 font-normal font-Figtree">{cell}</p>
                      </div>
                    ) : cellIndex === 1 ? (
                      <div className="flex flex-row space-x-1 items-center">
                        <img
                          className="w-[32px] h-[32px] mr-2"
                          src={cell.img}
                          alt=""
                        />
                        <p className="text-center mt-[5px] font-normal font-Figtree">
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
      </label>
      <div className="flex flex-row justify-between mx-[50px] mt-[2rem] mb-[2rem] text-[#7D8897]">
        <div className="flex items-center gap-4">
          <FaArrowLeft className="text-[#667085]" />
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

        <div className="flex items-center gap-4">
          <p>Next</p>
          <FaArrowRight className="text-[#667085]" />
        </div>
      </div>
    </div>
  );
};

export default KandaTable;
