"use client";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaCalendarAlt, FaGenderless, FaMars, FaVenus } from "react-icons/fa";
import { GrPhone } from "react-icons/gr";
import { HiOutlineEnvelope } from "react-icons/hi2";
import Input from "../Input";

const BasicInfoForm = () => {
  const [gender, setGender] = useState("");

  return (
    <div className="w-full mx-auto mt-7">
      <h2 className="text-2xl font-semibold">Basic Information</h2>
      <p className="text-gray-500 text-sm my-4">
        Please take care as the following name and address will appear on your certificate
      </p>

      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5 mt-6 max-w-[600px]">
        <Input icon={<AiOutlineUser />} placeholder="First Name" />
        <Input icon={<AiOutlineUser />} placeholder="Last Name" />
      </div>

      {/* Gender Selection */}
      <div className="flex gap-3 mb-5 max-w-[600px]">
        {[
          { label: "Male", value: "male", icon: <FaMars className="text-blue-500" /> },
          { label: "Female", value: "female", icon: <FaVenus className="text-pink-500" /> },
          { label: "Other", value: "other", icon: <FaGenderless className="text-gray-500" /> },
        ].map((g) => (
          <button
            key={g.value}
            onClick={() => setGender(g.value)}
            className={`flex items-center px-5 py-3 border rounded-[22px] w-full justify-center transition font-medium ${
              gender === g.value ? "border-teal-500 bg-primary-light" : "border-gray-300 bg-white"
            }`}
          >
            {g?.icon} <span className="ml-2 text-sm">{g.label}</span>
          </button>
        ))}
      </div>

      {/* Contact Inputs */}
      <div className="space-y-5">
        <Input icon={<HiOutlineEnvelope />} placeholder="Enter your email" type="email" />
        <Input icon={<GrPhone />} placeholder="Enter mobile number" type="tel" />
        <Input icon={<FaCalendarAlt />} placeholder="DD/MM/YYYY" type="date" />
      </div>
    </div>
  );
};

export default BasicInfoForm;
