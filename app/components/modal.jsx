import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Modal = ({ image, onClose }) => {
    return (
      <AnimatePresence>
        {image && (
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-4 rounded-lg overflow-hidden max-w-screen-md w-full h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="relative pb-2/3">
                {/* Use relative positioning and padding-bottom for aspect ratio */}
                <img
                  src={image}
                  alt="Modal"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded"
                />
              </div>
              <button
                className="mt-4 p-2 bg-gray-200 hover:bg-gray-300 rounded"
                onClick={onClose}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  export default Modal;
