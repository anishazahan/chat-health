"use client";
import Image from "next/image";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import {
  FaArrowUp,
  FaChevronLeft,
  FaChevronRight,
  FaFileMedical,
  FaPhoneAlt,
  FaPrescription,
  FaStethoscope,
  FaUserMd,
  FaVial,
  FaXRay,
} from "react-icons/fa";
import BackButton from "../BackButton";
import ClinicProfileWithLocation from "./ClinicProfileWithLocation";

const doctorData = [
  {
    id: 1,
    name: "Dr Shaun Murphy",
    specialization: "General Practitioner, Male, MBBS DFFP FRACGP",
    services: ["Skin Care", "Hindi + Malayalam"],
    image: "/images/dr_shaun_murphy.jpg",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    referralOptions: [
      { icon: FaPrescription, title: "Repeat Prescription" },
      { icon: FaUserMd, title: "Repeat Specialist Referral" },
      { icon: FaXRay, title: "Imaging / Radiology Referral" },
      { icon: FaVial, title: "Blood / Pathology Referral" },
      { icon: FaFileMedical, title: "Medical Certificate" },
    ],
    areaOfInterest: [
      "Cardiology",
      "Women's health",
      "Men's health",
      "General medicine",
      "General medicine",
      "Iron Infusions",
      "Travel medicine",
      "Sexual health",
      "Paediatrics",
      "Travel medicine",
      "Travel medicine",
      "Chronic disease management",
      "Travel medicine",
      "Travel medicine",
      "Occupational Health & Medicals",
      "Minor surgery",
      "Travel medicine",
      "Diabetes management",
    ],
    availability: {
      dates: [
        { day_name: "WED", day_date: "18" },
        { day_name: "WED", day_date: "19" },
        { day_name: "WED", day_date: "20" },
        { day_name: "WED", day_date: "21" },
        { day_name: "WED", day_date: "22" },
        { day_name: "WED", day_date: "23" },
        { day_name: "WED", day_date: "24" },
        { day_name: "Wed", day_date: "25" },
        { day_name: "Thu", day_date: "26" },
        { day_name: "Fri", day_date: "27" },
        { day_name: "Sat", day_date: "28" },
        { day_name: "Sun", day_date: "29" },
        { day_name: "Mon", day_date: "30" },
      ],
      slots: [
        "03:00 PM",
        "03:30 PM",
        "04:00 PM",
        "04:30 PM",
        "05:00 PM",
        "03:00 PM",
        "03:30 PM",
        "04:00 PM",
        "04:30 PM",
        "05:00 PM",
      ],
    },
  },
  {
    id: 2,
    name: "Dr Michael Chen",
    specialization: "General Practitioner, Male, MBBS DFFP FRACGP",
    services: ["Skin Care", "Hindi + Malayalam"],
    image: "/images/dr_shaun_murphy.jpg",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    referralOptions: [
      { icon: FaPrescription, title: "Repeat Prescription" },
      { icon: FaUserMd, title: "Repeat Specialist Referral" },
      { icon: FaXRay, title: "Imaging / Radiology Referral" },
      { icon: FaVial, title: "Blood / Pathology Referral" },
      { icon: FaFileMedical, title: "Medical Certificate" },
    ],
    areaOfInterest: [
      "Cardiology",
      "Women's health",
      "Men's health",
      "General medicine",
      "General medicine",
      "Iron Infusions",
      "Travel medicine",
      "Sexual health",
      "Paediatrics",
      "Travel medicine",
      "Travel medicine",
      "Chronic disease management",
      "Travel medicine",
      "Travel medicine",
      "Occupational Health & Medicals",
      "Minor surgery",
      "Travel medicine",
      "Diabetes management",
    ],
    availability: {
      dates: [
        { day_name: "WED", day_date: "18" },
        { day_name: "WED", day_date: "19" },
        { day_name: "WED", day_date: "20" },
        { day_name: "WED", day_date: "21" },
        { day_name: "WED", day_date: "22" },
        { day_name: "WED", day_date: "23" },
        { day_name: "WED", day_date: "24" },
        { day_name: "Wed", day_date: "25" },
        { day_name: "Thu", day_date: "26" },
        { day_name: "Fri", day_date: "27" },
        { day_name: "Sat", day_date: "28" },
        { day_name: "Sun", day_date: "29" },
        { day_name: "Mon", day_date: "30" },
      ],
      slots: [
        "03:00 PM",
        "03:30 PM",
        "04:00 PM",
        "04:30 PM",
        "05:00 PM",
        "03:00 PM",
        "03:30 PM",
        "04:00 PM",
        "04:30 PM",
        "05:00 PM",
      ],
    },
  },
];

