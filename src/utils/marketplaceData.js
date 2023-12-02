import realEstate from "../../src/assets/images/images/realEstate.png";
import equity from "../assets/images/images/equity.png";
import gold from "../assets/images/images/gold.png";
import bitcoin from "../assets/images/images/bitcoin.png";
import dangote from "../assets/images/images/dangote.png";
import wema from "../assets/images/images/wema.png";
import mtn from "../assets/images/images/mtn.png";
import julius from "../assets/images/images/julius.png";
import Airtel from "../assets/common/airtel.png";
import face1 from "../assets/images/face1.png";
import face2 from "../assets/images/face2.png";
import face3 from "../assets/images/face3.png";
import face4 from "../assets/images/face4.png";
import face5 from "../assets/images/face5.png";
import Enterprice from "../components/transaction/Enterprice";
import Kyc from "../components/transaction/Kyc";
import Notification from "../components/transaction/Notification";
import Faq from "../components/transaction/Faq";
import Password from "../components/transaction/Password";
import Personal from "../pages/assetPages/profileTabs/Personal";
import KycAsset from "../pages/assetPages/profileTabs/Kyc";
import PasswordAsset from "../pages/assetPages/profileTabs/Password";

export const marketplaces = [
  {
    image: realEstate,
    text: "Real estate",
  },
  {
    image: equity,
    text: "Equity",
    active: true,
  },
  {
    image: gold,
    text: "Gold",
  },
  {
    image: bitcoin,
    text: " Bitcoin",
  },
];


export const tableHeader = [
  {
    text: "Equity name",
  },
  {
    text: "Equity Owner",
  },
  {
    text: "Equity valuation",
  },
  {
    text: "Equity valuation",
    type: 'pending'
  },
  {
    text: "Repayment terms",
    type: 'completed'
  },
  {
    text: "Agreement duration",
    type: 'completed'
  },
];

export const transactionTableHeader = [
  "Lender",
  "Transaction asset",
  "Date created",
  "Amount borrowed",
  "Repayment status",
  "Status",
  // "Action",
];


export const tableData = [
  {
    company: { name: "Dangote", img: dangote },
    contactPerson: "Paul Cross",
    revenue: "$400,000,000",
    netIncome: "$400,000,000",
    repayment: 'Monthly',
    agreement: '2 Weeks'
  },
  {
    company: { name: "Airtel", img: Airtel },
    contactPerson: "Seth Gig",
    revenue: "$300,000,000",
    netIncome: "$300,000,000", repayment: 'Monthly',
    agreement: '2 Weeks'
  },
  {
    company: { name: "Wema Bank", img: wema },
    contactPerson: "Adewale Ayuba",
    revenue: "$250,000,000",
    netIncome: "$250,000,000", repayment: 'Monthly',
    agreement: '2 Weeks'
  },
  {
    company: { name: "MTN Nigeria", img: mtn },
    contactPerson: "Mumeen Salman",
    revenue: "$150,000,000",
    netIncome: "$150,000,000", repayment: 'Monthly',
    agreement: '2 Weeks'
  },
  {
    company: { name: "Julius Berger", img: julius },
    contactPerson: "Sodiq Hammed",
    revenue: "$9000",
    netIncome: "$9000", repayment: 'Monthly',
    agreement: '2 Weeks'
  },
];


export const transactionTableData = [
  [
    { name: "Paul cross", img: face1 },
    "Dangote",
    "23 Jun, 2023",
    "$400,000,000",
    "Not started",
    "Pending",
  ],
  [
    { name: "Ufoma Oloha", img: face2 },
    "Gold",
    "23 Jun, 2023",
    "$400,000,000",
    "Not started",
    "Pending",
  ],
  [
    { name: "Sam smith", img: face3 },
    "Dangote",
    "13 Jul, 2023",
    "$400,000,000",
    "Not started",
    "Pending",
  ],
  [
    { name: "Segun Jaye", img: face4 },
    "Facebook",
    "10 Apr, 2023",
    "$400,000,000",
    "Not started",
    "Pending",
  ],
  [
    { name: "Ade Oloba", img: face5 },
    "Dangote",
    "19 Apr, 2023",
    "$400,000,000",
    "Not started",
    "Pending",
  ],
  [
    { name: "Paul cross", img: face1 },
    "Dangote",
    "23 Jun, 2023",
    "$400,000,000",
    "Not started",
    "Approved",
  ],
  [
    { name: "Ufoma Oloha", img: face2 },
    "Gold",
    "23 Jun, 2023",
    "$400,000,000",
    "Not started",
    "Approved",
  ],
  [
    { name: "Sam smith", img: face3 },
    "Dangote",
    "13 Jul, 2023",
    "$400,000,000",
    "Not started",
    "Approved",
  ],
  [
    { name: "Segun Jaye", img: face4 },
    "Facebook",
    "10 Apr, 2023",
    "$400,000,000",
    "Not started",
    "Approved",
  ],
  [
    { name: "Ade Oloba", img: face5 },
    "Dangote",
    "19 Apr, 2023",
    "$400,000,000",
    "Not started",
    "Approved",
  ],
];

export const profileData = [
  {
    text: "Enterprise Information",
    component: <Enterprice />,
  },
  {
    text: "Notification setting",
    component: <Notification />,
  },
  {
    text: "KYC Compliance",
    component: <Kyc />,
  },
  {
    text: "FAQs",
    component: <Faq />,
  },
  {
    text: "Password & Security",
    component: <Password />,
  },
];

export const profileDataAsset = [
  {
    text: "Personal Information",
    component: <Personal />,
  },
  {
    text: "Notification setting",
    component: <Notification />,
  },
  {
    text: "KYC Compliance",
    component: <KycAsset />,
  },
  {
    text: "FAQs",
    component: <Faq />,
  },
  {
    text: "Password & Security",
    component: <PasswordAsset />,
  },
];
