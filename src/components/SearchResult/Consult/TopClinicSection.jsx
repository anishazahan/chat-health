"use client";

import { locations, services } from "@/components/Landing/SearchBox";
import {
  setSelectedLocation,
  setSelectedService,
  toggleLocationDropdown,
  toggleServiceDropdown,
} from "@/redux/slices/landingSearchSlice";
import { handleAddClinicModal } from "@/redux/slices/signUpModalSlice";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoChevronDownOutline, IoChevronDownSharp, IoChevronUpOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { PiUserSwitch } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import AddClinicModal from "./AddClinicModal";

const clinics = [
  { id: 1, name: "Medical & Dental Centre", location: "Surrey Hills", distance: "0.8 km" },
  { id: 2, name: "Medical & Dental Centre", location: "Surrey Hills", distance: "0.8 km" },
  { id: 3, name: "Medical & Dental Centre", location: "Surrey Hills", distance: "0.8 km" },
  { id: 4, name: "Medical & Dental Centre", location: "Surrey Hills", distance: "0.8 km" },
  { id: 5, name: "Medical & Dental Centre", location: "Surrey Hills", distance: "0.8 km" },
  { id: 6, name: "Medical & Dental Centre", location: "Surrey Hills", distance: "0.8 km" },
];

export default function ClinicSelection() {
  const { register } = useForm();
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [visibleClinics, setVisibleClinics] = useState(3);
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const { selectedService, selectedLocation, serviceDropdown, locationDropdown } = useSelector(
    (state) => state.landingSearch
  );
  const { addDoctorModal, addClinicModal } = useSelector((state) => state.signUpModal);
  const toggleClinics = () => {
    if (expanded) {
      setVisibleClinics(3);
    } else {
      setVisibleClinics(clinics.length);
    }
    setExpanded(!expanded);
  };

  return (
    <div className="mx-auto w-full p-6">
      {/* Profile Info */}
      <div className="flex items-center gap-3 justify-between border-dashed border-b py-2">
        <div className="flex items-center gap-3 pb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-600">
            A
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-medium">Ajay Suria</h2>
              <div className="flex gap-1 items-center text-blue-500">
                <PiUserSwitch size={18} />
                <span className="text-blue-500 text-xs">Switch Profile</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-1">
              Male <span className="pl-2">2 Feb, 1999</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4 items-center py-4">
          <div className="flex items-center text-sm gap-2 text-gray-800">
            <FaEnvelope /> alifreza220@gmail.com
          </div>
          <div className="flex items-center text-sm gap-2 text-gray-800">
            <FaPhone /> 04xx xxx xxx
          </div>
        </div>
      </div>
      {/* Notices */}
      <div className="p-4 bg-blue-50 text-blue-400 rounded-[24px] text-sm mt-6">
        <p>• Repeat prescription is not suitable for new medical issues and physical examinations.</p>
        <p className="mt-2">
          • Your GP reviews your request, usually within 2 days. If approved, you'll be notified and payment will be
          collected.
        </p>
      </div>
      {/* Clinic Selection search*/}
      <h3 className="mt-6 text-lg font-medium">Select your Clinic</h3>
      <div className="w-full mx-auto bg-lightGray my-4 rounded-full px-5 py-3 flex items-center gap-4 relative border border-gray-100">
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
      {/* Clinic Cards */}
      <div className="grid grid-cols-3 gap-4">
        {clinics?.slice(0, visibleClinics).map((clinic) => (
          <div
            key={clinic.id}
            className={`border px-4 py-6 rounded-[34px] shadow-sm hover:border-primary-dark transition-all duration-500 hover:shadow-md cursor-pointer gap-3 flex items-center  ${
              selectedClinic === clinic?.id ? "bg-primary-dark text-white" : "bg-white"
            }`}
            onClick={() => setSelectedClinic(clinic?.id)}
          >
            <Image src="/images/service-img/clinic.png" width={60} height={60} alt="clinic" className="object-cover" />
            <div className="">
              <h4 className="font-medium mb-2">{clinic?.name}</h4>
              <div
                className={`flex items-center gap-1 text-sm ${
                  selectedClinic === clinic.id ? "text-white" : "text-gray-500 "
                }`}
              >
                <FaMapMarkerAlt /> {clinic?.location} • {clinic?.distance}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More / See Less Button */}
      {clinics.length > 3 && (
        <div
          className="mt-6 text-primary-dark flex items-center justify-center gap-1 text-center cursor-pointer"
          onClick={toggleClinics}
        >
          <span>{expanded ? "See Less" : "See More"}</span>
          {expanded ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
        </div>
      )}

      <p
        onClick={() => dispatch(handleAddClinicModal(true))}
        className="text-center my-5 hover:underline text-secondary-dark cursor-pointer"
      >
        My Clinic is not listed
      </p>

      {addClinicModal && <AddClinicModal />}
    </div>
  );
}
