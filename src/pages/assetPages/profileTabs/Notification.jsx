import React from "react";
import ProfileHeader from "./ProfileHeader";
import toggleOn from "../../assets/images/toggleOn.png";
import toggleOff from "../../assets/images/toggleOff.png";
import { Switch } from 'antd';

const Notification = () => {
  return (
    <div className="my-8 p-8 pb-[200px] rounded-[32px] bg-[#F7F8FA]">
      <ProfileHeader text="Notifications" edit={false} />

      <div className="mt-[35px] flex flex-col gap-10 justify-between">
        <div className="flex w-[391px] justify-between">
          <p className="text-[#7B7C7C]">Text messages</p>
            <Switch defaultChecked={true} onChange={onChange} className="toggle-bg" />,

        </div>
        <div className="flex  w-[391px] justify-between">
          <p className="text-[#7B7C7C]">Email notifications</p>
          <Switch defaultChecked={false} onChange={onChange} className="toggle-bg"/>,
        </div>
        <div className="flex  w-[391px] justify-between">
          <p className="text-[#7B7C7C]">In-app notifications</p>
          <Switch defaultChecked={false} onChange={onChange} className="toggle-bg"/>,
        </div>
        <div className="flex  w-[391px] justify-between">
          <p className="text-[#7B7C7C]">Ad banners</p>
          <Switch defaultChecked={true} onChange={onChange} className="toggle-bg"/>
        </div>
      </div>
    </div>
  );
};

export default Notification;