export default function ClinicDetails() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showMoreSlotsState, setShowMoreSlotsState] = useState({});
  const [readMoreState, setReadMoreState] = useState({});

  const toggleReadMore = (doctorId) => {
    setReadMoreState((prev) => ({ ...prev, [doctorId]: !prev[doctorId] }));
  };

  const toggleShowMoreSlots = (doctorId) => {
    setShowMoreSlotsState((prev) => ({ ...prev, [doctorId]: !prev[doctorId] }));
  };

  // Manage scrolling indexes for each doctor
  const [dateCurrentIndexes, setDateCurrentIndexes] = useState(
    doctorData.reduce((acc, doctor) => ({ ...acc, [doctor.id]: 0 }), {})
  );

  const handleDateScroll = (doctorId, direction) => {
    setDateCurrentIndexes((prev) => {
      const newIndex = Math.max(
        0,
        Math.min(prev[doctorId] + direction, doctorData.find((d) => d.id === doctorId).availability.dates.length - 4)
      );
      return { ...prev, [doctorId]: newIndex };
    });
  };

  return (
    <div className="px-5 sm:px-10 w-full 2xl:max-w-[1440px] mt-16">
      <div className="flex justify-between items-center w-full">
        <BackButton />
        <div className="">
          <CiHeart size={26} />
        </div>
      </div>

      {/* clinic profile */}

      <ClinicProfileWithLocation />

      {/* consult button */}
      <div className="flex gap-4 my-5">
        <button className="flex items-center gap-2 px-6 py-2 h-[48px] rounded-full text-white bg-teal-500 hover:bg-teal-600 shadow-md">
          <FaStethoscope className="text-lg" />
          <span className="font-medium">Standard Consult</span>
        </button>

        <button className="flex items-center gap-2 h-[48px]  px-7 py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 shadow-md">
          <FaPhoneAlt className="text-lg text-red-500" />
          <span className="font-medium">Telehealth</span>
        </button>
      </div>

      {/* dynamic doctor data */}
      <div className="space-y-3">
        {doctorData.map((doctor) => (
          <div key={doctor.id} className="border rounded-[34px] p-6 flex flex-col lg:flex-row gap-8">
            {/* Left Section - Doctor Info */}
            <div className="border-r border-dashed border-gray-300 pr-6 w-full lg:w-1/2">
              <div className="flex items-center space-x-4">
                <Image
                  src={"/images/service-img/doctor.png"}
                  alt={doctor.name}
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] rounded-full"
                />
                <div>
                  <h2 className="text-xl font-medium">{doctor.name}</h2>
                  <p className="text-gray-500 text-sm py-1">{doctor.specialization}</p>
                  <p className="text-sm text-gray-600">{doctor.services.join(" | ")}</p>
                </div>
              </div>

              {/* Description */}
              <div className="max-w-[600px] mt-4">
                <p className="font-semibold text-gray-600">About</p>
                <p className="text-sm mt-3">
                  {readMoreState[doctor.id] ? doctor.about : `${doctor.about.substring(0, 100)}...`}
                  <button className="text-secondary-dark ml-2" onClick={() => toggleReadMore(doctor.id)}>
                    {!readMoreState[doctor.id] && "Read more"}
                  </button>
                </p>
              </div>

              {/* Service Section */}
              {readMoreState[doctor.id] && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
                  {doctor.referralOptions.map((option, index) => (
                    <div key={index} className="group relative flex flex-col items-center p-2 ">
                      <div className="mb-2 p-3 border rounded-full  group-hover:bg-blue-200 transition-colors">
                        <option.icon className="w-5 h-5  text-gray-500" />
                      </div>

                      <span className="text-gray-500 text-sm text-center leading-tight">{option.title}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Areas of Interest */}

              {readMoreState[doctor.id] && (
                <div className="mt-5">
                  <h2 className=" font-semibold text-gray-800 mb-5">Areas of Interest</h2>
                  <div className="flex flex-wrap gap-2">
                    {doctor?.areaOfInterest?.map((area, index) => (
                      <div
                        key={index}
                        className=" px-4 py-2 rounded-full whitespace-nowrap  hover:shadow-md transition-shadow 
                     border border-gray-200 text-gray-500 text-xs font-medium text-center"
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {readMoreState[doctor.id] && (
                <div className="flex items-end gap-1">
                  <div className="bg-gray-100 rounded-[34px] p-8 max-w-2xl mx-auto mt-6 space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 font-inter">Welcome to our Medical Centre</h3>

                    <p className="text-sm text-gray-700 leading-relaxed">
                      In order to keep our patients, doctors, nurses and staff safe, we kindly ask you to make a
                      telehealth appointment online rather than coming directly into the medical centre if you are:
                    </p>

                    <ul className="space-y-1 ">
                      <li className="text-gray-600 text-sm leading-normal flex items-center">
                        <span className="text-gray-600 mr-2 mt-1">•</span>
                        Feeling unwell with a fever, cough, runny nose or other symptoms that could be from COVID-19
                      </li>
                      <li className="text-gray-600 text-sm leading-normal flex items-center">
                        <span className="text-gray-600 mr-2 mt-1">•</span>
                        Waiting for COVID-19 test results
                      </li>
                      <li className="text-gray-600 text-sm leading-normal flex items-center">
                        <span className="text-gray-600 mr-2 mt-1">•</span>
                        Have tested positive for COVID-19
                      </li>
                      <li className="text-gray-600 text-sm leading-normal flex items-center">
                        <span className="text-gray-600 mr-2 mt-1">•</span>A close contact of someone with COVID-19
                      </li>
                    </ul>
                  </div>

                  {readMoreState[doctor.id] && (
                    <div
                      onClick={() => toggleReadMore(doctor.id)}
                      className="p-3 border rounded-full text-gray-600 cursor-pointer"
                    >
                      <FaArrowUp />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Section - Availability */}
            <div className="flex-1 w-full lg:w-1/2">
              {/* Available Dates with Scroll */}
              <div className="flex items-center mt-4 pb-5 border-b border-dashed border-gray-300">
                <FaChevronLeft
                  className={`cursor-pointer ${dateCurrentIndexes[doctor.id] === 0 ? "opacity-50" : ""}`}
                  onClick={() => handleDateScroll(doctor.id, -1)}
                />
                <div className="flex overflow-hidden mx-2">
                  {doctor.availability.dates
                    .slice(dateCurrentIndexes[doctor.id], dateCurrentIndexes[doctor.id] + 9)
                    .map((date, index) => (
                      <div
                        key={index}
                        className={`w-[60px] h-[73px] flex flex-col items-center justify-center border rounded-[16px] mx-1 ${
                          selectedDate === date ? "bg-secondary-dark text-white " : " text-gray-700"
                        }`}
                        onClick={() => setSelectedDate(date)}
                      >
                        <div className="h-full flex flex-col gap-1 items-center justify-center cursor-pointer">
                          <p className={`text-xs  ${selectedDate === date ? "text-white" : "text-gray-500"}`}>
                            {date.day_name}
                          </p>
                          <p className="font-medium">{date.day_date}</p>
                        </div>
                      </div>
                    ))}
                </div>
                <FaChevronRight
                  className={`cursor-pointer text-gray-500 ${
                    dateCurrentIndexes[doctor.id] >= doctor.availability.dates.length - 4
                      ? "opacity-40 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() => handleDateScroll(doctor.id, 1)}
                />
              </div>

              {/* Available Time Slots */}
              <div className="flex flex-wrap gap-2 mt-4">
                {(showMoreSlotsState[doctor.id]
                  ? doctor.availability.slots
                  : doctor.availability.slots.slice(0, 3)
                ).map((slot, index) => (
                  <button
                    key={index}
                    className={`px-6 py-2 text-sm rounded-[15px] ${
                      selectedSlot === slot ? "bg-secondary-dark text-white" : "border"
                    }`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              {/* Show More/Less Button */}
              {doctor.availability.slots.length > 3 && (
                <button
                  className="text-secondary-dark mt-2 text-sm font-medium"
                  onClick={() => toggleShowMoreSlots(doctor.id)}
                >
                  {showMoreSlotsState[doctor.id] ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* bottom section */}
      <div className="w-full mt-10">
        {/* Header Section */}
        <div className="mb-8  pb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">The Earwax Clinic</h1>
          <p className="text-sm text-gray-600 mb-2">
            The doctors are all inflows of the Royal Australian College of City, an AERM, and ADEM, accredited.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Opening Hours */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Opening Hours</h2>
            <div className="space-y-2">
              {[
                ["Monday", "8:00am-8:00pm"],
                ["Thursday", "9:00am-8:00pm"],
                ["Wednesday", "9:00am-8:00pm"],
                ["Thursday", "9:00am-8:00pm"],
                ["Friday", "9:00am-8:00pm"],
                ["Saturday", "9:00am-8:00pm"],
                ["Sunday", "9:00am-8:00pm"],
              ].map(([day, time], index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">{day}</span>
                  <span className="text-gray-900 font-medium">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Language & Contact */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Language</h2>
              <p className="text-sm text-gray-600">English</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact</h2>
              <div className="space-y-2 text-sm">
                <p className="text-gray-900 font-medium">03 5581 2481</p>
                <a href="https://www.earwax.com.au" className="text-blue-600 hover:text-blue-800 transition-colors">
                  www.earwax.com.au
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Location</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Gian Westerley + Barcelona + Benivicx,
              <br />
              Melbourne, VIC 5000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
