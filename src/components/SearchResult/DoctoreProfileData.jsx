"use client";
import Image from "next/image";
import { useState } from "react";
import { FaFileMedical, FaPrescription, FaUserMd, FaVial, FaXRay } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const doctorData = [
  {
    id: 1,
    name: "Dr Shaun Murphy",
    specialization: "General Practitioner, Male, MBBS DFFP FRACGP",
    services: ["Skin Care", "Hindi + Malayalam"],
    image: "/images/dr_shaun_murphy.jpg",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    referralOptions: [
      { icon: FaPrescription, title: "Repeat Prescription" },
      { icon: FaUserMd, title: "Repeat Specialist Referral" },
      { icon: FaXRay, title: "Imaging / Radiology Referral" },
      { icon: FaVial, title: "Blood / Pathology Referral" },
      { icon: FaFileMedical, title: "Medical Certificate" },
    ],
    areasOfInterest: [
      "Cardiology",
      "Women's health",
      "Men’s health",
      "General medicine",
      "Iron Infusions",
      "Travel medicine",
      "Sexual health",
      "Paediatrics",
      "Chronic disease management",
      "Minor surgery",
      "Occupational Health",
      "Diabetes management",
    ],
    availability: {
      dates: ["Tue 24", "Wed 25", "Thu 26", "Fri 27", "Sat 28", "Sun 29", "Mon 30"],
      slots: ["03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM"],
    },
  },
];

export default function DoctorProfile() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [readMore, setReadMore] = useState(false);
  const [showMoreSlots, setShowMoreSlots] = useState(false);

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md space-y-6">
      {doctorData.map((doctor) => (
        <div key={doctor.id} className="space-y-4">
          <div className="flex items-center space-x-4">
            <Image src={doctor.image} alt={doctor.name} width={64} height={64} className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="text-xl font-semibold">{doctor.name}</h2>
              <p className="text-gray-500">{doctor.specialization}</p>
              <p className="text-sm text-gray-600">{doctor.services.join(" | ")}</p>
            </div>
          </div>
          <p className="text-gray-700">
            {readMore ? doctor.about : `${doctor.about.substring(0, 100)}...`}
            <button className="text-blue-600 ml-2" onClick={() => setReadMore(!readMore)}>
              {readMore ? "Read less" : "Read more"}
            </button>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {doctor.referralOptions.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-2 border rounded-md">
                <option.icon className="text-blue-500" />
                <span>{option.title}</span>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-semibold">Available Dates</h3>
          <div className="flex flex-wrap gap-2">
            {doctor.availability.dates.map((date, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-md text-sm ${
                  selectedDate === date ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </button>
            ))}
          </div>
          <h3 className="text-lg font-semibold">Available Slots</h3>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {(showMoreSlots ? doctor.availability.slots : doctor.availability.slots.slice(0, 3)).map((slot, index) => (
              <button
                key={index}
                className={`p-2 rounded-md text-sm ${
                  selectedSlot === slot ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
          <button className="text-blue-600 mt-2" onClick={() => setShowMoreSlots(!showMoreSlots)}>
            {showMoreSlots ? "See less" : "See more"}
          </button>
          <button className="mt-4 p-2 bg-blue-600 text-white rounded-md flex items-center">
            <FiArrowUp className="mr-2" /> Back to Top
          </button>
        </div>
      ))}
    </div>
  );
}
