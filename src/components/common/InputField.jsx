function InputField({ label, placeHolder, name, onChange, type, InputStyle, value, error, errorText }) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="" className="text-contentFade">
        {label}
      </label>

      <input
        type={type ? type : 'text'}
        className={`border ${error ? 'border-red-500' : 'border-[#E4E6EA]'} rounded-2xl py-[22px] pl-6 text-[#11233D] text-md font-normal bg-[#FAFAFA] focus:outline-kandaBlue placeholder:font-normal mt-3 placeholder:text-[#11233D] ${InputStyle && InputStyle.className
          }`}
        style={InputStyle && InputStyle.style}
        placeholder={placeHolder}
        name={name}
        onChange={onChange}
        value={value}
      />
      {error &&
        <p className="text-xs text-red-500">{errorText}</p>
      }
    </div>
  );
}

export default InputField;
