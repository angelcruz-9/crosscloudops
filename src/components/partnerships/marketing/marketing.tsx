import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";

const cardData = [
  {
    title: "Salesforce Marketing Cloud",
    description:
      "We tailor Salesforce Marketing Cloud to give you the most ROI on your Salesforce investment. We help boost your data analytics by up to 50% so you can make timely business decisions based on up-to-date data reporting. We help you see what your customers are really doing and leverage your valuable legacy systems and integrate them with the cloud. We modernize your systems with industry best practices and cutting-edge solutions, helping your maximize your sales and your customer journey.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={`${process.env.PUBLIC_URL}/assets/marketing.png`}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Marketing"
        />
      </div>
    ),
  },
  {
    title: "Marketing Strategy Expertise",
    description:
      "Our robust marketing solutions are configurable to allow for a highly-personalized customer jounrey that helps you delight customers and drive sales.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={`${process.env.PUBLIC_URL}/assets/marketing2.png`}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Marketing2"
          />
        </div>
      ),
  },
];

const Marketing: React.FC = () => {
  return (
    <div className="container-common">
      <div className="flex flex-col items-center py-16">
        <h1 className="text-3xl xl:text-4xl font-bold tracking-wider pb-8 text-white">
          Marketing Cloud
        </h1>
        <div className="xl:p-10">
          <StickyScroll content={cardData} />
        </div>
      </div>
    </div>
  );
};

export default Marketing;
