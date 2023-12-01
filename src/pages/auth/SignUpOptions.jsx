import React from "react";
import { LogoWhite } from "../../assets/common";
import {
  FinancialImg,
  FinancialDonut,
  AssetImg,
  AssetDonut,
} from "../../assets/signup";
import { Link } from "react-router-dom";

function SignUpOptions() {
  return (
    <main className="h-[1350px] flex justify-center bg-signUp md:h-[1380px] xl:h-screen">
      <div className="pt-[105px]  w-full md:w-auto">
        <div className="flex justify-center">
          <img src={LogoWhite} alt="logo" />
        </div>
        <div className="mt-[30px] text-white text-center">
          <h1 className="max-sm:text-[1.5rem]">We are glad you are here 👋🏾</h1>
          <p className="mt-4 font-normal max-sm:text-[0.8rem]">
            Select one from the two options below to continue
          </p>
        </div>

        <div className="flex flex-col justify-center mt-10 gap-6 xl:flex-row md:flex-col lg:flex-col">
          <div className="bg-white w-[80%] md:w-[80%]  xl:max-w-xl  mx-auto rounded-[2rem]  p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center md:gap-9">
              <div className="max-w-md">
                <h1 className="bg-kandaBlue text-white w-fit leading-none">
                  Financial
                </h1>
                <h1 className="bg-white text-kandaBlack text-xl md:text-2xl font-bold mt-4">
                  Institution
                </h1>

                <p className="mt-4 text-gray-[#121212]">
                  You lend money and want to get good return on your investments
                </p>

                <Link to={"/financial/signup"}>
                  <button className="text-white bg-kandaBlack font-bold py-2 px-4 md:py-6 md:px-9 rounded-[24px] max-sm:rounded-[15px] mt-6 md:mt-9">
                    Get started
                  </button>
                </Link>
              </div>

              <div className="w-full md:min-w-[275px] h-[200px] md:h-[400px] relative mt-4 md:mt-0">
                <img
                  src={FinancialImg}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src={FinancialDonut}
                  alt=""
                  className="absolute -top-4 right-0 md:-top-2 md:right-0"
                />
              </div>
            </div>
          </div>

          <div className="bg-white w-[80%] md:w-[80%]  xl:max-w-xl mx-auto rounded-[2rem]  p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center md:gap-8">
              <div className="max-w-md">
                <h1 className="bg-kandaGreen text-white w-fit leading-none">
                  Asset
                </h1>
                <h1 className="text-kandaBlack text-xl md:text-2xl font-bold mt-4">
                  Owner
                </h1>

                <p className="mt-4 text-gray-[#121212]">
                  You have assets that you are looking to liquidate in a seamless way
                </p>

                <Link to={"/asset/signup"}>
                  <button className="text-white bg-kandaBlack font-bold py-2 px-4 md:py-6 md:px-9 rounded-[24px] max-sm:rounded-[15px] mt-6 md:mt-9">
                    Get started
                  </button>
                </Link>
              </div>

              <div className="w-full md:min-w-[275px] h-[200px] md:h-[400px] relative mt-4 md:mt-0">
                <img
                  src={AssetImg}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src={AssetDonut}
                  alt=""
                  className="absolute -top-2 right-0 md:-top-4 md:right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUpOptions;
