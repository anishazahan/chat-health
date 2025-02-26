import DoctorProfile from "../DoctoreProfileData";
import PaymentForm from "./PaymentForm";
import PractitionerSelection from "./PractitionerSelection";
import PrescriptionForm from "./PrescriptionForm";
import ClinicSelection from "./TopClinicSection";

const SearchingConsultResult = () => {
  return (
    <div className="max-w-[872px] mx-auto  mt-16 border border-[#1B1C1C1A] rounded-[34px]">
      <ClinicSelection />
      <PractitionerSelection />
      <PrescriptionForm />

      <PaymentForm />
      <DoctorProfile />
    </div>
  );
};

export default SearchingConsultResult;
