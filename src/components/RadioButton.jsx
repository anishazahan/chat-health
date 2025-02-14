const RadioButton = ({ label, name, value, selectedValue, onChange }) => {
  const isSelected = value === selectedValue;

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
        className="hidden"
      />
      <div
        className={`w-5 h-5 rounded-full flex items-center justify-center border ${
          isSelected ? "bg-primary-dark border-primary-dark" : "bg-white border-gray-300"
        }`}
      >
        {isSelected && <div className="w-3 h-3 bg-white rounded-full" />}
      </div>
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
};

export default RadioButton;
