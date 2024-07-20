import React from "react";
import { FaCheck } from "react-icons/fa";
import Tabs from "../cloudsolutions/card";

const outSourceData = {
  title:
    "As our expanding global marketplace continues to create competition for skilled resources and pressures for companies to do more with less, it is no wonder why IT executives are turning to reliable outsourcing partners for a competitive advantage.",
  description: (
    <>
      <p className="text-lg leading-6 text-white">
        Many firms offer outsourcing services, but very few do the “right thing”
        for clients every time. Our outsourcing solutions drive higher levels of
        performance, eliminate worry regarding resource continuity and lower IT
        costs.
      </p>
      <br />
      <p className="text-lg leading-6 text-white">
        We merge our seasoned professionals and management best practices to
        create a flexible, scalable and global delivery model.
      </p>
      <br />
      <p className="text-lg leading-6 text-white">
        We combine client-site, onshore and offshore delivery capabilities to
        drive true business value. Whether we’re supporting new business
        strategies or enhancing legacy applications, our clients can have
        confidence that their critical business applications are in good hands.
      </p>
    </>
  ),
  imgUrl: (
    <img
      src={`${process.env.PUBLIC_URL}/assets/outsourcing.png`}
      alt="outsourcing"
      className="h-full"
    />
  ),
  outsourceSubTitle: "Outsourcing Delivery Framework",
  outsourceDescription: (
    <>
      <p className="leading-6 text-white">
        Our outsourcing experts work with teams across our company such as
        Agile, Enterprise Collaboration, Mobile App Development, and Cloud
        Computing to help clients plan, develop and deploy custom or packaged
        business solutions.
      </p>
      <br />
      <p className=" leading-6 text-white">
        We realize the importance of onsite teams working directly with your
        team. In addition to fulfilling this need, we can also use our Solution
        Center and offshore teams for industrialized development, infrastructure
        and processes.
      </p>
    </>
  ),
  outsourceItemTitle: (
    <p className=" leading-6 text-white">We provide:</p>
  ),
  outsourceItems: (
    <ul className="pt-4">
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Proven methodologies and certified resources
      </li>
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Global delivery options: a combination of client-site, onshore and
        offshore
      </li>
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Custom or packaged software, mobile, business intelligence, portal and
        cloud delivery teams
      </li>
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Cloud-ready Proof of Concept (POC) capability
      </li>
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Tools, templates, infrastructure and other jump-start project launch
        accelerators
      </li>
    </ul>
  ),
  advisorySubTitle: "Outsourcing Advisory Capabilities",
  advisoryDescription: (
    <>
      <p className="text-lg leading-6 text-white">
        Our delivery capabilities, combined with low turnover, bring top talent
        continuity to clients at a competitive price point.
      </p>
    </>
  ),
  advisoryItemTitle: (
    <p className="text-lg leading-6 text-white">
      We provide the following services:
    </p>
  ),
  advisoryItems: (
    <ul className="pt-4">
      <li className="text-lg flex  leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Business Case Development
      </li>
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Application Outsourcing
      </li>
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Onsite, Offsite, and Offshore Development
      </li>
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Disaster Recovery and Business Continuity Planning
      </li>
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Help and Service Desk (ITIL / ITSM)
      </li>
    </ul>
  ),
  managementSubTitle: "Outsourcing Management and Maintenance Needs",
  managementDescription: (
    <>
      <p className="text-lg leading-6 text-white">
        IT executives may find themselves in a situation where the knowledge of
        a particular business application is retained by a single resource,
        creating a single point of failure in terms of organizational succession
        planning. Executives may also find that a bulk of application
        development is focused on supporting business applications that aren’t
        necessarily creating a competitive advantage for the company.
      </p>
      <br />
      <p className="text-lg leading-6 text-white pb-4">
        Our outsourcing solutions can help address these concerns while reducing
        the total cost of ownership in supporting these core business
        applications. We achieve this by providing the following:
      </p>
    </>
  ),
  cardData: [
    {
      id: 1,
      cardTitle: "Level 2 and 3 Application Support",
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/data-conversion.png`}
          alt="data-conversion"
        />
      ),
      cardSubItems: [
        {
          text: "Fractional support staffing",
        },
        {
          text: "Legacy application support services",
        },
        {
          text: "Custom or packaged solutions",
        },
        {
          text: "Industry best practice Service Level Agreements (SLAs)",
        },
        {
          text: "24x7x365 call center support",
        },
      ],
    },
    {
      id: 2,
      cardTitle: "Software Quality Assurance",
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/quality.png`}
          alt="quality"
        />
      ),
      cardSubItems: [
        {
          text: "Manual and automated testing assistance",
        },
        {
          text: "Performance and load testing",
        },
        {
          text: "Our Delivery Excellence Program (risk management)",
        },
      ],
    },
    {
      id: 3,
      cardTitle: "Management and Maintenance Services",
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/data-management.png`}
          alt="data-management"
        />
      ),
      cardSubItems: [
        {
          text: "Application and Database management",
        },
        {
          text: "System performance monitoring and reporting",
        },
        {
          text: "Database and application upgrade services",
        },
        {
          text: "Application patching",
        },
        {
          text: "Application security management",
        },
      ],
    },
  ],
};

const OutSourcing: React.FC = () => {
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
          <h1 className="text-3xl xl:text-5xl relative z-10 pt-44 font-bold text-white py-20">Outsourcing</h1>
        </div>
      </div>
      <div className="overflow-hidden relative w-full h-full">
        <div className="bg-outsourcing-opacity"></div>
      <div className="container-common relative z-10 py-12">
        <h2 className="text-[18px] font-bold text-white mb-6">
          {outSourceData.title}
        </h2>
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="w-full xl:w-1/2">
            <div>{outSourceData.description}</div>
          </div>
          <div className="w-full xl:w-1/2 xl:pl-4 pt-4 xl:pt-0">{outSourceData.imgUrl}</div>
        </div>
        <div className="container-common py-12">
          <h1 className="text-[24px] xl:text-[30px] pb-2 text-white border-b border-gray-600">
            {outSourceData.outsourceSubTitle}
          </h1>
          <p className="py-4 text-lg text-white">
            {outSourceData.outsourceDescription}
          </p>
          <p className="text-lg text-white">
            {outSourceData.outsourceItemTitle}
          </p>
          {outSourceData.outsourceItems}
          <h1 className="text-[24px] xl:text-[30px] text-white pt-6 pb-4 mb-4 border-b border-gray-600">
            {outSourceData.advisorySubTitle}
          </h1>
          {outSourceData.advisoryDescription}
          <p className="text-lg pt-4 text-white">
            {outSourceData.advisoryItemTitle}
          </p>
          {outSourceData.advisoryItems}
          <h1 className="text-[24px] xl:text-[30px] text-white pt-6 pb-4 mb-4 border-b border-gray-600">
            {outSourceData.managementSubTitle}
          </h1>
          {outSourceData.managementDescription}
          <Tabs cards={outSourceData.cardData} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default OutSourcing;
