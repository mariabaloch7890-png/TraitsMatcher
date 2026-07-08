import React from "react";
import SideBar from "../shared/components/SideBar";
import Icon30 from "../assets/Icon30.png";
import Icon31 from "../assets/Icon31.png";
import Typography from "../shared/components/Typography";
import Icon3 from "../assets/Icon3.svg";
import Icon35 from "../assets/Icon35.png";
import Icon4 from "../assets/Icon4.svg";
import Icon5 from "../assets/Icon5.svg";
import Icon6 from "../assets/Icon6.svg";

const Candidates = () => {
  const tableData = [
    {
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      assessment: "Frontend Developer Assessment",
      score: "92%",
      match: "Excellent",
      status: "Completed",
      date: "2026-01-25",
    },
    {
      name: "Michael Chen",
      email: "michael.chen@email.com",
      assessment: "Frontend Developer Assessment",
      score: "88%",
      match: "Very Good",
      status: "Completed",
      date: "2026-01-24",
    },
  ];

  return (
    <div className="flex ml-[15.927rem] min-h-screen bg-primary_white">
      <div className="flex-shrink-0">
        <SideBar />
      </div>
      <div className="flex flex-col flex-1 bg-slate-50 gap-[1.5rem]">
        {/* Top Bar */}
        <div className="w-full h-16 px-[1.5rem] bg-primary_white border-b border-input_border_light flex justify-between items-center">
          <Typography variant="headingMdBold" className="text-primary_black">
            Candidates
          </Typography>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[0.625rem] flex justify-center items-center border border-[#F0F0F0]">
              <img
                src={Icon30}
                alt="Icon 1"
                className="w-5 h-5 object-contain"
              />
            </div>
            <div className="w-9 h-9 rounded-[0.625rem] flex justify-center items-center border border-[#F0F0F0]">
              <img
                src={Icon31}
                alt="Icon 2"
                className="w-5 h-5 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-[1.5rem] py-4 bg-slate-50">
          <div className="flex flex-col gap-1">
            <Typography variant="headingXl">Candidates</Typography>
            <Typography variant="bodySm" className="text-primary_black">
              View and manage all assessment candidates
            </Typography>
          </div>
        </div>

        {/* Search + Filters */}
        <div className="px-[1.5rem]">
          <div className="self-stretch h-[7.414rem] px-[1.5rem] pt-[1rem] pb-[0.0625rem] bg-primary_white rounded-[0.625rem] outline outline-[0.0625rem] outline-offset-[-0.073rem] outline-slate-200 flex flex-col gap-[1rem]">
            {/* Top Controls */}
            <div className="flex items-center gap-[0.75rem]">
              {/* Search */}
              <div className="flex-1 h-[2.5rem] flex items-center pl-[2.5rem] pr-[1rem] py-[0.5rem] rounded-[0.625rem] outline outline-[0.0625rem] outline-offset-[-0.073rem] outline-slate-200 relative">
                <img
                  src={Icon4}
                  className="absolute left-[0.75rem] w-[1.25rem] h-[1.25rem]"
                />

                <span className="text-slate-500 text-[1rem]">
                  Search candidates...
                </span>
              </div>

              {/* Filter */}
              <div className="w-[6rem] h-[2.5rem] pl-[1rem] rounded-[0.625rem] outline outline-[0.0625rem] outline-offset-[-0.073rem] outline-slate-200 flex items-center gap-[0.5rem]">
                <img src={Icon5} className="w-[1rem] h-[1rem]" />

                <span className="text-slate-500 text-[0.875rem]">Filter</span>
              </div>

              {/* Export */}
              <div className="w-[6rem] h-[2.5rem] pl-[1rem] rounded-[0.625rem] outline outline-[0.0625rem] outline-offset-[-0.073rem] outline-slate-200 flex items-center gap-[0.5rem]">
                <img src={Icon6} className="w-[1rem] h-[1rem]" />

                <span className="text-slate-500 text-[0.875rem]">Export</span>
              </div>
            </div>

            {/* Status Filters */}
            <div className="flex items-center gap-[0.5rem]">
              {/* All */}
              <div className="h-[1.75rem] px-[0.75rem] bg-blue-600 rounded-[0.625rem] flex items-center">
                <span className="text-white text-[0.875rem]">All</span>
              </div>

              {/* Completed */}
              <div className="h-[1.75rem] px-[0.75rem] bg-slate-50 rounded-[0.625rem] flex items-center">
                <span className="text-slate-500 text-[0.875rem]">
                  Completed
                </span>
              </div>

              {/* In Progress */}
              <div className="h-[1.75rem] px-[0.75rem] bg-slate-50 rounded-[0.625rem] flex items-center">
                <span className="text-slate-500 text-[0.875rem]">
                  In progress
                </span>
              </div>

              {/* Invited */}
              <div className="h-[1.75rem] px-[0.75rem] bg-slate-50 rounded-[0.625rem] flex items-center">
                <span className="text-slate-500 text-[0.875rem]">Invited</span>
              </div>
            </div>
          </div>
        </div>

        {/* tables */}
        <div className="flex-1 px-[1.5rem] pb-[1.5rem]">
          <div className="h-[29.827rem] bg-white rounded-[0.625rem] outline outline-[0.0625rem] outline-offset-[-0.073rem] outline-slate-200 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[12.986rem_17.710rem_6.018rem_8.003rem_9.162rem_8.759rem_8.206rem] h-[2.75rem] bg-slate-100 border-b border-slate-200 items-center px-[1.5rem]">
              <Typography
                variant="sectionLabel"
                className="uppercase tracking-wide text-body_text_color_gray"
              >
                Candidate
              </Typography>

              <Typography
                variant="sectionLabel"
                className="uppercase tracking-wide text-body_text_color_gray"
              >
                Assessment
              </Typography>

              <Typography
                variant="sectionLabel"
                className="uppercase tracking-wide text-body_text_color_gray text-center"
              >
                Score
              </Typography>

              <Typography
                variant="sectionLabel"
                className="uppercase tracking-wide text-body_text_color_gray text-center"
              >
                Match
              </Typography>

              <Typography
                variant="sectionLabel"
                className="uppercase tracking-wide text-body_text_color_gray text-center"
              >
                Status
              </Typography>

              <Typography
                variant="sectionLabel"
                className="uppercase tracking-wide text-body_text_color_gray text-center"
              >
                Date
              </Typography>

              <Typography
                variant="sectionLabel"
                className="uppercase tracking-wide text-body_text_color_gray text-center"
              >
                Actions
              </Typography>
            </div>

            {/* Rows */}
            {tableData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-[13rem_18rem_6rem_8rem_9rem_9rem_8rem] items-center h-[5rem] px-[1.5rem] border-b border-slate-200"
              >
                {/* Candidate */}
                <div className="flex flex-col">
                  <Typography
                    variant="bodySm"
                    className="!font-bold text-primary_black"
                  >
                    {row.name}
                  </Typography>

                  <Typography
                    variant="caption"
                    className="text-body_text_color_gray"
                  >
                    {row.email}
                  </Typography>
                </div>

                {/* Assessment */}
                <Typography
                  variant="bodySm"
                  className="text-body_text_color_gray"
                >
                  {row.assessment}
                </Typography>

                {/* Score */}
                <Typography
                  variant="bodyMdBold"
                  className="text-primary_blue text-center"
                >
                  {row.score}
                </Typography>

                {/* Match */}
                <Typography
                  variant="bodySm"
                  className="text-center !font-bold text-teal-500"
                >
                  {row.match}
                </Typography>

                {/* Status */}
                <div className="flex justify-center">
                  <div className="px-[0.625rem] py-[0.25rem] rounded-[0.625rem] bg-emerald-100">
                    <Typography
                      variant="sectionLabel"
                      className="text-emerald-800 !font-bold"
                    >
                      {row.status}
                    </Typography>
                  </div>
                </div>

                {/* Date */}
                <Typography
                  variant="bodySm"
                  className="text-body_text_color_gray text-center"
                >
                  {row.date}
                </Typography>

                {/* Actions */}
                <div className="flex justify-center gap-[0.5rem]">
                  {[Icon3, Icon35].map((icon, i) => (
                    <div
                      key={i}
                      className="w-[2rem] h-[2rem] flex items-center justify-center rounded-[0.625rem]"
                    >
                      <img
                        src={icon}
                        alt="action"
                        className="w-[1rem] h-[1rem]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
