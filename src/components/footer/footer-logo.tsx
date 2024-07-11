import React from "react";
import { motion } from "framer-motion";

const logos = [
  "/assets/acquia-footer.png",
  "/assets/aws-footer.png",
  "/assets/azure-footer.png",
  "/assets/freshworks-footer.png",
  "/assets/gcp-footer.png",
  "/assets/hubspot-footer.png",
  "/assets/mulesoft-footer.png",
  "/assets/salesforce-footer.webp",
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
    <footer className="container-common py-32 overflow-hidden">
      <div className="flex justify-center items-center overflow-hidden whitespace-nowrap">
        <motion.div className="flex" {...animation}>
          {logos.map((logo, index) => (
            <img
              src={`${process.env.PUBLIC_URL}${logo}`}
              alt={`logo-${index}`}
              key={index}
              className="w-28 h-16 mx-8 object-contain"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              src={`${process.env.PUBLIC_URL}${logo}`}
              alt={`logo-${index + logos.length}`}
              key={index + logos.length}
              className="w-28 h-16 mx-8 object-contain"
            />
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterLogo;
