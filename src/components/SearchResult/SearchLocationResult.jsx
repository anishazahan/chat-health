"use client";

import "leaflet/dist/leaflet.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useDispatch } from "react-redux";
import Checkbox from "../Checkbox";

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
    days: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
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
    days: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  },
];

const SearchLocationResult = () => {
  const dispatch = useDispatch();
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
    <div className="flex flex-col-reverse lg:flex-row px-5 sm:px-10 w-full 2xl:max-w-[1440px] mx-auto items-start gap-5 mt-16">
      {/* Left side clinics list */}
      <div className="w-full lg:w-1/2">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold mb-3">Clinics close to your location</h2>
          <Checkbox label="Bulk Billing" checked={true} onChange={() => {}} />
        </div>
        {clinics.map((clinic) => (
          <div key={clinic.id} className="border p-4 mb-4 rounded-[34px] ">
            <div className="flex items-start justify-between border-b border-gray-200 border-dashed pb-5">
              <div className="flex items-center gap-3">
                <Image
                  src={"/images/service-img/clinic.png"}
                  alt={clinic.name}
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] rounded-full object-contain"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">{clinic.name}</h3>
                  <div className="flex items-center gap-4 ">
                    <p className="text-sm text-gray-600">{clinic.gps}</p>
                    <p className="text-sm text-gray-600">{clinic.bulkBilling ? "Bulk billing" : "No bulk billing"}</p>
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-5">
                    <div className="flex items-center gap-2">
                      <HiOutlineLocationMarker size={18} />
                      <p>{clinic.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiOutlineLocationMarker size={18} />
                      <p> {clinic.distance}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* right button */}
              <Link
                href="/chat-health/clinic/id"
                className="bg-primary-dark text-white px-10 h-[48px]  rounded-full hover:opacity-90 font-semibold flex items-center justify-center"
              >
                View All
              </Link>
            </div>
            {/* bottom calender */}
            <div className="flex items-center mt-4">
              <FaChevronLeft className="cursor-pointer" onClick={() => handleScroll(clinic.id, -1)} />
              <div className="flex overflow-hidden mx-2">
                {clinic.days.slice(currentIndexes[clinic.id], currentIndexes[clinic.id] + 8).map((day, index) => (
                  <div
                    key={index}
                    className="w-[60px] h-[73px] flex flex-col items-center justify-center border rounded-[16px] mx-1 "
                  >
                    <div className="h-full flex flex-col gap-1 items-center justify-center">
                      <p className="text-xs text-gray-500">Wed</p>
                      <p className="font-medium">{day}</p>
                    </div>
                  </div>
                ))}
              </div>
              <FaChevronRight className="cursor-pointer" onClick={() => handleScroll(clinic.id, 1)} />
            </div>
          </div>
        ))}
      </div>

      {/* Right side map */}
      <div className=" w-full lg:w-1/2 h-[500px] rounded-[34px] ">
        <MapContainer
          style={{ borderRadius: "34px !important" }}
          center={[51.505, -0.09]}
          zoom={13}
          className="h-full w-full rounded-[34px]"
        >
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

export default SearchLocationResult;
