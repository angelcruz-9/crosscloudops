import React from "react";
import { motion } from "framer-motion";
import SalesCard from "./salesCard";


const salesData = {
  title: "A 5-Star Salesforce Partner",
  subTitle: "We are Salesforce Integration. Reimagined.",
  description1:
    "Cross Cloud Ops is your multi-cloud, multi-certified Salesforce Partner. Salesforce' Sales Cloud gives you all you need to connect with customers—from real time data feeds to intuitive deals tracker, all in one place and available anytime, from any device.",
  description2:
    "Our Salesforce Marketing Cloud integrations have helped increase customer interactions via multiple channels of our clients by nearly 33%. Our clients have a 360-degree, near real-time view of the customer persona. We've helped our clients decrease service desk cases by 30%. We enable our clients to make Decisions 35% faster, backed by near real-time data.",
  cardData: [
    {
      title: "Sales Operation",
      description:
        "We help you with the implementation, improvement, and adoption of the world’s #1 CRM application. Together, our consultants will build out your organization’s processes, including:",
      description1:
        "With streamlined processes managed in one central place, your staff will spend less time on administration and more time closing deals. For company managers and leaders, Sales Cloud provides visibility and insight into team performance — making real-time forecasting, opportunity management, and coaching a breeze.",
      subItems: [
        { text: "Lead & Opportunity Management" },
        { text: "Reports and Dashboards" },
        { text: "Forecasting" },
        { text: "Territory Management" },
        { text: "Sales Collaboration" },
        { text: "Sales Performance Management" },
        { text: "Sales Data Enrichment / Data.com" },
        { text: "Workflow & Approvals" },
        { text: "Inside Sales Consol" },
        { text: "Email Integration & Mobile CRM" },
      ],
    },
    {
      title: "Cloud Services",
      description:
        "Service Cloud is the premiere cloud-based solution for call center, CRM, and help desk management. As your partner and consultant, we will work with you to evaluate, implement, and enhance all aspects of Service Cloud, including:",
      subItems: [
        { text: "Salesforce Live Agent for web chat" },
        { text: "Email-to-Case" },
        { text: "Web-to-Case" },
        { text: "Omni-Channel Routing" },
        { text: "Field Service Lightning" },
        { text: "Entitlements & SLAs" },
        { text: "Service Cloud Knowledge" },
        { text: "Social Customer Service Pro" },
        { text: "Einstein Chat Bots" },
      ],
    },
  ],
};

const FuturisticListView: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">{salesData.title}</h1>
        <h3 className="text-2xl text-white mb-4">{salesData.subTitle}</h3>
        <p className="text-lg text-gray-400 mb-8">{salesData.description1}</p>
        <p className="text-lg text-gray-400 mb-12">{salesData.description2}</p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {salesData.cardData.map((card, index) => (
          <SalesCard card={card} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default FuturisticListView;
