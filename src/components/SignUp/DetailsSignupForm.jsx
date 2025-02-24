"use client";
import {
  handleSentCodeModal,
  setIHUAddModal,
  setIsPrevSignupModal,
  setIsProceedIHIComplete,
} from "@/redux/slices/signUpModalSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../Checkbox";
import CommonBtn from "../CommonBtn";
import Input from "../Input";
import InfoCard from "../Landing/InfoCard";
import Modal from "../Modal";
import ReactSelect from "../ReactSelect";
import SentCodeModal from "./SentCodeModal";

const relationType = [
  { value: "self", label: "Self" },

  { value: "brother", label: "Brother" },

  { value: "daughter", label: "Daughter" },

  { value: "father", label: "Father" },

  { value: "husband-male-partner", label: "Husband/Male Partner" },

  { value: "mother", label: "Mother" },

  { value: "sister", label: "Sister" },

  { value: "wife-female-partner", label: "Wife/Female Partner" },

  { value: "other", label: "Other" },

  { value: "unknown", label: "Unknown" },

  { value: "your", label: "Your" },

  { value: "all", label: "all" },

  { value: "subu", label: "Subu" },

  { value: "mt", label: "Mt" },

  { value: "cour", label: "Cour" },

  { value: "at", label: "At" },
];

const genderType = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "indeterminate", label: "Indeterminate" },
];

