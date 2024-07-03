import React from "react";
import Card from "../../ui-components/card/card";

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
  }
];

const Pardot: React.FC = () => {
  return (
    <div className="container-common">
      <div className="flex flex-col items-center py-24">
        <h1 className="text-4xl font-bold pb-12 text-white">Pardot Implementation</h1>
        <p className="text-xl text-center py-10 text-white">
          Our B2B strategies excel across verticals, making your Pardot
          Implementation the most effective it can be.
        </p>
        <Card cards={cardsData} />
      </div>
    </div>
  );
};

export default Pardot;
