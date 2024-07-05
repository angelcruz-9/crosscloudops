import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

interface SubItem {
  text: string;
}

interface CardData {
  title: string;
  description: string;
  description1?: string;
  subItems: SubItem[];
}

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

const SalesCard: React.FC<{ card: CardData }> = ({ card }) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 w-full max-w-4xl"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">{card.title}</h2>
      <p className="text-lg text-white mb-4">{card.description}</p>
      {card.description1 && <p className="text-lg text-white mb-4">{card.description1}</p>}
      <ul className="list-none space-y-2">
        {card.subItems.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center text-lg text-white"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <FiCheckCircle className="text-green-500 mr-2" />
            {item.text}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Sales: React.FC = () => {
  return (
    <div className="container-common bg-[#00040f]">
      <div className="flex flex-col items-center py-24">
        <h1 className="text-4xl text-white font-bold text-center xl:tracking-wider">
          {salesData.title}
        </h1>
        <h3 className="text-2xl text-white text-center font-normal py-4">
          {salesData.subTitle}
        </h3>
        <p className="text-xl text-white text-center py-4">
          {salesData.description1}
        </p>
        <p className="text-xl text-white text-center py-4 pb-12">
          {salesData.description2}
        </p>
        <div className="flex flex-col items-center space-y-8">
          {salesData.cardData.map((card, index) => (
            <SalesCard card={card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
