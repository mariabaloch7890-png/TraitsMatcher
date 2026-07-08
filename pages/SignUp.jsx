import React, { useState } from "react";
import BasicInformation from "../features/signup/BasicInformation";
import CompanyInformation from "../features/signup/CompanyInformation";
import AccountSecurity from "../features/signup/AccountSecurity";

const Signup = () => {

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>

      {step === 1 && <BasicInformation nextStep={nextStep} />}

      {step === 2 && (
        <CompanyInformation 
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && <AccountSecurity prevStep={prevStep} />}

    </div>
  );
};

export default Signup;