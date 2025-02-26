"use client";

import { handleAddDoctorModal } from "@/redux/slices/signUpModalSlice";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import AddDoctorModal from "./AddDoctorModal";

const doctorsData = [
  { id: 1, name: "Dr. Dianne Russell", image: "/doctor1.jpg" },
  { id: 2, name: "Dr. Leslie Alexander", image: "/doctor2.jpg" },
  { id: 3, name: "Dr. Darrell Steward", image: "/doctor3.jpg" },
  { id: 4, name: "Dr. Cody Fisher", image: "/doctor4.jpg" },
  { id: 5, name: "Dr. Cody Fisher", image: "/doctor4.jpg" },
  { id: 6, name: "Dr. Cody Fisher", image: "/doctor4.jpg" },
];

export default function PractitionerSelection() {
  const { register, watch } = useForm();
  const dispatch = useDispatch();
  const searchQuery = watch("search", "");
  const [expanded, setExpanded] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const visibleDoctors = expanded ? doctorsData : doctorsData.slice(0, 3);
  const filteredDoctors = visibleDoctors.filter((doc) => doc.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const { addDoctorModal, addClinicModal } = useSelector((state) => state.signUpModal);

  return (
    <div className="w-full p-6">
      <h2 className="text-lg font-semibold">Select your usual practitioner</h2>
      <div className="relative mt-3 ">
        <FiSearch className="absolute left-6 top-4 " size={18} />
        <input
          type="text"
          placeholder="Search your usual practitioner"
          {...register("search")}
          className="w-full text-sm pl-12 pr-4 py-4  rounded-full focus:outline-none placeholder:text-gray-500 bg-gray-100"
        />
      </div>

      <div className="mt-6 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => setSelectedDoctor(doctor.id)}
            className={`cursor-pointer  hover:border-primary-dark flex flex-col items-center px-4 py-6 border rounded-[34px] shadow-sm transition-all ${
              selectedDoctor === doctor.id ? "bg-primary-dark text-white" : "bg-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={"/images/service-img/doctor.png"}
                alt={doctor.name}
                width={60}
                height={60}
                className="rounded-full h-[60px] w-[60px] object-cover"
              />
              <div className="">
                <p className=" font-medium ">{doctor?.name}</p>
                <p className={`text-xs  mt-2 ${selectedDoctor === doctor.id ? " text-white" : "text-gray-600"}`}>
                  Typically within 24 hours
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button onClick={() => setExpanded(!expanded)} className="text-teal-500 font-medium">
          {expanded ? "See less" : "See more"}
        </button>
      </div>

      <p
        onClick={() => dispatch(handleAddDoctorModal(true))}
        className="text-center my-5 hover:underline text-secondary-dark cursor-pointer"
      >
        My Doctor is not listed
      </p>

      {addDoctorModal && <AddDoctorModal />}
    </div>
  );
}
