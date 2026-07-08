import React from 'react'
import SideBar from '../shared/components/SideBar'
import Typography from '../shared/components/Typography';
import Icon30 from '../assets/Icon30.png';
import Icon31 from '../assets/Icon31.png';
import Icon7 from '../assets/Icon7.svg';
import Icon3 from '../assets/Icon3.svg';
import Icon6 from '../assets/Icon6.svg';

import PrimaryButton from '../shared/components/PrimaryButton';
import SecondaryButton from '../shared/components/SecondaryButton';
import Icon8 from '../assets/Icon8.svg';
import Icon9 from '../assets/Icon9.svg';
import { BUTTON_SIZES, SECONDARY_BUTTON_SIZES } from '../constants/constants';



const CandidateDetail = () => {
  return (
   <div className="flex ml-[15.927rem] min-h-screen bg-primary_white">
        <div className="flex-shrink-0">
    <SideBar />
  </div>

    <div className='flex flex-col flex-1 bg-slate-100 gap-[1.5rem]'>
        {/* Top Bar */}
        <div className="w-full h-16 px-[1.5rem] bg-primary_white border-b border-input_border_light flex justify-between items-center">
          <Typography variant="headingMdBold" className="text-primary_black">
            Candidates
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


<div className="px-[1.5rem]">
            <div className="h-[9rem] flex flex-col px-[1.5rem] py-[1rem] bg-white border-b border-slate-200">
      {/* Back Link */}
      <div className="flex items-center gap-[0.5rem] h-[1.25rem] cursor-pointer mb-[1rem]">
        <div className="w-[1rem] h-[1rem]">
          <img src={Icon7} alt="Back arrow" className="w-full h-full object-contain" />
        </div>
        <Typography variant="bodySm" className="text-blue-600">
          Back to Candidates
        </Typography>
      </div>

      {/* Candidate Info + Buttons */}
      <div className="flex justify-between items-start h-[4rem]">
        {/* Candidate Info */}
        <div className="flex flex-col gap-[0.25rem] w-[16rem]">
          <Typography variant="headingXl" className="text-black leading-8">
            Sarah Johnson
          </Typography>
          <Typography variant="bodySm" className="text-black">
            sarah.j@email.com • +1 (555) <br /> 123-4567
          </Typography>
        </div>

        {/* Buttons */}
        <div className="flex gap-[0.75rem]">
          {/* Contact Button */}
          <SecondaryButton
            size={BUTTON_SIZES.MEDIUM}
            className="!w-[7rem] !h-[2.5rem] flex items-center gap-[0.5rem] justify-start pl-[1rem] border-input_border_light"
            text={
              <>
                <img src={Icon3} alt="Contact" className="w-[1rem] h-[1rem] object-contain" />
                <Typography variant="bodySm" className="!text-body_text_color_gray">
                  Contact
                </Typography>
              </>
            }
          />

          {/* Export Button */}
          <SecondaryButton
            size={BUTTON_SIZES.MEDIUM}
            className="!w-[6rem] !h-[2.5rem] flex items-center gap-[0.5rem] justify-start pl-[1rem] border-input_border_light"
            text={
              <>
                <img src={Icon6} alt="Export" className="w-[1rem] h-[1rem] object-contain" />
                <Typography variant="bodySm" className="!text-body_text_color_gray">
                  Export
                </Typography>
              </>
            }
          />
        </div>
      </div>
    </div>
    </div>

    {/* Assesment complete */}
    <div className="px-[1.5rem]">
    <div className="h-[47.75rem] relative">
  {/* Left Section */}
  <div className="h-full absolute left-0 top-0 flex flex-col gap-6">
    
    {/* Assessment Complete Card */}
    <div className="self-stretch w-[48.125rem] h-[11.45rem] px-6 pt-6 pb-px bg-white rounded-[0.625rem] outline outline-1 outline-offset-[-0.073rem] outline-slate-200 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2 h-7 ">
        <div className="w-5 h-5 relative overflow-hidden">
          <img src={Icon8} alt="Icon" />
        </div>
        <Typography variant="bodyLg" className="text-black !font-bold">
          Assessment Complete
        </Typography>
      </div>

      {/* Score Cards */}
      <div className="flex gap-4 h-24">
        <div className="w-[10.494rem] h-[5.622rem] px-4 pt-4 bg-slate-50 rounded-[0.625rem] flex flex-col gap-1">
          <Typography variant="caption" className="text-body_text_color_gray">Overall Score</Typography>
          <Typography variant="headingLg" className="text-primary_blue text-start">92%</Typography>
        </div>
        <div className="w-[10.494rem] h-[5.622rem] px-4 pt-4 bg-slate-50 rounded-[0.625rem] flex flex-col gap-1">
          <Typography variant="caption" className="text-body_text_color_gray">Culture Match</Typography>
          <Typography variant="bodyMdBold" className="text-teal-500 font-bold">Excellent</Typography>
        </div>
        <div className="w-[10.494rem] h-[5.622rem] px-4 pt-4 bg-slate-50 rounded-[0.625rem] flex flex-col gap-1">
          <Typography variant="caption" className="text-body_text_color_gray">Completed</Typography>
          <Typography variant="bodySm" className="text-primary_black">2026-01-25</Typography>
        </div>
        <div className="w-[10.494rem] h-[5.622rem] px-4 pt-4 bg-slate-50 rounded-[0.625rem] flex flex-col gap-1">
          <Typography variant="caption" className="text-body_text_color_gray">Duration</Typography>
          <Typography variant="bodySm" className="text-primary_black">28 minutes</Typography>
        </div>
      </div>
    </div>

    {/* Culture Values Assessment Card */}
    <div className="self-stretch h-[34.7rem] px-6 pt-6 pb-px bg-white rounded-[0.625rem] outline outline-1 outline-offset-[-0.073rem] outline-slate-200 flex flex-col gap-6">
      <Typography variant="bodyLg" className="text-primary_black !font-bold">
        Culture Values Assessment
      </Typography>

      {/* Assessment Items */}
      <div className="flex flex-col gap-6 h-[28.5rem] overflow-y-auto">
        {/* Example Item */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded outline outline-1 outline-offset-[-0.0625rem] outline-blue-100 flex justify-center items-center">
                <img src={Icon9} alt="" />
              </div>
              <div className="flex flex-col gap-0">
                <Typography variant="bodySm" className="text-primary_black !font-bold">Team Collaboration</Typography>
                <Typography variant="caption" className="text-body_text_color_gray">Outstanding collaborative skills</Typography>
              </div>
            </div>
            <Typography variant="headingMd" className="text-primary_blue !font-bold">95%</Typography>
          </div>
          <div className="h-2 pr-9 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-2 bg-blue-600 rounded-full" />
          </div>
        </div>

        {/* Repeat similar blocks for Innovation, Communication Style, Accountability, Adaptability, Decision Making */}
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="w-[20rem] h-full absolute left-[49.125rem] top-0 flex flex-col gap-4">
    
    {/* Assessment Details */}
    <div className="self-stretch h-[15.62rem] px-6 pt-6 pb-px bg-primary_white rounded-[0.625rem] outline outline-1 outline-offset-[-0.073rem] outline-slate-200 flex flex-col gap-4">
      <Typography variant="bodyMdBold" className="text-primary_black">Assessment Details</Typography>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <Typography variant="sectionLabel" className="text-body_text_color_gray">Assessment</Typography>
          <Typography variant="bodySm" className="text-primary_black">Frontend Developer Assessment</Typography>
        </div>
        <div className="relative h-12">
          <Typography variant="sectionLabel" className="text-body_text_color_gray">Status</Typography>
          <div className="absolute top-[1.5rem] w-[5.375rem] h-6 bg-emerald-100 rounded-[0.625rem] flex justify-center items-center">
            <Typography variant="sectionLabel" className="text-emerald-800 !font-bold">Completed</Typography>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Typography variant="sectionLabel" className="text-body_text_color_gray">Submitted</Typography>
          <Typography variant="bodySm" className="text-primary_black">2026-01-25</Typography>
        </div>
      </div>
    </div>

    {/* Excellent Match Card */}
    <div className="self-stretch h-48 px-6 pt-6 bg-gradient-to-b from-blue-600 to-blue-700 rounded-[0.625rem] flex flex-col gap-2">
      <Typography variant="bodyMdBold" className="text-primary_white">Excellent Match!</Typography>
      <Typography variant="bodySm" className="text-body_text_color_white">
        This candidate shows strong alignment with your team's culture values and would be a great fit.
      </Typography>
      <div className="flex justify-center items-center gap-2.5">
        <SecondaryButton size={SECONDARY_BUTTON_SIZES.LARGE} text='Move to Next Stage' className="flex-1 px-6 py-3 h-[2.75rem] text-[0.875rem] font-bold rounded-[0.625rem] !text-primary_white outline outline-1 outline-white justify-center items-center">
        </SecondaryButton>
      </div>
    </div>
  </div>
</div>
</div>

        </div>
  </div>
  )
}

export default CandidateDetail
