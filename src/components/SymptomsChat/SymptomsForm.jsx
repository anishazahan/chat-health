"use client";

import { setOpenSymptomForm } from "@/redux/slices/signUpModalSlice";
import { useForm } from "react-hook-form";
import { AiOutlineArrowUp, AiOutlinePaperClip } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal";

export default function SymptomForm() {
  const dispatch = useDispatch();
  const { openSymptomForm } = useSelector((state) => state.signUpModal);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Symptoms:", data.symptoms);
    reset();
  };

  return (
    <Modal className="max-w-[1200px]" onClose={() => dispatch(setOpenSymptomForm(false))} isOpen={openSymptomForm}>
      <div className="flex flex-col items-center justify-center p-6 border rounded-lg w-full mx-auto ">
        {/* Confirmation Message */}
        <div className="w-full text-center border border-green-300 bg-green-100 p-3 rounded-md mb-4">
          <p className="text-green-700 font-medium">✅ Your appointment has been confirmed</p>
          <a href="#" className="text-blue-600 font-medium underline">
            View Profile
          </a>
          <p className="text-sm text-gray-600">Your profile has been created with your verified mobile number</p>
        </div>

        {/* Input Section */}
        <h2 className="text-lg font-semibold text-center mb-2">
          Please enter your symptoms for an efficient & accurate care
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center">
          <div className="relative w-full">
            <textarea
              {...register("symptoms", { required: true })}
              placeholder="Enter your symptoms here for an efficient & accurate care"
              className="w-full h-24 border border-gray-300 rounded-lg p-3 pr-12 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
            <button type="button" className="absolute bottom-3 left-3 text-gray-500 hover:text-black">
              <AiOutlinePaperClip size={20} />
            </button>
            <button
              type="submit"
              className="absolute bottom-3 right-3 bg-gray-800 text-white p-2 rounded-full hover:bg-black"
            >
              <AiOutlineArrowUp size={20} />
            </button>
          </div>
        </form>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 mt-4">ChatHealth can make mistakes. Check important info.</p>
      </div>
    </Modal>
  );
}
