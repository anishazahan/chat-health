import { IoDocumentOutline } from "react-icons/io5";
import { LuMicroscope } from "react-icons/lu";
import { TiDocumentText } from "react-icons/ti";

const QuickConsultServiceCard = () => {
  const services = [
    { name: "Online Script", price: "$29.95", icon: <TiDocumentText /> },
    { name: "1-2 day Medical Certificate", price: "free", icon: <IoDocumentOutline /> },
    { name: "Carer's leave certificate", price: "$29.95", icon: <LuMicroscope /> },
    // { name: "Blood / Pathology Referral", price: "$29.95", icon: "💧" },
    // { name: "Repeat Specialist Referral", price: "$29.95", icon: "🔄" },
    // { name: "Imaging / Radiology Referral", price: "$29.95", icon: "📷" },
  ];

  return (
    <div className="max-w-[872px] mx-auto px-4 mt-16">
      <h2 className="font-semibold text-center text-2xl md:text-4xl mt-7 mb-10">Quick Consult With Your Local GP</h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center p-4 border rounded-[34px]  bg-white w-[280px] group transition-all duration-300 hover:bg-primary-light hover:border-teal-500 hover:cursor-pointer shadow-sm"
          >
            <span className="text-xl mb-2 p-[10px] group-hover:bg-primary-light  bg-gray-100 rounded-full">
              {service.icon}
            </span>
            <h3 className=" text-gray-900 text-center">{service.name}</h3>
            {service.price === "free" ? (
              <p className=" text-sm mt-2 text-text-primary font-semibold">
                Free <span>*</span>
              </p>
            ) : (
              <p className=" text-sm mt-2 text-black font-semibold">{service.price}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickConsultServiceCard;
