import React from "react";
import Tabs from "./card";

const cloudData = {
  title:
    "Cloud is the infrastructure and accelerator of Modern Software Delivery.",
  description: (
    <>
      <p className="text-lg leading-6 text-white">
        Cloud is the essential element to rapid innovation and faster
        development of business-critical functionality.
      </p>
      <br />
      <p className="text-lg leading-6 text-white">
        We focus on Amazon Web Services (AWS) and Microsoft Azure and can help
        you with migrations, application and micro service development,
        infrastructure, and workload optimization.
      </p>
      <br />
      <p className="text-lg leading-6 text-white">
        Our cloud solutions optimize your cloud environment, ensuring that it is
        much more than “hardware somewhere else.”
      </p>
    </>
  ),
  imgUrl: (
    <img
      src={`${process.env.PUBLIC_URL}/assets/cloud-solutions.png`}
      alt="cloudsolutions"
      className="h-full"
    />
  ),
  cardData: [
    {
      id: 1,
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/strategy.png`}
          alt="strategy"
          width={200}
          height={200}
        />
      ),
      cardTitle: "Strategy",
      cardDesc:
        "Cloud strategy documents that outline key business drivers, business cases and strategies that help adopt cloud solutions as an operating model while aligning cloud strategy with business strategy.",
      cardSubItems: [
        {
          text: "Cloud Governance/Risk/Compliance (GRC) framework",
        },
        {
          text: "Cloud Center of Excellence (CoE)",
        },
        {
          text: "Cloud adoption plan",
        },
      ],
    },
    {
      id: 2,
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/migration.png`}
          alt="migration"
        />
      ),
      cardTitle: "Migration",
      cardDesc:
        "Azure and AWS cloud computing services are delivered by our team of Marvi Infotech Certified Professional Architects. They determine which applications are the best candidates for migration, and by which migration strategy to meet time and budget requirements.",
      cardSubItems: [
        {
          text: "Application rationalization and migration prioritization",
        },
        {
          text: "Multi-cloud and hybrid architectures",
        },
        {
          text: "Rehosting (“Lift and Shift”)",
        },
        {
          text: "Platforming",
        },
        {
          text: "Refactoring",
        },
      ],
    },
    {
      id: 3,
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/cloud-native.png`}
          alt="Cloud Native"
        />
      ),
      cardTitle: "Cloud-Native Development",
      cardDesc:
        "Applications refactored with cloud-native technologies. Our team of certified application developers and infrastructure architects help realize increased scalability, flexibility and cost savings. ",
      cardSubItems: [
        {
          text: "Containerization, serverless and other cloud-optimized technologies",
        },
        {
          text: "Cost optimization",
        },
        {
          text: "DevOps",
        },
        {
          text: "Managed services",
        },
      ],
    },
    {
      id: 4,
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/innovation.png`}
          alt="Innovation"
        />
      ),
      cardTitle: "Innovation",
      cardDesc:
        "Cloud technologies that unlock innovation in ways that on-premises technologies never could, or ever will – from proof of concept to testing, scaling and deployment.",
      cardSubItems: [
        {
          text: "Rapid prototyping",
        },
        {
          text: "Blockchain",
        },
        {
          text: "Internet of Things (IoT)",
        },
        {
          text: "Augmented reality/virtual reality",
        },
        {
          text: "Next-generation technologies",
        },
      ],
    },
  ],
};

const CloudSolutions: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center">
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
            Cloud Solutions(AWS,Azure)
          </h1>
        </div>
      </div>
      <div className="overflow-hidden w-full h-full relative">
        <div className="bg-cloud-opacity"></div>
        <div className="container-common relative py-12 z-10">
          <div className="flex flex-col xl:flex-row justify-between">
            <div className="w-full xl:w-1/2">
              <h2 className="text-[18px] font-bold text-white mb-6">
                {cloudData.title}
              </h2>
              <div>{cloudData.description}</div>
            </div>
            <div className="w-full xl:w-1/2 xl:pl-4 pt-4 xl:pt-0">{cloudData.imgUrl}</div>
          </div>
          <div className="container-common py-12">
            <Tabs cards={cloudData.cardData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSolutions;
