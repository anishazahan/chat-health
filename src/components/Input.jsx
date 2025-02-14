const Input = ({ icon, placeholder = "Enter value", type = "text", value, onChange, name }) => {
  return (
    <div className="flex items-center rounded-[22px] px-5 py-3 w-full border border-gray-300 focus-within:border-teal-400 h-[60px] max-w-[600px]">
      {icon && <div className=" mr-2 text-xl">{icon}</div>}
      <input
        type={type ? type : text}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-transparent outline-none w-full text-sm  placeholder:text-gray-400"
      />
    </div>
  );
};

export default Input;
