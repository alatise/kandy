import InputField from "../../../../components/common/InputField";
import SelectField from "../../../../components/common/SelectField";
import UploadField from "../../../../components/common/UploadField";

const FifthStep = () => {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "others", label: "Others" },
  ];

  return (
    <div className="mt-4">

      <div className="mt-11 max-w-[454px] space-y-6">
      <h1>Personal information</h1>
      <span className="text-sm -mt-4 text-fadedBlue ">Add your information on Kanda</span>

      <div>
          <p className="text-[#121212] font-normal mt-6">
            You will be assigned the maker role on Kanda
          </p>

          <div className="border-b border-b-[#DADADA] "></div>
      </div>

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
          placeHolder={`Enter national identification number`}
        />

        <div className="flex-row">
          <UploadField
            label={"Upload form of identification"}
            fieldName={"Upload document"}
          />
          <p className="text-[12px] text-right text-contentFade">
            Max size: 4MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default FifthStep;
