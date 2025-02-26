import CommonBtn from "@/components/CommonBtn";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { handleAddDoctorModal } from "@/redux/slices/signUpModalSlice";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const AddDoctorModal = () => {
  const dispatch = useDispatch();
  const { addClinicModal, addDoctorModal } = useSelector((state) => state.signUpModal);

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
      <Modal
        className="max-w-[540px]"
        title={<h2 className="text-xl font-semibold min-w-[370px] mr-10">Enter Doctor information</h2>}
        isOpen={addDoctorModal}
        onClose={() => dispatch(handleAddDoctorModal(false))}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <Input
            label="Doctor Name"
            placeholder="Enter your Doctor Name"
            name="doctor_name"
            register={register}
            isRequired
          />

          <Input
            label="Doctor Email Address (optional)"
            placeholder="Enter clinic email address"
            name="doctor_email_address"
            register={register}
            isRequired
          />

          {/* Footer */}
          <div className="flex items-center gap-4 mt-8 w-full justify-center">
            <CommonBtn
              type="button"
              onClick={() => dispatch(handleAddDoctorModal(false))}
              className="px-8 py-4 rounded-full font-medium border shadow-md hover:opacity-80 transition duration-300 bg-transparent !text-gray-800 w-full"
            >
              Cancel
            </CommonBtn>
            <CommonBtn type="submit" className="w-full">
              Confirm
            </CommonBtn>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddDoctorModal;
