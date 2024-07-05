import React from "react";
import Card from "../ui-components/card/card";

const aboutData = {
  title: "The Cloud Is Our Expertise",
  description:
    "Our tailored solutions to customer experience with cloud-based CRM exceed industry standards and drive rapid growth. Fast-forward to success with our robust marketing solutions and integrate multiple clouds Seamlessly.",
  cardsData: [
    {
      title: "Our Story",
      description:
        "As our name suggests, we are a dedicated team of Salesforce tech experts with a passion for helping our customers thrive in the cloud. Our passion and expertise combines to bring the best solutions to you. We are women-owned and are part of the Pledge 1% campaign. We are dedicated to improving the world while we empower your company through digital transformation.",
      image: "/assets/story.png",
    },
    {
      title: "Our Approach",
      description:
        "Our agile approach identifies gaps and opportunities, including projecct progress metrics and milestones. We have a detailed end-to-end solution to help your project surpass your expectations on-time and on-budget. Our solutions are nimble, able to adjust to your needs while maintaining optimal performance.",
      image: "/assets/approach.png",
    },
    {
      title: "Why Cross Cloud Ops",
      description:
        "Cross Cloud Ops is a Salesforce Partner with 50+ developers and experts globally, garnering a perfect 5 star customer satisfactor rating. Our projects power 150+ million customers for our clients. We regularly beat competitor pricing and time-to-launch estimates. We have decades of experience and dozens of certifications.",
      image: "/assets/whyus.png",
    },
  ],
};
const AboutUs: React.FC = () => {
  return (
    <div className="container-common">
      <div className="flex flex-col items-center py-24">
        <h1 className="text-3xl xl:text-4xl  text-center font-bold text-white">{aboutData.title}</h1>
        <p className="text-xl text-center py-10 text-gray-500">{aboutData.description}</p>
        <Card cards={aboutData.cardsData} />
      </div>
    </div>
  );
};

export default AboutUs;
