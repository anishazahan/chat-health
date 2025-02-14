import CommonBtn from "../CommonBtn";

const PaymentInformation = () => {
  return (
    <div className="mt-6 w-full">
      <h2 className="mb-4 font-inter font-medium text-xl">Payment Information</h2>
      <div className="">
        {/* Credit or Debit Card Section */}
        {/* <div className="flex items-center space-x-4">
          <input
            type="radio"
            id="creditDebitCard"
            name="paymentMethod"
            className="form-radio h-5 w-5 text-primary-dark focus:ring-primary-dark"
          />
          <label htmlFor="creditDebitCard" className="text-sm text-gray-700">
            Credit or Debit Card
          </label>
        </div> */}

        {/* Submit Button */}
        <CommonBtn className="bg-primary-dark text-white px-12 py-4 rounded-full font-medium shadow-md hover:opacity-80 transition duration-300">
          Submit
        </CommonBtn>
      </div>
    </div>
  );
};

export default PaymentInformation;
