import { Link } from "react-router-dom";
import InputField from "../../../components/common/InputField";
import { LogoBlue } from "../../../assets/common";
import { GoogleLogo } from "../../../assets/signup";

const AssetSignUp = () => {
  return (
    <main className="h-screen flex justify-center max-sm:px-6">
      <div className="pt-[105px] max-w-[454px]">
        <div className="flex justify-center">
          <img src={LogoBlue} alt="" />
        </div>
        <div className="mt-[56px] text-left">
          <h1>Welcome to Kanda </h1>
          <p className="mt-2 font-normal text-sm text-fadedBlue">
            Liquidity at you fingertips
          </p>

          <button className="text-white bg-kandaBlack font-bold py-4 rounded-2xl mt-6 w-full inline-flex justify-center items-center gap-2">
            <span className="w-8 h-8 bg-white flex justify-center items-center rounded-xl">
              <img src={GoogleLogo} alt="" />
            </span>
            Sign-up with google
          </button>
        </div>

        <div className="w-full text-center border-b border-b-[#EEEEEE] leading-[0.1px] my-10 text-sm">
          <span className="text-[#6E7B89] px-2.5 bg-white">or</span>
        </div>

        <div className="space-y-6">
          <InputField label={`Enter name`} placeHolder={`Enter name`} />

          <InputField
            label={`Enter email address `}
            placeHolder={`Enter email`}
          />

          <div className="pt-5">
            <Link to={`/asset/verification`}>
              <button className="text-white bg-kandaBlue font-bold py-4 rounded-2xl w-full inline-flex justify-center items-center gap-2">
                Continue with email
              </button>
            </Link>
            <p className='text-center text-sm text-contentFade mt-2'>By continuing, you agree to the <span className='font-bold text-contentPrimary'>Terms of use</span>  and our <span className='font-bold text-contentPrimary'>Privacy Policy</span> at Kanda</p>
          </div>
        </div>

        <div className="w-full text-center border-b border-b-[#EEEEEE] leading-[0.1px] my-10 text-sm"></div>

        <div className="text-center text-contentFade text-sm pb-[50px]">
          <p className="">
            Already have an account?{" "}
            <Link to={`/asset/login`} className="text-kandaBlue font-bold">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default AssetSignUp;
