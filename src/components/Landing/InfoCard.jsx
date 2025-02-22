import { IoMdInformationCircleOutline } from "react-icons/io";

const InfoCard = ({ description }) => {
  return (
    <div className="bg-primary-light flex items-center mr-auto justify-start gap-2 text-primary-dark px-4 rounded-lg py-3 text-xs   ">
      <button className="text-lg">
        <IoMdInformationCircleOutline />
      </button>
      <p className="text-sm"> {description && description} </p>
    </div>
  );
};

export default InfoCard;
