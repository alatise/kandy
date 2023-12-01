import React from "react";
import { FaAngleDown } from "react-icons/fa";
import FaceLogo from "../../../src/assets/common/Face.png";
import Notification from "../../../src/assets/common/notification.svg";
import { Link } from "react-router-dom";

const Header = ({ title, message }) => {
  return (
    <div className="flex justify-between mb-[38px]">
      <div className="flex h-[58px] flex-col gap-2">
        <h4 className="text-kandaBlack md:text-[30px] text-sm font-bold">
          {title}
        </h4>
        <p className="text-[#7D8897] md:text-base text-xs">{message}</p>
      </div>

      <div className="h-8 flex items-center">
        <div className="h-[28px] w-[48px] bg-gradient-to-r from-[#296CD6] to-[#9438EF] mr-[16px] rounded-[14px] md:flex gap-1 px-2 items-center justify-center hidden">
          <img src={Notification} alt="" />
          <p className="text-[#fff] text-right font-helvetica-neue text-xs font-medium leading-normal">
            15
          </p>
        </div>
        <div className="h-8 w-8 bg-kandaBlue mr-[8px] rounded-md">
          <img src={FaceLogo} alt="" srcset="" />
        </div>
        <p className="text-[13px] text-kandaBlack font-medium mr-[4px] md:block hidden">
          Emmanuel Odo
        </p>
        <Link to="/financial/profile">
          <FaAngleDown size={18} className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
