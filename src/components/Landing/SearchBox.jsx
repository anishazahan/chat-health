"use client";

import {
  setSelectedLocation,
  setSelectedService,
  toggleLocationDropdown,
  toggleServiceDropdown,
} from "@/redux/slices/landingSearchSlice";
import Image from "next/image";
import { IoChevronDownSharp } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

const services = [
  { value: "general-practice", label: "General Practitioner", img: "/images/service-img/general.png" },
  { value: "telehealth", label: "Telehealth", img: "/images/service-img/call-calling.png" },
  { value: "physiotherapist", label: "Physiotherapist", img: "/images/service-img/pysio.png" },
  { value: "dentist", label: "Dentist", img: "/images/service-img/dentist.png" },
  { value: "Chiropractor", label: "Psychologist", img: "/images/service-img/ciro.png" },
  { value: "cardiologist", label: "Cardiologist", img: "/images/service-img/psy.png" },
];

const locations = [
  { value: "sydney-2000", label: "Sydney, NSW 2000" },
  { value: "sydney-2001", label: "Sydney, NSW 2001" },
  { value: "sydney-2002", label: "Sydney, NSW 2002" },
  { value: "sydney-2003", label: "Sydney, NSW 2003" },
];

const SearchBox = () => {
  const dispatch = useDispatch();
  const { selectedService, selectedLocation, serviceDropdown, locationDropdown } = useSelector(
    (state) => state.landingSearch
  );

  return (
    <div>
      <h2 className="font-semibold text-center px-2 text-2xl md:text-4xl mt-7 mb-3 hidden md:block">
        Book Healthcare appointments easily
      </h2>
      <h2 className="font-semibold text-center px-2 text-3xl mt-7 mb-5 md:hidden">Simplifying Primary Care</h2>
      <p className="text-sm text-gray-500 text-center mb-8">
        Less admin for healthcare providers = More time for patient care
      </p>

      <div className="w-full mx-auto max-w-[1000px] bg-white shadow-md rounded-full px-5 py-3 flex items-center gap-4 relative border border-gray-100">
        {/* Service Dropdown */}
        <div className="w-1/2 relative">
          <div
            className="rounded-lg p-2 flex items-center gap-2 cursor-pointer"
            onClick={() => dispatch(toggleServiceDropdown())}
          >
            <span className={selectedService ? "text-black text-base" : "text-gray-400 text-sm"}>
              {selectedService ? selectedService.label : "Select Service"}
            </span>
            <IoChevronDownSharp className="ml-auto text-gray-400 text-xl" />
          </div>
          {serviceDropdown && (
            <div className="absolute left-0 right-0 mt-2 bg-white border shadow-lg rounded-md z-10">
              {services.map((option) => (
                <div
                  key={option.value}
                  className={`px-4 py-3 hover:bg-gray-100 cursor-pointer ${
                    selectedService?.value === option.value ? "bg-primary-light" : ""
                  }`}
                  onClick={() => dispatch(setSelectedService(option))}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Location Dropdown */}
        <div className="w-1/2 relative">
          <div
            className="rounded-lg p-2 flex items-center gap-2 cursor-pointer"
            onClick={() => dispatch(toggleLocationDropdown())}
          >
            <span className={selectedLocation ? "text-black text-base" : "text-gray-400 text-sm"}>
              {selectedLocation ? selectedLocation.label : "Suburb, postcode"}
            </span>
            <IoChevronDownSharp className="ml-auto text-gray-400 text-xl" />
          </div>
          {locationDropdown && (
            <div className="absolute left-0 right-0 mt-2 bg-white border shadow-lg rounded-md z-10">
              <div className="rounded-xl bg-primary-light px-4 py-3 text-text-primary flex items-center gap-2 m-2">
                <button>
                  <LuSend />
                </button>
                <p>Current location</p>
              </div>
              {locations.map((location) => (
                <div
                  key={location.value}
                  className={`px-4 py-3 hover:bg-gray-100 cursor-pointer ${
                    selectedLocation?.value === location.value ? "bg-primary-light" : ""
                  }`}
                  onClick={() => dispatch(setSelectedLocation(location))}
                >
                  {location.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Services List */}
      <div className="flex justify-center my-8 max-w-[1190px] mx-auto w-full">
        <div className="flex gap-4 overflow-x-auto">
          {services.map((service) => (
            <div
              key={service.value}
              className={`min-w-[185px] flex flex-col items-center gap-4 p-4 border rounded-[24px] cursor-pointer transition-all 
            ${selectedService?.value === service.value ? "bg-primary-light border-teal-500" : "hover:bg-gray-100"}`}
              onClick={() => dispatch(setSelectedService(service))}
            >
              <Image src={service.img} alt={service.label} width={35} height={35} className="object-contain" />
              <p className="text-sm font-medium text-center whitespace-nowrap">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
