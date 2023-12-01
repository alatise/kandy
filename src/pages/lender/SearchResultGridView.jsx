import React from "react";
import StakeCard from "../../components/common/StakeCard";
import {
  StakeTag,
  StakeLogo,
  JuliusTag,
  Julius,
  CardBuryTag,
} from "../../assets/common";
import Mtn from "../../../src/assets/common/mtn.png";
import MtnTag from "../../../src/assets/common/mtn-tag.png";
import Cardbury from "../../../src/assets/common/cardbury.png";
import Airtel from "../../../src/assets/common/airtel.png";
import AirtelTag from "../../../src/assets/common/airtel-tag.png";
import Facebook from "../../../src/assets/common/facebook.png";
import FacebookTag from "../../../src/assets/common/facebook-tag.png";
import { tableData } from "../../utils/data";

const Grid = ({ data, selectedRows, onCheckboxChange }) => {
  return (
    <div className="grid md:grid-cols-4 md:gap-20 gap-4">
      {data.map((rowData, index) => (
        <div key={index} className="w-fullt md:w-1/4 lg:w-1/4 xl:w-1/4">
          <StakeCard
            cardName={rowData[1].name}
            numbersOfShares={rowData[2].split(" ")[0]}
            pricePerShare={rowData[3].substring(1)}
            marketValuation={rowData[4].substring(1)}
            StakeLogo={rowData[1].img}
            StakeTag={rowData[1].img}
            isSelected={selectedRows.includes(index)}
            onSelect={() => onCheckboxChange(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Grid;
