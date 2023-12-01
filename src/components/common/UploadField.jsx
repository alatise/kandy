import { useState } from "react";
import {
  CheckCircle,
  Trash,
  CloudUpload,
} from "../../assets/signup";

const UploadField = ({ name, label, fieldName }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };

  const handleDelete = () => {
    setUploadedFile(null);
  };

  return (
    <div className="flex flex-col relative w-full">
      <h3 className="text-contentFade mb-2">{label}</h3>
      <label
        htmlFor={name}
        className="flex w-full h-[64px] border-2 border-[#E4E6EA] py-[12px] pl-6 border-dashed rounded-2xl cursor-pointer bg-[#FAFAFA]"
      >
        <div className="flex items-center">
          {uploadedFile ? (
            <div className="flex">
              <p className="text-KandaBlack mr-1 text-wrap">
                {uploadedFile.name}
              </p>
              <img
                src={CheckCircle}
                alt="done"
                className="text-green-500 w-5 h-5 ml-1 mt-[2px]"
              />
            </div>
          ) : (
            <div className="flex">
              <img
                src={CloudUpload}
                alt="download"
                className="text-[#AFB2B8] fill-[#AFB2B8]  w-[24px] h-[24px] "
              />
              <p className="text-KandaBlack ml-1 mt-[2px]">{fieldName}</p>
            </div>
          )}
        </div>
        <input
          id={name}
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
        {uploadedFile && (
          <button
            onClick={handleDelete}
            className="absolute right-2  text-red-500 hover:text-red-700 cursor-pointer"
          >
            <img src={Trash} alt="delete" className="w-4 h-4 mt-[10px]" />
          </button>
        )}
      </label>
    </div>
  );
};

export default UploadField;
