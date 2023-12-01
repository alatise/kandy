import InputField from "../../../../components/common/InputField";
import UploadField from "../../../../components/common/UploadField";

const FirstStep = ({ formik }) => {


  return (
    <div className="mt-4">
      <h1 className="text-bold text-4xl">We need your business information</h1>
      <p className="text-base text-fadedBlue ">
        Kindly supply the information below to continue
      </p>

      <div className="mt-11 max-w-[454px] space-y-6">
        <InputField
          label={`Enter your Corporate Affairs Commission (CAC) Number`}
          placeHolder={`Enter CAC number`}
          value={formik.values.cac}
          onChange={formik.handleChage}
          name={'cac'}
          error={formik.touched.cac && formik.errors.cac}
          errorText={formik.errors.cac}
        />

        <div className="flex-row">
          <UploadField label={`Upload CAC Document`} fieldName={`Upload in PNG, JPG or  PDF  format`}
          />
          <p className="text-[14px] text-right text-contentFade">
            Max size: 4MB
          </p>
        </div>

        <InputField label={`CAC RC Number`} placeHolder={`Enter RC number`} />
        <div className="flex-row">

          <InputField label={`Tax Identification Number (TIN)`} placeHolder={`Enter TIN number`} />
          <p className="text-[12px] font-extralight text-right text-contentFade">
            Ensure business name is the same as on your TIN
          </p>
        </div>

      </div>
    </div>
  );
};

export default FirstStep;
