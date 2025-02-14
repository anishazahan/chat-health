"use client";
import { useState } from "react";
import CustomSelect from "../CustomSelect";
import Input from "../Input";

const AddressForm = () => {
  const [street, setStreet] = useState("");
  const [suburb, setSuburb] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");

  return (
    <div className="w-full mx-auto mt-8">
      <h2 className="text-2xl font-semibold">Address</h2>
      <p className="text-gray-400 text-sm mt-3 mb-5">Stay connected with the latest information.</p>

      <div className="space-y-4">
        <CustomSelect
          placeholder="Select street name"
          options={[
            { label: "Main St", value: "main" },
            { label: "Broadway", value: "broadway" },
          ]}
          value={street}
          onChange={setStreet}
        />

        <CustomSelect
          placeholder="Select suburb"
          options={[
            { label: "Downtown", value: "downtown" },
            { label: "Uptown", value: "uptown" },
          ]}
          value={suburb}
          onChange={setSuburb}
        />

        <Input placeholder="Zip Code" type="text" />

        <CustomSelect
          placeholder="Select state"
          options={[
            { label: "California", value: "ca" },
            { label: "New York", value: "ny" },
          ]}
          value={state}
          onChange={setState}
        />
      </div>

      <p className="text-danger-500 text-sm mt-5 ">
        Please note, this is a single same-day certificate and cannot be backdated.
      </p>
    </div>
  );
};

export default AddressForm;
