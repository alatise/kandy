import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogoBlue } from "../../../../assets/common";
import { Progress } from 'antd';

const twoColors = { '0%': '#296CD6', '100%': '#6FC6F7' };


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


const FinancialLoading = () => {
  const [percent, setPercent] = React.useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prevPercent) => {
        const newPercent = prevPercent >= 100 ? 100 : prevPercent + 1;
        if (newPercent === 100) {
          navigate("/financial/welcome")
        }
        return newPercent;
      });
    }, 80);

    return () => {
      clearInterval(timer);
    };
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-3">
        <div className="">
          <img src={LogoBlue} alt="" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }} >
          <Progress percent={percent} strokeColor={twoColors} className="w-[500px] max-sm:w-[360px]" />

        </div>
        <div className="text-[#121212]">
          We are loading your Kanda experience
        </div>
      </div>
    </div>
  );
};

export default FinancialLoading;
