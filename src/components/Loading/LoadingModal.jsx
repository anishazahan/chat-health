"use client";

import Modal from "@/components/Modal";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import "./loadingModal.css";

const LoadingModal = () => {
  const dispatch = useDispatch();
  const { addClinicModal } = useSelector((state) => state.signUpModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div>
      <Modal isOpen={true} className="max-w-[500px] ">
        <div className="w-full items-center justify-end h-[280px]">
          <div className="loading w-full mx-auto h-full flex justify-center items-center">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoadingModal;
