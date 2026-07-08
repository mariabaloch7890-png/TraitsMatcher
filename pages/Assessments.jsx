import React, { useState } from 'react'
import SideBar from '../shared/components/SideBar';
import Icon30 from "../assets/Icon30.png";
import Icon31 from "../assets/Icon31.png";
import Typography from '../shared/components/Typography';
import { BUTTON_DEFAULT_VARIENT_TEXT, BUTTON_SIZES } from '../constants/constants';
import PrimaryButton from '../shared/components/PrimaryButton';
import Icon32 from "../assets/Icon32.png";
import Icon33 from "../assets/Icon33.png";
import Icon34 from "../assets/Icon34.png";
import Icon35 from "../assets/Icon35.png";
import CreateAssessmentPopup from "../features/assessments/CreateAssessmentPopup";

const Assessments = () => {

  // ✅ Popup state
  const [openPopup, setOpenPopup] = useState(false);
  
  const statusStyles = {
    emerald: "bg-emerald-100 text-emerald-800",
    slate: "bg-slate-100 text-slate-800",
    red: "bg-[#FEE2E2] text-[#991B1B]",
  };

  const tableData = [
    { name: "Frontend Developer Assessment", status: "Active", candidates: 23, created: "2026-01-20", statusColor: "emerald" },
    { name: "Product Manager Screening", status: "Active", candidates: 15, created: "2026-01-18", statusColor: "emerald" },
    { name: "Senior Designer Evaluation", status: "Draft", candidates: 0, created: "2026-01-15", statusColor: "slate" },
    { name: "Sales Executive Assessment", status: "Active", candidates: 31, created: "2026-01-10", statusColor: "emerald" },
    { name: "Marketing Manager Position", status: "Active", candidates: 12, created: "2026-01-08", statusColor: "emerald" },
    { name: "Backend Engineer Role", status: "Closed", candidates: 19, created: "2025-12-20", statusColor: "red" },
    { name: "Customer Success Manager", status: "Active", candidates: 8, created: "2026-01-05", statusColor: "emerald" },
  ];

  return (
    <>
    <div className="flex min-h-screen ml-[15.927rem] bg-primary_white">
  
      <div className='flex flex-col flex-1 bg-slate-50'>
        <div className="w-full h-16 px-[1.5rem] bg-primary_white border-b border-input_border_light flex justify-between items-center">
          <Typography variant="headingMdBold" className="text-primary_black">
            Assessments
          </Typography>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[0.625rem] flex justify-center items-center border border-[#F0F0F0]">
              <img src={Icon30} alt="Icon 1" className="w-5 h-5 object-contain" />
            </div>
            <div className="w-9 h-9 rounded-[0.625rem] flex justify-center items-center border border-[#F0F0F0]">
              <img src={Icon31} alt="Icon 2" className="w-5 h-5 object-contain" />
            </div>
          </div>
        </div>

        {/* Header + Create Button */}
        <div className="flex justify-between items-center px-[1.5rem] py-4 bg-slate-50">
          <div className='flex flex-col gap-1'>
            <Typography variant='headingXl'>Assessments</Typography>
            <Typography variant='bodySm' className='text-black'>7 assessments</Typography>
          </div>

 {/* ✅ Create Assessment Button triggers popup */}
            <PrimaryButton
              variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED}
              size={BUTTON_SIZES.MEDIUM}
              text='Create Assessment'
              onClick={() => setOpenPopup(true)}
              icon={
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
                  <path d='M10 4.167v11.666M4.167 10h11.666' stroke='white' strokeWidth='1.667' strokeLinecap='round'/>
                </svg>
              }
              className='!w-[15rem] !h-[3rem]'
            />

        </div>

        {/* Search + Filters */}
        <div className="px-[1.5rem] mb-4">
          <div className="bg-primary_white rounded-[0.625rem] border border-slate-200 px-4 pt-4 pb-3 flex flex-col gap-4">
            {/* Search Row */}
            <div className="flex justify-between items-center gap-3">
              <div className="relative flex-1">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="9" cy="9" r="6" stroke="#94A3B8" strokeWidth="1.67" />
                  <path d="M14 14l2.5 2.5" stroke="#94A3B8" strokeWidth="1.67" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  placeholder="Search assessments..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-[0.625rem] border border-slate-200 outline-none text-slate-500 text-[1rem]"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-[0.625rem] border border-slate-200">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4h12M4 8h8M6 12h4" stroke="#64748B" strokeWidth="1.33" strokeLinecap="round" />
                </svg>
                <Typography variant="bodySm" className="text-slate-500">More Filters</Typography>
              </button>
            </div>

            {/* Status Filters */}
            <div className="flex items-center gap-2">
              <Typography variant="sectionLabel" className="text-slate-500">STATUS:</Typography>
              {["All Status", "Draft", "Active", "Closed"].map((status, i) => (
                <button key={i} className={`px-3 py-1 rounded-[0.625rem] ${status === "All Status" ? "bg-blue-600" : "bg-slate-100"}`}>
                  <Typography variant="bodySm" className={`${status === "All Status" ? "text-white" : "text-slate-500"}`}>
                    {status}
                  </Typography>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 px-[1.5rem] pb-6">
          <div className="h-[31.25rem] bg-primary-white rounded-[0.625rem] outline outline-[0.0625rem] outline-offset-[-0.0625rem] outline-slate-200 flex flex-col overflow-hidden">
            {/* Header Row */}
            <div className="w-full h-11 bg-slate-100 border-b border-slate-200 grid grid-cols-[26rem_11rem_13rem_11rem_15rem] items-center px-6">
              <Typography variant="sectionLabel" className="text-body_text_color_gray uppercase tracking-wide">Assessment Name</Typography>
              <Typography variant="sectionLabel" className="text-body_text_color_gray uppercase tracking-wide">Status</Typography>
              <Typography variant="sectionLabel" className="text-body_text_color_gray uppercase tracking-wide">Candidates</Typography>
              <Typography variant="sectionLabel" className="text-body_text_color_gray uppercase tracking-wide">Created</Typography>
              <Typography variant="sectionLabel" className="text-body_text_color_gray uppercase tracking-wide text-center">Actions</Typography>
            </div>

            {/* Table Rows */}
            {tableData.map((row, index) => (
              <div key={index} className="w-full h-16 border-b border-slate-200 grid grid-cols-[25rem_11rem_11rem_11rem_15rem] items-center px-6 gap-x-4 bg-primary_white">
                <Typography variant="bodySm" className="!font-bold !text-primary_black">{row.name}</Typography>

<div
  className={`flex justify-center items-center flex-shrink-0 !w-[3.682rem] !h-[1.62356rem] pt-[0.32219rem] pr-[0.68288rem] pb-[0.30131rem] pl-[0.62413rem] rounded-[0.625rem] ${statusStyles[row.statusColor]}`}
>
  <Typography variant="sectionLabel" className="!font-bold !text-sm">
    {row.status}
  </Typography>
</div>

                <Typography variant="bodyMdBold" className="!font-bold text-primary_black">{row.candidates}</Typography>
                <Typography variant="bodySm" className="text-body_text_color_gray">{row.created}</Typography>

                <div className="flex items-center justify-center gap-2">
                  {[Icon32, Icon33, Icon34, Icon35].map((icon, i) => (
                    <div key={i} className="w-8 h-8 flex items-center justify-center rounded-[0.625rem]">
                      <img src={icon} alt={`action-${i}`} className="w-4 h-4 object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>

      {openPopup && (
        <CreateAssessmentPopup onClose={() => setOpenPopup(false)} />
      )}
      </>
  )
}

export default Assessments;