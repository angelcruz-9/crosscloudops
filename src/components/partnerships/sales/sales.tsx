import React from "react";
import CarouselCard from "../../ui-components/caroselCard/caroselCard";
import { FiCheckCircle } from "react-icons/fi";

const cardData = [
  {
    title: "Sales Operation",
    description:
      "We help you with the implementation, improvement, and adoption of the world’s #1 CRM application. Together, our consultants will build out your organization’s processes, including:",
    description1:
      "With streamlined processes managed in one central place, your staff will spend less time on administration and more time closing deals. For company managers and leaders, Sales Cloud provides visibility and insight into team performance — making real-time forecasting, opportunity management, and coaching a breeze.",
    image: "/assets/sales.png",
    subItems: [
      { icon: FiCheckCircle, text: "Lead & Opportunity Management" },
      { icon: FiCheckCircle, text: "Reports and Dashboards" },
      { icon: FiCheckCircle, text: "Forecasting" },
      { icon: FiCheckCircle, text: "Territory Management" },
      { icon: FiCheckCircle, text: "Sales Collaboration" },
      { icon: FiCheckCircle, text: "Sales Performance Management" },
      { icon: FiCheckCircle, text: "Sales Data Enrichment / Data.com" },
      { icon: FiCheckCircle, text: "Workflow & Approvals" },
      { icon: FiCheckCircle, text: "Inside Sales Consol" },
      { icon: FiCheckCircle, text: "Email Integration & Mobile CRM" },
    ],
  },
  {
    title: "Cloud Services",
    description:
      "Service Cloud is the premiere cloud-based solution for call center, CRM, and help desk management. As your partner and consultant, we will work with you to evaluate, implement, and enhance all aspects of Service Cloud, including:",
    image: "/assets/cloud.png",
    subItems: [
      { icon: FiCheckCircle, text: "Salesforce Live Agent for web chat" },
      { icon: FiCheckCircle, text: "Email-to-Case" },
      { icon: FiCheckCircle, text: "Web-to-Case" },
      { icon: FiCheckCircle, text: "Web-to-Case" },
      { icon: FiCheckCircle, text: "Omni-Channel Routing" },
      { icon: FiCheckCircle, text: "Field Service Lightning" },
      { icon: FiCheckCircle, text: "Entitlements & SLAs" },
      { icon: FiCheckCircle, text: "Service Cloud Knowledge" },
      { icon: FiCheckCircle, text: "Social Customer Service Pro" },
      { icon: FiCheckCircle, text: "Einstein Chat Bots" },
    ],
  },
];

const Sales: React.FC = () => {
  return (
    <div className="bg-neutral-100">
      <div className="container-common">
        <div className="flex flex-col items-center py-24">
          <h1 className="text-4xl font-bold tracking-wider">
            A 5-Star Salesforce Partner
          </h1>
          <h3 className="text-2xl font-normal py-4">
            We are Salesforce Integration. Reimagined.
          </h3>
          <p className="text-xl text-center py-4">
            Cross Cloud Ops is your multi-cloud, multi-certified Salesforce
            Partner. Salesforce' Sales Cloud gives you all you need to connect
            with customers—from real time data feeds to intuitive deals tracker,
            all in one place and available anytime, from any device.
          </p>
          <p className="text-xl text-center py-4 pb-12">
            Our Salesforce Marketing Cloud integrations have helped increase
            customer interactions via multiple channels of our clients by nearly
            33%. Our clients have a 360-degree, near real-time view of the
            customer persona. We've helped our clients decrease service desk
            cases by 30%. We enable our clients to make Decisions 35% faster,
            backed by near real-time data.
          </p>
          <CarouselCard cards={cardData} />
        </div>
      </div>
    </div>
  );
};

export default Sales;
