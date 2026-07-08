import React from "react";
import SideBar from "../shared/components/SideBar";
import { Outlet } from "react-router-dom";

const SidebarLayout = () => {
  return (
    <div className="h-screen">
      
      {/* Sidebar */}
      <div>
      <SideBar />
     </div>
      {/* Page Content */}
      <div>
        <Outlet />
      </div>

    </div>
  );
};

export default SidebarLayout;