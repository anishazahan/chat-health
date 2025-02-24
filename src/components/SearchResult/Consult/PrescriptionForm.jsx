"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

const Input = ({ label, name, register, required, type = "text" }) => {
  return (
    <div className="w-full max-w-[600px] space-y-2">
      {label && (
        <label htmlFor={name} className="text-sm text-gray-500">
          {label}
        </label>
      )}
      <input
        type={type}
        {...register(name, { required })}
        className="w-full p-3 rounded-[16px] border border-transparent bg-[#F5F5F5] text-sm font-medium placeholder:text-gray-400"
      />
    </div>
  );
};

const PrescriptionForm = () => {
  const { register, handleSubmit } = useForm();
  const [selectedOption, setSelectedOption] = useState("sms");

  const onSubmit = (data) => {
    console.log("Form Data:", { ...data, deliveryMethod: selectedOption });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Prescription details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Medication Name" name="medicationName" register={register} required />
        <Input label="Dosage" name="dosage" register={register} required />
      </div>

      <Input label="Additional prescription notes" name="notes" register={register} />

      <h3 className="text-lg font-semibold">How would you like this repeat prescription delivered?</h3>
      <div className="space-y-3">
        {[
          { id: "sms", label: "Send an e-prescription to me via SMS" },
          { id: "email", label: "Send an e-prescription to me via email" },
          { id: "clinic", label: "I will collect my prescription(s) from the clinic" },
        ].map((option) => (
          <label key={option.id} className="flex items-center gap-3 cursor-pointer">
            <div
              className={`w-5 h-5 flex items-center justify-center rounded-full border transition-all ${
                selectedOption === option.id ? "bg-primary text-white" : "border-gray-400"
              }`}
              onClick={() => setSelectedOption(option.id)}
            >
              {selectedOption === option.id && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
            </div>
            <span className="text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>

      <button type="submit" className="w-full p-3 bg-primary text-white rounded-lg text-lg font-semibold">
        Continue
      </button>
    </form>
  );
};

export default PrescriptionForm;
