import React from "react";
import Typography from "../shared/components/Typography";
import FooterPages from "../shared/components/FooterPages";
import AssessmentCreation from "../features/assessments/AssessmentCreation";

const AssessmentLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary_white flex flex-col">

      {/* Top Bar */}
      <Typography
        variant="brand"
        className="text-primary_blue !px-[7rem] !pt-[2.5rem]"
      >
        TraitsMatcher
      </Typography>

      {/* Page Content */}
      <div className="flex-1">
       {children || <AssessmentCreation />}
      </div>

      {/* Footer */}
      <div className="mt-auto flex justify-center pb-6">
        <FooterPages />
      </div>

    </div>
  );
};

export default AssessmentLayout;