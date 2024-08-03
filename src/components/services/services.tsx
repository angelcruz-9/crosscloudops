import React from "react";
import CardImage from "../ui-components/card-image/cardImage";

const cardsData = [
  {
    imageSrc: "/assets/service1.jpeg",
    title: "Digital Marketing",
    description:
      "Social media marketing (SMM) is a form of internet marketing that involves creating and sharing advertising content on social media networks",
    linkUrl: "/contactus",
    linkText: "Learn more",
  },
  {
    imageSrc: "/assets/service2.jpeg",
    title: "Web Portal Development & Solutions",
    description:
      "When a customer is looking for a new product or service in your area, they usually begin their search online.",
    linkUrl: "/contactus",
    linkText: "Learn more",
  },
  {
    imageSrc: "/assets/service3.jpg",
    title: "Mobile Apps Development",
    description:
      "CrossCloudOps helps in shaping companies by integrating strategy, creativity, analytics, and technical expertise. In coordination with",
    linkUrl: "/contactus",
    linkText: "Learn more",
  },
  {
    imageSrc: "/assets/service4.jpeg",
    title: "Application Development",
    description:
      "All businesses, regardless of their size, have one thing in common. They are unique. No business anywhere in the world runs exactly",
    linkUrl: "/contactus",
    linkText: "Learn more",
  },
  {
    imageSrc: "/assets/service5.jpeg",
    title: "IT Consulting",
    description:
      "CrossCloudOps Consulting is a full-service IT Consulting Firm specializing in IT project management, systems.",
    linkUrl: "/contactus",
    linkText: "Learn more",
  },
];

const Services: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-96 relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-60 opacity-60"
          src={`${process.env.PUBLIC_URL}/assets/services.mp4`}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="container-common">
          <h1 className="text-3xl xl:text-5xl relative z-10 pt-44 font-bold text-white py-20">
            Services
          </h1>
        </div>
      </div>
      <div className="overflow-hidden relative w-full h-full">
        <div className="bg-services-opacity"></div>
        <div className="container-common relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
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
    </div>
  );
};

export default Services;
