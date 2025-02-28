"use client";
import { setSelectedConsult } from "@/redux/slices/landingSearchSlice";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt, FaClock, FaPlus, FaRegFileAlt } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { LuMicroscope } from "react-icons/lu";
import { TiDocumentText } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

export default function PatientDashboardUI() {
  const { register, handleSubmit } = useForm();
  const [summaryExpanded, setSummaryExpanded] = useState(false);
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
    <div className="h-[calc(100vh-80px)] pb-4">
      {/* top */}
      <div className="flex gap-2 h-[70%] overflow-y-auto py-3">
        <div className="w-[30%] h-full">
          {/* Upcoming Appointment */}
          <div className="bg-white p-2 rounded-lg shadow-md pb-4 h-full overflow-y-auto">
            <h2 className="text-xl font-semibold pb-4 pt-2">Upcoming Appointment</h2>

            <div className="bg-[#F5F5F5] rounded-[34px] p-6">
              <div className="flex items-center gap-3">
                <Image
                  src={"/images/service-img/doctor.png"}
                  alt={"doctor.name"}
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Dr. Sarah Wilson</h3>
                  <p className="text-gray-500 text-sm pt-1 ">General Check-up</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CiLocationOn className={"text-secondary-dark"} />
                <p className="text-gray-500 pt-2 text-sm">Bondi Medical Center</p>
              </div>
              <p className="text-gray-500 text-sm">123 Bondi Road, Bondi NSW 2026</p>
              <div className="flex justify-between py-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaCalendarAlt /> <span>26 Jan, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaClock /> <span>10:30 AM</span>
                </div>
              </div>
              <div className="pt-4 p-3 bg-[#EBEBEB] rounded-[24px]">
                <h4 className="font-semibold text-sm pb-2">Symptom Summary</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...{summaryExpanded ? "full text" : ""}
                  <button className="text-blue-500 ml-2" onClick={() => setSummaryExpanded(!summaryExpanded)}>
                    {summaryExpanded ? "See less" : "See more"}
                  </button>
                </p>
              </div>
            </div>
            {/* bottom btn */}
            <div className="pt-3 grid grid-cols-2 gap-4 w-full">
              <button className="px-4 py-3  rounded-full text-gray-700 bg-gray-100">Cancel</button>
              <button className="px-4 py-3 bg-primary-dark text-white rounded-full">Reschedule</button>
            </div>
          </div>
        </div>
        <div className="w-[70%] h-full flex flex-col space-y-4">
          {/* prescription card */}
          <div className="grid grid-cols-1 h-[30%] sm:grid-cols-2 md:grid-cols-3 w-full gap-2 ">
            {services?.map((service, index) => (
              <div
                onClick={() => {
                  dispatch(
                    setSelectedConsult({
                      name: service?.name,
                      price: service?.price,
                    })
                  );
                }}
                key={index}
                className={`${
                  selectedConsult?.name === service?.name
                    ? "bg-primary-dark text-white border-primary-dark"
                    : "bg-white text-gray-900 border-white"
                } 
         flex flex-col items-start justify-center p-4 border rounded-[34px]  
         group transition-all duration-300 
         hover:bg-primary-light hover:border-teal-500 hover:cursor-pointer shadow-sm`}
              >
                {/* Icon Wrapper (aligned left) */}
                <span
                  className={`text-xl pb-2 p-[10px] rounded-full transition-all duration-300 
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
                  className={`text-sm pt-2 font-semibold transition-all duration-300 
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

          <div className="grid grid-cols-2 gap-2  h-[70%]">
            <div className="h-full">
              {/* Past Appointments */}
              <div className="bg-white p-6 rounded-[34px] shadow-md  h-full">
                <h2 className="text-xl font-semibold pb-4">Past Appointments</h2>
                <div className="flex items-center justify-center  py-10 rounded-[28px] bg-[#F5F5F5] ">
                  <div className="space-y-2 text-center mx-auto">
                    <p className="text-center mx-auto">
                      <FaRegFileAlt className="text-2xl text-secondary-dark text-center mx-auto" />
                    </p>
                    <p className="text-sm text-gray-600">Your first appointment is scheduled</p>
                    <p className="text-xs text-gray-500">Past appointment will appear here after your visit</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[34px] p-6 flex items-center justify-center h-full">
              <div className="text-secondary-dark font-medium">+ Add New Patient</div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom*/}
      <div className="bg-white h-[30%] overflow-y-auto px-3 rounded-[34px] pb-2">
        <h2 className="text-xl font-semibold pb-3 text-gray-700 pt-3 px-4">Before Your Visit</h2>
        <div className="grid grid-cols-4 gap-4">
          {/* number-1 */}
          <div className="bg-[#F5F5F5] pt-4 px-4 pb-3 rounded-[28px] relative space-y-5 ">
            <div className="flex items-center gap-2 px-2">
              <FaRegFileAlt className="text-xl text-secondary-dark" />
              <p className="font-medium text-gray-700">Consent Form</p>
            </div>

            <div className=" ">
              <p className="text-[#00BFB2] h-[48px] bg-[#00BFB21A]  cursor-pointer justify-center font-medium text-center mx-auto rounded-[34px] flex items-center gap-2">
                <FaPlus /> Give consent
              </p>
            </div>
          </div>
          {/* number-2 */}
          <div className="bg-[#F5F5F5] pt-4 px-4 pb-3 rounded-[28px] relative space-y-5 ">
            <div className="flex items-center gap-2 px-2">
              <FaRegFileAlt className="text-xl text-secondary-dark" />
              <p className="font-medium text-gray-700">Patient Details</p>
            </div>

            <div className=" ">
              <p className="text-[#00BFB2] h-[48px] bg-[#00BFB21A]  cursor-pointer justify-center font-medium text-center mx-auto rounded-[34px] flex items-center gap-2">
                <FaPlus /> Add
              </p>
            </div>
          </div>
          {/* number-3 */}
          <div className="bg-[#F5F5F5] pt-4 px-4 pb-3 rounded-[28px] relative space-y-5 ">
            <div className="flex items-center gap-2 px-2">
              <FaRegFileAlt className="text-xl text-secondary-dark" />
              <p className="font-medium text-gray-700">Past Symptoms</p>
            </div>

            <div className=" ">
              <p className="text-[#00BFB2] h-[48px] bg-[#00BFB21A]  cursor-pointer justify-center font-medium text-center mx-auto rounded-[34px] flex items-center gap-2">
                <FaPlus /> Add Symptoms
              </p>
            </div>
          </div>
          {/* number-4 */}
          <div className="bg-[#F5F5F5] pt-4 px-4 pb-3 rounded-[28px] relative space-y-5 ">
            <div className="flex items-center gap-2 px-2">
              <FaRegFileAlt className="text-xl text-secondary-dark" />
              <p className="font-medium text-gray-700">Patient Information</p>
            </div>

            <div className=" ">
              <p className="text-[#00BFB2] h-[48px] bg-[#00BFB21A]  cursor-pointer justify-center font-medium text-center mx-auto rounded-[34px] flex items-center gap-2">
                <FaPlus /> Add
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
