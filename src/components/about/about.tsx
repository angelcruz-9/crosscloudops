import React from "react";
import Timeline from "./timeline";

const aboutData = {
  title: "The Cloud Is Our Expertise",
  description: (
    <p>Our tailored solutions to customer experience with cloud-based exceed industry standards and drive rapid growth. Fast-forward to success with our robust marketing solutions and integrate multiple clouds Seamlessly. <a href="/#salesforce" className="text-blue-700	">Learn More</a></p>
  ),
  cardsData: [
    {
      title: "Our Story",
      desc:
        "As our name suggests, we are a dedicated team of Salesforce tech experts with a passion for helping our customers thrive in the cloud. Our passion and expertise combine to bring the best solutions to you. We are women-owned and are part of the Pledge 1% campaign. We are dedicated to improving the world while we empower your company through digital transformation.",
      icon: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/story.png`}
          alt="Story"
        />
      ),
    },
    {
      title: "Our Approach",
      desc:
        "Our agile approach identifies gaps and opportunities, including project progress metrics and milestones. We have a detailed end-to-end solution to help your project surpass your expectations on-time and on-budget. Our solutions are nimble, able to adjust to your needs while maintaining optimal performance.",
      icon: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/approach.png`}
          alt="Approach"
        />
      ),
    },
    {
      title: "Why Cross Cloud Ops",
      desc:
        "Cross Cloud Ops is a Salesforce Partner with 50+ developers and experts globally, garnering a perfect 5-star customer satisfaction rating. Our projects power 150+ million customers for our clients. We regularly beat competitor pricing and time-to-launch estimates. We have decades of experience and dozens of certifications.",
      icon: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/whyus.png`}
          alt="Whyus"
        />
      ),
    },
  ],
};

const AboutUs: React.FC = () => {
  return (
    <div className="relative">
      <div className="container-common relative z-10">
        <div className="flex flex-col py-24">
          <h1 className="text-3xl xl:text-4xl text-center xl:text-left font-bold text-white">
            {aboutData.title}
          </h1>
          <p className="text-xl text-center xl:text-left py-10 w-full xl:w-2/3 text-gray-500">
            {aboutData.description}
          </p>
        </div>
      </div>
      {/* Pass 'timeline' prop instead of 'cards' */}
      <Timeline timeline={aboutData.cardsData} />
      <img
        src={`${process.env.PUBLIC_URL}/assets/circle.svg`}
        alt="Circle"
        className="absolute right-8 top-44 z-0 rotating-image hidden xl:block"
      />
    </div>
  );
};

export default AboutUs;
