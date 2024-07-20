import React from "react";
import Tabs from "../cloudsolutions/card";

const crmData = {
  title:
    "Are your employees frustrated because of inefficient, non-integrated, and confusing applications that only offer fragmented views of sales opportunities and customer interactions?",
  description: (
    <>
      <p className="text-lg leading-6 text-white">
        Today’s robust Customer Relationship Management (CRM) platforms like
        Microsoft Dynamics CE, NetSuite, and Salesforce provide the integrated
        360-degree view of the prospect and customer you need. With a CRM
        businesses can track and manage customer interactions at every stage of
        the customer journey including lead generation, sales, and customer
        support.
      </p>
      <br />
      <p className="text-lg leading-6 text-white">
        Implementation success with these platforms requires a comprehensive
        approach. Marvi Infotech Consulting has CRM consultants that can handle
        any CRM project from defining a strategy and roadmap, to implementation,
        deploying new features, and ongoing support.
      </p>
    </>
  ),
  imgUrl: (
    <img
      src={`${process.env.PUBLIC_URL}/assets/crm.png`}
      alt="crm"
      className="h-full"
    />
  ),
  crmTitle: "Our CRM Services",
  cardData: [
    {
      id: 1,
      cardTitle: "Advisory Services",
      cardDesc: (
        <>
          <p>
            Practical advice based on our CRM consulting team’s years of
            hands-on experience.
          </p>
          <p>Our services include:</p>
        </>
      ),
      cardSubItems: [
        {
          text: "CRM strategy",
        },
        {
          text: "Software selection",
        },
        {
          text: "Assessments and roadmap creation",
        },
        {
          text: "Business case development",
        },
        {
          text: "Migration planning",
        },
        {
          text: "Implementation health check",
        },
        {
          text: "License sales",
        },
      ],
    },
    {
      id: 2,
      cardTitle: "Implementation",
      cardDesc: (
        <>
          <p>Implementation requires technical expertise.</p>
          <p>Our services include:</p>
        </>
      ),
      cardSubItems: [
        {
          text: "Configuration",
        },
        {
          text: "Platform custom application development",
        },
        {
          text: "Version upgrades",
        },
        {
          text: "New feature rollout",
        },
        {
          text: "Integrations",
        },
        {
          text: "Migrations",
        },
        {
          text: "Analytics and reporting",
        },
      ],
    },
    {
      id: 3,
      cardTitle: "Managed Services",
      cardDesc: (
        <>
          <p>
            We’re excited to design the right long-term support solution that
            meets your specific needs.
          </p>
          <p>Our managed services support:</p>
          <br />
        </>
      ),
      cardSubItems: [
        {
          text: "Staff augmentation",
        },
        {
          text: "Administrators",
        },
        {
          text: "Functional and technical support",
        },
        {
          text: "Training",
        },
        {
          text: "Tier 1 and tier 2 technical support",
        },
      ],
    },
  ],
};

const CRMConsulting: React.FC = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden">
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
            CRM Consulting
          </h1>
        </div>
      </div>
      <div className="relative overflow-hidden w-full h-full">
      <div className="bg-crm-opacity"></div>
      <div className="container-common relative z-10 py-12">
        <h2 className="text-[18px] font-bold text-white mb-6">
          {crmData.title}
        </h2>
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="w-full xl:w-1/2">
            <div>{crmData.description}</div>
          </div>
          <div className="w-full xl:w-1/2 xl:pl-4 pt-4 xl:pt-0">{crmData.imgUrl}</div>
        </div>
        <div className="container-common py-12">
          <h1 className="text-[24px] xl:text-[30px] text-white pb-2 mb-4 border-b border-gray-600">
            {crmData.crmTitle}
          </h1>
          <Tabs cards={crmData.cardData} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default CRMConsulting;
