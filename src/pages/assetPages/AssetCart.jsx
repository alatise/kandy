import React from "react";
import FinancialLayout from "../../components/FinancialLayout";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { FaceLogo } from "../../assets/common";
import Notification from "../../assets/common/notification.svg";
import { Link } from "react-router-dom";
import { tableHeader, tableData } from "../../utils/financialCartData";
import KandaCartTable2 from "./KandaCartTable";

const AssetCart = () => {
  return (
    <FinancialLayout>
      <div className="">
        {/* <Header title="" message="Total security" /> */}
        <div className="flex justify-between mb-[30px]">
          <Link to={`/financial/search`} className="hover:text-current">
            <div className="flex items-center mb-4">
              <FaAngleLeft />
              <p className="ml-2">Back</p>
            </div>
          </Link>

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
              Ademola Faith
            </p>
            <FaAngleDown size={18} className="cursor-pointer" />
          </div>
        </div>
        <p className="text-[#121212] font-figtree text-xl font-bold leading-normal">
          Total Security
        </p>
        <KandaCartTable2 header={tableHeader} data={tableData} />
      </div>
    </FinancialLayout>
  );
};

export default AssetCart;
