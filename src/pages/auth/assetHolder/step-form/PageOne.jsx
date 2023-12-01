import InputField from "../../../../components/common/InputField";
import SelectField from "../../../../components/common/SelectField";
import UploadField from "../../../../components/common/UploadField";

const PageOne = () => {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  return (
    <div className="mt-4">
      <h1>Personal information</h1>
      <p className="text-sm text-fadedBlue ">Add your information on Kanda</p>

      <div className="mt-11 max-w-[454px] space-y-6">
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

export default PageOne;
