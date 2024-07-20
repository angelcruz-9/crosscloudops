import React from "react";
import Card from "../../ui-components/card/card";

const cardsData = [
    {
        title: "Einstein Analytics",
        description: "Directly from your Salesforce Platform, Einstein Analytics allows you to explore all of your data quickly and easily. Manage your datasets, query data and customize dashboards. Templates in this tool are upgrade and customizable to get the perfect design for your dashboard. Wizards are easy to build widgets that summarize your data. You’ll love these interactive widgets that answer your questions without leaving the dashboard. Layout Builder optimizes your dashboards for different devices",
        image: "/assets/analytics.png"
    },
    {
        title: "Tableau",
        description: "A deeply integrated tool with Salesforce, Tableau’s mission is to be simple yet powerful. As the world’s leading data analytics solution, Tableau is flexible and scalable – designed to grow as you grow. Blend Salesforce data from across your platform to gain the full story through the data. ",
        image: "/assets/tabulea.png"
    },
    {
        title: "Datorama",
        description: "A powerful Engine for your Data Visualization and AI Insights. A seamless Integration with any data across Salesforce eco System that will help you visualize the business processes and operations at a 30 thousand feet view to Granular drill downs. ",
        image: "/assets/data.png"
    }
]

const SalesForce: React.FC = () => {
  return (
    <div className="px-4 xl:px-12 relative overflow-hidden">
      <div className="bg-sales-opacity"></div>
      <div className="flex flex-col relative items-center py-8 xl:py-16">
        <h1 className="text-[32px] xl:text-[40px] text-left md:text-center font-bold text-white pb-12">Salesforce Integration</h1>
        <Card cards={cardsData} />
      </div>
    </div>
  );
};

export default SalesForce;
