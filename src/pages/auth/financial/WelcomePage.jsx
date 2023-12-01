import { useState } from "react";
import { Link } from "react-router-dom";
import { UserIcon } from "../../../assets/common";
import InputField from "../../../components/common/InputField";
import SelectField from "../../../components/common/SelectField";
import UploadField from "../../../components/common/UploadField";
import { Modal } from "antd";
import { CheckCircle } from "../../../assets/signup";

const WelcomePage = () => {
  const [modal2Open, setModal2Open] = useState(false);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Others" },
  ];
  return (
    <div className="h-screen mx-auto px-[100px] md:px-[190px] mt-10 max-sm:px-[8px]">
      <div className="text-[#296CD6] mt-3 text-3xl font-bold">Welcome</div>
      <div className="space-y-1 mt-10">
        <p className="text-[#121212] text-xl">
          To use Kanda, you have to create another user
        </p>
        <p className="text-fadedBlue py-3">Fill information below to continue</p>
        <div className="border-b border-b-[#DADADA] "></div>
      </div>
      <div className="px-[15px] md:px-[100px] lg:px-[100px] xl:px-[250px]">
        <div className="space-y-1 mt-8">
          <div className="flex space-x-1">
            <img className="w-[24px] h-[24px]" alt="" src={UserIcon} />
            <p className="text-[#121212] text-normal pl-2">New user</p>
          </div>

          <div className="border-b border-b-[#DADADA] py-2 "></div>

          <div className="space-y-6">
            <div className="mt-[50px]"></div>
            <InputField label={`Full name`} placeHolder={`Enter full name`} />

            <SelectField
              label="Gender"
              placeHolder={`Select gender`}
              options={genderOptions}
              name="gender"
              onChange={(e) => {
                console.log("Selected gender:", e.target.value);
              }}
            />

            <InputField
              type={"text"}
              label={`User role`}
              placeHolder={`Checker`}
            />

            <InputField
              type={"tel"}
              label={`Phone number`}
              placeHolder={`Enter phone number`}
            />

            <InputField
              type={"tel"}
              label={`BVN`}
              placeHolder={`Enter bank verification number`}
            />

            <InputField
              type={"tel"}
              label={`NIN`}
              placeHolder={`Upload document`}
            />

            <div className="flex-row ">
              <UploadField
                label={"Upload form of identification"}
                fieldName={"Upload"}
              />
              <p className="text-[12px] text-right text-contentFade py-2">
                We accept either international passport, drivers licence and
                your national ID
              </p>
            </div>
            <div className="mx-auto mt-20 2xl:max-w-[439px]">
              <button
                onClick={() => setModal2Open(true)}
                className=" mb-[80px] text-white bg-kandaBlue font-bold py-4 rounded-2xl w-full inline-flex justify-center items-center gap-2 mx-auto mt-10"
              >
                Submit
              </button>
            </div>
            <Modal
              open={modal2Open}
              onOk={() => setModal2Open(false)}
              onCancel={() => setModal2Open(false)}
              footer={null}
            >
              <div className="flex flex-col gap-4 items-center justify-center px-14 py-14">
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="w-[32px] h-[32px] mt-1"
                    width="64px"
                    height="64px"
                    alt="check"
                    src={CheckCircle}
                  />
                  <p className="text-center text-[#1C1E19] font-figtree text-2xl font-bold leading-9 mt-2">
                    User created
                  </p>
                </div>

                <p className="text-fadedBlue text-center  font-figtree text-sm font-medium leading-6 mb-6">
                  You have successfully created a new user to <br /> manage your
                  Kanda. We have sent login notifications <br /> to their email
                  to continue on Kanda
                </p>
                <Link
                  to={`/financial/dashboard`}
                  className="w-full flex items-center justify-center"
                >
                  <button
                    onClick={() => setModal2Open(false)}
                    className="flex text-white bg-kandaBlue font-bold py-4 rounded-2xl w-[80%]  justify-center items-center gap-2"
                  >
                    Go to the dashboard
                  </button>
                </Link>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
