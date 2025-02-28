"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCalendarAlt, FaClock, FaPlus, FaRegFileAlt, FaUserMd } from "react-icons/fa";

export default function AppointmentDashboard() {
  const { register, handleSubmit } = useForm();
  const [summaryExpanded, setSummaryExpanded] = useState(false);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Upcoming Appointment */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Appointment</h2>
        <div className="flex items-center gap-4">
          <FaUserMd className="text-3xl text-gray-600" />
          <div>
            <h3 className="font-semibold">Dr. Sarah Wilson</h3>
            <p className="text-gray-500">General Check-up</p>
          </div>
        </div>
        <p className="text-gray-500 mt-2">Bondi Medical Center</p>
        <p className="text-gray-500">123 Bondi Road, Bondi NSW 2026</p>
        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-2 text-gray-600">
            <FaCalendarAlt /> <span>26 Jan, 2025</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaClock /> <span>10:30 AM</span>
          </div>
        </div>
        <div className="mt-4 p-3 bg-gray-100 rounded-lg">
          <h4 className="font-semibold">Symptom Summary</h4>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...{summaryExpanded ? "full text" : ""}
            <button className="text-blue-500 ml-2" onClick={() => setSummaryExpanded(!summaryExpanded)}>
              {summaryExpanded ? "See less" : "See more"}
            </button>
          </p>
        </div>
        <div className="mt-4 flex gap-4">
          <button className="px-4 py-2 border rounded-lg text-gray-700">Cancel</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Reschedule</button>
        </div>
      </div>

      {/* Past Appointments */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Past Appointments</h2>
        <div className="flex items-center justify-center text-gray-500 py-10">
          <FaRegFileAlt className="text-4xl" />
          <p className="ml-3">Your first appointment is scheduled</p>
        </div>
      </div>

      {/* Before Your Visit */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Before Your Visit</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
            <FaRegFileAlt className="text-2xl text-gray-600" />
            <p className="mt-2">Consent Form</p>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2">
              <FaPlus /> Give consent
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
            <FaRegFileAlt className="text-2xl text-gray-600" />
            <p className="mt-2">Patient Details</p>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2">
              <FaPlus /> Add
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
            <FaRegFileAlt className="text-2xl text-gray-600" />
            <p className="mt-2">Past Symptoms</p>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2">
              <FaPlus /> Add Symptoms
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
            <FaRegFileAlt className="text-2xl text-gray-600" />
            <p className="mt-2">Patient Information</p>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2">
              <FaPlus /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
