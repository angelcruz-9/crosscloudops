import React from "react";
import Tabs from "../cloudsolutions/card";
import { FaCheck } from "react-icons/fa";

const strategyData = {
  title:
    "No company or government today can effectively lead in its market without a clear understanding of IT’s role and a strategy for how to best leverage technology.",
  description: (
    <>
      <p className="text-lg leading-6 text-white">
        As with finance and marketing, IT must enable business-necessary
        capabilities and be a well-thought-out part of any strategic effort.
      </p>
      <br />
      <p className="text-lg leading-6 text-white">
        Our experienced professionals work with leadership and IT teams to
        identify the roles of technology in a business strategy, the
        capabilities IT can provide and how the IT organization needs to be
        managed to deliver its commitments.
      </p>
      <br />
      <p className="text-lg leading-6 text-white">
        We then work with clients to understand the ROI that can be leveraged
        from current and leading technologies.
      </p>
    </>
  ),
  imgUrl: (
    <img
      src={`${process.env.PUBLIC_URL}/assets/it-strategy.png`}
      alt="it-strategy"
      className="h-full"
    />
  ),
  strategyTitle: "Our IT Strategy Services",
  strategyDescription: (
    <p className="text-lg leading-6 text-white py-4">
      Our IT Strategy Services team helps clients develop their IT capabilities
      into engines of business value. We do this through an approach that is
      iterative, collaborative, decision-driven and execution-focused.
    </p>
  ),
  cardData: [
    {
      id: 1,
      cardTitle: "Foundation Capabilities",
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/foundation.png`}
          alt="foundation"
        />
      ),
      cardSubItems: [
        {
          text: "IT Strategy Development",
        },
        {
          text: "Business Capability Assessment",
        },
        {
          text: "Enterprise Architecture",
        },
        {
          text: "Application Rationalization",
        },
        {
          text: "Data Management",
        },
        {
          text: "Digital Security Assessment",
        },
      ],
    },
    {
      id: 2,
      cardTitle: "Operations Management",
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/operations.png`}
          alt="operations"
        />
      ),
      cardSubItems: [
        {
          text: "Enterprise PMO",
        },
        {
          text: "Service Assessment and Design",
        },
        {
          text: "Operation Resilience",
        },
        {
          text: "Business Continuity Planning",
        },
        {
          text: "Cyber Security Operations",
        },
        {
          text: "Strategic Supplier Management",
        },
        {
          text: "IT Governance Design",
        },
        {
          text: "Integration Operations",
        },
      ],
    },
    {
      id: 3,
      cardTitle: "Digital Transformation",
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/digital-it.png`}
          alt="digital-it"
        />
      ),
      cardSubItems: [
        {
          text: "Business Capability Transformation",
        },
        {
          text: "Digital Innovation",
        },
        {
          text: "Change Management Design",
        },
        {
          text: "Data Strategy Development",
        },
        {
          text: "Business Intelligence Design",
        },
        {
          text: "Advanced Analytics (AI/ML)",
        },
        {
          text: "Software Selection Service",
        },
        {
          text: "Cloud Migration Strategy and Platform Selection",
        },
        {
          text: "DevOps",
        },
      ],
    },
    {
      id: 4,
      cardTitle: "Leadership",
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/leadership.png`}
          alt="leadership"
        />
      ),
      cardSubItems: [
        {
          text: "CIO Mentorship",
        },
        {
          text: "Interim CIO",
        },
        {
          text: "Run as a Business",
        },
        {
          text: "Organization Design",
        },
        {
          text: "Leadership Development",
        },
      ],
    },
  ],
  genCardData: [
    {
      id: 1,
      cardTitle: "Business Capability Gap Assessment",
      cardSubItems: [
        {
          text: "Opportunity Assessment",
        },
        {
          text: "Pain Point Identification",
        },
        {
          text: "Benchmarking",
        },
      ],
    },
    {
      id: 2,
      cardTitle: "Transformation Proposals",
      cardSubItems: [
        {
          text: "Ideation and Innovation",
        },
        {
          text: "Project Proposals",
        },
        {
          text: "Service Alignment",
        },
      ],
    },
    {
      id: 3,
      cardTitle: "Proposal Benefits Assessment",
      cardSubItems: [
        {
          text: "Portfolio Assessment",
        },
        {
          text: "Costing & Staffing Estimation",
        },
        {
          text: "Prioritization & Sequencing",
        },
        {
          text: "Roadmap Creation",
        },
      ],
    },
    {
      id: 4,
      cardTitle: "Business Proposal Selection",
      cardSubItems: [
        {
          text: "Joint Business Planning",
        },
        {
          text: "Business Portfolio New Project Alignment",
        },
        {
          text: "Business Benefits Financial Alignment",
        },
      ],
    },
    {
      id: 5,
      cardTitle: "Project Establishment",
      cardSubItems: [
        {
          text: "Firm Project Estimation",
        },
        {
          text: "Milestone Development",
        },
        {
          text: "Project Launch Approval",
        },
      ],
    },
    {
      id: 6,
      cardTitle: "Project Execution",
      cardSubItems: [
        {
          text: "Project Staffing",
        },
        {
          text: "Development & Testing",
        },
        {
          text: "Technology",
        },
      ],
    },
    {
      id: 7,
      cardTitle: "Communication Strategy",
      cardSubItems: [
        {
          text: "Service Communication",
        },
        {
          text: "Stakeholder Communication",
        },
      ],
    },
    {
      id: 8,
      cardTitle: "Benefits Realization",
      cardSubItems: [
        {
          text: "Project Closure",
        },
        {
          text: "Financial Alignment on Benefits Delivery",
        },
      ],
    },
    {
      id: 9,
      cardTitle: "Operations Management",
      cardSubItems: [
        {
          text: "Operation Planning & Control",
        },
        {
          text: "Incident Management",
        },
        {
          text: "Problem Management",
        },
      ],
    },
    {
      id: 10,
      cardTitle: "Benefits Realization",
      cardSubItems: [
        {
          text: "Understand Business Strategy",
        },
        {
          text: "Create Key Business Capability Map",
        },
        {
          text: "Business Capability Strategies",
        },
      ],
    },
  ],
};

