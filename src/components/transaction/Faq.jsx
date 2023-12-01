import React from "react";
import ProfileHeader from "./ProfileHeader";

const Faq = () => {
  return (
    <div className="my-8 p-8 pb-[200px] rounded-[32px] bg-[#F7F8FA]">
      <ProfileHeader text="FAQs" edit={false} />

      <div className="mt-[35px] flex flex-col gap-10 justify-between"></div>
    </div>
  );
};

export default Faq;
