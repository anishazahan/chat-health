"use client";

import Modal from "@/components/Modal";
import { useSelector } from "react-redux";
import "./loadingModal.css";

const LoadingModal = () => {
  const { isProceedIHIComplete, sentCodeModal, isSpinnerModalShow } = useSelector((state) => state.signUpModal);

  return (
    <div>
      {isSpinnerModalShow && (
        <Modal isOpen={true} isClose={false} className="max-w-[500px] ">
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
      )}
    </div>
  );
};

export default LoadingModal;
