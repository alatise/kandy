import React, { useEffect, useState } from "react";
import { ArrowLeft } from "../../../assets/signup";
import StepFormSide from "../../../components/stepFormSide";
import FirstStep from "./step-form/FirstStep";
import SecondStep from "./step-form/SecondStep";
import FourthStep from "./step-form/FourthStep";
import ThirdStep from "./step-form/ThirdStep";
import FifthStep from "./step-form/FifthStep";
import SixthForm from "./step-form/SixthForm";
import { Link } from "react-router-dom";

import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router'



const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


const TotalPages = 6;

const PageIndicator = ({ currentPage, totalPages }) => (
  <p className="ml-[50px] text-fadedBlue md:mt-[18px] md:ml-[0px]">{`${currentPage + 1
    }/${totalPages}`}</p>
);

const FinancialInstitueForm = () => {
  const navigate = useNavigate()

  const formik = useFormik(
    {
      initialValues: {
        "cac": "",
        "rc_number": "",
        "tin": "",
      },
      // validationSchema: ValidationSchema,
      enableReinitialize: true,
      onSubmit: async (values) => {
        localStorage.setItem('email', values.email)
        // alert(JSON.stringify(values))
        await sleep(1000)
        navigate(`/financial/loading`)
      }
    }
  )
  const [page, setPage] = useState(0);

  useEffect(() => {
    const savedPage = sessionStorage.getItem("currentPage");
    setPage(savedPage ? parseInt(savedPage, 10) : 0);
  }, []);

  const handlePageChange = (newPage) => {
    sessionStorage.setItem("currentPage", newPage.toString());
    setPage(newPage);
  };

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <FirstStep onNext={() => handlePageChange(1)} formik={formik} />;
      case 1:
        return (
          <SecondStep
            onNext={() => handlePageChange(2)}
            onPrev={() => handlePageChange(0)}
          />
        );
      case 2:
        return (
          <ThirdStep
            onNext={() => handlePageChange(3)}
            onPrev={() => handlePageChange(1)}
          />
        );
      case 3:
        return (
          <FourthStep
            onNext={() => handlePageChange(4)}
            onPrev={() => handlePageChange(2)}
          />
        );
      case 4:
        return (
          <FifthStep
            onNext={() => handlePageChange(5)}
            onPrev={() => handlePageChange(3)}
          />
        );
      default:
        return <SixthForm onPrev={() => handlePageChange(4)} />;
    }
  };

  return (
    <main className="pr-4 md:pr-8 pl-4 md:pl-16 py-8">
      <div className="flex">
        <div className="w-[12%]  max-sm:w-[4%]">
          {page >= 0 && (
            <button
              disabled={page === 0}
              onClick={() => handlePageChange(page - 1)}
              className="mt-0 mr-[-30px] flex items-center gap-2 md:mt-[18px]"
            >
              <img src={ArrowLeft} alt="" className="w-4 h-4" />
              <p className="text-fadedBlue">Back</p>
            </button>
          )}
        </div>

        <div className="flex justify-between gap-[100px] md:w-[88%] ">
          <div className="w-80 md:w-full">
            <PageIndicator currentPage={page} totalPages={TotalPages} />

            {PageDisplay()}

            <div className="mt-10 md:max-w-[454px]">
              {page < TotalPages - 1 ? (
                <button
                  onClick={() => handlePageChange(page + 1)}
                  className="text-white bg-kandaBlue font-bold py-6 rounded-2xl w-full inline-flex justify-center items-center gap-2"
                >
                  Next
                </button>
              ) : (
                <Link to={`/financial/loading`}>
                  <button
                    className="text-white bg-kandaBlue font-bold py-6 rounded-2xl w-full inline-flex justify-center items-center gap-2"
                    onClick={formik.handleSubmit}
                  >
                    Submit
                  </button>
                </Link>
              )}
            </div>
          </div>

          <StepFormSide />
        </div>
      </div>
    </main>
  );
};

export default FinancialInstitueForm;
