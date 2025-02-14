const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="hidden" />
      <div
        className={`w-5 h-5 rounded-md flex items-center justify-center border ${
          checked ? "bg-primary-dark border-primary-dark" : "bg-white border-gray-300"
        }`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className={`  ${checked ? "text-black " : "text-gray-700"}`}>{label}</span>
    </label>
  );
};

export default Checkbox;
