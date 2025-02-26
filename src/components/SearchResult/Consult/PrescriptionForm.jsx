"use client";

import CommonBtn from "@/components/CommonBtn";
import Input from "@/components/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdAdd } from "react-icons/io";

const PrescriptionForm = () => {
  const { register, handleSubmit } = useForm();
  const [selectedOption, setSelectedOption] = useState("sms");

  const options = [
    { id: "sms", label: "Send an e-prescription to me via SMS" },
    { id: "email", label: "Send an e-prescription to me via email" },
    { id: "clinic", label: "I will collect my prescription(s) from the clinic" },
  ];

  const onSubmit = (data) => {
    console.log("Form Data:", { ...data, deliveryMethod: selectedOption });
  };

  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="  p-6 bg-white ">
      <h2 className="text-lg font-semibold">Prescription details</h2>
      <p className="text-gray-500 text-sm py-4">Shown on your prescription, box or bottle</p>

      <div className="space-y-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Medication Name" name="medicationName" register={register} required />
          <Input label="Dosage" name="dosage" register={register} required />
        </div>

        <div className="relative w-full max-w-sm">
          <label className="cursor-pointer">
            <div className="flex items-center gap-2">
              <button className="text-xl text-black">
                <IoMdAdd />
              </button>
              <p className="text-sm font-medium">New Medication</p>
            </div>
            <input
              type="file"
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              onChange={handleFileChange}
            />
            {/* <span className="text-gray-600">{fileName || "Click to upload file"}</span> */}
          </label>

          {fileName && <p className="mt-2 text-sm text-green-600">Selected: {fileName}</p>}
        </div>

        <div className="w-full">
          <Input
            label="Additional prescription notes"
            placeholder="Additional prescription notes"
            type="textarea"
            name="notes"
            register={register}
          />
        </div>
      </div>
      {/* 
      radio button */}

      <p className="text-center font-medium text-sm pb-5 text-gray-500 tracking-wide">or</p>

      <h3 className="mt-4 font-semibold">How would you like this repeat prescription delivered?</h3>
      <div className="space-y-3 mt-5">
        {options.map((option) => (
          <label key={option.id} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="prescription"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => setSelectedOption(option.id)}
              className="hidden"
            />
            <div
              className={`w-5 h-5 flex items-center justify-center rounded-full border transition-all ${
                selectedOption === option.id ? "bg-primary-dark border-primary-dark" : "border-gray-400"
              }`}
            >
              {selectedOption === option.id && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
            </div>
            <span className="text-gray-800 text-sm">{option.label}</span>
          </label>
        ))}
      </div>

      <div className="w-full my-8">
        <CommonBtn type="submit" className="w-full">
          Continue
        </CommonBtn>
      </div>
    </form>
  );
};

export default PrescriptionForm;
