import Image from "next/image";
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
    medicalCentreInfo: {
      title: "Welcome to our Medical Centre",
      description:
        "In order to keep our patients, doctors, nurses and staff safe, we kindly ask you to make a telehealth appointment online rather than coming directly into the medical centre if you are:",
      precautions: [
        "Feeling unwell with a fever, cough, runny nose or other symptoms that could be from COVID-19.",
        "Waiting for COVID-19 test results.",
        "Have tested positive for COVID-19.",
        "A close contact of someone with COVID-19.",
      ],
    },
    availability: {
      dates: ["Tue 24", "Wed 25", "Thu 26", "Fri 27", "Sat 28", "Sun 29", "Mon 30"],
      slots: ["03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM"],
    },
  },
];

export default function DoctorProfile() {
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
          <p className="text-gray-700">{doctor.about}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {doctor.referralOptions.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-2 border rounded-md">
                <option.icon className="text-blue-500" />
                <span>{option.title}</span>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-semibold">Areas of Interest</h3>
          <div className="flex flex-wrap gap-2">
            {doctor.areasOfInterest.map((area, index) => (
              <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                {area}
              </span>
            ))}
          </div>
          <div className="p-4 bg-gray-100 rounded-md">
            <h3 className="font-semibold">{doctor.medicalCentreInfo.title}</h3>
            <p className="text-gray-700 text-sm">{doctor.medicalCentreInfo.description}</p>
            <ul className="list-disc pl-5 text-gray-600 text-sm mt-2">
              {doctor.medicalCentreInfo.precautions.map((precaution, index) => (
                <li key={index}>{precaution}</li>
              ))}
            </ul>
          </div>
          <h3 className="text-lg font-semibold">Available Slots</h3>
          <div className="flex flex-wrap gap-2">
            {doctor.availability.dates.map((date, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm">
                {date}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {doctor.availability.slots.map((slot, index) => (
              <button key={index} className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 text-sm">
                {slot}
              </button>
            ))}
          </div>
          <button className="mt-4 p-2 bg-blue-600 text-white rounded-md flex items-center">
            <FiArrowUp className="mr-2" /> Back to Top
          </button>
        </div>
      ))}
    </div>
  );
}
