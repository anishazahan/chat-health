"use client";

import { useState } from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";
import RadioButton from "./RadioButton";

const PatientForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  //   e: React.FormEvent

  const handleSubmit = () => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      phone,
      dob,
      gender,
      termsAccepted,
    };
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 bg-white rounded-lg shadow-md">
      {/* Input for First Name */}
      <Input
        placeholder="Patient's First Name"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        icon={<i className="fas fa-user"></i>} // Replace with a React Icon component
      />

      {/* Input for Last Name */}
      <Input
        placeholder="Patient's Last Name"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        icon={<i className="fas fa-user"></i>} // Replace with a React Icon component
      />

      {/* Input for Phone */}
      <Input
        placeholder="04xx xxx xxx"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        icon={<i className="fas fa-phone"></i>} // Replace with a React Icon component
      />

      {/* Input for Date of Birth */}
      <Input
        placeholder="DD/MM/YYYY"
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        icon={<i className="fas fa-calendar-alt"></i>} // Replace with a React Icon component
      />

      {/* Gender Selection (Radio Buttons) */}
      <div className="space-y-2">
        <p className="text-gray-700 text-sm font-medium">Patient's Birth Sex</p>
        <RadioButton label="Male" name="gender" value="male" selectedValue={gender} onChange={setGender} />
        <RadioButton label="Female" name="gender" value="female" selectedValue={gender} onChange={setGender} />
      </div>

      {/* Terms and Conditions (Checkbox) */}
      <Checkbox
        label="I agree to the Terms & Conditions and Privacy Policy."
        checked={termsAccepted}
        onChange={setTermsAccepted}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition"
        disabled={!termsAccepted || !firstName || !lastName || !dob || !gender || !phone}
      >
        Continue
      </button>
    </form>
  );
};

export default PatientForm;
