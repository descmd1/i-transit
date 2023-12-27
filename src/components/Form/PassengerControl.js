import React, { useState } from 'react';
import Passenger from './Passenger';
import NextOfKin from './NextOfKin';
import Preview from './Preview';


const PassengerControl = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    address: '',
    phone: '',
    nextofkin_phone: '',
    nextofkin_name: '',
    nextofkin_address: ""
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Passenger formData={formData} setFormData={setFormData} nextStep={nextStep} />;
      case 2:
        return <NextOfKin formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Preview formData={formData} prevStep={() =>prevStep(3)} onPrevStep={() => prevStep(1)} />;
      default:
        return null;
    }
  };

  return (
    <div className='flex w-[1200px]'>
      {renderStep()}
    </div>
  );
};

export default PassengerControl;