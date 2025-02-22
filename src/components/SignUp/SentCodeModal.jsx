"use client";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonBtn from "../CommonBtn";
import Modal from "../Modal";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";

const SentCodeModal = () => {
  const dispatch = useDispatch();
  const { isProceedIHIComplete, sentCodeModal } = useSelector((state) => state.signUpModal);
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [enteredCode, setEnteredCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus(); // Focus on the first input on mount
  }, []);

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    if (!/^\d?$/.test(value)) return; // Allow only numeric input (0-9)

    const newCode = [...enteredCode];
    newCode[index] = value;
    setEnteredCode(newCode);

    // Move to next input if a digit is entered
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleInputKeyDown = (index, event) => {
    if (event.key === "Backspace") {
      const newCode = [...enteredCode];
      newCode[index] = ""; // Clear current input
      setEnteredCode(newCode);

      if (index > 0) {
        inputRefs.current[index - 1]?.focus(); // Move back
      }
    }
  };

  const onSubmit = () => {
    const code = enteredCode.join("");
    if (code.length !== 4) {
      alert("Please enter a valid 4-digit code.");
      return;
    }
    console.log("Entered Code:", code);
    alert(`Verifying code: ${code}`);
  };

  const handleResend = () => {
    alert("Resend clicked");
  };

  const handleEmailLink = () => {
    alert("Email link clicked");
  };

  return (
    <div>
      {isProceedIHIComplete && sentCodeModal && (
        <Modal className="max-w-[500px]" isClose={false} isOpen={sentCodeModal}>
          <div className="">
            <div className="flex items-center mb-6 gap-8">
              <button onClick={() => router.back()} className="text-gray-500">
                <FaArrowLeft />
              </button>
              <h2 className="text-xl font-semibold ml-4 text-center mx-auto">We sent a code to your Mobile</h2>
            </div>

            <p className="text-gray-500 mb-5 text-sm text-center">Please enter the code</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="gap-2 grid grid-cols-4 mb-6">
                {enteredCode.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="h-[60px] bg-gray-100 rounded-[48px] text-center text-2xl outline-none font-bold focus:ring-primary-dark focus:border-primary-dark"
                    value={digit}
                    onChange={(event) => handleInputChange(index, event)}
                    onKeyDown={(event) => handleInputKeyDown(index, event)}
                    ref={(el) => (inputRefs.current[index] = el)}
                  />
                ))}
              </div>

              <CommonBtn type="submit" className="w-full">
                Verify
              </CommonBtn>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm mb-6">Resend code in 00:30</p>
              <p className="text-gray-500 text-sm">
                Didn't receive a code?{" "}
                <button onClick={handleResend} className="text-primary-dark font-medium hover:underline">
                  Resend Code
                </button>
              </p>
              <p className="text-gray-600 mt-5">
                <button onClick={handleEmailLink} className="text-sm text-primary-dark hover:underline">
                  Send a code to linked email account.
                </button>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SentCodeModal;
