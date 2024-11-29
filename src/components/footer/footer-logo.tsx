import React from "react";
import { motion } from "framer-motion";

const logos = [
  "/assets/salesforce-header.png",
  "/assets/hubspot-header.png",
  "/assets/zoho-header.png",
  "/assets/freshworks-header.png",
  "/assets/acquia-header.png",
  "/assets/mulesoft-header.png",
  "/assets/aws-header.png",
  "/assets/azure-header.png",
  "/assets/gcp-header.png",
];

const FooterLogo: React.FC = () => {
  const animation = {
    animate: {
      x: [0, -100 * logos.length], // Adjust based on the number of logos and their width
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15, // Adjust the duration to control the speed of the scrolling
          ease: "linear",
        },
      },
    },
  };

  return (
    <footer className="container-common overflow-hidden relative z-10">
      <div className="flex justify-center items-center overflow-hidden whitespace-nowrap">
        <motion.div className="flex" {...animation}>
          {logos.map((logo, index) => (
            <img
              src={`${process.env.PUBLIC_URL}${logo}`}
              alt={`logo-${index}`}
              key={index}
              loading="lazy"
              className="w-32 h-28 mx-8 object-contain"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              src={`${process.env.PUBLIC_URL}${logo}`}
              alt={`logo-${index + logos.length}`}
              key={index + logos.length}
              loading="lazy"
              className="w-32 h-28 mx-8 object-contain "
            />
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterLogo;
