import React from "react";

const Careers: React.FC = () => {
  return (
    <div className="container-common">
      <div className="flex flex-col">
        <img
          src="/assets/carrer.png"
          alt="Career"
          className="w-full h-auto max-h-96 object-contain"
        />
        <h1 className="text-4xl font-bold text-center">Careers</h1>
        <p className="text-xl">Work for the Best</p>
        <p className="text-xl text-[#ccc]">
          Join the quickly developing, experienced global innovator in
          programming quality affirmation and drive your vocation higher than
          ever of progress.
        </p>
      </div>
    </div>
  );
};

export default Careers;
