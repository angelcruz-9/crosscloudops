import React from "react";
import AnimatedNumber from "react-animated-numbers";

const NumberSections: React.FC = () => {
  const sections = [
    { number: 25, text: "Technology Platform Implementations", suffix: "+" },
    { number: 12, text: "Digital marketplace implementations", suffix: "" },
    { number: 5, text: "Innovation virtual teams", suffix: "" },
    { number: 10, text: "Cost Savings for our customers", suffix: "M+" },
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-opacity-100 md:pt-64"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg-section-dark.webp)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      <div
        className="relative mx-auto flex justify-center gap-8 z-10"
        style={{
          backgroundColor: "transparent",
          backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #000 100%)",
        }}
      >
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col text-white items-center w-72 pb-4">
            <div className="flex items-baseline">
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
                textAlign: "center",
              }}
            />
            <span className="text-[3.4rem] font-bold">
                {section.suffix}
              </span>
            </div>
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
