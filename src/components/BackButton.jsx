import { LuChevronLeft } from "react-icons/lu";

const BackButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="flex items-center mb-4 text-gray-700">
      <LuChevronLeft className="mr-1" size={20} /> Back
    </button>
  );
};

export default BackButton;