const ITStrategy: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden items-center">
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
          <h1 className="text-3xl xl:text-5xl pt-44 z-10 relative font-bold text-white py-20">
            IT Strategy
          </h1>
        </div>
      </div>
      <div className="overflow-hidden relative w-full h-full">
      <div className="bg-strategy-opacity"></div>
      <div className="container-common relative z-10 py-12">
        <h2 className="text-[18px] font-bold text-white mb-6">
          {strategyData.title}
        </h2>
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="w-full xl:w-1/2">
            <div>{strategyData.description}</div>
          </div>
          <div className="w-full xl:w-1/2 xl:pl-4 pt-4 xl:pt-0">{strategyData.imgUrl}</div>
        </div>
        <div className="container-common py-12">
          <h1 className="text-[24px] xl:text-[30px] text-white pb-2 border-b border-gray-600">
            {strategyData.strategyTitle}
          </h1>
          {strategyData.strategyDescription}
          <Tabs cards={strategyData.cardData} />
          <div className="py-8 flex items-center justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/it-development.png`}
              alt="it-development"
            />
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 justify-between">
          {strategyData.genCardData.length > 0 && strategyData.genCardData.map((item,index) => (
            <div key={index} className='mr-2 p-4 bg-slate-200 rounded-lg'>
                <h2 className="rounded-full bg-slate-800 text-white p-6 w-8 h-8 flex justify-center items-center text-[20px] xl:text-[28px]">{index}</h2>
                <h3 className="text-2xl py-4">{item.cardTitle}</h3>
                {item.cardSubItems.map((list,index) => (
                    <div key={index} className='flex pb-2 text-md'>
                        <FaCheck className="text-green-500 mr-2 mt-1" />
                        {list.text}
                    </div>
                ))}
            </div>
          ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ITStrategy;
