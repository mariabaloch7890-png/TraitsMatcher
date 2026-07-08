import React from "react";
import Typography from "../shared/components/Typography";
import PrimaryButton from "../shared/components/PrimaryButton";
import { BUTTON_DEFAULT_VARIENT_TEXT, BUTTON_SIZES, SECONDARY_BUTTON_SIZES } from "../constants/constants";
import SecondaryButton from "../shared/components/SecondaryButton";
import TertiaryButton from "../shared/components/TertiaryButton"
import Input from "../shared/components/Input";
import Navbar from "../shared/components/Navbar";
import AlexSmith from "../assets/alex_smith2.svg";
import AlexSmithPng from "../assets/alex_smith.png";
import LeoBennet from "../assets/Leo_Bennett.svg";
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import Icon4 from "../assets/Icon4.png";
import Icon5 from "../assets/Icon5.png";
import Icon6 from "../assets/Icon6.png";
import Icon7 from "../assets/Icon7.png";
import Icon9 from "../assets/Icon9.png";
import Icon10 from "../assets/Icon10.png";
import Icon11 from "../assets/Icon11.png";
import Icon12 from "../assets/Icon12.png";
import Icon13 from "../assets/Icon13.png";
import Icon14 from "../assets/Icon14.png";
import Icon15 from "../assets/Icon15.png";
import Icon16 from "../assets/Icon16.png";
import Icon17 from "../assets/Icon17.png";
import Icon18 from "../assets/Icon18.png";
import Icon19 from "../assets/Icon19.png";
import Icon20 from "../assets/Icon20.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import Riley_King from "../assets/Riley_King.svg";
import SarahChen from "../assets/SarahChen.png";
import User1 from "../assets/User1.png";
import User2 from "../assets/User2.png";
import User3 from "../assets/User3.png";




