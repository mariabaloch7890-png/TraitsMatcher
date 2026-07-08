import React from "react";
import Typography from "./Typography";

const FooterPages = () => {
  return (
    <div className="flex w-[80rem] max-w-[80rem] h-[1.25rem] justify-center items-center">

      <Typography variant="bodySm" className="!text-primary_blue">
        © 2024 TraitsMatcher. All rights reserved.
      </Typography>

      {/* Dot */}
      <div className="flex flex-col items-start px-[0.25rem]">
        <Typography variant="bodySm"> . </Typography>
      </div>

      <Typography variant="bodySm" className="cursor-pointer !text-primary_blue">
        Privacy Policy
      </Typography>

      {/* Dot */}
      <div className="flex flex-col items-start px-[0.25rem]">
        <Typography variant="bodySm" className="!text-primary_blue"> . </Typography>
      </div>

      <Typography variant="bodySm" className="cursor-pointer !text-primary_blue">
        Terms of Service
      </Typography>

      {/* Dot */}
      <div className="flex flex-col items-start px-[0.25rem]">
        <Typography variant="bodySm" className="!text-primary_blue"> . </Typography>
      </div>

      <Typography variant="bodySm" className="cursor-pointer !text-primary_blue">
        Cookies
      </Typography>

    </div>
  );
};

export default FooterPages;