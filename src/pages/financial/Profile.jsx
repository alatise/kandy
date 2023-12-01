import React, { useState } from "react";
import Header from "../../components/common/Header";
import wemaBig from "../../assets/common/wema-big.png";
import { profileData } from "../../utils/marketplaceData";

const Profile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Header title="Lender" message="Make changes to your profile here" />
      <div className="flex gap-3">
        <img src={wemaBig} alt="wemaBig" />
        <h2>Wema Bank</h2>
      </div>
      <div className="mt-10 flex justify-between">
        {profileData.map((item, index) => {
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

      {profileData[activeIndex].component}
    </div>
  );
};

export default Profile;
