import { IoMdInformationCircleOutline } from "react-icons/io";

const InfoCard = () => {
  return (
    <div className="bg-primary-light flex items-center mr-auto justify-start gap-2 text-primary-dark px-4 rounded-lg py-3 text-sm font-medium max-w-[350px] ">
      <button className="text-lg">
        <IoMdInformationCircleOutline />
      </button>
      <p>Certificates are usually sent within an hour</p>
    </div>
  );
};

export default InfoCard;
