import React from 'react'
import Typography from '../shared/components/Typography';
import Icon21 from '../assets/Icon21.png'
import Input from '../shared/components/Input';
import PrimaryButton from '../shared/components/PrimaryButton';
import { BUTTON_DEFAULT_VARIENT_TEXT, BUTTON_SIZES } from '../constants/constants';
import Icon from "../assets/Icon.svg";
import TertiaryButton from '../shared/components/TertiaryButton';
import FooterPages from "../shared/components/FooterPages";

const ForgetPassword = () => {
  return (
    <>
    <div className='min-h-screen bg-primary_white'>
                    <Typography variant='brand' className='text-primary_blue !px-[7rem] !pt-[2.5rem]'>TraitsMatcher</Typography>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex w-[38rem] flex-col justify-center items-center gap-[2rem] mt-[0.88rem] mx-auto mb-[1.9rem]'>
            <div className="flex h-[35rem] px-[5rem] pt-[4rem] pb-[2.25rem] justify-center items-center rounded-[0.625rem] border border-border_color bg-primary_white shadow-[0_2px_5px_rgba(0,0,0,0.20)]">
                <div className='w-[28rem] h-[28.75rem] flex flex-col justify-center items-center gap-[2rem]'>
                    {/* icon */}
                    <div className='flex w-[4rem] h-[4rem] justify-center items-center rounded-full bg-[#EFF6FF]'>
                       <img src={Icon21} alt="Icon-21" className='w-full h-full p-3 object-contain'/>
                    </div>
                    {/* forget password div */}
                    <div className='flex w-[28rem] flex-col justify-center items-center gap-[0.75rem]'>
                        <Typography variant='headingXl'>Forgot password?</Typography>
                        <Typography variant='bodyMd' className='text-body_text_color_gray text-center'>No worries, enter your email below and we'll send you reset instructions.</Typography>
                    </div>
                    {/* Email */}
                    <div className='flex flex-col justify-center items-start self-stretch gap-[0.625rem]'>
                    <Typography variant='bodySm' className='!font-[600]'>Email Address</Typography>
                    <Input placeholder='name@company.com'></Input>
                    </div>

                    <PrimaryButton variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED} size={BUTTON_SIZES.MEDIUM} text='Send Reset Link' className='!w-[28rem] !h-[3.56rem]'></PrimaryButton>
                    <div className='flex flex-col items-center self-stretch pt-6 border-t border-[#D6D6D6]'>
                        <div className='flex'>
                            <img src={Icon} alt="icon" />
                            <TertiaryButton text="Back to log in" className='!text-body_text_color_gray !text-[o.875rem] !font-[700]'></TertiaryButton>
                        </div>
                    </div>

                </div>
            </div>
            {/* neechay waala div */}
            <div className='flex w-full h-[1.25rem] justify-center items-center'>
            <div className="flex gap-1">
            <Typography variant="bodySm" className="!text-body_text_color_gray">Having Trouble?</Typography>
            <a href="/contact"><Typography variant="bodySm" className="text-primary_blue hover cursor-pointer !font-[700]">
             Contact our support team
            </Typography>
            </a>
</div>
</div>
        </div>
        </div>
        <div className="mt-auto flex justify-center pb-6">
        <FooterPages /> </div>
      
    </div>
    </>
  )
} 

export default ForgetPassword
