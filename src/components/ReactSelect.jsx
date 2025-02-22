"use client";
import Select from "react-select";

const ReactSelect = ({ name, label, options, placeholder, setValue, required, error, isRequired, value, onChange }) => {
  const getOptionStyles = (defaultStyles, state) => {
    return {
      ...defaultStyles,
      backgroundColor: state.isSelected ? "#ebf5fe" : "transparent",
      color: state.isSelected ? "#383e49" : "#383e49",
      opacity: state?.isDisabled ? 0.3 : 1,
      cursor: state?.isDisabled ? "not-allowed" : "pointer",
      pointerEvents: state.isDisabled ? "none" : "auto",
      position: "relative",
      fontSize: "14px",
      padding: "8px 20px",
      "&:hover": {
        backgroundColor: "#f0f1f3",
        cursor: "pointer",
        color: "#383e49",
        fontSize: "14px",
      },

      "&::after": {
        content: state.isSelected ? '"\\2713"' : '""',
        position: "absolute",
        bottom: "3%",
        right: "3%",
        fontSize: "20px",
        color: "#10a760",
        fontWeight: "600",
      },
    };
  };

  const colorStyles = {
    control: (styles, { isFocused }) => ({
      ...styles,
      color: "#989fad",
      fontSize: "14px",
      backgroundColor: "white",
      borderColor: isFocused ? "#00BFB2" : "#b9bdc7",
      // ":hover": {
      //   borderColor: "#00BFB2",
      // },
      borderWidth: "1px",
      minHeight: "48px",
      borderRadius: "16px",
      padding: "0px 10px",
      minWidth: "150px",
      boxShadow: "none !important",
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "#2b2f38",
      backgroundColor: "#fff",
    }),
    clearIndicator: (defaultStyles) => ({
      ...defaultStyles,
      fontWeight: 400,
      marginRight: "-7px",
      cursor: "pointer",
    }),
    indicatorSeparator: (defaultStyles, state) => ({
      ...defaultStyles,
      color: "#F9F07A",
      backgroundColor: "#F9F07A",
      visibility: state?.isSelected ? "visible" : "hidden",
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: "#b9bdc7",
      fontWeight: "500",
    }),
    menuList: (provided) => ({
      ...provided,
    }),
    option: getOptionStyles,
    multiValueLabel: (base) => ({
      ...base,
      color: "#000",
      fontSize: "14px",
    }),
    multiValueRemove: (base) => ({
      ...base,
    }),
    menu: (provided) => ({ ...provided, zIndex: 9999 }),
    menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
  };
  return (
    <div className="w-full max-w-[600px] space-y-2">
      <label className="text-sm text-gray-500">
        {label}
        {/* {required && <span className="text-red-500 text-sm"> *</span>} */}
      </label>
      <Select
        classNames={"rounded-[16px] border border-gray-300 h-[48px] bg-white"}
        options={options}
        placeholder={placeholder}
        className="mt-1"
        classNamePrefix="custom-select"
        styles={colorStyles}
        required={isRequired}
        // onChange={(selectedOption) => setValue(name, selectedOption)}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default ReactSelect;
