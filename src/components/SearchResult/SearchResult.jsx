"use client";

import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const clinics = [
  {
    id: 1,
    name: "Medical & Dental Centre",
    gps: "3 GPs available",
    bulkBilling: true,
    location: "Surrey Hills",
    distance: "0.8 km",
    logo: "https://via.placeholder.com/40",
    position: [51.505, -0.09],
    days: [24, 25, 26, 27, 28, 29, 30],
  },
  {
    id: 2,
    name: "Doctors Medical Centre",
    gps: "3 GPs available",
    bulkBilling: false,
    location: "Surrey Hills",
    distance: "1.2 km",
    logo: "https://via.placeholder.com/40",
    position: [51.515, -0.1],
    days: [24, 25, 26, 27, 28, 29, 30],
  },
];

const ClinicList = () => {
  const [currentIndexes, setCurrentIndexes] = useState(
    clinics.reduce((acc, clinic) => ({ ...acc, [clinic.id]: 0 }), {})
  );

  const handleScroll = (clinicId, direction) => {
    setCurrentIndexes((prev) => {
      const newIndex = Math.max(
        0,
        Math.min(prev[clinicId] + direction, clinics.find((c) => c.id === clinicId).days.length - 5)
      );
      return { ...prev, [clinicId]: newIndex };
    });
  };

  return (
    <div className="flex">
      {/* Left side clinics list */}
      <div className="w-1/2 p-4">
        <h2 className="text-lg font-bold">Clinics close to your location</h2>
        {clinics.map((clinic) => (
          <div key={clinic.id} className="border p-4 mb-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={clinic.logo} alt={clinic.name} className="w-10 h-10 mr-2" />
                <div>
                  <h3 className="font-bold">{clinic.name}</h3>
                  <p className="text-sm text-gray-600">{clinic.gps}</p>
                  <p className="text-sm text-gray-600">{clinic.bulkBilling ? "Bulk billing" : "No bulk billing"}</p>
                  <p className="text-sm text-gray-600">
                    {clinic.location} • {clinic.distance}
                  </p>
                </div>
              </div>
              <button className="bg-teal-500 text-white px-4 py-1 rounded">View All</button>
            </div>
            <div className="flex items-center mt-2">
              <FaChevronLeft className="cursor-pointer" onClick={() => handleScroll(clinic.id, -1)} />
              <div className="flex overflow-hidden mx-2">
                {clinic.days.slice(currentIndexes[clinic.id], currentIndexes[clinic.id] + 5).map((day, index) => (
                  <div key={index} className="w-10 h-10 flex items-center justify-center border rounded mx-1">
                    {day}
                  </div>
                ))}
              </div>
              <FaChevronRight className="cursor-pointer" onClick={() => handleScroll(clinic.id, 1)} />
            </div>
          </div>
        ))}
      </div>

      {/* Right side map */}
      <div className="w-1/2 h-[500px]">
        <MapContainer center={[51.505, -0.09]} zoom={13} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {clinics.map((clinic) => (
            <Marker key={clinic.id} position={clinic.position}>
              <Popup>{clinic.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default ClinicList;
