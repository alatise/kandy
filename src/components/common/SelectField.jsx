import React from "react";

function SelectField({ label, options, name, onChange, placeHolder }) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="" className="text-contentFade">
        {label}
      </label>

      <select
        className="border border-[#E4E6EA] rounded-2xl  text-secondary p-5 text-md font-normal bg-[#FAFAFA] focus:outline-kandaBlue placeholder:font-normal mt-3 appearance-none"
        name={name}
        onChange={onChange}
      >
        <option
          style={{ color: "#6E7B89 !important" }}
          value=""
          disabled
          selected
          hidden
        >
          <p className="text-[#11233D]"> {placeHolder}</p>
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
