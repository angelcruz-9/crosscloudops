import React, { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import FooterLogo from '../footer/footer-logo';

const TypeAnimationComponent = lazy(() => import('./typeAnimation'));

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
          <h1 className="relative z-20 text-center text-4xl md:text-5xl text-white font-sans font-bold leading-10">
          <Suspense fallback={<div>Loading...</div>}>
              <TypeAnimationComponent />
            </Suspense>
            <br />
            <h1 className="highlighted-gradient">
              Your Partner In The Cloud
            </h1>
          </h1>
          <div className="text-2xl font-bold text-white flex flex-col md:flex-row items-center py-6">
            <FooterLogo />
          </div>
          <h2 className="md:mt-4 text-[#fafafa] max-w-lg my-2 text-lg xl:text-2xl text-center md:text-left relative z-20">
            Let us build optimized digital experiences to drive your company's
            rapid growth.
          </h2>
        </div>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-60 opacity-75"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src={`${process.env.PUBLIC_URL}/assets/header.mp4`}
            type="video/mp4"
          />
          <source
            src={`${process.env.PUBLIC_URL}/assets/header.webm`}
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent -z-1"></div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Header;
