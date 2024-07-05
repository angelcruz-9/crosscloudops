import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./background-beams";

const Header: React.FC = () => {
  return (
    <section className="relative pt-40 xl:pt-36 overflow-hidden">
      <BackgroundBeams />
      <div className="container-common relative flex flex-col xl:flex-row justify-between">
        <div className="text-center xl:text-left w-full xl:w-1/2">
          <motion.h1
            className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-left font-sans font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Cross Cloud Ops, Your Partner In The Cloud
          </motion.h1>
          <div className="text-2xl font-bold text-white flex items-center py-6">
            <img
              src={`${process.env.PUBLIC_URL}/assets/sf_logo.png`}
              alt="partner"
              className="mt-4 ml-24 xl:ml-0"
              width={120}
            />
            <h3 className="ml-8 text-[#fafafa] max-w-lg mx-auto my-2 text-md text-left relative z-10">Personalized IT Consultancy</h3>
          </div>
          <p className="mt-4 text-[#fafafa] max-w-lg my-2 text-md text-left relative z-10">
            Let us build optimized digital experiences to drive your company's
            rapid growth.
          </p>
        </div>
        <motion.div
          className="relative"
          animate={{
            y: [-10, 10, -10],
            transition: { duration: 6, repeat: Infinity },
          }}
          style={{ marginTop: "-24px" }}
        >
          <img src={`${process.env.PUBLIC_URL}/assets/header.gif`} alt="Gif" />
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
