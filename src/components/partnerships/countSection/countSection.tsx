import React from "react";
import AnimatedNumber from "react-animated-numbers";

const NumberSections: React.FC = () => {
  const sections = [
    { number: 25, text: "Technology Platform Implementations" },
    { number: 12, text: "Digital marketplace implementations" },
    { number: 5, text: "Innovation virtual teams" },
    { number: 10, text: "Cost Savings for our customers" },
  ];

  return (
    <div
      className="bg-cover bg-center bg-opacity-100 py-10 md:py-20 md:pt-44"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg-section.webp)`,
      }}
    >
      <div className="container-common mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col text-white items-center"
          >
            <AnimatedNumber
              animateToNumber={section.number}
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              fontStyle={{
                fontFamily: "Arial, sans-serif",
                fontSize: "4rem",
                fontWeight: "bold",
                textAlign: "left"
              }}
            />
            <div className="text-lg text-center text-gray-400 mt-2">
              {section.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberSections;
