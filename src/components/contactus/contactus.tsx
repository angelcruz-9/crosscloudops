import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import CalendlyEmbed from "./calendlyEmbedded";
import { motion } from "framer-motion";
import { SignupFormDemo } from "./signupform/signupForm";

const ContactUs: React.FC = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <div className="relative overflow-hidden">
       <div className="bg-contact-opacity"></div>
      <div className="container-common relative z-10 py-24">
        <h1 className="text-4xl font-bold tracking-wider text-center pt-8 text-white">
          Contact us
        </h1>
        <div className="grid xl:grid-cols-[40%_60%]  justify-start items-start">
          <SignupFormDemo />
          <div className="flex flex-col justify-between mt-4 xl:mt-20 xl:ml-8">
            <p className="text-white text-xl mt-2 ">
              Ready to see how Cross Cloud Ops can help you drive rapid growth?
              Contact us today with the form on the left, or instantly schedule
              a meeting below.
            </p>
            <div className="flex flex-col justify-start py-8">
              <label className="text-orange-400">Phone :</label>
              <p className="text-white">(317) 296-6393 , (317) 835-6132</p>
            </div>
            <div className="flex flex-col justify-start">
              <label className="text-orange-400">Email :</label>
              <p className="text-white">info@crosscloudops.com</p>
            </div>
            <div className="relative py-8 w-52 cursor-pointer">
              <div className="border b-white p-1 rounded-full">
                <div className="bg-orange-400 rounded-full hover:bg-orange-600">
                  <h2
                    className="text-white text-center flex justify-center items-center text-xl text-semibold p-1"
                    onClick={openCalendly}
                  >
                    <span>
                      <MdOutlineKeyboardDoubleArrowRight className="text-2xl" />
                    </span>
                    Schedule a Demo
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-8">
          <h2 className="text-3xl font-fold text-white">Addresses :</h2>
          <div className="grid grid-cols-1 xl:grid-cols-3 py-4">
            <div className="mb-4 xl:mb-0 text-white">
              <strong className="text-white">
                USA Corporate Headquarters & Main Office:
              </strong>{" "}
              201 N Illinois Street, South Tower Suite 1600, Indianapolis, IN
              46204, USA
            </div>
            <div className="mb-4 xl:mb-0 text-white">
              <strong className="text-white">Cincinnati Office:</strong> 8044
              Montgomery Rd Suite 700, Kenwood, OH 45236, USA
            </div>
            <div className="mb-4 xl:mb-0 text-white">
              <strong className="text-white">India Office:</strong> 14/46, 1st
              Floor, Phoenix Tech Tower, Uppal, Hyderabad, Telangana 500039.
              Phone: +91-40-6793 4217
            </div>
          </div>
        </div>
        {isCalendlyOpen && (
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <CalendlyEmbed onClose={closeCalendly} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
