"use client";

import { setSelectedConsult } from "@/redux/slices/landingSearchSlice";
import { setIsPrevSignupModal } from "@/redux/slices/signUpModalSlice";
import { IoDocumentOutline } from "react-icons/io5";
import { LuMicroscope } from "react-icons/lu";
import { TiDocumentText } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import IsLoggedInModal from "../SignUp/IsLoggedInModal";

const QuickConsultServiceCard = () => {
  const dispatch = useDispatch();

  const { isPrevSignupModal } = useSelector((state) => state.signUpModal);
  const { selectedConsult } = useSelector((state) => state.landingSearch);
  const isLoggedIn = false;
  const services = [
    { name: "Online Script", price: "$29.95", icon: <TiDocumentText /> },
    { name: "1-2 day Medical Certificate", price: "free", icon: <IoDocumentOutline /> },
    { name: "Carer's leave certificate", price: "$29.95", icon: <LuMicroscope /> },
  ];

  return (
    <div className="max-w-[872px] mx-auto px-4 mt-16">
      <h2 className="font-semibold text-center text-2xl md:text-4xl mt-7 mb-10">Quick Consult With Your Local GP</h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services?.map((service, index) => (
          <div
            onClick={() => {
              dispatch(
                setSelectedConsult({
                  name: service?.name,
                  price: service?.price,
                })
              );
              dispatch(setIsPrevSignupModal(true));
            }}
            key={index}
            className={`${
              selectedConsult?.name === service?.name
                ? "bg-primary-dark text-white border-primary-dark"
                : "bg-white text-gray-900 border-gray-300"
            } 
      flex flex-col items-start justify-center p-4 border rounded-[34px] w-[280px] 
      group transition-all duration-300 
      hover:bg-primary-light hover:border-teal-500 hover:cursor-pointer shadow-sm`}
          >
            {/* Icon Wrapper (aligned left) */}
            <span
              className={`text-xl mb-2 p-[10px] rounded-full transition-all duration-300 
        ${selectedConsult?.name === service?.name ? "bg-primary-light " : "bg-gray-100 text-gray-800"} 
        group-hover:bg-primary-light group-hover:text-gray-800`}
            >
              {service?.icon}
            </span>

            {/* Service Name (aligned left) */}
            <h3
              className={`text-left text-sm font-medium transition-all duration-300 
        ${selectedConsult?.name === service?.name ? "text-white" : "text-gray-700"} 
        group-hover:text-gray-700`}
            >
              {service?.name}
            </h3>

            {/* Price (aligned left) */}
            <p
              className={`text-sm mt-2 font-semibold transition-all duration-300 
        ${selectedConsult?.name === service?.name ? "text-white" : "text-gray-900"} 
        group-hover:text-gray-900`}
            >
              {service?.price === "free" ? (
                <>
                  Free <span>*</span>
                </>
              ) : (
                service?.price
              )}
            </p>
          </div>
        ))}
      </div>

      {/* modal */}

      {isPrevSignupModal && <IsLoggedInModal />}
    </div>
  );
};

export default QuickConsultServiceCard;
