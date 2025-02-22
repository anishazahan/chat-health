"use client";

import { setIsNoLogIn, setIsNoSignUp, setIsPrevSignupModal } from "@/redux/slices/signUpModalSlice";
import { useDispatch, useSelector } from "react-redux";
import CommonBtn from "../CommonBtn";
import Modal from "../Modal";
import DetailsSignupForm from "./DetailsSignupForm";

const IsLoggedInModal = () => {
  const dispatch = useDispatch();
  const { isPrevSignupModal, noSignUp, noLogIn } = useSelector((state) => state.signUpModal);
  return (
    <div>
      {!noSignUp && (
        <Modal
          className="max-w-[600px]"
          title={
            <h2 className="text-center text-xl font-semibold min-w-[370px] mr-10">
              Have you requested pathology/radiology with ChatHealth before?
            </h2>
          }
          isOpen={isPrevSignupModal}
          onClose={() => dispatch(setIsPrevSignupModal(false))}
        >
          <div className="flex items-center gap-4 mt-5 w-full justify-center">
            <CommonBtn onClick={() => dispatch(setIsNoLogIn(true))} className={"w-full"}>
              Yes, Log In
            </CommonBtn>
            <CommonBtn onClick={() => dispatch(setIsNoSignUp(true))} className={"w-full"}>
              No, Sign Up
            </CommonBtn>
          </div>
        </Modal>
      )}

      {noSignUp && <DetailsSignupForm />}
    </div>
  );
};

export default IsLoggedInModal;
