import React from "react";
import CarouselCard from "../../ui-components/caroselCard/caroselCard";

const cardData = [
  {
    title: "Salesforce Marketing Cloud",
    description:
      "We tailor Salesforce Marketing Cloud to give you the most ROI on your Salesforce investment. We help boost your data analytics by up to 50% so you can make timely business decisions based on up-to-date data reporting. We help you see what your customers are really doing and leverage your valuable legacy systems and integrate them with the cloud. We modernize your systems with industry best practices and cutting-edge solutions, helping your maximize your sales and your customer journey.",
    image: "/assets/marketing.png",
  },
  {
    title: "Marketing Strategy Expertise",
    description:
      "Our robust marketing solutions are configurable to allow for a highly-personalized customer jounrey that helps you delight customers and drive sales.",
    image: "/assets/marketing2.png",
  },
];

const Marketing: React.FC = () => {
  return (
      <div className="container-common">
        <div className="flex flex-col items-center py-24">
          <h1 className="text-4xl font-bold tracking-wider pb-8 text-white">
            Marketing Cloud
          </h1>
          <CarouselCard cards={cardData} />
        </div>
      </div>
  );
};

export default Marketing;