const DetailsSignupForm = () => {
  const [proceedIHI, setIsProceedIHI] = useState(false);

  const dispatch = useDispatch();
  const { isPrevSignupModal, noSignUp, noLogIn, IHUAddModal, isProceedIHIComplete, sentCodeModal } = useSelector(
    (state) => state.signUpModal
  );

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      relation_type: relationType[0],
      your_first_name: "Ajay",
      your_last_name: "Sui",
      your_sex: genderType[0],
      your_dob: "2000-02-02",
      your_email: "alifreza220@gmail.com",
      your_phone_number: "",
      your_date_of_birth: "2000-02-02",
      patient_first_name: "Ajay",
      patient_last_name: "Sui",
      patient_sex: genderType[0],
      patient_dob: "2000-02-02",
      patient_email: "alifreza220@gmail.com",
      patient_mobile: "",
      patient_address: "35 Mietta Terrace",
      patient_suburb: "Melbourne",
      patient_postcode: "3000",
      patient_state: "Victoria",
      patient_country: "Australia",
    },
  });

  const [isNoPatientEmail, setIsNoPatientEmail] = useState(false);
  const [isNoPatientMobile, setIsNoPatientMobile] = useState(false);

  const handleNoPatientEmail = () => {
    setIsNoPatientEmail(!isNoPatientEmail);
    setValue("patient_email", isNoPatientEmail ? "alifreza220@gmail.com" : "");
  };

  const handleNoPatientMobile = () => {
    setIsNoPatientMobile(!isNoPatientMobile);
    setValue("patient_mobile", isNoPatientMobile ? "" : "04xx xxx xxx");
  };

  const onSubmit = (data) => {
    // console.log("Submitted Data:", data);
  };

  return (
    <div>
      {noSignUp && (
        <Modal
          className=" max-w-[1200px] 2xl:max-w-[1344px] "
          isOpen={isPrevSignupModal}
          isClose={false}
          //   onClose={() => dispatch(setIsPrevSignupModal(false))}
        >
          <div className="max-h-[80vh] overflow-y-auto pr-2">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="border rounded-[34px] p-4 w-full">
                {/* Header */}
                <h2 className="text-center text-xl font-semibold ">Your Details</h2>

                <div className="w-full my-5">
                  <InfoCard
                    description={
                      "As per health records act and medical practise requirements in Australia, we need your basic information to book an appointment. We may share this data with the medical practise for administrative purposes. We respect your privacy and will not share your data with any other third party"
                    }
                  />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-center mb-4">Relationship to the patient</h2>

                  <div className="max-w-[356px] mx-auto">
                    <ReactSelect
                      name="relation_type"
                      placeholder="Select Relation Type"
                      options={relationType}
                      // setValue={setValue}
                      onChange={(option) => setValue("relation_type", option)}
                      required
                    />
                  </div>
                  {/* your information */}
                  <div className="mt-5">
                    <div className="flex items-center gap-4">
                      <Input label="Your First Name" name="your_first_name" register={register} isRequired />
                      <Input label="Your Last Name" name="your_last_name" register={register} isRequired />

                      <div className="min-w-[200px]">
                        <ReactSelect
                          label={"Your Sex at Birth"}
                          name="your_sex"
                          options={genderType}
                          value={watch("your_sex")}
                          onChange={(option) => setValue("your_sex", option)}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <Input
                        label="Your Date of Birth"
                        placeholder="Select"
                        type="date"
                        name="your_date_of_birth"
                        register={register}
                        isRequired
                      />
                      <Input
                        label="Your Email"
                        placeholder="Enter your email"
                        type="text"
                        name="your_email"
                        register={register}
                        isRequired
                      />
                      <Input
                        label="Your Phone Number"
                        placeholder="Enter your phone number"
                        type="telephone"
                        name="your_phone_number"
                        register={register}
                        isRequired
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ----relation ship patient information------- */}

              <div className="">
                {watch("relation_type")?.value !== "self" && (
                  <div className="mt-5">
                    <div className="flex items-center gap-4">
                      <Input
                        label="Patient First Name"
                        placeholder="Enter Patient first name"
                        type="text"
                        name="first_name"
                        register={register}
                        isRequired
                      />
                      <Input
                        label="Patient Last Name"
                        placeholder="Enter Patient last name"
                        type="text"
                        name="last_Name"
                        register={register}
                        isRequired
                      />

                      <div className="min-w-[200px]">
                        <ReactSelect
                          name="patient_sex"
                          label="Patient Sex at Birth"
                          placeholder="Select"
                          options={genderType}
                          setValue={setValue}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <Input
                        label="Patient Date of Birth"
                        name="patient_dob"
                        register={register}
                        type="date"
                        isRequired
                      />

                      <div className="max-w-[600px] space-y-2">
                        <label htmlFor="patient_mobile" className="text-sm  text-gray-5000">
                          Patient Email
                        </label>
                        <div className="flex items-center rounded-[16px] px-5 py-3 w-full focus-within:border-primary-dark border border-transparent h-[48px] bg-[#F5F5F5] max-w-[600px] focus:bg-[#F5F5F5] relative">
                          <input
                            type="text"
                            id="patient_email"
                            {...register("patient_email")}
                            className="bg-transparent outline-none w-full text-sm font-medium placeholder:text-gray-400 placeholder:font-normal"
                            disabled={isNoPatientEmail}
                          />
                          <label className="inline-flex items-center absolute right-5">
                            <Checkbox label={"No email"} checked={isNoPatientEmail} onChange={handleNoPatientEmail} />
                          </label>
                        </div>
                      </div>

                      <div className="max-w-[600px] space-y-2">
                        <label htmlFor="patient_mobile" className="text-sm  text-gray-5000">
                          Patient Mobile Number
                        </label>
                        <div className="flex items-center rounded-[16px] px-5 py-3 w-full focus-within:border-primary-dark border border-transparent h-[48px] bg-[#F5F5F5] max-w-[600px] focus:bg-[#F5F5F5] relative">
                          <input
                            type="text"
                            id="patient_mobile"
                            {...register("patient_mobile")}
                            className="bg-transparent outline-none w-full text-sm font-medium placeholder:text-gray-400 placeholder:font-normal"
                            disabled={isNoPatientMobile}
                          />
                          <label className="inline-flex items-center absolute right-5">
                            <Checkbox
                              label={"No number"}
                              checked={isNoPatientMobile}
                              onChange={handleNoPatientMobile}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* patient address */}

              <div className="relative space-y-2 mt-7 mb-5">
                <label htmlFor="address" className="block text-sm  text-gray-500">
                  Patient's Home Address
                </label>
                <div className="mt-1 relative  shadow-sm flex items-center rounded-[16px] px-5 py-3 w-full f border border-transparent h-[48px] bg-[#F5F5F5]">
                  <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FaSearch className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="bg-transparent outline-none w-full text-sm font-medium placeholder:text-gray-400 placeholder:font-normal pl-5"
                    placeholder="Search for home address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                <Input label="Street Address" name="patient_address" register={register} isRequired />
                <Input label="Suburb" name="patient_suburb" register={register} isRequired />
                <Input label="Postcode" name="patient_postcode" register={register} isRequired />
                <Input label="State" name="patient_state" register={register} isRequired />
                <Input label="Country" name="patient_country" register={register} isRequired />
              </div>

              {/* footer */}
              <div className="flex items-center gap-4 mt-5 w-full justify-end pb-2">
                <CommonBtn
                  onClick={() => dispatch(setIsPrevSignupModal(false))}
                  className={
                    "px-8 py-4 rounded-full font-medium border shadow-md hover:opacity-80 transition duration-300 bg-transparent !text-gray-800"
                  }
                >
                  Cancel
                </CommonBtn>
                <CommonBtn
                  onClick={() => {
                    dispatch(setIHUAddModal(!isProceedIHIComplete));
                    dispatch(handleSentCodeModal(isProceedIHIComplete));
                  }}
                  type="submit"
                >
                  Continue
                </CommonBtn>
              </div>
            </form>
          </div>
        </Modal>
      )}

      {IHUAddModal && !proceedIHI && !isProceedIHIComplete && (
        <Modal
          className="max-w-[600px]"
          title={<h2 className=" text-xl font-semibold ">Enter your IHI number</h2>}
          isOpen={IHUAddModal}
          onClose={() => dispatch(setIHUAddModal(false))}
        >
          {/* Body */}
          <div className="mb-4 text-gray-600 text-sm ">
            <p className="text-sm text-gray-500">
              Individual Health Identifier (IHI) is a 16 digit number provided by Digital Health Australia. This can be
              created by any foreign passport holder with valid Australian visa at{" "}
              <a
                className="text-primary-dark"
                target="_blank"
                href="https://www.servicesaustralia.gov.au/how-to-get-individual-healthcare-identifier?context=22591#fa1"
              >
                https://www.servicesaustralia.gov.au/how-to-get-individual-healthcare-identifier?context=22591#a1.
              </a>{" "}
              For any Australian citizen or permanent resident holding Medicare card, please go back and enter your
              Medicare details.
            </p>

            <div className="space-y-3 mt-5">
              <p className="text-sm font-medium text-black">IHI number</p>

              <Input placeholder="04xx xxx xxx" type="text" name="IHI_number" register={register} isRequired />
            </div>
          </div>

          {/* footer */}
          <div className="flex flex-col items-center gap-3 mt-5 w-full  pb-2">
            <CommonBtn
              className={"w-full"}
              onClick={() => {
                setIsProceedIHI(true);
              }}
              type="submit"
            >
              Proceed
            </CommonBtn>
            <CommonBtn
              onClick={() => dispatch(setIHUAddModal(false))}
              className={
                "px-8 py-4 rounded-full w-full  border !shadow-none hover:bg-gray-100 transition duration-300 bg-transparent font-normal !text-black"
              }
            >
              I don’t have an any IHI number
            </CommonBtn>
          </div>
        </Modal>
      )}

      {proceedIHI && (
        <Modal
          className="max-w-[600px]"
          title={<h2 className=" text-xl font-semibold ">Valid Medicare or IHI required</h2>}
          isOpen={proceedIHI}
          onClose={() => setIsProceedIHI(false)}
        >
          {/* Body */}
          <div className="mb-4 text-gray-600 text-sm ">
            <p className="text-sm text-gray-500 mb-5">
              Please note that prescriptions cannot be provided if you proceed without providing either valid Medicare
              details or an individual Health Identifier (IHI) number. Please use the below link to create an IHI, you
              need to have a foreign passport and a valid Australian visa.
            </p>
            <a
              className="text-primary-dark font-medium"
              target="_blank"
              href="https://www.servicesaustralia.gov.au/how-to-get-individual-healthcare-identifier?context=22591#fa1"
            >
              Click Here
            </a>
          </div>

          {/* footer */}
          <div className="flex flex-col items-center gap-3 mt-5 w-full  pb-2">
            <CommonBtn
              className={"w-full"}
              onClick={() => {
                dispatch(setIsProceedIHIComplete(true));
                setIsProceedIHI(false);
              }}
              type="submit"
            >
              Agree And Proceed
            </CommonBtn>
          </div>
        </Modal>
      )}

      {sentCodeModal && <SentCodeModal />}
    </div>
  );
};

export default DetailsSignupForm;
