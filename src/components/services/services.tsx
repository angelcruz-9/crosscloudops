import React from "react";
import CardImage from "../ui-components/card-image/cardImage";

const cardsData = [
  {
    imageSrc: "/assets/service1.jpeg",
    title: "Digital Marketing",
    description:
      "Social media marketing (SMM) is a form of internet marketing that involves creating and sharing advertising content on social media networks",
    linkUrl: "#",
    linkText: "Learn more",
  },
  {
    imageSrc: "/assets/service2.jpeg",
    title: "Web Portal Development & Solutions",
    description:
      "When a customer is looking for a new product or service in your area, they usually begin their search online.",
    linkUrl: "#",
    linkText: "Learn more",
  },
  {
    imageSrc: "/assets/service3.jpg",
    title: "Mobile Apps Development",
    description:
      "CrossCloudOps helps in shaping companies by integrating strategy, creativity, analytics, and technical expertise. In coordination with",
    linkUrl: "#",
    linkText: "Learn more",
  },
  {
    imageSrc: "/assets/service4.jpeg",
    title: "Application Development",
    description:
      "All businesses, regardless of their size, have one thing in common. They are unique. No business anywhere in the world runs exactly",
    linkUrl: "#",
    linkText: "Learn more",
  },
  {
    imageSrc: "/assets/service5.jpeg",
    title: "IT Consulting",
    description:
      "CrossCloudOps Consulting is a full-service IT Consulting Firm specializing in IT project management, systems.",
    linkUrl: "#",
    linkText: "Learn more",
  },
];

const Services: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-24">
      <div className="w-full h-52 bg-gradient-to-r from-purple-300 to-indigo-400">
        <div className="container-common">
          <h1 className="text-4xl font-bold text-black py-20">Services</h1>
        </div>
      </div>
      <div className="container-common">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {cardsData.map((item, index) => (
            <CardImage
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              linkUrl={item.linkUrl}
              linkText={item.linkText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
