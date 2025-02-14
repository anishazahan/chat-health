const QuickConsultServiceCard = () => {
  const services = [
    { name: "Repeat Prescription", price: "$29.95", icon: "💊" },
    { name: "1-2 day Medical Certificate", price: "$29.95", icon: "🕒" },
    { name: "Carer's leave certificate", price: "$29.95", icon: "✈️" },
    { name: "Blood / Pathology Referral", price: "$29.95", icon: "💧" },
    { name: "Repeat Specialist Referral", price: "$29.95", icon: "🔄" },
    { name: "Imaging / Radiology Referral", price: "$29.95", icon: "📷" },
  ];

  return (
    <div className="max-w-[872px] mx-auto px-4 mt-16">
      <h2 className="font-semibold text-center text-2xl md:text-4xl mt-7 mb-10">Quick Consult With Your Local GP</h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center p-4 border rounded-[34px]  bg-white w-[280px] group transition-all duration-300 hover:bg-primary-light hover:border-teal-500 hover:cursor-pointer"
          >
            <span className="text-xl mb-2 p-[10px] group-hover:bg-primary-light  bg-gray-100 rounded-full">
              {service.icon}
            </span>
            <h3 className=" font-medium text-center">{service.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickConsultServiceCard;
