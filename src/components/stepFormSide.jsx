import React from "react";
import { Loop } from "../assets/signup";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const StepFormSide = () => {
  return (
    <div className="hidden bg-linear w-full h-[960px] rounded-t-[36px] rounded-bl-[56px]  justify-center items-center px-[22px] md:flex">
      <div className="relative">
        <img src={Loop} alt="" className="-mt-40 " />

        <div className="z-10 absolute h-fit inset-0 -mt-12  mx-auto my-auto top-2/4 bg-more  backdrop-blur-[30px] w-full rounded-[32px] p-[30px]">
          
          <Swiper
            style={{
              "--swiper-pagination-color": "#FFFFFF",
              "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
              "--swiper-pagination-bullet-inactive-opacity": "0.3",
              "--swiper-pagination-bullet-horizontal-gap": "0.8px",
            }}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <h1 className="text-kandaBlue text-center">
                Endless{" "}
                <span className="text-[#EAFFFF]">
                  Liquidity Possibilities 💪🏾
                </span>
              </h1>
              <div className="border-b border-b-[#68C0C9] max-w-[241px] mx-auto mt-8"></div>
              <div className="border-b border-b-[#68C0C9] max-w-[157px] mx-auto mt-4"></div>
              <p className="mt-6 text-[#C9FFFF] text-center font-normal mb-10">
                We will create a platform that allows you to liquidate your
                assets and get good return on your investments..All in good time
                🕰
              </p>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <h1 className="text-kandaBlue text-center">
                Liquidity
                <span className="text-[#EAFFFF]"> Without Limits 💰</span>
              </h1>
              <div className="border-b border-b-[#68C0C9] max-w-[241px] mx-auto mt-8"></div>
              <div className="border-b border-b-[#68C0C9] max-w-[157px] mx-auto mt-4"></div>
              <p className="mt-6 text-[#C9FFFF] text-center font-normal mb-10">
                We will create a platform that allows you to liquidate your
                assets and get good return on your investments..All in good time
                🕰
              </p>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <h1 className="text-kandaBlue text-center">
                Unlock
                <span className="text-[#EAFFFF]"> Liquidity Seamlessly🔓</span>
              </h1>
              <div className="border-b border-b-[#68C0C9] max-w-[241px] mx-auto mt-8"></div>
              <div className="border-b border-b-[#68C0C9] max-w-[157px] mx-auto mt-4"></div>
              <p className="mt-6 text-[#C9FFFF] text-center font-normal mb-10">
                We will create a platform that allows you to liquidate your
                assets and get good return on your investments..All in good time
                🕰
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="absolute inset-x-0 bottom-[-7.5rem] backdrop-blur-xl  left-[2.8rem] h-[3rem] w-[90%] bg-under z-0 rounded-[32px]"></div>
      </div>
    </div>
  );
};

export default StepFormSide;
