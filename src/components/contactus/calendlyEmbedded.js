import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

const CalendlyEmbed = ({ onClose }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white p-8 rounded-lg w-11/12">
        <div className="flex justify-end items-center mb-4">
          <button className="text-gray-600" onClick={onClose}>
            <MdClose className="text-2xl" />
          </button>
        </div>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/ccoteam/online-meetup?month=2022-06"
          style={{ minWidth: "320px", height: "580px" }}
        ></div>
      </div>
    </motion.div>
  );
};

export default CalendlyEmbed;
