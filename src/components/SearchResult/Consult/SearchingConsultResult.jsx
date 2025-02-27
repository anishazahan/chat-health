"use client";
import { LuChevronLeft } from "react-icons/lu";
import { MdMobileScreenShare } from "react-icons/md";
import { useSelector } from "react-redux";
import PaymentForm from "./PaymentForm";
import PractitionerSelection from "./PractitionerSelection";
import PrescriptionForm from "./PrescriptionForm";
import ClinicSelection from "./TopClinicSection";

const SearchingConsultResult = () => {
  const { isShowPaymentForm } = useSelector((state) => state.signUpModal);

  return (
    <div className="max-w-[872px] mx-auto ">
      {isShowPaymentForm && (
        <div className="mt-10">
          <button className="flex items-center mb-4 text-gray-700">
            <LuChevronLeft className="mr-1" size={20} /> Back
          </button>
          <div className="p-4 border rounded-[16px] flex items-start gap-3">
            <MdMobileScreenShare size={24} className="text-gray-800" />
            <p className="text-sm ">
              After payment, we'll send you a link to your consultation via email and SMS. An e-script will be sent to
              your mobile number after the consultation.
            </p>
          </div>
        </div>
      )}
      <div className="max-w-[872px] mx-auto  mt-10 border border-[#1B1C1C1A] rounded-[34px]">
        {!isShowPaymentForm && (
          <>
            <ClinicSelection />
            <PractitionerSelection />
            <PrescriptionForm />
          </>
        )}

        {isShowPaymentForm && <PaymentForm />}

        {/* <DoctorProfile /> */}
      </div>
    </div>
  );
};

export default SearchingConsultResult;
