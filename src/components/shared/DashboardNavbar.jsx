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
import CommonBtn from "../CommonBtn";
import { locations, services } from "../Landing/SearchBox";

const DashboardNavbar = () => {
  const dispatch = useDispatch();
  const { selectedService, selectedLocation, serviceDropdown, locationDropdown } = useSelector(
    (state) => state.landingSearch
  );
  return (
    <nav className="h-[80px] py-3 border-b border-dashed border-gray-300">
      <div className="flex items-center justify-between ">
        <div className="">
          <Image
            src={"/images/payment/dashboard-logo.png"}
            alt={"doctor.name"}
            width={277}
            height={30}
            className="w-[277px] h-[30px] rounded-full"
          />
        </div>
        <div className="w-[600px]">
          <div className="w-full mx-auto  bg-[#EBEBEB]  rounded-full px-5 py-3 flex items-center gap-4 relative border border-gray-100">
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
                <div className="absolute left-0 right-0 mt-2 bg-white border shadow-lg rounded-md z-60">
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
                <div className="absolute left-0 right-0 mt-2 bg-white border shadow-lg rounded-md z-60">
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
        </div>
        <div className="flex items-center gap-3">
          <CommonBtn>Appointment</CommonBtn>
          <Image
            src={"/images/service-img/doctor.png"}
            alt={"doctor.name"}
            width={50}
            height={50}
            className="w-[50px] h-[50px] rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
