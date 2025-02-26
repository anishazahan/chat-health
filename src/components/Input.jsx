const Input = ({
  icon,
  placeholder = "Enter value",
  type = "text",
  value,
  onChange,
  name,
  isRequired,
  register,
  label,
}) => {
  return (
    <div className="w-full max-w-[600px] space-y-2">
      <label htmlFor={name} className="text-sm  text-gray-500">
        {" "}
        {label && label}
      </label>
      <div
        className={`flex items-center rounded-[16px] px-5 py-3 w-full focus-within:border-primary-dark border border-transparent  bg-[#F5F5F5] max-w-[600px] focus:bg-[#F5F5F5] ${
          type !== "textarea" ? "h-[48px]" : ""
        } `}
      >
        {icon && <div className="mr-2 text-xl">{icon}</div>}

        {type === "textarea" ? (
          <textarea
            id={name}
            {...(register ? register(name) : {})}
            className="bg-transparent outline-none w-full text-sm font-medium placeholder:text-gray-400 placeholder:font-normal"
            rows={4}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={isRequired}
            {...(register ? register(name) : {})}
            className="bg-transparent outline-none w-full text-sm font-medium placeholder:text-gray-400 placeholder:font-normal "
          />
        )}
      </div>
    </div>
  );
};

export default Input;
