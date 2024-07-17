import React from "react";
import Tabs from "../cloudsolutions/card";

const cloudData = {
  title:
    "Our primary goal is to solve complex business problems, and this theme is woven into our data analytics consulting approach.",
  description: (
    <>
      <p className="text-[18px] font-normal leading-6 text-white">
        Whether crafting your data strategy, building a data warehouse or
        designing a custom solution to meet your unique needs, our consultants
        go beyond building technology.
      </p>
      <br />
      <p className="text-[18px] font-normal leading-6 text-white">
        We take a holistic approach using data to solve business problems and
        capture opportunities. We look at the people, processes and technology
        surrounding data and analytics to deliver insights within the context of
        your business.
      </p>
      <br />
      <p className="text-[18px] font-normal leading-6 text-white">
        High-functioning data and analytics capabilities center around enabling
        the business to ask better questions – and get better answers – with
        consistency, a high degree of trust and timeliness.
      </p>
    </>
  ),
  imgUrl: (
    <img
      src={`${process.env.PUBLIC_URL}/assets/dataanalaytics.png`}
      alt="dataanalaytics"
      className="h-full"
    />
  ),
  cardData: [
    {
      id: 1,
      cardTitle: "Data Modernization",
      cardDesc: (
        <>
          <p>
            A modern data platform covers the entirety of the data ecosystem you
            need to support your evolving business. From Data Lakes, Lakehouses
            and Warehouses to Data Engineering and Governance, we can help you
            drive value out of your data in all of it – plus the tools and
            processes within.
          </p>
          <br />
          <p>
            Our framework allows for driving actionable insights from data
            generated and flowing at varying velocities using unbiased and
            greedy ingestion principles.
          </p>
          <br />
          <p>
            We employ contextual governance and data quality paradigms and
            enable consumption perspectives that combine fast atomic and slower
            harmonized and aggregated information.
          </p>
        </>
      ),
    },
    {
      id: 2,
      cardTitle: "Artificial Intelligence & Machine Learning",
      cardDesc: (
        <>
          <p>
            Our Artificial Intelligence (AI) team of seasoned data scientists
            work with you to identify business challenges where AI and machine
            learning (ML) capabilities can create a competitive advantage and
            resolve major business issues.
          </p>
          <br />
          <p>
            Our team helps you analyze your internal and external data assets to
            provide a greater return on investment and assist with AI/ML
            benefits realization plans.
          </p>
          <br />
          <p>
            We also help your organization leverage advanced analytics by
            providing operational and strategic efficiencies.
          </p>
        </>
      ),
    },
    {
      id: 3,
      cardTitle: "Data Strategy",
      cardDesc: (
        <>
          <p>
            We have a tried-and-true approach for executing strategies and
            roadmaps that helps translate visionary strategies into practical,
            pragmatic and actionable plans.
          </p>
          <br />
          <p>
            In the context of your business, we look at the people, processes
            and technology surrounding data and analytics to deliver insights
            when needed.
          </p>
          <br />
          <p>
            We also leverage value chain models to spur discussion and get ideas
            flowing to develop models that help us quickly understand what you
            have, as well as where you want to go.
          </p>
        </>
      ),
    },
  ],
};

const DataAnalaytics: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-24">
      <div className="w-full h-56 relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-60 opacity-60"
          src={`${process.env.PUBLIC_URL}/assets/services.mp4`}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="container-common">
          <h1 className="text-5xl font-bold text-white py-20">
            Data Analytics
          </h1>
        </div>
      </div>
      <div className="container-common py-12">
        <h2 className="text-[30px] font-bold text-white mb-6">
          {cloudData.title}
        </h2>
        <div className="flex justify-between">
          <div className="w-1/2">
            <div>{cloudData.description}</div>
          </div>
          <div className="w-1/2 pl-4">{cloudData.imgUrl}</div>
        </div>
        <div className="container-common py-12">
          <Tabs cards={cloudData.cardData} />
        </div>
      </div>
    </div>
  );
};

export default DataAnalaytics;
