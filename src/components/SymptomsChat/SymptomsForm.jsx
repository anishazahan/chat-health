"use client";

import { setOpenSymptomForm } from "@/redux/slices/signUpModalSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineArrowUp, AiOutlinePaperClip } from "react-icons/ai";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal";
import ChatSymptomForm from "./ChatSymptomsForm";

export default function SymptomForm() {
  const dispatch = useDispatch();
  const { openSymptomForm } = useSelector((state) => state.signUpModal);
  const { register, handleSubmit, reset } = useForm();

  const [showChatModal, setShowChatMOdal] = useState(false);

  const onSubmit = (data) => {
    console.log("Symptoms:", data.symptoms);
    reset();
  };

  return (
    <Modal
      className="max-w-[1200px]"
      onClose={() => dispatch(setOpenSymptomForm(false))}
      isClose={false}
      isOpen={openSymptomForm}
    >
      <div className="max-h-[80vh] overflow-y-auto">
        {!showChatModal && (
          <div className=" w-full mx-auto ">
            {/* Confirmation Message */}

            <div className="border-b border-gray-300 border-dashed pb-4 text-center w-full mx-auto flex flex-col justify-center items-center">
              <div className="   bg-green-50 p-3 rounded-lg mb-4 flex gap-2 items-center justify-center ">
                <FaRegCheckCircle className="text-green-500 " />
                <p className="text-green-500 text-sm"> Your appointment has been confirmed</p>
              </div>

              <a href="#" className="text-secondary-dark font-semibold hover:underline">
                View Profile
              </a>
              <p className="text-sm text-gray-500 mt-3  ">
                Your profile has been created with your verified mobile number
              </p>
            </div>

            {/* Input Section */}
            <h2 className="text-xl font-inter font-semibold text-center mb-10 mt-4">
              Please enter your symptoms for an efficient & accurate care
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center max-w-[800px] mx-auto">
              <div className="relative w-full mx-auto">
                <textarea
                  {...register("symptoms", { required: true })}
                  placeholder="Enter your symptoms here for an efficient & accurate care"
                  className="w-full h-[164px]  bg-gray-100 text-sm rounded-[24px] p-6 pr-12  focus:outline-none placeholder:text-gray-600"
                ></textarea>
                <button type="button" className="absolute bottom-6 left-6 text-gray-500 hover:text-black">
                  <AiOutlinePaperClip size={20} />
                </button>
                <button
                  onClick={() => setShowChatMOdal(true)}
                  type="submit"
                  className="absolute bottom-6 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-black"
                >
                  <AiOutlineArrowUp size={20} />
                </button>
              </div>
            </form>

            {/* Footer Note */}
            <p className="text-xs text-gray-500 mb-4 mt-16 text-center">
              ChatHealth can make mistakes. Check important info.
            </p>
          </div>
        )}

        {showChatModal && <ChatSymptomForm />}
      </div>
    </Modal>
  );
}
