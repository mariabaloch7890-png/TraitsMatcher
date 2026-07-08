import React from 'react'
import Typography from '../shared/components/Typography'
import Input from '../shared/components/Input'
import PrimaryButton from '../shared/components/PrimaryButton'
import { BUTTON_DEFAULT_VARIENT_TEXT, BUTTON_SIZES, SECONDARY_BUTTON_SIZES } from '../constants/constants'
import { FcGoogle } from "react-icons/fc";
import SecondaryButton from '../shared/components/SecondaryButton'
import { Link } from "react-router-dom";
import TertiaryButton from '../shared/components/TertiaryButton';
import SarahChen from '../assets/SarahChen.png';

const LogIn = () => {
  return (
    <div>
      <div className='flex items-start w-[90rem] min-h-[56.25rem] bg-[#F8FAFC]'>
        {/* blue div */}
         <div className='relative flex flex-col gap-[4rem] p-[3rem] justify-center items-ccenter flex-1 self-stretch w-[45rem] min-h-[56.25rem]'
         style={{
    background: `
      radial-gradient(141.42% 141.42% at 0% 0%, #04C 0%, rgba(0, 68, 204, 0) 50%),
      radial-gradient(141.42% 141.42% at 100% 0%, #009 0%, rgba(0, 0, 153, 0) 50%),
      radial-gradient(141.42% 141.42% at 100% 100%, #05F 0%, rgba(0, 85, 255, 0) 50%),
      radial-gradient(141.42% 141.42% at 0% 100%, #08C 0%, rgba(0, 136, 204, 0) 50%),
      #1E3A8A
    `,
  }}>
     <div className='flex w-[8.2285rem] h-[1.625rem] flex-col justify-center absolute left-[6rem] top-[4.0625rem]'>
        <Typography variant='brand' className='!text-primary_white !leading-[1.75rem] !tracking-[-0.03125rem] !font-[900]'>TraitsMatcher</Typography>
     </div>
     <div className='w-[32rem] h-[33.42188rem] max-w-[32rem] flex flex-col justify-center items-center gap-[2rem]'>
        <div className="flex w-[32rem] p-[1.5rem] flex-col items-start rounded-[1.5rem] border border-white/20 bg-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-[12px]">
         <div className='rounded-[1.5rem] overflow-hidden'>
        {/* upper part */}
        <div className="flex p-[1rem] bg-primary_white justify-between items-center self-stretch border-b border-input_light_gray">
            {/* colors */}
            <div className='flex flex-start gap-[0.375rem]'>
                <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-[#F87171]"></div>
                 <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-[#FBBF24]"></div>
                  <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-[#34D399]"></div>
            </div>
            <div className='w-[6rem] h-[0.5rem] rounded-full bg-input_light_gray'></div>
        </div>
        {/* lower part */}
        <div className="flex p-6 flex-col items-start gap-6 self-stretch bg-primary_white">
            <div className="flex items-center gap-[1rem] self-stretch w-[25.875rem] h-[3rem]">
                <div className='w-[3rem] h-[3rem] rounded-full bg-input_border_light'></div>
                <div className='flex flex-col items-start gap-[0.5rem]'>
                    <div className='w-[8rem] h-[0.75rem] rounded-[0.5rem] bg-input_border_light'></div>
                    <div className='w-[6rem] h-[0.5rem] rounded-[0.5rem] bg-input_light_gray'></div>
                </div>
            </div>
            <div className='flex flex-col items-start gap-[1rem] self-stretch'>
                {/* first line */}
                <div className='flex justify-between items-center self-stretch'>
                  <div className='w-[5rem] h-[0.5rem] rounded-[0.5rem] bg-input_light_gray'></div>
                  <div className="w-[10rem] h-[0.5rem] bg-[#2563EB]/20 rounded-[0.25rem] overflow-hidden">
                 <div className="h-full w-[80%] bg-[#2563EB]"></div>
                </div>
                </div>

                {/* 2nd line */}
                 <div className='flex justify-between items-center self-stretch'>
                  <div className='w-[6rem] h-[0.5rem] rounded-[0.5rem] bg-input_light_gray'></div>
                  <div className="w-[10rem] h-[0.5rem] bg-[#2563EB]/20 rounded-[0.25rem] overflow-hidden">
                 <div className="h-full w-[60%] bg-[#2563EB]"></div>
                </div>
                </div>
                {/* 3rd line */}
                 <div className='flex justify-between items-center self-stretch'>
                  <div className='w-[4rem] h-[0.5rem] rounded-[0.5rem] bg-input_light_gray'></div>
                  <div className="w-[10rem] h-[0.5rem] bg-[#2563EB]/20 rounded-[0.25rem] overflow-hidden">
                 <div className="h-full w-[91.66%] bg-[#2563EB]"></div>
                </div>
                </div>
            </div>
        </div>
        </div>

        </div>
        <Typography variant='headingXl' className='!text-primary_white !leading-[2.1rem] !tracking-[-0.06rem]'>Hire People Who Fit Your Culture</Typography>
        <Typography variant='headingMd' className='!text-[#EFF6FFCC] !text-center'>"TraitsMatcher transformed our hiring process. We reduced
turnover by 75% by focusing on what truly matters: culture fit
and behavioral traits."</Typography>
        <div className='flex w-[32rem] justify-center items-center gap-[0.75rem]'>
            <div className=" w-[2.5rem] h-[2.5rem] max-w-[32rem] flex-shrink-0 rounded-full border-2 border-white/50">
            <img src={SarahChen} alt="icon" /></div>
            <div className='flex flex-col items-start'>
                <div className='flex flex-col items-start self-stretch'></div>
                <Typography variant='bodySm' className='!text-primary_white !font-[700]'>Sarah Chen</Typography>
                <Typography variant='caption' className='!text-[#DBEAFEB2]'>VP of People, TechFlow Inc.</Typography>
            </div>
            
        </div>
     </div>
  </div>
        {/* White div */}
        <div className="flex flex-col flex-1 self-stretch bg-primary_white">

  {/* Top content */}
  <div className="flex flex-col flex-1 px-[8rem] pt-[7rem] pb-[3rem]">
    <div className="flex max-w-[28rem] flex-col items-start gap-[0.5rem]">
      <Typography variant='headingXl' className='!text-primary_black'>
        Log in to your account
      </Typography>
      <Typography variant='bodyMd' className='text-body_text_color_gray'>
        Please enter your details to log in to your account.
      </Typography>

      {/* Form Inputs */}
      <div className='flex flex-col gap-[1.5rem] py-[1.5rem] self-stretch'>
        <Typography variant='bodySm' className='!text-primary_black !leading-[1.25rem] !font-[700]'>Email Address</Typography>
        <Input placeholder='name@company.com' />

        <div className='flex justify-between items-center self-stretch'>
          <Typography variant='bodySm' className='!text-primary_black !leading-[1.25rem] !font-[700]'>Password</Typography>
          <Typography variant='bodySm' className='!text-[0.875rem] !text-primary_blue !leading-[1.25rem] !font-[600]'>
            Forgot password?
          </Typography>
        </div>
        <Input placeholder="••••••••" />

        <div className='flex items-center gap-[0.5rem]'>
          <div className="w-4 h-4 rounded-lg border border-[#CBD5E1] bg-primary_white"></div>
          <Typography variant='bodySm' className='!text-[0.875rem] !text-dark_gray !leading-[1.25rem] !font-[400]'>
            Remember me for 30 days
          </Typography>
        </div>

        <PrimaryButton
          variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED}
          text="Log in"
          size={BUTTON_SIZES.LARGE}
          className='!w-[28rem] !h-[3.5625rem]'
        />
      </div>

      {/* Login with Google */}
      <div className='flex flex-col items-start self-stretch pt-[2rem] border-t border-input_light_gray'>
        <SecondaryButton
          size={SECONDARY_BUTTON_SIZES.LARGE}
          text="Log in with Google"
          icon={<FcGoogle size={20} />}
          hoverEnabled
          className="w-full !text-[1.125rem] !font-[700] !h-[3.125rem] text-primary_black"
        />
      </div>

      {/* Sign up link */}
      <div className="flex pt-6 justify-center items-start gap-[0.263rem] self-stretch">
        <Typography variant="bodySm" className='!text-body_text_color_gray'>Don't you have an account?</Typography>
        <Link to="/signin">
          <Typography
            variant="bodySm"
            className="text-primary_blue text-[0.75rem] !font-[700] hover cursor-pointer"
          >
             Sign up
          </Typography>
        </Link>
      </div>
    </div>
  </div>

  {/* Footer buttons */}
  <div className="flex justify-center items-center border-t border-input_light_gray px-[8rem] py-[1.56rem]">
    <div className='flex items-center gap-[1.5rem]'>
      <TertiaryButton text="Privacy Policy" hover className="!text-primary_blue" />
      <TertiaryButton text="Terms of Service" hover className="!text-primary_blue" />
      <TertiaryButton text="Cookies" hover className="!text-primary_blue" />
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default LogIn
