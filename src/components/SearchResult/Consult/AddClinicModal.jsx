import CommonBtn from "@/components/CommonBtn";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { handleAddClinicModal } from "@/redux/slices/signUpModalSlice";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const AddClinicModal = () => {
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
      <Modal
        className="max-w-[540px]"
        title={<h2 className="text-xl font-semibold min-w-[370px] mr-10">Enter Clinic Information</h2>}
        isOpen={addClinicModal}
        onClose={() => dispatch(handleAddClinicModal(false))}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <Input
            label="Clinic Name"
            placeholder="Enter your clinic name"
            name="clinic_name"
            register={register}
            isRequired
          />

          <Input
            label="Clinic Street Address"
            placeholder="Enter your clinic street address"
            name="clinic_address"
            register={register}
            isRequired
          />

          <Input
            label="Clinic Email Address (optional)"
            placeholder="Enter your clinic email address"
            name="clinic_email"
            register={register}
          />

          {/* Footer */}
          <div className="flex items-center gap-4 mt-5 w-full justify-center">
            <CommonBtn
              type="button"
              onClick={() => dispatch(handleAddClinicModal(false))}
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

export default AddClinicModal;
