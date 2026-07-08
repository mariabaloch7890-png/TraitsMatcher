import React from 'react';
import { useNavigate,  useLocation} from "react-router-dom";
import Typography from './Typography';
import Icon25 from "../../assets/Icon25.png";
import Icon26 from "../../assets/Icon26.png";
import Icon27 from "../../assets/Icon27.png";
import Icon28 from "../../assets/Icon28.png";
import AvatarImage from "../../assets/Ellipse51.png";
import DropdownIcon from "../../assets/Icon29.png";

const SideBar = () => {

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="fixed left-0 top-0 w-[15.927rem] h-screen bg-white border-r border-[#E2E8F0] flex flex-col justify-between">

      {/* Top Section */}
      <div>
        <div className="w-full h-[4rem] pl-[1.5rem] border-b border-[#E2E8F0] flex items-center">
          <Typography
            variant="brand"
            className="!text-[1.5rem] text-primary_blue"
          >
            TraitsMatcher
          </Typography>
        </div>

        <div className="flex flex-col gap-[0.25rem] pt-[1rem] px-[0.75rem]">

          {/* Dashboard */}
          <div className="h-[2.5625rem] pl-[0.75rem] rounded-[0.625rem] flex items-center gap-[0.75rem]">
            <img src={Icon25} alt="" className="w-[1.25rem] h-[1.25rem]" />
            <Typography variant="bodySm" className="!text-body_text_color_gray">
              Dashboard
            </Typography>
          </div>

          {/* Assessments */}
          <div onClick={() => navigate("/assessments")} className={`h-[2.5625rem] pl-[0.75rem] rounded-[0.625rem] flex items-center gap-[0.75rem] cursor-pointer
          ${location.pathname === "/assessments" ? "bg-[#EBF7FF]" : ""}`}>
          <img src={Icon26} className="w-[1.25rem] h-[1.25rem]" />

          <Typography variant="bodySm" className={location.pathname === "/assessments" ? "!text-primary_blue" : "!text-body_text_color_gray"}>
    Assessments
        </Typography>
         </div>

          {/* Candidates */}
           <div onClick={() => navigate("/candidates")} className={`h-[2.5625rem] pl-[0.75rem] rounded-[0.625rem] flex items-center gap-[0.75rem] cursor-pointer 
           ${location.pathname === "/candidates" ? "bg-[#EBF7FF]" : ""}`}>
          <img src={Icon27} className="w-[1.25rem] h-[1.25rem]" />
          <Typography variant="bodySm" className={location.pathname === "/candidates" ? "!text-primary_blue" : "!text-body_text_color_gray"}>
    Candidates
  </Typography>
</div>

          {/* Settings */}
          <div onClick={() => navigate("/Settings")} className={`h-[2.5625rem] pl-[0.75rem] rounded-[0.625rem] flex items-center gap-[0.75rem] cursor-pointer
          ${location.pathname === "/Settings" ? "bg-[#EBF7FF]" : ""}`}>
           <img src={Icon28} className="w-[1.25rem] h-[1.25rem]" />

           <Typography variant="bodySm" className={location.pathname === "/Settings" ? "!text-primary_blue" : "!text-body_text_color_gray"}>
    Settings
  </Typography>
     </div>
       </div>
      </div>

      {/* Bottom Profile Section */}
      <div className="w-full pt-[1.0725rem] px-[1rem] border-t border-[#E2E8F0]">
        <div className="h-[3.25rem] px-[0.5rem] rounded-[0.625rem] flex justify-between items-center">

          <div className="flex items-center gap-[0.75rem]">
            <img
              src={AvatarImage}
              className="w-[2.25rem] h-[2.25rem] rounded-full"
              alt="avatar"
            />

            <div className="flex flex-col">
              <Typography variant="bodySm" className="!text-primary_black !font-[700]">
                John Doe
              </Typography>
              <Typography variant="caption" className="!text-body_text_color_gray">
                Admin
              </Typography>
            </div>
          </div>

          <img src={DropdownIcon} className="w-[1rem] h-[1rem]" alt="dropdown"/>

        </div>
      </div>

    </div>
  )
}

export default SideBar; 
