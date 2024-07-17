import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.section
        className="flex justify-center items-center pt-40 xl:pt-36 overflow-hidden h-screen"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="container-common relative z-20 text-center flex flex-col items-center xl:text-left w-full xl:w-1/2">
          <h1 className="relative z-20 text-4xl md:text-5xl text-white font-sans font-bold leading-10">
            Cross Cloud Ops <br />
            <span className="highlighted-gradient">
              Your Partner In The Cloud
            </span>
          </h1>
          <div className="text-2xl font-bold text-white flex flex-col md:flex-row items-center py-6">
            <img
              src={`${process.env.PUBLIC_URL}/assets/sf_logo.png`}
              alt="partner"
              className="mt-4 md:ml-24 xl:ml-0"
              width={120}
            />
            <h3 className="md:ml-8 text-[#fafafa] max-w-lg mx-auto my-2 mt-4 md:mt-0 text-md text-center md:text-left relative z-20">
              Personalized IT Consultancy
            </h3>
          </div>
          <p className="md:mt-4 text-gray-300 max-w-lg my-2 text-md text-center md:text-left relative z-20">
            Let us build optimized digital experiences to drive your company's
            rapid growth.
          </p>
        </div>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-60 opacity-90"
          src={`${process.env.PUBLIC_URL}/assets/header.mp4`}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </motion.section>
    </AnimatePresence>
  );
};

export default Header;
