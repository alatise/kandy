import React, { useEffect, useState } from "react";
import options from "../../assets/images/images/options.svg";
import eye from "../../assets/images/images/eye.svg";

const KandaTableTransaction = ({ header, data, color }) => {
  const [checkOfferPosition, setCheckOfferPosition] = useState({
    top: 50,
    left: 50,
  });
  const [showCheckOffer, setShowCheckOffer] = useState(false);

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
        {/* Your existing table code */}
        <table className="mx-[20px] mt-5 w-[98%] bg-[#FAFAFA] text-sm text-left text-gray-500">
          {showCheckOffer && (
            <div
              style={{
                top: checkOfferPosition.top,
                left: checkOfferPosition.left,
              }}
              className={`absolute flex bg-black w-max py-4 px-3 rounded-[8px] gap-2 text-white text-[16px] translate-x-[-50%] translate-y-[20px] z-[999]`}
            >
              <img src={eye} alt="eye" />
              <p>View details</p>
            </div>
          )}
          <thead className="text-xs border-b text-[#7D8897] font-extralight">
            <tr>
              {header.map((column, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {column}
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody className="text-[#121212] font-semibold">
            {data.map((row, rowIndex) => {
              return (
                <tr key={rowIndex} className="border-b hover:bg-white">
                  {row.map((cell, cellIndex) => {
                    if (cellIndex === row.length - 1) {
                      return <td className={`text-[${color}]`}>{cell}</td>;
                    }
                    return (
                      <td key={cellIndex} className={"px-6 py-4"}>
                        {cellIndex === 0 ? (
                          <div className="flex flex-row space-x-1 items-center">
                            <img
                              className="w-[32px] h-[32px] object-contain rounded-full"
                              src={cell.img}
                              alt=""
                            />
                            <p className="text-center mt-[5px]">{cell.name}</p>
                          </div>
                        ) : (
                          cell
                        )}
                      </td>
                    );
                  })}
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
              );
            })}
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
    </div>
  );
};

export default KandaTableTransaction;
