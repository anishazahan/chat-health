"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";

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
  const searchQuery = watch("search", "");
  const [expanded, setExpanded] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const visibleDoctors = expanded ? doctorsData : doctorsData.slice(0, 3);
  const filteredDoctors = visibleDoctors.filter((doc) => doc.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="w-full max-w-2xl mx-auto mt-6">
      <h2 className="text-lg font-semibold">Select your usual practitioner</h2>
      <div className="relative mt-3">
        <FiSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search your usual practitioner"
          {...register("search")}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none"
        />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => setSelectedDoctor(doctor.id)}
            className={`cursor-pointer flex flex-col items-center p-3 border rounded-lg transition-all ${
              selectedDoctor === doctor.id ? "bg-teal-500 text-white" : "bg-white"
            }`}
          >
            <Image src={doctor.image} alt={doctor.name} width={50} height={50} className="rounded-full" />
            <p className="mt-2 font-medium text-center">{doctor.name}</p>
            <p className="text-xs text-gray-500">Typically within 24 hours</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button onClick={() => setExpanded(!expanded)} className="text-teal-500 font-medium">
          {expanded ? "See less" : "See more"}
        </button>
      </div>
    </div>
  );
}
