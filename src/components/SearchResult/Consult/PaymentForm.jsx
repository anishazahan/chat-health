"use client";

import CommonBtn from "@/components/CommonBtn";
import { setIsShowPaymentForm } from "@/redux/slices/signUpModalSlice";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";

const PaymentForm = ({ amount = 19.6, cardholder = "Alif Reza", cardNumber = "1629 2744 2374" }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("Payment Data:", data);
  };

  return (
    <div className=" w-full px-6 py-4">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 ">
        <div className="flex justify-between  items-center text-gray-700 font-semibold">
          <span>Consultation Fee</span>
          <span>${amount.toFixed(2)}</span>
        </div>

        <div className="border-b border-gray-300 pb-4 mt-3">
          <label className="text-xs text-gray-500 " htmlFor="">
            Enter Discount Code
          </label>
          <div className="flex items-center gap-2 mt-2 bg-gray-100  px-6  rounded-[16px] h-[48px]">
            <input
              {...register("discountCode")}
              type="text"
              placeholder="EX: 19EH629ST"
              className="w-full outline-none bg-transparent placeholder:text-sm"
            />
            <button type="button" className=" text-gray-600 font-medium px-3 py-1  text-sm">
              Apply
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-2 items-center text-gray-700 font-semibold">
          <span>Total</span>
          <span>${amount.toFixed(2)}</span>
        </div>

        <div className="space-y-3 mt-6">
          <div className="space-y-2">
            <label className="text-sm  text-gray-500">Cardholder Name</label>
            <input
              type="text"
              value={cardholder}
              onChange={() => {}}
              // readOnly
              placeholder="Enter cardholder full name"
              className="h-[48px] px-6 rounded-[16px] outline-none w-full text-sm font-medium placeholder:text-gray-400 placeholder:font-normal bg-gray-100"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm  text-gray-500">Card Details</label>
            <div className="relative">
              <input
                type="text"
                value={cardNumber}
                onChange={() => {}}
                // readOnly
                placeholder="Card number"
                className="h-[48px] pl-6 rounded-[16px] outline-none w-full text-sm font-medium placeholder:text-gray-400 placeholder:font-normal bg-gray-100"
              />
              <button
                type="button"
                className="bg-black text-gray-200 px-3 py-2 rounded-[16px] text-sm absolute right-3 top-2"
              >
                Autofill{" "}
                <a className="text-primary-dark" href="">
                  Link
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center py-4 border-b border-gray-300">
          <div className="flex items-center gap-2 text-gray-600 text-sm mt-5">
            <FaLock /> Guaranteed safe and secure checkout
          </div>

          <div className="flex bg-stone-800 items-center gap-1 px-4 py-2 rounded-lg">
            <p className="text-xs font-medium text-gray-300">Powered By</p>

            <p className="text-xl font-black italic text-gray-200">Stripe</p>
          </div>
        </div>

        {/* logo */}

        <div className="flex justify-center gap-4 items-center mt-2 py-5">
          <Image src={"/images/payment/visa-logo.png"} className="object-contain" alt="Visa" width={40} height={25} />
          <Image
            src={"/images/payment/amex-payment.png"}
            className="object-contain"
            alt="Visa"
            width={40}
            height={25}
          />
          <Image
            src={"/images/payment/dicover-payment.png"}
            className="object-contain"
            alt="Visa"
            width={40}
            height={25}
          />
          <Image src={"/images/payment/jcb-payment.png"} className="object-contain" alt="Visa" width={40} height={25} />
          <Image
            src={"/images/payment/payment-red-logo.png"}
            className="object-contain"
            alt="Visa"
            width={40}
            height={25}
          />
          <Image
            src={"/images/payment/union-payment.png"}
            className="object-contain"
            alt="Visa"
            width={40}
            height={25}
          />
        </div>

        <div className="max-w-[440px] mx-auto mb-5">
          <CommonBtn onClick={() => dispatch(setIsShowPaymentForm(false))} type="submit" className="w-full ">
            Confirm Payment
          </CommonBtn>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
