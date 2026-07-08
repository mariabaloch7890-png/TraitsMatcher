import React, { useState } from "react";
import SideBar from "../shared/components/SideBar";
import Icon30 from "../assets/Icon30.png";
import Icon31 from "../assets/Icon31.png";
import Icon46 from "../assets/Icon46.png";
import Icon47 from "../assets/Icon47.png";
import Icon48 from "../assets/Icon48.png";
import Icon49 from "../assets/Icon49.png";
import Icon11 from "../assets/Icon11.svg";
import Typography from "../shared/components/Typography";
import { SETTINGS_TABS } from "../constants/constants";

import CompanySettings from "../features/Settings/CompanySettings";
import AccountSettings from "../features/Settings/AccountSettings";
import NotificationSettings from "../features/Settings/NotificationSettings";
import SecuritySettings from "../features/Settings/SecuritySettings";
import BillingSettings from "../features/Settings/BillingSettings";

const Settings = () => {

const [activeTab, setActiveTab] = useState(SETTINGS_TABS.COMPANY);

const renderContent = () => {
  switch (activeTab) {
    case SETTINGS_TABS.COMPANY:
      return <CompanySettings />;

    case SETTINGS_TABS.ACCOUNT:
      return <AccountSettings />;

    case SETTINGS_TABS.NOTIFICATION:
      return <NotificationSettings />;

    case SETTINGS_TABS.SECURITY:
      return <SecuritySettings />;

    case SETTINGS_TABS.BILLING:
      return <BillingSettings />;

    default:
      return <CompanySettings />;
  }
};

  return (
    <>
      {/* Fixed Sidebar */}
      <SideBar />

      {/* Main Page */}
      <div className="ml-[15.927rem] min-h-screen bg-slate-50">

        {/* Center Container */}
        <div className="w-full mx-auto flex flex-col gap-[1.5rem]">

          {/* Top Bar */}
          
          <div className="w-full h-16 px-[1.5rem] bg-primary_white border-b border-input_border_light flex justify-between items-center">
            <Typography variant="headingMdBold" className="text-primary_black">
              Settings
            </Typography>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[0.625rem] flex justify-center items-center border border-[#F0F0F0]">
                <img src={Icon30} alt="Icon1" className="w-5 h-5 object-contain" />
              </div>

              <div className="w-9 h-9 rounded-[0.625rem] flex justify-center items-center border border-[#F0F0F0]">
                <img src={Icon31} alt="Icon2" className="w-5 h-5 object-contain" />
              </div>
            </div>
          </div>

          {/* Page Heading */}
          <div className="flex justify-between items-center px-[1.5rem] py-4">
            <div className="flex flex-col gap-1">
              <Typography variant="headingXl">Settings</Typography>

              <Typography
                variant="bodySm"
                className="text-primary_black"
              >
                Manage your account and application preferences
              </Typography>
            </div>
          </div>

          {/* Main Section */}
          <div className="flex gap-6 px-[1.5rem] pb-[2rem]">

            {/* Left Settings Menu */}
            <div className="w-[15rem] h-fit bg-primary_white rounded-[0.625rem] border p-[1.5rem] flex flex-col gap-2">

              {/* Company */}
              {/* Company */}
<div
  onClick={() => setActiveTab(SETTINGS_TABS.COMPANY)}
  className={`h-[2.75rem] flex items-center gap-3 pl-4 rounded-[0.625rem] cursor-pointer
  ${activeTab === SETTINGS_TABS.COMPANY
      ? "bg-blue-50 text-primary_blue"
      : "text-body_text_color_gray"
    }`}
>
  <img src={Icon46} className="w-5 h-5" />
  Company
</div>

{/* Account */}
<div
  onClick={() => setActiveTab(SETTINGS_TABS.ACCOUNT)}
  className={`h-[2.75rem] flex items-center gap-3 pl-4 rounded-[0.625rem] cursor-pointer
  ${activeTab === SETTINGS_TABS.ACCOUNT
      ? "bg-blue-50 text-primary_blue"
      : "text-body_text_color_gray"
    }`}
>
  <img src={Icon47} className="w-5 h-5" />
  Account
</div>

{/* Notifications */}
<div
  onClick={() => setActiveTab(SETTINGS_TABS.NOTIFICATION)}
  className={`h-[2.75rem] flex items-center gap-3 pl-4 rounded-[0.625rem] cursor-pointer
  ${activeTab === SETTINGS_TABS.NOTIFICATION
      ? "bg-blue-50 text-primary_blue"
      : "text-body_text_color_gray"
    }`}
>
  <img src={Icon48} className="w-5 h-5" />
  Notifications
</div>

{/* Security */}
<div
  onClick={() => setActiveTab(SETTINGS_TABS.SECURITY)}
  className={`h-[2.75rem] flex items-center gap-3 pl-4 rounded-[0.625rem] cursor-pointer
  ${activeTab === SETTINGS_TABS.SECURITY
      ? "bg-blue-50 text-primary_blue"
      : "text-body_text_color_gray"
    }`}
>
  <img src={Icon49} className="w-5 h-5" />
  Security
</div>

{/* Billing */}
<div
  onClick={() => setActiveTab(SETTINGS_TABS.BILLING)}
  className={`h-[2.75rem] flex items-center gap-3 pl-4 rounded-[0.625rem] cursor-pointer
  ${activeTab === SETTINGS_TABS.BILLING
      ? "bg-blue-50 text-primary_blue"
      : "text-body_text_color_gray"
    }`}
>
  <img src={Icon11} className="w-5 h-5" />
  Billing
</div>
            </div>

            {/* Right Content */}
            <div className="flex-1">
              {renderContent()}
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Settings;


