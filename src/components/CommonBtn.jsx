const CommonBtn = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-primary-dark text-white px-8 py-4 rounded-full font-medium shadow-md hover:opacity-80 transition duration-300 ${
        className && className
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CommonBtn;
