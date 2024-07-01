import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const cardsData = {
    heading : "IT Operations / DevOps & QA / Managed Services",
    description : "Our Onshore, Offshore, Nearshore round-the-clock service and support mixed model is top class with proven results. Here are a few services at a glance...",
    subItems : [
        {
           icon : FiCheckCircle,
           text : "Support expertise for niche areas" 
        },
        {
            icon : FiCheckCircle,
            text : "Flexible model for each workstream " 
         },
         {
            icon : FiCheckCircle,
            text : "Services with ITSM process" 
         },
         {
            icon : FiCheckCircle,
            text : "Provide expertise in Multi-Industry verticals and Platforms" 
         },
         {
            icon : FiCheckCircle,
            text : "24/7 global support network maintenance" 
         },
         {
            icon : FiCheckCircle,
            text : "Customized services and solutions including POC" 
         },
         {
            icon : FiCheckCircle,
            text : "Skilled and service areas with resource flexibility" 
         }
    ]
}

const Services: React.FC = () => {
  return (
    <div className="bg-neutral-100">
      <div className="container-common">
        <div className="flex flex-col items-center py-24">
          <h1 className="text-4xl font-bold tracking-wider pb-8">
            {cardsData.heading}
          </h1>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-gray-600 text-xl mt-2">
                {cardsData.description}
              </p>
              {cardsData.subItems && (
                <div className="mt-4 flex flex-col">
                  {cardsData.subItems?.map((item, index) => (
                    <div key={index} className="flex py-2">
                      <item.icon size={24} color="blue" />{" "}
                      <p className="ml-2">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative w-full p-4">
              <img src={`${process.env.PUBLIC_URL}/assets/services.png`} alt="Services" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
