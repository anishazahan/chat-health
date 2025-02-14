"use client";

import AddressForm from "./AddressForm";
import BasicInfoForm from "./BasicInfoForm";
import InfoCard from "./InfoCard";
import SymptomsForm from "./SymptomsForm";

const LandingForm = () => {
  return (
    <div className="max-w-[800px] flex justify-center items-start mx-auto mt-10  w-full ">
      <div className="mr-auto">
        <InfoCard />
        <BasicInfoForm />
        <AddressForm />
        <SymptomsForm />
      </div>
    </div>
  );
};

export default LandingForm;
