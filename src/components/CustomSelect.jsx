"use client";
import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const CustomSelect = ({ label, placeholder, options, value, onChange, required = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-[600px]">
      <label className="text-sm font-medium">
        {label && label}
        {required && <span className="text-red-500 text-sm"> *</span>}
      </label>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center px-6 py-3 border border-gray-300 rounded-[16px] h-[48px] bg-white"
        >
          <span className={value ? "text-black " : "text-gray-400 text-sm"}>
            {value ? options.find((opt) => opt.value === value)?.label : placeholder}
          </span>
          <IoChevronDownSharp className="ml-auto text-gray-400 text-xl" />
        </button>

        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-md mt-1 z-10 max-h-60 overflow-auto">
            {options.map((opt) => (
              <li
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`px-5 py-3 cursor-pointer transition-colors ${
                  value === opt.value ? "bg-primary-light  font-medium" : "hover:bg-gray-100"
                }`}
              >
                {opt?.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
