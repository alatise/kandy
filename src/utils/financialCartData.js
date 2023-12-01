// import dangote from "../../src/assets/common/dangote.png";
import cadbury from "../../src/assets/common/cardbury.png";
import mtn from "../../src/assets/common/mtn.png";
import julius from "../../src/assets/common/julius.png";
import Airtel from "../../src/assets/common/airtel.png";
import facebook from "../../src/assets/common/facebook.png";
// import { FaTrash } from "react-icons/fa";
import Delete from "../../src/assets/signup/delete.svg";

const DeleteIcon = () => (
  <div className="flex items-center gap-2">
    <img src={Delete} size={18} className="text-[#FF8383]" />
    <span className="text-[#FF8383]">Delete</span>
  </div>
);

export const tableHeader = [
  "Equity type",
  "Amount to borrow",
  "Market valuation",
  "",
];

export const tableData = [
  [
    { name: "MTN Nigeria", img: mtn },
    <div>
      <input
        type="text"
        placeholder="Enter amount"
        className="bg-[#F6F6F6] rounded-md px-2 py-1 outline-none"
      />
    </div>,
    "$ 120,000",
    <DeleteIcon />,
  ],
  [{ name: "Cadbury", img: cadbury }, "$20,000.00", "$ 90,000", <DeleteIcon />],
  [{ name: "Airtel", img: Airtel }, "$20,000.00", "$ 90,000", <DeleteIcon />],
  [
    { name: "Facebook", img: facebook },
    "$20,000.00",
    "$ 120,000",
    <DeleteIcon />,
  ],
  [
    { name: "Julius Berger", img: julius },
    "$20,000.00",
    "$ 80,000",
    <DeleteIcon />,
  ],
];
