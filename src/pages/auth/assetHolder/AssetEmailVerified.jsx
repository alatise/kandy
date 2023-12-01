import { Link } from "react-router-dom";
import { Email, LogoBlue } from "../../../assets/common";

const AssetEmailVerified = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-[#FAFAFA] p-8 rounded-xl py-[67.5px] px-[140px]">
        <div className="flex flex-col items-center space-y-3">
          <div className="">
            <img src={LogoBlue} alt="" />
          </div>

          <div className="pt-6">
            <img src={Email} alt="" />
          </div>

          <p className="text-contentPrimary text-center text-2xl font-extrabold md:text-3xl">
            Verify your email
          </p>
          <div className="text-[#0A243F] text-center md:w-[400px] font-extralight ">
            To keep Kanda safe, we have sent an email to{" "}
            <span className="text-contentPrimary font-[900]">
              ok*****@gmail.com
            </span>{" "}
            for verification, and you’ll only do this once.
          </div>
          <div className="text-center text-contentFade text-sm pb-[50px] pt-6">
            <p className="">
              Did not receive email?{" "}
              <Link to={`/asset/create-password`} className="text-kandaBlue font-bold">
              Resend
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetEmailVerified;