export default function LandingPage() {
 
  return (
    <>

      <div className="relative w-full min-h-[50rem] overflow-hidden bg-[linear-gradient(84deg,#1B45B4_3.25%,#1C2792_96.85%)]">
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(0,103,192,0.3)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(107,93,211,0.4)_0%,transparent_50%)] pointer-events-none" />

        <div className="absolute top-[33%] left-[-10%] w-[20rem] h-[5rem] border border-white/40 opacity-40 pointer-events-none" style={{ transform: "skewY(-10deg)" }} />

        <div className="absolute top-[35%] left-0 pointer-events-none">
          <svg width="140" height="116" viewBox="0 0 145 116" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-155 53.5886L145 0V61.3684L-155 115.87V53.5886Z" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="145" y1="28.6669" x2="-106.863" y2="-56.8211" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0097FE" stopOpacity="0.2" />
                <stop offset="1" stopColor="#0097FE" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute bottom-[18%] left-[0%] w-[15rem] h-[4.25138rem] bg-gradient-to-br from-[#00A4EF] to-[#0078D4] opacity-90" style={{ transform: "skewY(-10.008deg)" }} />

        
        <div className="absolute top-[13%] right-[0%] w-[150px] h-[60px] bg-gradient-to-br from-[#00B4D8] to-[#0096C7] opacity-80" style={{ transform: "skewY(-12deg)" }} />

        <div className="absolute top-[23%] right-[9%] w-[25rem] h-[5rem] border border-white/10 bg-slate-300 opacity-10" style={{ transform: "skewY(-8deg)" }} />

        <div className="absolute bottom-0 left-0 w-full h-[45%] bg-primary_white" style={{ clipPath: "polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)" }} />
        <div className="relative min-h-screen pb-[5rem]">
          <div className=" relative z-10 mt-[5rem] text-center px-6">
            <div className=" w-full">
              <Typography variant="heroHeading" className="pb-[1.5rem] pt-[5rem]">
                Hire People Who Fit Your Culture
              </Typography>
              <Typography variant="headingMd" className="text-body_text_color_white">
                Make confident hiring decisions with AI-powered culture assessments. Match <br /> candidates to your team's values in minutes, not months.
              </Typography>
              <div className="py-[3rem] flex gap-[1rem] justify-center">
                <PrimaryButton variant={BUTTON_DEFAULT_VARIENT_TEXT.INVERTED} text={"Create an Assessment"} size={BUTTON_SIZES.LARGE}></PrimaryButton>
                <SecondaryButton text={"Watch Demo"} size={SECONDARY_BUTTON_SIZES.LARGE} className="border-primary_white text-primary_white"></SecondaryButton>
              </div>
            </div>
           
            <div className="bottom w-[62.5rem] h-[33.5rem] mx-auto flex justify-center items-center rounded-[0.625rem] mt-1 border border-[#F1F5F9]">
              <div className="bottom bg-primary_white w-[60.5rem] h-[31.5rem] mx-auto rounded-[0.625rem] flex justify-center items-center">
                <div className="w-[57.5rem] h-[28.5rem] bg-primary_white flex justify-center items-center flex-shrink-0 mx-auto ">
               
                  <div className="w-[50%] bg-primary_white h-full flex flex-col justify-center items-end gap-[1rem] pr-[0.5rem]">
                    <div className="w-[21.25rem] h-[13.75rem] flex flex-col justify-center items-center gap-1 rounded-[1.5rem] border border-[#F1F5F9] bg-white" style={{ boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" }}>
                      <div className="w-[18.625rem] h-[10%] bg-primary_white">
                        <div className="w-[18.625rem] text-start">
                          <Typography variant="labelBold" className="text-[#94A3B8] tracking-[0.09375rem]">TRAISMATCHER</Typography>
                        </div>
                      </div>
                     
                      <div className="flex w-[18.625rem] h-[70%] justify-center items-center gap-[0.5rem]">
                     
                        <div className="flex flex-col items-center">
                          <svg className="w-14 h-14" viewBox="0 0 36 36">

                            <circle strokeWidth="4" stroke="#E5E7EB" fill="transparent" cx="18" cy="18" r="16" />

                            <circle strokeWidth="4" strokeDasharray="100.53" strokeDashoffset="6.03" strokeLinecap="round" stroke="#9333EA" fill="transparent" cx="18" cy="18" r="16" transform="rotate(-90 18 18)" />

                            <text x="18" y="18" textAnchor="middle" dominantBaseline="middle" style={{ fontSize: "10px", fontWeight: "bold", fill: "#9333EA" }}>
                              94%
                            </text>
                          </svg>
                          <span className="mt-2 text-[0.5rem] font-[700] text-[#64748B] tracking-[0.09375rem] uppercase">MOTIVATION</span>
                        </div>

                        <div className="flex flex-col items-center">
                          <svg className="w-14 h-14" viewBox="0 0 36 36">
                            <circle strokeWidth="4" stroke="#E5E7EB" fill="transparent" cx="18" cy="18" r="16" />
                            <circle strokeWidth="4" strokeDasharray="100.53" strokeDashoffset="10.05" strokeLinecap="round" stroke="#FB923C" fill="transparent" cx="18" cy="18" r="16" transform="rotate(-90 18 18)" />
                            <text x="18" y="18" textAnchor="middle" dominantBaseline="middle" style={{ fontSize: "10px", fontWeight: "bold", fill: "#FB923C" }}>
                              90%
                            </text>
                          </svg>
                          <span className="mt-2 text-[0.5rem] font-[700] text-[#64748B] tracking-[0.09375rem] uppercase">COLLAB</span>
                        </div>

                        <div className="flex flex-col items-center">
                          <svg className="w-14 h-14" viewBox="0 0 36 36">
                            <circle strokeWidth="4" stroke="#E5E7EB" fill="transparent" cx="18" cy="18" r="16" />
                            <circle strokeWidth="4" strokeDasharray="100.53" strokeDashoffset="18.10" strokeLinecap="round" stroke="#14B8A6" fill="transparent" cx="18" cy="18" r="16" transform="rotate(-90 18 18)" />
                            <text x="18" y="18" textAnchor="middle" dominantBaseline="middle" style={{ fontSize: "0.625rem", fontWeight: "bold", fill: "#1E293B" }}>
                              82%
                            </text>
                          </svg>
                          <span className="mt-2 text-[0.5rem] font-[700] text-[#64748B] tracking-[0.09375rem] uppercase">ADAPT</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-[21.25rem] flex flex-col justify-start items-center gap-[0.75rem] py-[1.5rem] rounded-[1.5rem] border border-[#F1F5F9] bg-white" style={{ boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" }}>

                      <div className="w-[18.625rem] text-start">
                        <span className="text-[#94A3B8] text-[0.625rem] font-bold leading-[0.9375rem] tracking-[0.09375rem] uppercase">Top Candidates</span>
                      </div>
                      <div className="flex flex-col w-[18.625rem] justify-center items-center gap-[0.5rem]">

                        <div className="flex w-full h-[2.375rem] justify-between items-center border border-[#E5E7EB] rounded-[0.375rem] px-[0.75rem]">
                       
                          <div className="flex items-center gap-[0.5rem]">
                            <img src={AlexSmith} alt="Alex Smith" className="w-[2rem] h-[2rem] rounded-full" />
                            <div className="flex flex-col items-start">
                              <span className="text-[#1F2937] text-[0.625rem] font-semibold leading-[1rem]">Alex Smith</span>
                              <span className="text-[#6B7280] text-[0.5rem] leading-[0.875rem]">Senior UX Designer</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-start rounded-[624.9375rem] px-[0.5rem] py-[0.125rem]" style={{ background: "rgba(37, 99, 235, 0.10)" }}>
                            <span className="text-primary_black text-[0.4375rem] font-bold leading-[0.875rem] tracking-[-0.01094rem]">STRONG MATCH</span>
                          </div>
                        </div>

                        <div className="flex w-full h-[2.375rem] justify-between items-center border border-[#E5E7EB] rounded-[0.375rem] px-[0.75rem]">
                          <div className="flex items-center gap-[0.5rem]">
                            <img src={LeoBennet} alt="Leo Bennett" className="w-[2rem] h-[2rem] rounded-full" />
                            <div className="flex flex-col items-start">
                              <span className="text-[#1F2937] text-[0.625rem] font-semibold leading-[1rem]">Leo Bennett</span>
                              <span className="text-[#6B7280] text-[0.5rem] leading-[0.875rem]">Product Lead</span>
                            </div>
                          </div>
                        
                          <div className="flex flex-col items-start rounded-[624.9375rem] px-[0.5rem] py-[0.125rem]" style={{ background: "rgba(240, 253, 244, 1)" }}>
                            <span className="text-primary_black text-[0.4375rem] font-bold leading-[0.875rem] tracking-[-0.01094rem] ">ALIGNED</span>
                          </div>
                        </div>

                        <div className="flex w-full h-[2.375rem] justify-between items-center border border-[#E5E7EB] rounded-[0.375rem] px-[0.75rem]">
                          
                          <div className="flex items-center gap-[0.5rem]">
                            <img src={Riley_King} alt="Riley King" className="w-[2rem] h-[2rem] rounded-full" />
                            <div className="flex flex-col items-start">
                              <span className="text-[#1F2937] text-[0.625rem] font-semibold leading-[1rem]">Riley King</span>
                              <span className="text-[#6B7280] text-[0.5rem] leading-[0.875rem]">Fullstack Dev</span>
                            </div>
                          </div>
                  
                          <div className="flex flex-col items-start rounded-[624.9375rem] px-[0.5rem] py-[0.125rem]" style={{ background: "rgba(254, 237, 220, 1)" }}>
                            <span className="!text-primary_black !text-[0.4375rem] !font-bold !leading-[0.875rem] !tracking-[-0.01094rem] uppercase">POTENTIAL</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[50%] h-full flex flex-col justify-center items-center flex-1 shrink-0 basis-0 rounded-[1.5rem] border border-[#F1F5F9] bg-white" style={{ boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" }}>
                    <div className="w-[15rem] h-[13.5rem] bg-primary_white rounded-[1rem] flex flex-col items-center pt-[1.25rem] gap-[0.75rem] rounded-[1.5rem] border border-[#F1F5F9] bg-white" style={{ boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" }}>

                      <div>
                        <img src={AlexSmithPng} alt="Alex smith" className="w-[3.75rem] h-[3.75rem] !rounded-full bg-gray-300 flex-shrink-0" />
                      </div>

                      <Typography variant="bodyLg" className="text-primary_black !font-[700] ">
                        Alex Smith
                      </Typography>
            
                      <Typography variant="label" className="text-gray-400 -mt-4">
                        Senior UX Designer
                      </Typography>
                    
                      <div className="flex gap-[0.5rem] mt-[0.25rem]">
                        
                        <div className=" flex flex-col items-start px-[0.75rem] py-[0.25rem] rounded-full bg-[#E6F0FF]">
                          <Typography variant="labelBold" className="!text-primary_black !text-[0.5rem]">
                            92% Fit
                          </Typography>
                        </div>
                      
                        <div className="px-[0.5rem] py-[0.25rem] rounded-full bg-[#FCE7F3]">
                          <Typography variant="labelBold" className="!text-primary_black !text-[0.5625rem] !font-[700]">
                            High Potential
                          </Typography>
                        </div>
                      </div>
                    </div>
              
                    <div className="w-[15rem] flex flex-col justify-center items-start gap-[0.75rem] py-[1rem]">
                      {[
                        { label: "Communication", value: "95%", color: "bg-[#2563EB]" },
                        { label: "Hard Work", value: "88%", color: "bg-[#9333EA]" },
                        { label: "Adaptability", value: "82%", color: "bg-[#14B8A6]" },
                        { label: "Collaboration", value: "90%", color: "bg-[#FB923C]" },
                        { label: "Decision Making", value: "85%", color: "bg-[#EC4899]" },
                      ].map((item) => (
                        <div key={item.label} className="flex flex-col gap-[0.25rem] w-full">
                          <div className="flex justify-between items-center">
                            <span className="text-[#9CA3AF] text-[0.625rem] font-medium leading-[0.875rem] tracking-[0.09375rem] uppercase">{item.label}</span>
                            <span className="text-[#9CA3AF] text-[0.625rem] font-bold leading-[0.875rem]">{item.value}</span>
                          </div>

                          <div className="w-full h-[0.375rem] bg-[#E5E7EB] rounded-full overflow-hidden">
                            <div className={`h-full ${item.color} rounded-full`} style={{ width: item.value }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* know exactly who fits before you hire*/}
      <div className="flex w-[50rem] h-[54.75rem] px-0 py-[5rem] flex-col justify-center items-center gap-[4rem] bg-white mx-auto">
        <Typography variant="displayLg" className="text-center !text-primary_dark">
          Know exactly who fits <br></br> before you hire
        </Typography>
        <div className=" bg-primary_white flex w-[68.75rem] h-[34.5rem] flex-row items-center justify-between gap-[3rem] ">
         
          <div className="flex flex-col h-[28.375rem] w-[14.5626rem] items-start gap-[2rem] shrink-0 bg-primary_white ">
           
            <div className="flex h-[8.125rem] w-[14.5625rem] flex-col items-start gap-[0.79913rem] self-stretch border-[0.932px] border-[#E2E8F0] bg-white  px-[1.257rem]
  py-[1.257rem]">
              <div className="flex justify-between w-[12.048rem] h-[2.39838rem] items-start pr-0 shrink-0 self-stretch">
                
                <div className="flex justify-center items-center pr-[0.00094rem] w-[2.39744rem] h-[2.39744rem] border-[0.932px] border-[#BFDBFE] bg-[#EFF6FF]">
                  <img src={Icon7} alt="icon" />
                </div>
             
                <div className="w-[3.75rem] h-[2.4375] text-primary_blue text-right font-sans text-[1.625rem] font-bold leading-[2.39831rem]">
                  92%
                </div>
              </div>
             
              <div className="flex pr-[3.67356rem] items-center self-stretch ">
                <Typography variant="bodyMdBold" className="whitespace-nowrap">Team Collaboration</Typography>
              </div>
              
              <div className="flex w-[12.04855rem] h-[0.39956rem] pr-[1.35525rem] flex-col items-start shrink-0 self-stretch bg-[#F1F5F9]" >
                <div className="h-[0.39956rem] w-[10.69328rem] shrink-0 self-stretch bg-primary_blue"></div>
              </div>
            </div>
            
            <div className="flex h-[8.125rem] w-[14.5625rem] flex-col items-start gap-[0.79913rem] self-stretch border-[0.932px] border-[#E2E8F0] bg-white  px-[1.257rem]
  py-[1.257rem]">
              <div className="flex justify-between w-[12.048rem] h-[2.39838rem] items-start pr-0 shrink-0 self-stretch">
               
                <div className="flex justify-center items-center pr-[0.00094rem] w-[2.39744rem] h-[2.39744rem] border-[0.932px] border-[#BFDBFE] bg-[#EFF6FF]">
                  <img src={Icon9} alt="icon" />
                </div>
              
                <div className="w-[3.75rem] h-[2.4375] text-primary_blue text-right font-sans text-[1.625rem] font-bold leading-[2.39831rem]">
                  79%
                </div>
              </div>
             
              <div className="flex pr-[3.67356rem] items-center self-stretch ">
                <Typography variant="bodyMdBold" className="whitespace-nowrap">Decision Making</Typography>
              </div>
            
              <div className="flex w-[12.04855rem] h-[0.39956rem] pr-[1.35525rem] flex-col items-start shrink-0 self-stretch bg-[#F1F5F9]" >
                <div className="h-[0.39956rem] w-[8.49062rem] shrink-0 self-stretch bg-primary_blue"></div>
              </div>
            </div>

            <div className="flex h-[8.125rem] w-[14.5625rem] flex-col items-start gap-[0.79913rem] self-stretch border-[0.932px] border-[#E2E8F0] bg-white  px-[1.257rem]
  py-[1.257rem]">
              <div className="flex justify-between w-[12.048rem] h-[2.39838rem] items-start pr-0 shrink-0 self-stretch">
               
                <div className="flex justify-center items-center pr-[0.00094rem] w-[2.39744rem] h-[2.39744rem] border-[0.932px] border-[#BFDBFE] bg-[#EFF6FF]">
                   <img src={Icon11} alt="icon" />
                </div>
             
                <div className="w-[3.75rem] h-[2.4375] text-primary_blue text-right font-sans text-[1.625rem] font-bold leading-[2.39831rem]">
                  88%
                </div>
              </div>

              <div className="flex pr-[3.67356rem] items-center self-stretch ">
                <Typography variant="bodyMdBold" className="whitespace-nowrap">Communication Style</Typography>
              </div>

              <div className="flex w-[12.04855rem] h-[0.39956rem] pr-[1.35525rem] flex-col items-start shrink-0 self-stretch bg-[#F1F5F9]" >
                <div className="h-[0.39956rem] w-[10.01519rem] shrink-0 self-stretch bg-primary_blue"></div>
              </div>
            </div>

          </div>
          <div className="flex flex-col justify-center items-center w-[21.1875rem] h-[25.75rem] rounded-[0.625rem] bg-white shadow-[16px_32px_74px_0_rgba(126,138,253,0.08)]">
            <div className="flex w-[14.75rem] h-[17.875rem] flex-col justify-center items-center gap-[1.375rem]">
              <div class="w-[14.72775rem] h-[1.95681rem] flex-shrink-0 text-[#03133D] text-center font-dmSans text-[1.39038rem] font-bold leading-[normal] tracking-[-0.02781rem]">Trait Scores</div>
<div className="flex w-[13.95094rem] h-[13.95094rem] pt-[4.06994rem] pr-[3.15056rem] pb-[4.08731rem] pl-[3.15038rem] justify-center items-center flex-shrink-0 rounded-full border-[0.25rem] border-[#6366F1] bg-white">
                <div class="flex flex-col w-[7.65rem] h-[5.79375rem] pt-[0.01875rem] pr-0 pb-[0.48219rem] pl-0 items-start gap-[0.34363rem] bg-primary_white">
                  <div class="w-[7.70625rem] text-primary_black text-center font-sans text-[3.6rem] font-normal leading-[4.05rem]">78%</div>
                  <Typography variant="bodySm" className="!w-[8.9375rem] !text-input_selection_gray !text-center !font-[700] !tracking-[0.03125rem] !uppercase whitespace-nowrap">Culture fit score</Typography>
                </div>

              </div>

            </div>
            <div className="flex flex-row">
              
            <div class="w-[8.75rem] h-[3.87619rem]">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173 95" class="w-full h-full">
    
    <rect x="16.4785" y="11.535" width="140" height="62.0189" rx="8" class="fill-white shadow-lg"/>

    
    <rect x="27.4785" y="23.026" width="55.782" height="6" rx="3" class="fill-[#C4D2F6]"/>
    <rect x="26.4785" y="41.6049" width="117" height="6" rx="3" class="fill-[#EDF1FC]"/>
    <rect x="27.4785" y="58.3043" width="117" height="6" rx="3" class="fill-[#EDF1FC]"/>
  </svg>
  </div>

      <div class="w-[8.75rem] h-[3.87619rem]">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173 95" class="w-full h-full">

    <rect x="16.4785" y="11.535" width="140" height="62.0189" rx="8" class="fill-white shadow-lg"/>

    <rect x="27.4785" y="23.026" width="55.782" height="6" rx="3" class="fill-[#C4D2F6]"/>
    <rect x="26.4785" y="41.6049" width="117" height="6" rx="3" class="fill-[#EDF1FC]"/>
    <rect x="27.4785" y="58.3043" width="117" height="6" rx="3" class="fill-[#EDF1FC]"/>
  </svg>
  </div>
            </div>

          </div>

           <div className="flex flex-col h-[28.375rem] w-[14.5626rem] items-start gap-[2rem] shrink-0 bg-primary_white ">
          
            <div className="flex h-[8.125rem] w-[14.5625rem] flex-col items-start gap-[0.79913rem] self-stretch border-[0.932px] border-[#E2E8F0] bg-white  px-[1.257rem]
  py-[1.257rem]">
              <div className="flex justify-between w-[12.048rem] h-[2.39838rem] items-start pr-0 shrink-0 self-stretch">
               
                <div className="flex justify-center items-center pr-[0.00094rem] w-[2.39744rem] h-[2.39744rem] border-[0.932px] border-[#BFDBFE] bg-[#EFF6FF]">
                   <img src={Icon12} alt="icon" />
                </div>
             
                <div className="w-[3.75rem] h-[2.4375] text-primary_blue text-right font-sans text-[1.625rem] font-bold leading-[2.39831rem]">
                  87%
                </div>
              </div>
              <div className="flex pr-[3.67356rem] items-center self-stretch ">
                <Typography variant="bodyMdBold" className="whitespace-nowrap">Leadership Style</Typography>
              </div>
             
              <div className="flex w-[12.04855rem] h-[0.39956rem] pr-[1.35525rem] flex-col items-start shrink-0 self-stretch bg-[#F1F5F9]" >
                <div className="h-[0.39956rem] w-[9.84589rem] shrink-0 self-stretch bg-primary_blue"></div>
              </div>
            </div>
          
            <div className="flex h-[8.125rem] w-[14.5625rem] flex-col items-start gap-[0.79913rem] self-stretch border-[0.932px] border-[#E2E8F0] bg-white  px-[1.257rem]
  py-[1.257rem]">
              <div className="flex justify-between w-[12.048rem] h-[2.39838rem] items-start pr-0 shrink-0 self-stretch">
               
                <div className="flex justify-center items-center pr-[0.00094rem] w-[2.39744rem] h-[2.39744rem] border-[0.932px] border-[#BFDBFE] bg-[#EFF6FF]">
                   <img src={Icon13} alt="icon" />
                </div>
                
                <div className="w-[3.75rem] h-[2.4375] text-primary_blue text-right font-sans text-[1.625rem] font-bold leading-[2.39831rem]">
                  81%
                </div>
              </div>
              <div className="flex pr-[3.67356rem] items-center self-stretch ">
                <Typography variant="bodyMdBold" className="whitespace-nowrap">Leadership Style</Typography>
              </div>
            
              <div className="flex w-[12.04855rem] h-[0.39956rem] pr-[1.35525rem] flex-col items-start shrink-0 self-stretch bg-[#F1F5F9]" >
                <div className="h-[0.39956rem] w-[8.82921rem] shrink-0 self-stretch bg-primary_blue"></div>
              </div>
            </div>

            <div className="flex h-[8.125rem] w-[14.5625rem] flex-col items-start gap-[0.79913rem] self-stretch border-[0.932px] border-[#E2E8F0] bg-white  px-[1.257rem]
  py-[1.257rem]">
              <div className="flex justify-between w-[12.048rem] h-[2.39838rem] items-start pr-0 shrink-0 self-stretch">
              
                <div className="flex justify-center items-center pr-[0.00094rem] w-[2.39744rem] h-[2.39744rem] border-[0.932px] border-[#BFDBFE] bg-[#EFF6FF]">
                   <img src={Icon14} alt="icon" />
                </div>
             
                <div className="w-[3.75rem] h-[2.4375] text-primary_blue text-right font-sans text-[1.625rem] font-bold leading-[2.39831rem]">
                  91%
                </div>
              </div>

              <div className="flex pr-[3.67356rem] items-center self-stretch ">
                <Typography variant="bodyMdBold" className="whitespace-nowrap">Adaptability</Typography>
              </div>
      
              <div className="flex w-[12.04855rem] h-[0.39956rem] pr-[1.35525rem] flex-col items-start shrink-0 self-stretch bg-[#F1F5F9]" >
                <div className="h-[0.39956rem] w-[10.52307rem] shrink-0 self-stretch bg-primary_blue"></div>
              </div>
            </div>

          </div>
        </div>
     
        <div>
        <PrimaryButton variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED} size={BUTTON_SIZES.SMALL} text='Learn More' ></PrimaryButton>
        </div>

      </div>

     {/* We make it easy to track all data analytics */}
      <div className="flex flex-col items-center gap-[4rem]">
        <Typography variant="displayLg" className="text-center !text-primary_dark">
          We make it easy to track all<br></br>data analytics
        </Typography>

        <div className="flex flex-col items-center justify-center gap-[4rem] h-[113.5rem] w-[68.75rem]  bg-primary_white ">
        
          <div className="flex justify-between h-[25.375rem] w-[68.75rem] items-center bg-primary_white">
            {/* texted div */}
            <div className="flex flex-col items-start gap-[1rem] bg-primary-white w-[30.065rem] h-[21.375rem]">

              <div className="flex w-[4rem] h-[4rem] p-[0.75rem] justify-center items-center gap-[0.5rem] rounded-[0.625rem] bg-purple shrink-0">
                <img src={Icon10} alt="icon10" />
              </div>
            
              <div className="flex flex-col items-start gap-[0.75rem] pt-0">
                <Typography variant="headingXl" className="text-center">Define the Role and Team Traits</Typography>
                <Typography variant="bodyMd" className="text-body_text_color_gray" >Start by selecting the role you’re hiring for and identifying the cultural and behavioral traits that matter most to your team, such as collaboration, ownership, or work ethic. This ensures each assessment is aligned with real team dynamics, not generic benchmarks.</Typography>
              </div>


             <div className="mt-[1.5rem]">
   <PrimaryButton
     variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED}
     size={BUTTON_SIZES.SMALL}
     text="Learn More"
  />
             </div>

            </div>
            {/* image div */}
            <div className="w-[31.8125rem] h-[31.25rem] shrink-0" >
              <img src={image1} alt="image1"/>
            </div>
          </div>

          <div className="flex justify-between h-[25.375rem] w-[68.75rem] items-center bg-primary_white">

            {/* image div */}
            <div className="w-[31.825rem] h-[25.375rem]">
              <img src={image2} alt="image2" />
            </div>

             {/* text div */}
            <div className="flex flex-col items-start gap-[1rem] bg-primary-white w-[30.065rem] h-[21.375rem]">
             
              <div className="flex w-[4rem] h-[4rem] p-[0.75rem] justify-center items-center gap-[0.5rem] rounded-[0.625rem] bg-pink shrink-0">
                  <img src={Icon15} alt="icon10" />
              </div>
             
              <div className="flex flex-col items-start gap-[0.75rem] pt-0">
                <Typography variant="headingXl" className="text-center">We Build a Tailored assessment</Typography>
                <Typography variant="bodyMd" className="text-body_text_color_gray" >Create or customize an assessment using structured questions and scenarios designed to measure the selected traits. Tests are flexible, role-specific, and built to reflect how candidates think and behave in real work situations.</Typography>
              </div>

             <div className="mt-[1.5rem]">
   <PrimaryButton
     variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED}
     size={BUTTON_SIZES.SMALL}
     text="Learn More"
  />
             </div>

            </div>
          </div>

          <div className="flex justify-between h-[25.375rem] w-[68.75rem] items-center bg-primary_white">
            {/* text div */}
            <div className="flex flex-col items-start gap-[1rem] bg-primary-white w-[30.065rem] h-[21.375rem]">
            
              <div className="flex w-[4rem] h-[4rem] p-[0.75rem] justify-center items-center gap-[0.5rem] rounded-[0.625rem] bg-orange shrink-0">
                  <img src={Icon16} alt="icon10" />
              </div>
              
              <div className="flex flex-col items-start gap-[0.75rem] pt-0">
                <Typography variant="headingXl" className="text-center">Invite Candidates to Participate</Typography>
                <Typography variant="bodyMd" className="text-body_text_color_gray" >Send candidates a secure test link and invite them to complete the assessment at their convenience. No account creation is required, keeping the experience simple and friction-free for candidates.</Typography>
              </div>

             <div className="mt-[1.5rem]">
   <PrimaryButton
     variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED}
     size={BUTTON_SIZES.SMALL}
     text="Learn More"
  />
             </div>

            </div>
            {/* image div */}
            <div className="w-[31.825rem] h-[25.375rem]">
              <img src={image3} alt="image3" />
            </div>
          </div>

          <div className="flex justify-between h-[25.375rem] w-[68.75rem] items-center bg-primary-white">

            {/* image div */}
            <div className="w-[31.825rem] h-[33.125rem]">
              <img src={image4} alt="image4" />
            </div>

             {/* text div */}
            <div className="flex flex-col items-start gap-[1rem] bg-primary-white w-[30.065rem] h-[21.375rem]">
             
              <div className="flex w-[4rem] h-[4rem] p-[0.75rem] justify-center items-center gap-[0.5rem] rounded-[0.625rem] bg-red shrink-0">
                  <img src={Icon17} alt="icon10" />
              </div>
           
              <div className="flex flex-col items-start gap-[0.75rem] pt-0">
                <Typography variant="headingXl" className="text-center whitespace-nowrap">Review Traits & Compare Results</Typography>
                <Typography variant="bodyMd" className="text-body_text_color_gray" >View clear TraitScores and insights that highlight how each candidate aligns with your team’s culture and working style. Compare results side by side to support confident, data-informed hiring decisions.</Typography>
              </div>
             <div className="mt-[1.5rem]">
   <PrimaryButton
     variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED}
     size={BUTTON_SIZES.SMALL}
     text="Learn More"
  />
             </div>
            </div>
          </div>
        </div>
      </div>



      {/* 4th section */}
      
      <div className="relative bg-white overflow-hidden" style={{ height: '1185px' }}>

  <div 
    className="absolute inset-0 pointer-events-none"
    style={{ 
      background: 'linear-gradient(84deg, #1B45B4 2.94%, #1C2792 96.29%)',
      clipPath: 'polygon(0 12%, 100% 0, 100% 88%, 0 97%)',
    }} 
  >
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1295" fill="none" preserveAspectRatio="none">
      <path d="M0 250.367L1452 0V1050.18L0 1295V250.367Z" fill="url(#paint0_linear_673_2380)"/>
      <defs>
        <linearGradient id="paint0_linear_673_2380" x1="0" y1="886.522" x2="1475.31" y2="716.272" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1B45B4"/>
          <stop offset="1" stopColor="#1C2792"/>
        </linearGradient>
      </defs>
    </svg>
  </div>

  <div className="absolute top-[29%] right-[0%] w-[250px] h-[60px] bg-gradient-to-br from-[#00B4D8] to-[#0096C7] opacity-80" style={{ transform: "skewY(-12deg)" }} />

 <div className="absolute top-[74%] left-0 pointer-events-none">
          <svg width="250" height="116" viewBox="0 0 145 116" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-155 53.5886L145 0V61.3684L-155 115.87V53.5886Z" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="145" y1="28.6669" x2="-106.863" y2="-56.8211" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0097FE" stopOpacity="0.2" />
                <stop offset="1" stopColor="#0097FE" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>  

  <div className="relative z-10 w-full flex justify-center">
   <div className="flex flex-col justify-center items-center w-[80rem] h-[58.62rem] gap-[4rem] pt-[13rem]">

      <div className="flex flex-col justify-center items-center gap-[1rem] pb-0 h-[16rem] w-[80rem]">
       <div className="text-white text-xs font-bold tracking-[0.09375rem] leading-[0.9375rem] uppercase text-center">pricing</div>
       <div className="w-[41.8125rem] h-[3.125rem]">
        <Typography variant="displayLg" className="text-white leading-[105%] tracking-[-0.09rem]">Start Hiring for the Right Fit Today</Typography>
       </div>
       <div className="w-[41.25rem] h-[3.4375rem] text-center">
        <Typography variant="headingMd" className="text-body_text_color_white">Choose the perfect plan for your hiring needs. All plans include our core culture assessment features.</Typography>
       </div>
       </div>

       <div className="flex flex-col items-start gap-[1rem]">

         <div className="flex w-[75rem] p-[0.5rem] justify-center item-center gap-[0.625rem]">
        <div className="flex items-center p-1 rounded-[6.25rem] border border-[#E4E4E7] bg-white w-[11.9875rem] h-[2.5rem] gap-[0.125rem]  overflow-hidden">
          <div className="flex justify-center items-center gap-[0.625rem] px-4 py-2 rounded-[6.25rem] h-[2rem] w-[10.625rem]">
            <Typography variant="bodySm" className="text-body_text_color_gray">Yearly</Typography>
          </div>
          <div className="flex justify-center items-center gap-[0.625rem] px-4 py-2 rounded-[6.25rem] bg-primary_blue h-[2rem] w-[5.5rem]">
            <Typography variant="bodySm" className="text-primary_white">Monthly</Typography>
          </div>
        </div>
       </div>

       <div className="flex w-[75rem] items-end gap-[1.5rem]">
        
        <div class="flex flex-col items-start justify-between gap-8 p-[2rem_2rem_1rem_1.5rem] 
            rounded-md border-r border-b border-l border-gray-300 w-[24rem] min-h-[31rem] bg-primary_white shadow-sm">
  
    <div class="flex flex-col items-start gap-6">
      <div className="flex flex-col items-start gap-[0.25rem]">
        <Typography variant="headingMdBold">Starter</Typography>
        <Typography variant="bodyMd">Best for personal use</Typography>
      </div>
      <div className="flex items-baseline gap-2">
        <Typography variant="headingXl">$8</Typography>
        <Typography variant="bodySm">/month</Typography>
      </div>
    </div>
 
    <div class="flex flex-col items-start self-stretch gap-4">
      <Typography variant="bodyMdBold">All free features, plus:</Typography>
      <div className="flex items-center gap-[1rem] self-stretch">
        <div className="w-[1.5rem] h-[1.5rem]"><svg 
  className="w-6 h-6 text-blue-700"
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M20.9556 5.90211L9.05063 19.5078L3.04199 13.4991L4.5004 12.0407L8.95017 16.4905L19.4034 4.54395L20.9556 5.90211Z" 
    fill="currentColor"
  />
</svg>
</div>
 <Typography variant="bodyMd" className="text-body_text_color_gray">Kanban Boards</Typography>
      </div>

<div className="flex items-center gap-4 w-full">
        <div className="w-[1.5rem] h-[1.5rem] flex items-center justify-center"><svg 
  className="w-6 h-6 text-blue-700"
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M20.9556 5.90211L9.05063 19.5078L3.04199 13.4991L4.5004 12.0407L8.95017 16.4905L19.4034 4.54395L20.9556 5.90211Z" 
    fill="currentColor"
  />
</svg>
</div>
 <Typography variant="bodyMd" className="text-body_text_color_gray">Gantt Charts</Typography>
      </div>

      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center justify-center w-[1.5rem] h-[1.5rem]"><svg 
  className="w-6 h-6 text-blue-700"
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M20.9556 5.90211L9.05063 19.5078L3.04199 13.4991L4.5004 12.0407L8.95017 16.4905L19.4034 4.54395L20.9556 5.90211Z" 
    fill="currentColor"
  />
</svg>
</div>
 <Typography variant="bodyMd" className="text-body_text_color_gray">Resource Allocation</Typography>
      </div>

      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center justify-center w-[1.5rem] h-[1.5rem]"><svg 
  className="w-6 h-6 text-blue-700"
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M20.9556 5.90211L9.05063 19.5078L3.04199 13.4991L4.5004 12.0407L8.95017 16.4905L19.4034 4.54395L20.9556 5.90211Z" 
    fill="currentColor"
  />
</svg>
</div>
 <Typography variant="bodyMd" className="text-body_text_color_gray">Calendar Integration</Typography>
      </div>
      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center justify-center w-[1.5rem] h-[1.5rem]"><svg 
  className="w-6 h-6 text-blue-700"
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M20.9556 5.90211L9.05063 19.5078L3.04199 13.4991L4.5004 12.0407L8.95017 16.4905L19.4034 4.54395L20.9556 5.90211Z" 
    fill="currentColor"
  />
</svg>
</div>
 <Typography variant="bodyMd" className="text-body_text_color_gray">Progress Tracking</Typography>
      </div>
      
    </div>
   
   <div className="w-full grid">
  <div className="w-full justify-self-stretch">
    <PrimaryButton
      variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED}
      size={BUTTON_SIZES.LARGE}
      text="Learn More"
      className="!w-[20.5rem] !h-[3.125rem]"
    />
  </div>
</div>
</div>

<div class="flex flex-col items-start justify-between gap-8 p-[2rem_2rem_1rem_1.5rem] 
            rounded-md border-r border-b border-l border-gray-300 w-[24rem] min-h-[31rem] bg-primary_white shadow-sm">

    <div class="flex flex-col items-start gap-6">
      <div className="flex flex-col items-start gap-[0.25rem]">
        <Typography variant="headingMdBold">Business</Typography>
        <Typography variant="bodyMd">Best for personal use</Typography>
      </div>
      <div className="flex items-baseline gap-2">
        <Typography variant="headingXl">$16</Typography>
        <Typography variant="bodySm">/month</Typography>
      </div>
    </div>

    <div class="flex flex-col items-start self-stretch gap-4">
      <Typography variant="bodyMdBold" >All starter features, plus:</Typography>
      <div className="flex items-center gap-[1rem] self-stretch">
        <div className="w-[1.5rem] h-[1.5rem]"><svg 
  className="w-6 h-6 text-blue-700"
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M20.9556 5.90211L9.05063 19.5078L3.04199 13.4991L4.5004 12.0407L8.95017 16.4905L19.4034 4.54395L20.9556 5.90211Z" 
    fill="currentColor"
  />
</svg>
</div>
 <Typography variant="bodyMd" className="text-body_text_color_gray">Customizable Workflows</Typography>
      </div>


<div className="flex items-center gap-4 w-full">
        <div className="w-[1.5rem] h-[1.5rem] flex items-center justify-center"><svg 
  className="w-6 h-6 text-blue-700"
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M20.9556 5.90211L9.05063 19.5078L3.04199 13.4991L4.5004 12.0407L8.95017 16.4905L19.4034 4.54395L20.9556 5.90211Z" 
    fill="currentColor"
  />
</svg>
</div>
 <Typography variant="bodyMd" className="text-body_text_color_gray">Reporting and Analytics</Typography>
      </div>

      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center justify-center w-[1.5rem] h-[1.5rem]"><svg 
  className="w-6 h-6 text-blue-700"
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M20.9556 5.90211L9.05063 19.5078L3.04199 13.4991L4.5004 12.0407L8.95017 16.4905L19.4034 4.54395L20.9556 5.90211Z" 
    fill="currentColor"
  />
</svg>
</div>
 <Typography variant="bodyMd" className="text-body_text_color_gray">Document Management</Typography>
      </div>

      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center justify-center w-[1.5rem] h-[1.5rem]"><svg 
  className="w-6 h-6 text-blue-700"
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M20.9556 5.90211L9.05063 19.5078L3.04199 13.4991L4.5004 12.0407L8.95017 16.4905L19.4034 4.54395L20.9556 5.90211Z" 
    fill="currentColor"
  />
</svg>
</div>
 <Typography variant="bodyMd" className="text-body_text_color_gray">Agile Methodology Support</Typography>
      </div>


      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center justify-center w-[1.5rem] h-[1.5rem]"><svg 
  className="w-6 h-6 text-blue-700"
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M20.9556 5.90211L9.05063 19.5078L3.04199 13.4991L4.5004 12.0407L8.95017 16.4905L19.4034 4.54395L20.9556 5.90211Z" 
    fill="currentColor"
  />
</svg>
</div>
 <Typography variant="bodyMd" className="text-body_text_color_gray">Issue Tracking</Typography>
      </div>
      
    </div>
   
   <div className="w-full grid">
  <div className="w-full justify-self-stretch">
    <PrimaryButton
      variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED}
      size={BUTTON_SIZES.LARGE}
      text="Learn More"
      className="!w-[20.5rem] !h-[3.125rem]"
    />
  </div>
</div>


</div>


{/* card 3 */}

<div class="flex flex-col items-start justify-between gap-8 p-[2rem_2rem_1rem_1.5rem] 
            rounded-md border-r border-b border-l border-gray-300 w-[24rem] min-h-[31rem] bg-primary_white shadow-sm">

    <div class="flex flex-col items-start gap-6">
      <div className="flex flex-col items-start gap-[0.25rem]">
        <Typography variant="headingMdBold">Enterprise</Typography>
        <Typography variant="bodyMd">Best for personal use</Typography>
      </div>
      <div className="flex items-baseline gap-2">
        <Typography variant="headingXl">Custom</Typography>
      </div>
    </div>

    <div class="flex flex-col items-start self-stretch gap-4">
      <Typography variant="bodyMdBold">All Business features, plus:</Typography>
      <div className="flex items-center gap-[1rem] self-stretch">
        <div className="w-[1.5rem] h-[1.5rem]"><svg 
  className="w-6 h-6 text-blue-700"
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M20.9556 5.90211L9.05063 19.5078L3.04199 13.4991L4.5004 12.0407L8.95017 16.4905L19.4034 4.54395L20.9556 5.90211Z" 
    fill="currentColor"
  />
</svg>
</div>
 <Typography variant="bodyMd" className="text-body_text_color_gray">SSO</Typography>
      </div>


<div className="flex items-center gap-4 w-full">
        <div className="w-[1.5rem] h-[1.5rem] flex items-center justify-center"><svg 
  className="w-6 h-6 text-blue-700"
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M20.9556 5.90211L9.05063 19.5078L3.04199 13.4991L4.5004 12.0407L8.95017 16.4905L19.4034 4.54395L20.9556 5.90211Z" 
    fill="currentColor"
  />
</svg>
</div>
 <Typography variant="bodyMd" className="text-body_text_color_gray">All integrations</Typography>
      </div>

      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center justify-center w-[1.5rem] h-[1.5rem]"><svg 
  className="w-6 h-6 text-blue-700"
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M20.9556 5.90211L9.05063 19.5078L3.04199 13.4991L4.5004 12.0407L8.95017 16.4905L19.4034 4.54395L20.9556 5.90211Z" 
    fill="currentColor"
  />
</svg>
</div>
 <Typography variant="bodyMd" className="text-body_text_color_gray">Client Collaboration with 2FA</Typography>
      </div>

      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center justify-center w-[1.5rem] h-[1.5rem]"><svg 
  className="w-6 h-6 text-blue-700"
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M20.9556 5.90211L9.05063 19.5078L3.04199 13.4991L4.5004 12.0407L8.95017 16.4905L19.4034 4.54395L20.9556 5.90211Z" 
    fill="currentColor"
  />
</svg>
</div>
 <Typography variant="bodyMd" className="text-body_text_color_gray">Advanced Project Planning</Typography>
      </div>


      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center justify-center w-[1.5rem] h-[1.5rem]"><svg 
  className="w-6 h-6 text-blue-700"
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M20.9556 5.90211L9.05063 19.5078L3.04199 13.4991L4.5004 12.0407L8.95017 16.4905L19.4034 4.54395L20.9556 5.90211Z" 
    fill="currentColor"
  />
</svg>
</div>
 <Typography variant="bodyMd" className="text-body_text_color_gray">Mobile App Integration</Typography>
      </div>
      
    </div>
   
   <div className="w-full grid">
  <div className="w-full justify-self-stretch">
     <PrimaryButton
      variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED}
      size={BUTTON_SIZES.LARGE}
      text="Learn More"
      className="!w-[20.5rem] !h-[3.125rem]"
    />
  </div>
</div>
</div>
</div>

  <Typography variant="bodyLg"className="w-full text-body_text_color_white text-center mt-[3rem]">All plans include a 14-day free trial. No credit card required.</Typography>
       </div>
</div>
  </div>
</div>

 {/* 5th section */}

  <div class="flex flex-col justify-center items-center py-[6.25rem] px-[10.625rem] gap-[0.625rem]">
    <div className="flex flex-col justify-center items-center gap-[4rem]">
      <div className="flex flex-col items-center gap-[0.75rem]">
        <Typography variant="displayLg" className="text-primary_dark">Everything you need to hire right</Typography>
        <Typography variant="headingMd" className="text-body_text_color_gray text-center">All the tools and features to find candidates who truly fit your company <br></br> culture</Typography>
      </div>
      <div  className="w-[68.75rem] mx-auto grid grid-cols-3 grid-rows-2 gap-4 g-y-2">
        
        <div className="flex flex-col items-start gap-[0.75rem] w-[21.625rem] h-[18.75rem] rounded-[0.625rem] border p-[1.88rem] ">
          {/* icon */}
          <div className="flex w-[3.12481rem] h-[3.12481rem] pr-[0.001rem] justify-center items-center shrink-0 rounded-[0.625rem] border border-[#BFDBFE] bg-[#155DFC]">
             <img src={Icon1} alt="icon1" className="w-[1.56238rem] h-[1.56238rem] shrink-0"/>
          </div>
          <Typography variant="headingMdBold">Custom Trait-Based<br></br>Assessments</Typography>
          <Typography variant="bodyMd" className="text-body_text_color_gray">Create assessments tailored to the <br></br> cultural and behavioral traits that <br></br> matter most for each role and team, <br></br> rather than relying on generic tests.</Typography>
      </div>


        <div className="flex flex-col items-start gap-[0.75rem] w-[21.625rem] h-[18.75rem] rounded-[0.625rem] border p-[1.88rem] ">
          {/* icon */}
          <div class="flex w-[3.12481rem] h-[3.12481rem] pr-[0.001rem] justify-center items-center shrink-0 rounded-[0.625rem] border border-[#BFDBFE] bg-[#155DFC]">
             <img src={Icon2} alt="icon1" className="w-[1.56238rem] h-[1.56238rem] shrink-0"/>
          </div>
          <Typography variant="headingMdBold">Clear TraitScores & Insights</Typography>
          <Typography variant="bodyMd" className="text-body_text_color_gray">View structured scores and summaries that make it easy to understand how well a candidate aligns with your team’s working style.</Typography>
        </div>
      
        <div className="flex flex-col items-start gap-[0.75rem] w-[21.625rem] h-[18.75rem] rounded-[0.625rem] border p-[1.88rem] ">
          {/* icon */}
          <div class="flex w-[3.12481rem] h-[3.12481rem] pr-[0.001rem] justify-center items-center shrink-0 rounded-[0.625rem] border border-[#BFDBFE] bg-[#155DFC]">
             <img src={Icon3} alt="icon1" className="w-[1.56238rem] h-[1.56238rem] shrink-0"/>
          </div>
          <Typography variant="headingMdBold">Quick & Simple Setup</Typography>
          <Typography variant="bodyMd" className="text-body_text_color_gray">Build and share assessments in minutes, without complex configuration or long onboarding processes.</Typography>
        </div>
      
        <div className="flex flex-col items-start gap-[0.75rem] w-[21.625rem] h-[18.75rem] rounded-[0.625rem] border p-[1.88rem] ">
          {/* icon */}
          <div class="flex w-[3.12481rem] h-[3.12481rem] pr-[0.001rem] justify-center items-center shrink-0 rounded-[0.625rem] border border-[#BFDBFE] bg-[#155DFC]">
             <img src={Icon4} alt="icon1" className="w-[1.56238rem] h-[1.56238rem] shrink-0"/>
          </div>
          <Typography variant="headingMdBold">Candidate Comparison</Typography>
          <Typography variant="bodyMd" className="text-body_text_color_gray">Compare multiple candidates using consistent trait metrics to support confident, objective hiring decisions.</Typography>
        </div>
    
        <div className="flex flex-col items-start gap-[0.75rem] w-[21.625rem] h-[18.75rem] rounded-[0.625rem] border p-[1.88rem] ">
          {/* icon */}
          <div class="flex w-[3.12481rem] h-[3.12481rem] pr-[0.001rem] justify-center items-center shrink-0 rounded-[0.625rem] border border-[#BFDBFE] bg-[#155DFC]">
             <img src={Icon5} alt="icon1" className="w-[1.56238rem] h-[1.56238rem] shrink-0"/>
          </div>
          <Typography variant="headingMdBold">Hiring Team Collaboration</Typography>
          <Typography variant="bodyMd" className="text-body_text_color_gray">Enable hiring teams to review results, share feedback, and align on decisions in one place.</Typography>
        </div>
    


  
        <div className="flex flex-col items-start gap-[0.75rem] w-[21.625rem] h-[18.75rem] rounded-[0.625rem] border p-[1.88rem] ">
          {/* icon */}
          <div class="flex w-[3.12481rem] h-[3.12481rem] pr-[0.001rem] justify-center items-center shrink-0 rounded-[0.625rem] border border-[#BFDBFE] bg-[#155DFC]">
             <img src={Icon6} alt="icon1" className="w-[1.56238rem] h-[1.56238rem] shrink-0"/>
          </div>
          <Typography variant="headingMdBold">Security & GDPR Compilance</Typography>
          <Typography variant="bodyMd" className="text-body_text_color_gray">Protect candidate data with robust security standards and compliant data handling practices.</Typography>
        </div>
      </div>
      
    </div>
  </div>

  {/* 6th section */}

  <div className="flex flex-col justify-center items-center gap-[0.625rem] w-[90rem] py-20 px-[10.625rem] bg-primary_white h-[27.875rem] mx-auto">
    <div className="flex w-[68.75rem] flex-col items-center gap-16 mx-auto bg-primary_white">
      <div className="flex w-[35.875rem] h-[6rem] flex-col items-center gap-3 bg-primary_white">
        <Typography variant="displayLg" className="text-center text-primary_dark w-[35.875rem] h-[3.125rem]">Trusted by teams worldwide</Typography>
        <Typography variant="headingMd" className="text-body_text_color_gray">Join thousands of companies making better hiring decisions</Typography>
      </div>
     
      <div className="flex w-[68.75rem] justify-center items-center gap-10 mx-auto">
    
        <div className="flex w-[15.125rem] h-[7.875rem] flex-col justify-center items-center gap-[0.625rem] shrink-0">
         <span className="text-[#155DFC] text-center text-[4rem] font-medium leading-[4.01788rem] tracking-[-0.10044rem]">2,000+</span>
         <div className="absolute w-[11.66294rem] h-[0.89288rem] rotate-[-1deg] bg-[#DBEAFE]"></div>
         <Typography variant="headingMd" className="!font-[500]">Companies Trust Us</Typography>
         <Typography variant="bodyMd" className="text-body_text_color_gray">From startups to Fortune 500</Typography>
        </div>

        <div className="flex w-[15.125rem] h-[7.875rem] flex-col justify-center items-center gap-[0.625rem] shrink-0">
         <span className="text-[#155DFC] text-center text-[4rem] font-medium leading-[4.01788rem] tracking-[-0.10044rem]">150K+</span>
         <div className="absolute w-[11.84913rem] h-[0.89288rem] rotate-[-1deg] bg-[#DBEAFE]"></div>
         <Typography variant="headingMd" className="!font-[500]">Candidates Screened</Typography>
         <Typography variant="bodyMd" className="text-body_text_color_gray">Across 50+ countries</Typography>
        </div>

        <div className="flex w-[15.125rem] h-[7.875rem] flex-col justify-center items-center gap-[0.625rem] shrink-0">
         <span className="text-[#155DFC] text-center text-[4rem] font-medium leading-[4.01788rem] tracking-[-0.10044rem]">80%</span>
         <div className="absolute w-[7.36606rem] h-[0.89288rem] rotate-[-1deg] bg-[#DBEAFE]"></div>
         <Typography variant="headingMd" className="!font-[500]">Reduction in Bad Hires</Typography>
         <Typography variant="bodyMd" className="text-body_text_color_gray">Average customer result</Typography>
        </div>

        <div className="flex w-[15.125rem] h-[7.875rem] flex-col justify-center items-center gap-[0.625rem] shrink-0">
         <span className="text-[#155DFC] text-center text-[4rem] font-medium leading-[4.01788rem] tracking-[-0.10044rem]">4.9/5</span>
         <div className="absolute w-[8.48213rem] h-[0.89288rem] rotate-[-1deg] bg-[#DBEAFE]"></div>
         <Typography variant="headingMd" className="!font-[500]">Customer Rating</Typography>
         <Typography variant="bodyMd" className="text-body_text_color_gray">Based on 500+ reviews</Typography>
        </div>
      </div>
    </div>
  </div>

  {/* 7th section */}

  <div className="flex w-[90rem] px-[10.625rem] py-[5rem] flex-col justify-center items-center gap-[4rem] mx-auto">
    <div class="flex flex-col items-center gap-3">
  <Typography variant="displayLg" className="!text-center text-primary_dark">What Hiring Teams Say About Us</Typography>
  <Typography variant="headingMd" className="text-body_text_color_gray">Join thousands of companies making better hiring decisions with CultureFit</Typography>
</div>

<div class="flex w-[68.75rem] items-center gap-[1.9375rem]">

  <div class="flex w-[21.625rem] h-[20rem] p-[2.5rem] flex-col items-center gap-2.5 shrink-0 rounded-[0.625rem] border border-[#D6D6D6] bg-white">
  <div class="flex h-[15.294rem] flex-col items-start gap-[1.33963rem] shrink-0 self-stretch">

    <div class="flex h-[1.11544rem] items-start gap-[0.22269rem] shrink-0 self-stretch">
      <img src={Icon18} alt="icon" />
      <img src={Icon18} alt="icon" />
      <img src={Icon18} alt="icon" />
      <img src={Icon18} alt="icon" />
      <img src={Icon18} alt="icon" />
    </div>
    <Typography variant="bodySm" className="!text-body_text_color_gray">"TraitsMatcher transformed our hiring process. We've reduced our 90-day turnover by 75% and team satisfaction scores are at an all-time high. It's amazing how much difference culture fit makes."</Typography>
    <div class="flex h-[4.08244rem] pt-[0.66981rem] flex-col items-start shrink-0 self-stretch">
  <div class="flex h-[2.67825rem] items-center gap-[0.89275rem] shrink-0 self-stretch">
  <div class="flex w-[2.67825rem] h-[2.67825rem] justify-center items-center shrink-0 rounded-full bg-red">
    <Typography variant="bodySm" className="!text-[0.893rem] !font-[arial] !text-primary_white">SC</Typography>
</div>
<div className="flex flex-col pt-0 pr-[6.35769rem] pb-[0.19156rem] pl-0 items-start self-stretch">
  <Typography variant="bodySm">Sarah Chen</Typography>
  <Typography variant="bodySm" className="!text-body_text_color_gray !w-[11.10769rem] !h-[1.228rem]">VP of People, TechFlow Inc.</Typography>
</div>
</div>
</div>
</div>
</div>

<div class="flex w-[21.625rem] h-[20rem] p-[2.5rem] flex-col items-center gap-2.5 shrink-0 rounded-[0.625rem] border border-[#D6D6D6] bg-white">
  <div class="flex h-[15.294rem] flex-col items-start gap-[1.33963rem] shrink-0 self-stretch">
    {/* stars */}
    <div class="flex h-[1.11544rem] items-start gap-[0.22269rem] shrink-0 self-stretch">
      <img src={Icon18} alt="icon" />
      <img src={Icon18} alt="icon" />
      <img src={Icon18} alt="icon" />
      <img src={Icon18} alt="icon" />
      <img src={Icon18} alt="icon" />
    </div>
    <Typography variant="bodySm" className="!text-body_text_color_gray">"As a remote-first startup, culture is everything. TraitsMatcher helps us find people who thrive in our autonomous, fast-paced environment. Best investment we've made in our hiring stack."</Typography>
    <div class="flex h-[4.08244rem] pt-[0.66981rem] flex-col items-start shrink-0 self-stretch">
  <div class="flex h-[2.67825rem] items-center gap-[0.89275rem] shrink-0 self-stretch">
  <div class="flex w-[2.67825rem] h-[2.67825rem] justify-center items-center shrink-0 rounded-full bg-orange">
    <Typography variant="bodySm" className="!text-[0.893rem] !font-[arial] !text-primary_white">MW</Typography>
</div>
<div className="flex flex-col pt-0 pr-[6.35769rem] pb-[0.19156rem] pl-0 items-start self-stretch">
  <Typography variant="bodySm">Marcus Williams</Typography>
  <Typography variant="bodySm" className="!text-body_text_color_gray !w-[11.10769rem] !h-[1.228rem]">Founder & CEO, GrowLabs</Typography>
</div>
</div>
</div>
</div>
</div>

<div class="flex w-[21.625rem] h-[20rem] p-[2.5rem] flex-col items-center gap-2.5 shrink-0 rounded-[0.625rem] border border-[#D6D6D6] bg-white">
  <div class="flex h-[15.294rem] flex-col items-start gap-[1.33963rem] shrink-0 self-stretch">
    {/* stars */}
    <div class="flex h-[1.11544rem] items-start gap-[0.22269rem] shrink-0 self-stretch">
     <img src={Icon18} alt="icon" />
     <img src={Icon18} alt="icon" />
     <img src={Icon18} alt="icon" />
     <img src={Icon18} alt="icon" />
     <img src={Icon18} alt="icon" /> 
    </div>
    <Typography variant="bodySm" className="!text-body_text_color_gray">"We were skeptical at first, but the results speak for themselves. New hires are ramping up faster and fitting in better with existing teams. The culture score has become a key part of our hiring rubric."</Typography>
    <div class="flex h-[4.08244rem] pt-[0.66981rem] flex-col items-start shrink-0 self-stretch">
  <div class="flex h-[2.67825rem] items-center gap-[0.89275rem] shrink-0 self-stretch">
  <div class="flex w-[2.67825rem] h-[2.67825rem] justify-center items-center shrink-0 rounded-full bg-purple">
    <Typography variant="bodySm" className="!text-[0.893rem] !font-[arial] !text-primary_white">TS</Typography>
</div>
<div className="flex flex-col pt-0 pr-[6.35769rem] pb-[0.19156rem] pl-0 items-start self-stretch">
  <Typography variant="bodySm">Taylor Swift</Typography>
  <Typography variant="bodySm" className="!text-body_text_color_gray !w-[11.10769rem] !h-[1.228rem]">Head of Talent, CloudScale</Typography>
</div>
</div>
</div>
</div>
</div>
</div>   
  </div>

  {/* 8th section */}

<div className="relative w-full h-[30.9375rem] bg-[#EBF7FF] gap-[3rem] flex flex-col justify-center items-center pt-[5rem] mx-auto"> 
  <div className="inline-flex flex-col items-center gap-[3rem]">
    <div className="flex flex-col items-center justify-center gap-6">
      <Typography
  variant="displayLg"
  className="text-center text-primary_dark"
>
  Start Hiring For Fit, Not{" "}
  <span className="text-primary_blue">Just Skills</span>
</Typography>

<Typography variant="headingMd" className="w-[37.5rem] h-[4.5rem] text-center text-body_text_color_gray">Create assessments that measure both skills and cultural fit, giving your team the insights needed to hire confidently and build stronger, more aligned teams.</Typography>
</div>
</div>

<PrimaryButton variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED} size={BUTTON_SIZES.MEDIUM} text="Start Hiring for Fit"></PrimaryButton>

 <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute right-[0%] bottom-[3rem] w-[15.9167rem] h-[10.3125rem] fill-[#155DFC] z-20"
    viewBox="0 0 254 165"
    fill="none"
  >
    <path d="M-4.66241e-06 76.3104L366.667 -4.66241e-06V87.3889L0 165L-4.66241e-06 76.3104Z"/>
  </svg>
</div>

{/* 9th section */}
<div
  className="relative top-0 left-0 pointer-events-none w-[90rem] mx-auto -mt-[7.5rem]"
  style={{
    width:'100%',
    maxwidth: '100vw',
    height: '54rem',
    background: 'linear-gradient(84deg, #1B45B4 2.94%, #1C2792 96.29%)',
    clipPath: 'polygon(0 12%, 100% 0, 100% 100%, 0 100%)',
  }}
>

<div className="relative z-10 pt-[10rem] px-[5rem] mx-auto">
 
  <div className="flex items-start justify-center gap-[7rem] mx-auto">
    
    {/* Left Section - TraitsMatcher (remains column) */}
    <div className="inline-flex flex-col items-start gap-[2rem]"> 
      <div className="flex flex-col items-start gap-[0.75rem]">
        <Typography variant="headingXl" className="text-primary_white w-[12.4375rem] h-[2.125rem]">
          TraitsMatcher
        </Typography>
        <Typography variant="bodyMd" className="text-primary_white w-[18.875rem] h-[5.5rem]">
          Pre-interview culture screening tool helping companies hire for culture fit, not just skills. Build teams that actually work together.
        </Typography>
      </div>

      {/* icons */}
      <div className="flex items-start gap-[1rem]">
        <div className="flex p-[0.5rem] justify-center items-center gap-[0.625rem] rounded-[0.625rem] bg-primary_white opacity-20 w-[3rem] h-[3rem]"></div>
        <div className="flex p-[0.5rem] justify-center items-center gap-[0.625rem] rounded-[0.625rem] bg-primary_white opacity-20 w-[3rem] h-[3rem]"></div>
        <div className="flex p-[0.5rem] justify-center items-center gap-[0.625rem] rounded-[0.625rem] bg-primary_white opacity-20 w-[3rem] h-[3rem]"></div>
        <div className="flex p-[0.5rem] justify-center items-center gap-[0.625rem] rounded-[0.625rem] bg-primary_white opacity-20 w-[3rem] h-[3rem]"></div>
        <div className="flex p-[0.5rem] justify-center items-center gap-[0.625rem] rounded-[0.625rem] bg-primary_white opacity-20 w-[3rem] h-[3rem]"></div>
      </div>
    </div>

    {/* Right Section - Pages */}
    <div className="inline-flex flex-col items-start gap-[1rem]">
      <Typography variant="bodyLg" className="text-primary_white !font-[700]">
        Pages
      </Typography>
      <div className="flex flex-col items-start gap-[1rem]">
        <TertiaryButton text="Home" hover></TertiaryButton>
        <TertiaryButton text="Features" hover></TertiaryButton>
        <TertiaryButton text="How it Works" hover></TertiaryButton>
        <TertiaryButton text="Testimonials" hover></TertiaryButton>
        <TertiaryButton text="Pricing" hover></TertiaryButton>
        <TertiaryButton text="Demo" hover></TertiaryButton>
        <TertiaryButton text="Blog" hover></TertiaryButton>
      </div>
    </div>
    

     {/* Column 2 - Company */}
    <div className="inline-flex flex-col items-start gap-[1rem]">
      <Typography variant="bodyLg" className="text-primary_white !font-[700]">
        Company
      </Typography>
      <div className="flex flex-col items-start gap-[1rem]">
        <TertiaryButton text="Help Center" hover></TertiaryButton>
        <TertiaryButton text="Contact" hover></TertiaryButton>
        <TertiaryButton text="About Us" hover></TertiaryButton>
        <TertiaryButton text="FAQ" hover></TertiaryButton>
      </div>
    </div>

    {/* Column 3 - Utility Pages */}
    <div className="inline-flex flex-col items-start gap-[1rem]">
      <Typography variant="bodyLg" className="text-primary_white !font-[700]">
        Utility Pages
      </Typography>
      <div className="flex flex-col items-start gap-[1rem]">
        <TertiaryButton text="Sign In" hover></TertiaryButton>
        <TertiaryButton text="Sign Up" hover></TertiaryButton>
        <TertiaryButton text="Forgot Password" hover></TertiaryButton>
        <TertiaryButton text="Reset Password" hover></TertiaryButton>
        <TertiaryButton text="Email Confirmation" hover></TertiaryButton>
        <TertiaryButton text="404 Page" hover></TertiaryButton>
        <TertiaryButton text="Coming Soon" hover></TertiaryButton>
        <TertiaryButton text="Style Guide" hover></TertiaryButton>
      </div>
    </div>

  </div>
</div>

<div className="flex w-[36rem] flex-col items-center gap-[2rem] mt-[3rem] mx-auto">
    <div className="flex w-[26.8125rem] flex-col items-center gap-[0.75rem]">
      <Typography variant="headingXl" className="text-primary_white">Subscribe to our Newsletter</Typography>
      <Typography variant="bodyMd" className="text-primary_white">Get hiring tips and culture insights delivered to your inbox</Typography>
    </div>

    <div className="flex pr-0 items-start gap-[0.75rem] self-stretch">
      <Input placeholder="Example@gmail.com"></Input>
      <SecondaryButton size={SECONDARY_BUTTON_SIZES.MEDIUM} text="Subscribe" className="text-primary_white border-primary_white"></SecondaryButton>
    </div>
  </div>

  <div className="w-[69rem] h-[0.0625rem] opacity-30 bg-primary_white mx-auto mt-[5rem]"></div>
  <div className="flex justify-between items-center w-[69rem] h-[2.9375rem] mx-auto mt-[1rem]">
    <Typography variant="bodyMd" className="text-primary_white">2026 TraitsMatcher. All Rights Reserved</Typography>
    <div className="inline-flex justify-center items-center gap-[1.25rem]">
      <Typography variant="bodyMd" className="text-primary_white">Privacy</Typography>
      <Typography variant="bodyMd" className="text-primary_white">Terms</Typography>
      <Typography variant="bodyMd" className="text-primary_white">Cookies</Typography>
    </div>
  </div>

</div>


    </>
  );
}
