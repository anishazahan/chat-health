const CommonBtn = ({ children, onClick, className, type }) => {
  return (
    <button
      type={type}
      className={`bg-primary-dark text-white px-8 py-4 rounded-full font-medium shadow-sm hover:opacity-80 transition duration-300 ${
        className && className
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CommonBtn;
