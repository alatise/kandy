import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "../../../assets/signup";
import StepFormSide from "../../../components/stepFormSide";
import PageOne from "./step-form/PageOne";
import PageTwo from "./step-form/PageTwo";
import PageThree from "./step-form/PageThree";
import PageFour from "./step-form/PageFour";

const TotalPages = 4;

const PageIndicator = ({ currentPage, totalPages }) => (
  <p className="ml-[50px] text-fadedBlue md:mt-[18px] md:ml-[0px]">{`${
    currentPage + 1
  }/${totalPages}`}</p>
);

const AssetHolderFormLayout = () => {
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
        return <PageOne onNext={() => handlePageChange(1)} />;
      case 1:
        return (
          <PageTwo
            onNext={() => handlePageChange(2)}
            onPrev={() => handlePageChange(0)}
          />
        );
      case 2:
        return (
          <PageThree
            onNext={() => handlePageChange(3)}
            onPrev={() => handlePageChange(1)}
          />
        );
      default:
        return <PageFour onPrev={() => handlePageChange(2)} />;
    }
  };

  return (
    <main className="pr-4 md:pr-8 pl-4 md:pl-16 py-8">
      <div className="flex">
        <div className="w-[12%] max-sm:w-[4%]">
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

            {/* <PageOne /> */}

            <div className="mt-10 md:max-w-[454px]">
              {page < TotalPages - 1 ? (
                <button
                  onClick={() => handlePageChange(page + 1)}
                  className="text-white bg-kandaBlue font-bold py-4 rounded-2xl w-full inline-flex justify-center items-center gap-2"
                >
                  Next
                </button>
              ) : (
                <Link to={`/asset/loading`}>
                  <button className="text-white bg-kandaBlue font-bold py-6 rounded-2xl w-full inline-flex justify-center items-center gap-2">
                    Nexts
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

export default AssetHolderFormLayout;
