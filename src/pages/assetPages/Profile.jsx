import React, { useState } from "react";
import Header from "../../components/common/Header";
import User from "../../assets/common/user-asset.svg";
import { profileData } from "../../utils/marketplaceData";
import { profileDataAsset } from "../../utils/marketplaceData";
import { FiCamera } from "react-icons/fi";

const AssetProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Header
        title="User profile"
        message="Make changes to your profile here"
      />
      <div className="flex gap-3">
        <div className="relative">
          <img src={User} alt="User" />
          <FiCamera
            size={18}
            className="text-[#296CD6] absolute bottom-0 right-0"
          />
        </div>
        <h2>Jane Warrios</h2>
      </div>
      <div className="mt-10 flex justify-between">
        {profileDataAsset.map((item, index) => {
          return (
            <div
              className={`${
                activeIndex === index ? " bg-[#F1F7FF]" : " bg-transparent"
              } rounded-[16px] px-12 py-4  cursor-pointer`}
              onClick={() => setActiveIndex(index)}
            >
              <p
                className={`${
                  activeIndex === index
                    ? "text-[#296CD6] font-bold"
                    : "text-[#7D8897] "
                }`}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>

      {profileDataAsset[activeIndex].component}
    </div>
  );
};

export default AssetProfile;
