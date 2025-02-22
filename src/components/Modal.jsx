import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children, isClose = true, title, className }) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      setTimeout(() => setVisible(false), 300); // Delay for animation
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-gray-500/50  z-50"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`bg-white rounded-[34px] p-6 w-full  ${className && className} relative`}
          >
            {(title || isClose) && (
              <div className="flex justify-between items-center mb-4 gap-4">
                <div className="text-xl font-semibold">{title && title}</div>

                {isClose && (
                  <button onClick={onClose} className="top-6 right-6 absolute text-gray-400 hover:text-gray-800">
                    <IoClose size={24} />
                  </button>
                )}
              </div>
            )}

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
