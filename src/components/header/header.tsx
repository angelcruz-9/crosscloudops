import React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <section className="relative pt-40 xl:py-42 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <div className="container-common relative flex flex-col xl:flex-row justify-between">
        <div className="text-center xl:text-left w-full xl:w-1/2">
          <h1 className="text-4xl font-bold text-white">
            Cross Cloud Ops, Your Partner In The Cloud
          </h1>
          <div className="text-2xl font-bold text-white flex flex-col py-6">
            <h3>Personalized IT Consultancy</h3>
            <img
              src={`${process.env.PUBLIC_URL}/assets/sf_logo.png`}
              alt="partner"
              className="mt-4 ml-24 xl:ml-0"
              width={120}
            />
          </div>
          <p className="mt-4 text-lg text-white">
            Let us build optimized digital experiences to drive your company's
            rapid growth.
          </p>
        </div>
        <motion.div
          className="relative"
          animate={{ y: [-10, 10, -10], transition: { duration: 6, repeat: Infinity } }}
          style={{ marginTop: "-24px" }}
        >
          <img src={`${process.env.PUBLIC_URL}/assets/header.gif`} alt="Gif" />
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
