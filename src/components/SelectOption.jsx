import Select from "react-select";

const options = [
  { value: "general-practitioner", label: "General Practitioner" },
  { value: "physiotherapist", label: "Physiotherapist" },
  { value: "psychologist", label: "Psychologist" },
  { value: "repeat-prescription", label: "Repeat Prescription" },
  { value: "blood-pathology", label: "Blood / Pathology Referral" },
  { value: "specialist-referral", label: "Repeat Specialist Referral" },
  { value: "imaging-radiology", label: "Imaging / Radiology Referral" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "1px solid #e2e8f0",
    borderRadius: "0.375rem",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#cbd5e0",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#3182ce" : "white",
    color: state.isSelected ? "white" : "#4a5568",
    "&:hover": {
      backgroundColor: "#ebf8ff",
      color: "#2b6cb0",
    },
  }),
};

export default function SearchSelect() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Search and Select</h2>
      <Select
        options={options}
        styles={customStyles}
        placeholder="Search and select a service..."
        isSearchable
        noOptionsMessage={() => "No options found"}
      />
    </div>
  );
}
