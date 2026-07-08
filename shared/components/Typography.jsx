import React from "react";

const Typography = ({ variant = "body-md", children, className = "" }) => {
  const variants = {

    heroHeading: `
      text-[3.75rem] 
      font-bold 
      leading-[1.05] 
      tracking-[-0.09rem]
      text-primary_white
    `,

    /* ===== Display */
    displayLg: `
      text-[3rem] 
      font-bold 
      leading-[1.05] 
      tracking-[-0.09rem]
    `,

    /* ===== Headings ===== */
    headingXl: `
      text-[2rem] 
      font-bold 
      leading-[1.05] 
      tracking-[-0.06rem]
    `,

    headingLg: `
      text-[1.75rem] 
      font-bold 
      leading-normal
    `,

    headingMdBold: `
      text-[1.25rem] 
      font-bold 
      leading-normal
    `,

    headingMd: `
      text-[1.25rem] 
      font-normal 
      leading-normal
    `,

    /* ===== Brand / Logo ===== */
    brand: `
      text-[1.5rem] 
      font-black 
      leading-normal
    `,

    /* ===== Body Text ===== */
    bodyLg: `
      text-[1.125rem] 
      font-normal 
      leading-[1.4]
    `,

    bodyMd: `
      text-[1rem] 
      font-normal 
      leading-[1.4]
    `,

    bodyMdBold: `
      text-[1rem] 
      font-bold 
      leading-[1.4]
    `,

    bodySm: `
      text-[0.875rem] 
      font-normal 
      leading-normal
    `,

    /* ===== Meta / Small ===== */
    sectionLabel: `
      text-[0.75rem] 
      font-bold 
      tracking-[0.09375rem]
    `,

    caption: `
      text-[0.75rem] 
      font-normal 
      leading-normal
    `,

    labelBold: `
      text-[0.625rem] 
      font-bold 
      leading-normal
    `,

    label: `
      text-[0.625rem] 
      font-normal 
      leading-normal
    `,
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Typography;