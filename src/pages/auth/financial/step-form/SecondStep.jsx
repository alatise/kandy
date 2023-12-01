import InputField from "../../../../components/common/InputField";
import UploadField from "../../../../components/common/UploadField";

const SecondStep = () => {
  return (
    <div className="mt-4">
      <h1>Continuation...</h1>
      <p className="text-sm text-fadedBlue ">
        Kindly the supply information below to continue
      </p>

      <div className="mt-11 max-w-[454px] space-y-6">
        <InputField
          label={`Organisation Address`}
          placeHolder={`Enter organisation address`}
        />

        <div className="flex-row">
          <UploadField
            label={`Upload Proof of Address`}
            fieldName={`Upload utility bill in JPG or PDF format`}
          />
          <p className="text-[12px] text-right text-contentFade">
            Max size: 4MB
          </p>
        </div>

        <InputField label={`VAT Number`} placeHolder={`Enter VAT number`} />

        <div className="flex-row">
          <UploadField
            label={`Upload Lending Licence`}
            fieldName={`Upload lending license `}
          />
          <p className="text-[12px] text-right text-contentFade">
            Max size: 4MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
