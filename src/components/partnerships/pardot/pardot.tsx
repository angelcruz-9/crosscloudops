import React from "react";
import { InfiniteMovingCards } from "./infinitescrollingcard";

const cardsData = [
  {
    title: "Quality Leads",
    description:
      "Accelerate quality leads to engage with Pardot. We help you generate highly-targeted email campaigns and personalize the customer’s experience. ",
    image: "/assets/leads.png",
  },
  {
    title: "Improve Marketing ROI ",
    description:
      "We give you a 360-view of your analytics so you can make data-driven marketing campaigns and decisions.",
    image: "/assets/market.png",
  },
  {
    title: "Build Relationships ",
    description:
      "Build meaningful relationships with your customers, putting the mundate tasks on auto-pilot to save you time and money.",
    image: "/assets/relation.png",
  },
  {
    title: "Grow Faster with Smarter Engagement",
    description:
      "Accelerate your sales cycle and track engagement using campaigns.      ",
    image: "/assets/grow.png",
  },
];

const Pardot: React.FC = () => {
  return (
      <div className="flex flex-col relative items-center py-16">
        <div className="bg-pardot-opacity"></div>
        <h1 className="text-[32px] relative xl:text-[40px] font-bold text-white mx-auto px-6 ">Pardot Implementation</h1>
        <p className="text-[18px] relative leading-8 text-center text-white py-10  mx-auto">
          Our B2B strategies excel across verticals, making your Pardot
          Implementation the most effective it can be.
        </p>
        <div className="rounded-md flex flex-col w-full overflow-hidden xl:overflow-auto items-center justify-center relative  mx-auto">
          <InfiniteMovingCards items={cardsData} direction="right" />
        </div>
      </div>
  );
};

export default Pardot;
