import React, { useState } from "react";
import { SearchOutlined, ArrowRightOutlined  } from "@ant-design/icons";
import {
  HomeLogo,
  GoalLogo,
  IngotLogo,
  GemLogo,
  FaceLogo,
} from "../../assets/common";
import { Link } from "react-router-dom";
import Notification from "../../../src/assets/common/notification.svg";
import { FaAngleDown, FaInfoCircle, FaAngleUp } from "react-icons/fa";
import LogoBlue from "../../../src/assets/common/Kanda-Logo.svg";

const FinancialDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mb-40">
      {/* Heading restructured */}
      <div className="flex justify-between mb-[38px]">
        <div className="flex h-[58px] flex-col">
          <h4 className="text-kandaBlack text-[30px] font-bold">Dashboard</h4>
          <p className="text-[#7D8897]">Have a quick view of all assets</p>
        </div>

        <div className="h-8 flex items-center">
          <div className="h-[28px] w-[48px] bg-gradient-to-r from-[#296CD6] to-[#9438EF] mr-[16px] rounded-[14px] flex gap-1 px-2 items-center justify-center">
            <img src={Notification} alt="" />
            <p className="text-[#fff] text-right font-helvetica-neue text-xs font-medium leading-normal">
              15
            </p>
          </div>
          <div className="h-8 w-8 bg-kandaBlue mr-[8px] rounded-md">
            <img src={FaceLogo} alt="" srcset="" />
            
          </div>
          <p className="text-[13px] text-kandaBlack font-medium mr-[4px]">
            Emmanuel Odo
          </p>
          <FaAngleDown size={18} className="cursor-pointer" />
        </div>
      </div>

      {/* Search section */}
      <div className="h-[420px] bg-lender rounded-r-[300px] pt-[30px]">
        <div className="mt-[30px] h-[138px] w-[408px] ml-[64.44px]">
          <div className="h-[58px] w-[100px] text-center rounded-[6px] bg-white mt-[30px]">
            <div className="text-center  pt-1">
              <img src={LogoBlue} alt="" />
            </div>
          </div>
          <p className="mt-[16px] text-[32px] text-kandaBlue font-bold">Search for assets below</p>

          <p className="mt-[12px] text-[12px] text-[#7D8897] font-medium">
          You can search with asset title number 
          </p>

          <div className="mt-[40px] flex items-center justify-between h-[88px] md:w-[500px] max-w-[1012px] lg:w-[1012px] bg-[#F9FBFF] rounded-[32px]">
            <div className="flex justify">
              <div className="ml-12 w-52 pr-4 flex border-gray-300">
                <SearchOutlined className="text-[#296CD6] text-[24px]" />{" "}
                <span className="font-medium text-[16px] text-[#7D8897] ml-3 ">Search</span>
              </div>
            
            </div>

            <Link to="/lender/search">
              <button className="bg-kandaBlue h-[72px] w-[166px] rounded-[28px] mr-2 text-white">
                <span className="font-bold text-[16px] mr-4">Go</span>
                <ArrowRightOutlined className="font-bold"/>{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[1000px] mx-auto mb-[30px]">
        <div className="w-[88px] h-[117px] mt-[50px]">
          <div className="h-[14px] flex justify-between mb-[30px] w-[881px] mx-auto">
            <div class="relative flex py-5 w-full items-center">
              <div class="flex-grow border-t border-[#EAEAEA]-400"></div>
              <span class="flex-shrink mx-4 text-[#52647D] text-[14px] opacity-70">
                Other assets you can search
              </span>
              <div class="flex-grow border-t border-[#EAEAEA]-400"></div>
            </div>
          </div>

          <div className="mt-[20px] flex justify-between h-[99px] w-[881px]">
            <div className="w-[202px] flex items-center h-[99px] bg-[#FFF] rounded-[10px] shadow-2xl">
              <div className="h-[50px] w-[155px] flex mx-auto">
                <div className="h-[48px] w-[48px] bg-[#DDF5FF] flex rounded-[48px]">
                  <img className="" src={HomeLogo} alt="" srcset="" />
                </div>
                <div className="ml-[7px]">
                  <p className="mb-[12px] text-kandaBlack text-[16px] font-medium">
                    Real estate
                  </p>
                  <div className="flex">
                    <div className="flex h-[15px] w-[99px] shrink">
                      <div className="h-[14px] w-[36px]">
                       <svg
                          className="mt-[-18px]"
                          width="57"
                          height="48"
                          // viewBox="0 0 57 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_f_337_2165)">
                            <ellipse
                              cx="29.6755"
                              cy="24.016"
                              rx="7.91173"
                              ry="4.58047"
                              transform="rotate(-11 29.6755 24.016)"
                              fill="url(#paint0_linear_337_2165)"
                            />
                          </g>
                          <path
                            d="M1.68408 32.9928C1.68408 32.9928 4.47621 27.817 7.68408 29.5992C10.892 31.3813 11.3077 32.9928 14.1591 31.9235C17.0106 30.8542 17.1891 21.817 19.6841 23.5992C22.1791 25.3813 28.3376 28.9456 33.6841 23.5992"
                            stroke="url(#paint1_linear_337_2165)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <filter
                              id="filter0_f_337_2165"
                              x="2.98309"
                              y="0.395203"
                              width="53.3849"
                              height="47.2408"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="9.43814"
                                result="effect1_foregroundBlur_337_2165"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_337_2165"
                              x1="30.5178"
                              y1="31.2535"
                              x2="35.4917"
                              y2="23.8485"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#62CBFF" stop-opacity="0.01" />
                              <stop offset="1" stop-color="#339CFE" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_337_2165"
                              x1="21.448"
                              y1="20.8188"
                              x2="14.6532"
                              y2="38.0939"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#309AFF" />
                              <stop
                                offset="1"
                                stop-color="#52AD97"
                                stop-opacity="0.01"
                              />
                            </linearGradient>
                          </defs>
                        </svg> 
                      </div>

                      <div className="ml-[5px]">
                        <svg
                          width="7"
                          height="6"
                          viewBox="0 0 7 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.92201 3.60609L3.01287 4.51523C2.67814 4.84996 2.13542 4.84996 1.80069 4.51523C1.46595 4.18049 1.46595 3.63778 1.80069 3.30305L2.70983 2.39391L0.315918 0H6.31592V6L3.92201 3.60609Z"
                            fill="#2BB596"
                          />
                        </svg>
                      </div>
                      <span className="text-[#2BB596] font-normal text-[11px] ml-[5px]">
                        +39.69%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[202px] flex items-center h-[99px] bg-[#FFF] rounded-[10px] shadow-2xl">
              <div className="h-[50px] w-[155px] flex mx-auto">
                <div className="h-[48px] w-[48px] bg-[#FFEDF3] flex rounded-[48px]">
                  <img className="" src={GoalLogo} alt="" srcset="" />
                </div>
                <div className="ml-[7px]">
                  <p className="mb-[12px] text-kandaBlack text-[16px] font-medium">
                    Equities
                  </p>
                  <div className="flex">
                    <div className="flex h-[15px] w-[99px] shrink">
                      <div className="h-[14px] w-[36px]">
                        <svg
                          className="mt-[-18px]"
                          width="57"
                          height="48"
                          // viewBox="0 0 57 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_f_337_2165)">
                            <ellipse
                              cx="29.6755"
                              cy="24.016"
                              rx="7.91173"
                              ry="4.58047"
                              transform="rotate(-11 29.6755 24.016)"
                              fill="url(#paint0_linear_337_2165)"
                            />
                          </g>
                          <path
                            d="M1.68408 32.9928C1.68408 32.9928 4.47621 27.817 7.68408 29.5992C10.892 31.3813 11.3077 32.9928 14.1591 31.9235C17.0106 30.8542 17.1891 21.817 19.6841 23.5992C22.1791 25.3813 28.3376 28.9456 33.6841 23.5992"
                            stroke="url(#paint1_linear_337_2165)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <filter
                              id="filter0_f_337_2165"
                              x="2.98309"
                              y="0.395203"
                              width="53.3849"
                              height="47.2408"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="9.43814"
                                result="effect1_foregroundBlur_337_2165"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_337_2165"
                              x1="30.5178"
                              y1="31.2535"
                              x2="35.4917"
                              y2="23.8485"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#62CBFF" stop-opacity="0.01" />
                              <stop offset="1" stop-color="#339CFE" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_337_2165"
                              x1="21.448"
                              y1="20.8188"
                              x2="14.6532"
                              y2="38.0939"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#309AFF" />
                              <stop
                                offset="1"
                                stop-color="#52AD97"
                                stop-opacity="0.01"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <div className="ml-[5px]">
                        <svg
                          width="7"
                          height="6"
                          viewBox="0 0 7 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.92201 3.60609L3.01287 4.51523C2.67814 4.84996 2.13542 4.84996 1.80069 4.51523C1.46595 4.18049 1.46595 3.63778 1.80069 3.30305L2.70983 2.39391L0.315918 0H6.31592V6L3.92201 3.60609Z"
                            fill="#2BB596"
                          />
                        </svg>
                      </div>
                      <span className="text-[#2BB596] font-normal text-[11px] ml-[5px]">
                        +39.69%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[202px] flex items-center h-[99px] bg-[#FFF] rounded-[10px] shadow-2xl">
              <div className="h-[50px] w-[155px] flex mx-auto">
                <div className="h-[48px] w-[48px] bg-[#EAEAEA] flex rounded-[48px]">
                  <img className="" src={IngotLogo} alt="" srcset="" />
                </div>
                <div className="ml-[7px]">
                  <p className="mb-[12px] text-kandaBlack text-[16px] font-medium">
                    Gold
                  </p>
                  <div className="flex">
                    <div className="flex h-[15px] w-[99px] shrink">
                      <div className="h-[14px] w-[36px]">
                        <svg
                          className="mt-[-18px]"
                          width="59"
                          height="48"
                          viewBox="0 0 59 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_f_337_2198)">
                            <ellipse
                              cx="7.82492"
                              cy="3.36961"
                              rx="7.82492"
                              ry="3.36961"
                              transform="matrix(0.877293 0.479955 -0.489683 0.8719 27.6821 17.6133)"
                              fill="url(#paint0_linear_337_2198)"
                            />
                          </g>
                          <path
                            d="M32.5884 25.0429C32.5884 25.0429 29.7963 19.3361 26.5884 21.0951C23.3805 22.854 20.39 22.8788 15.4892 17.5455C10.5884 12.2123 6.93484 22.8223 1.58838 17.5455"
                            stroke="url(#paint1_linear_337_2198)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <filter
                              id="filter0_f_337_2198"
                              x="6.95868"
                              y="0.662781"
                              width="51.8763"
                              height="47.2897"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="9.43814"
                                result="effect1_foregroundBlur_337_2198"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_337_2198"
                              x1="8.55518"
                              y1="8.64251"
                              x2="11.6327"
                              y2="2.48264"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#FF62B8" stop-opacity="0.01" />
                              <stop offset="1" stop-color="#FE33D1" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_337_2198"
                              x1="3.22333"
                              y1="11.195"
                              x2="11.4601"
                              y2="32.9875"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#A330FF" stop-opacity="0.01" />
                              <stop offset="1" stop-color="#F97298" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <div className="ml-[5px]">
                        <svg
                          width="7"
                          height="6"
                          viewBox="0 0 7 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.01771 2.39391L3.10858 1.48477C2.77384 1.15004 2.23113 1.15004 1.89639 1.48477C1.56166 1.81951 1.56166 2.36222 1.89639 2.69695L2.80553 3.60609L0.411621 6H6.41162V0L4.01771 2.39391Z"
                            fill="#E3507A"
                          />
                        </svg>
                      </div>
                      <span className="text-[#E3507A] font-normal text-[11px] ml-[5px]">
                        +39.69%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[202px] flex items-center h-[99px] bg-[#FFF] rounded-[10px] shadow-2xl">
              <div className="h-[50px] w-[155px] flex mx-auto">
                <div className="h-[48px] w-[48px] bg-[#FFEFF0] flex rounded-[48px]">
                  <img className="" src={GemLogo} alt="" srcset="" />
                </div>
                <div className="ml-[7px]">
                  <p className="mb-[12px] text-kandaBlack text-[16px] font-medium">
                    Other assets
                  </p>
                  <div className="flex">
                    <div className="flex h-[15px] w-[99px] shrink">
                      <div className="h-[14px] w-[36px]">
                        <svg
                          className="mt-[-18px]"
                          width="57"
                          height="48"
                          // viewBox="0 0 57 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_f_337_2165)">
                            <ellipse
                              cx="29.6755"
                              cy="24.016"
                              rx="7.91173"
                              ry="4.58047"
                              transform="rotate(-11 29.6755 24.016)"
                              fill="url(#paint0_linear_337_2165)"
                            />
                          </g>
                          <path
                            d="M1.68408 32.9928C1.68408 32.9928 4.47621 27.817 7.68408 29.5992C10.892 31.3813 11.3077 32.9928 14.1591 31.9235C17.0106 30.8542 17.1891 21.817 19.6841 23.5992C22.1791 25.3813 28.3376 28.9456 33.6841 23.5992"
                            stroke="url(#paint1_linear_337_2165)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <filter
                              id="filter0_f_337_2165"
                              x="2.98309"
                              y="0.395203"
                              width="53.3849"
                              height="47.2408"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="9.43814"
                                result="effect1_foregroundBlur_337_2165"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_337_2165"
                              x1="30.5178"
                              y1="31.2535"
                              x2="35.4917"
                              y2="23.8485"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#62CBFF" stop-opacity="0.01" />
                              <stop offset="1" stop-color="#339CFE" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_337_2165"
                              x1="21.448"
                              y1="20.8188"
                              x2="14.6532"
                              y2="38.0939"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#309AFF" />
                              <stop
                                offset="1"
                                stop-color="#52AD97"
                                stop-opacity="0.01"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <div className="ml-[5px]">
                        <svg
                          width="7"
                          height="6"
                          viewBox="0 0 7 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.92201 3.60609L3.01287 4.51523C2.67814 4.84996 2.13542 4.84996 1.80069 4.51523C1.46595 4.18049 1.46595 3.63778 1.80069 3.30305L2.70983 2.39391L0.315918 0H6.31592V6L3.92201 3.60609Z"
                            fill="#2BB596"
                          />
                        </svg>
                      </div>
                      <span className="text-[#2BB596] font-normal text-[11px] ml-[5px]">
                        +39.69%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;
