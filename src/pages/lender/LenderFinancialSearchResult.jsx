/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Woman } from "../../assets/common";
import { InfoCircleOutlined  } from "@ant-design/icons";

import { Link } from "react-router-dom";
import SearchHeader from "../../components/dashboard/LenderSearchHeader";
import Kanda from "../../../src/assets/common/Kanda-house.svg";
import { Modal } from "antd";
import InputField from "../../components/common/InputField";
import { CheckCircle } from "../../assets/signup";



const FinancialSearchResult = () => {
  const [modal2Open, setModal2Open] = useState(false);

  const [modal3Open, setModal3Open] = useState(false);



  return (
    <div>
      {/* Heading */}
      <SearchHeader />
      {/* Search result section */}


      <div className="w-full">
        {/* FILTER FUNCTIONALITY */}

        <div className="w-[1246px] h-[127px] bg-kandaBlack rounded-2xl">
            <div className="mr-20 p-8">
                <InfoCircleOutlined className="text-kandaBlue  text-[20px] mr-4" />
                <span className="font-normal text-[18px]  text-white">Asset not profiled on Kanda. Once you send proposal via email, user will need to create account to see proposal</span> 
                <p className="mt-6"><a onClick={() => setModal2Open(true)} className="font-normal text-[18px] underline text-kandaBlue" >Send proposal to email</a></p>
            </div>
                    
        </div>
        <div className="flex flex-col mt-10">
            <div className="flex-1  border-[#DADADA] w-full "></div>

            <div className="w-[692px] h-[321px] bg-[#F4F4F4] rounded-2xl">
              <div className="flex items-center px-5 mt-6">
                <div className="flex-row mb-4">
                    <div className="flex ">
                      <img src={Kanda} className="w-[248px] h-[248px]" alt="" />
                    </div>
                    <div className="flex mr-[10px] mt-2">
                        <img src={Woman} alt="" className="w-[24px] h-[24px] mr-2"  srcset="" />
                        <p >Owned by<span className="text-[#000] font-bold mt-2">Teniola Ogunmola</span> </p>&nbsp;
                    </div>
                </div>

                <div className=" mx-6 flex text-contentFade">
                    <div className="flex-col justify-between">
                        <div className="mr-20 w-[150px]">
                            <p className="font-normal py-2">Name of asset</p> 
                            <span className="font-bold text-kandaBlack" >Parkview estate</span>
                        </div>
                        <div className="py-6">
                            <p className="font-normal py-2">Valuation</p> 
                            <span className="font-bold text-kandaBlack" >$ 5,000,000.00</span>
                        </div>
                    </div>

                    <div className="flex-col justify-between">
                        <div className="">
                            <p className="font-normal py-2">Plan no</p> 
                            <span className="font-bold text-kandaBlack" >P34950-203994</span>
                        </div>
                        <div className="py-6">
                            <p className="font-normal py-2">Root of title file no</p> 
                            <span className="font-bold text-kandaBlack" >20349HN</span>
                        </div>
                    </div>
                </div>

              </div>
            </div>

          </div>
          <Modal
              open={modal2Open}
              onOk={() => setModal2Open(false)}
              onCancel={() => setModal2Open(false)}
              footer={null}
            >
              <div className="flex flex-col gap-4 py-10">
                
              <div>
                  <p className="text-contentPrimary text-[36px] font-bold ">
                  Enter email
                  </p>

                  <div className="border-b border-b-[#DADADA] "></div>
              </div>

                <InputField label={`Enter email`} placeHolder={`Enter user email`} />

                <div className="flex justify-center items-center">
                <button
                   onClick={() => setModal3Open(true)}
                   onOk={() => setModal2Open(false)}
                   onCancel={() => setModal2Open(false)}
                   className="flex text-white bg-kandaBlue font-bold py-6 mt-4 rounded-2xl w-[80%]  justify-center items-center gap-2"
                  >
                  Send proposal
                  </button>
                </div>
              </div>
            </Modal>

            <Modal
              open={modal3Open}
              onOk={() => setModal3Open(false)}
              onCancel={() => setModal3Open(false)}
              footer={null}
            >
              <div className="flex flex-col gap-4 items-center justify-center px-14 py-14 ">
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="w-[32px] h-[32px] mt-1"
                    width="64px"
                    height="64px"
                    alt="check"
                    src={CheckCircle}
                  />
                  <p className="text-center text-[#1C1E19] font-figtree text-2xl font-bold leading-9 mt-2">
                  Sorry, we cannot find this asset
                  </p>
                </div>

                <p className="text-fadedBlue text-center  font-figtree font-medium leading-6 mb-6 text[16px]">
                We have searched our database, but we could not find any result
                for this asset number. Please try again with the right number
                </p>
                <Link
                  to={`/lender/dashboard`}
                  className="w-full flex items-center justify-center"
                >
                  <button
                    // onClick={() => setModal3Open(false)} 
                    className="flex text-white bg-kandaBlue font-bold py-4 rounded-2xl w-[80%]  justify-center items-center gap-2"
                  >
                    Try again 
                  </button>
                </Link>
              </div>
            </Modal>

      </div>
    </div>
  );
};

export default FinancialSearchResult;
