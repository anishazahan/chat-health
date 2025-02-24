"use client";

import { useForm } from "react-hook-form";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaLock } from "react-icons/fa";

const PaymentForm = ({ amount = 19.6, cardholder = "Alif Reza", cardNumber = "1629 2744 2374" }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Payment Data:", data);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <button className="flex items-center text-gray-600 mb-4">
        <AiOutlineArrowLeft className="mr-2" /> Back
      </button>
      <div className="p-4 bg-gray-100 rounded-md flex items-start gap-3">
        <FaLock className="text-gray-600" />
        <p className="text-sm text-gray-700">
          After payment, we'll send you a link to your consultation via email and SMS. An e-script will be sent to your
          mobile number after the consultation.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <div className="flex justify-between text-lg font-semibold">
          <span>Consultation Fee</span>
          <span>${amount.toFixed(2)}</span>
        </div>

        <div className="flex items-center gap-2 border border-gray-300 p-2 rounded-md">
          <input
            {...register("discountCode")}
            type="text"
            placeholder="EX: 19EH629ST"
            className="w-full outline-none"
          />
          <button type="button" className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm">
            Apply
          </button>
        </div>

        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>${amount.toFixed(2)}</span>
        </div>

        <div>
          <label className="block text-gray-600 text-sm mb-1">Cardholder Name</label>
          <input
            type="text"
            value={cardholder}
            readOnly
            className="w-full border border-gray-300 p-2 rounded-md bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm mb-1">Card Details</label>
          <div className="flex items-center justify-between border border-gray-300 p-2 rounded-md bg-gray-100">
            <span>{cardNumber}</span>
            <button type="button" className="bg-black text-white px-3 py-1 rounded-md text-sm">
              Autofill Link
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <FaLock /> Guaranteed safe and secure checkout
        </div>

        <div className="flex justify-center gap-3 mt-2">
          img
          {/* <Image src={visa} alt="Visa" width={40} height={25} />
          <Image src={amex} alt="Amex" width={40} height={25} />
          <Image src={mastercard} alt="MasterCard" width={40} height={25} />
          <Image src={discover} alt="Discover" width={40} height={25} /> */}
        </div>

        <div className="text-center mt-4">
          stripeLogo
          {/* <Image src={stripeLogo} alt="Powered by Stripe" width={100} height={30} /> */}
        </div>

        <button type="submit" className="w-full bg-teal-500 text-white py-3 rounded-md text-lg font-semibold mt-4">
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
