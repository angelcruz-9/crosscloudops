import React from "react";
import { FaCheck } from "react-icons/fa";
import Tabs from "../cloudsolutions/card";

const devopsData = {
  title:
    "Our DevOps practices can modernize, integrate, automate, or manage your pipeline.",
  description: (
    <>
      <p className="text-lg leading-6 text-white">
        Using our integrated Modern Software Delivery (MSD) approach, we empower
        you to deliver high-quality software rapidly, reliably and continuously
        through:
      </p>
      <br />
      <ul>
        <li className="text-lg flex leading-6 text-white">
          <FaCheck className="text-green-500 mr-2 mt-1" /> Continuous integration and
          delivery (CI/CD) pipelines that increase software delivery speed and
          quality.
        </li>
        <br />
        <li className="text-lg flex leading-6 text-white">
          <FaCheck className="text-green-500 mr-2 mt-1" /> Cloud-first strategies
          that enable teams to seamlessly support, scale and manage technology.
        </li>
        <br />
        <li className="text-lg flex leading-6 text-white">
          <FaCheck className="text-green-500 mr-2 mt-1" /> Modern architectural
          approaches, using concepts of modularity and containerization, that
          yield savings by allowing development to occur in smaller, isolated
          areas of functionality.
        </li>
      </ul>
    </>
  ),
  imgUrl: (
    <img
      src={`${process.env.PUBLIC_URL}/assets/devops.png`}
      alt="devops"
      className="h-full"
    />
  ),
  devopsSubDesc: (
    <>
      <p className="text-lg leading-6 text-white pt-8">
        Our modern practice delivers powerful DevOps benefits. Our approach
        gives leaders the agility they need to scale or pivot their software
        quickly to meet constantly changing business demands, freeing your
        delivery pipeline of silos and out-of-date processes, archaic
        engineering practices, and inadequate tools.
      </p>
      <br />
      <p className="text-lg leading-6 text-white">
        We accomplish this through a focus on delivery flow via automation
        throughout the DevOps lifecycle. While Agile management processes can
        improve software development, traditional pipelines often depend on
        manual triggers to move developing code along.
      </p>
      <br />
      <p className="text-lg leading-6 text-white">
        In our DevOps model, we focus on making code changes smaller and less
        risky, so they can move smoothly on their own. This allows you to
        deliver higher-quality solutions to production more quickly.
      </p>
      <br />
      <p className="text-lg leading-6 text-white">
        The result: More reliable software, generated more quickly, that can
        respond better to rapidly changing business environments.
      </p>
    </>
  ),
  devopsSubTitle: "Our DevOps Services",
  devopsDescription:
    "Our managed DevOps consulting services include AWS and Azure consulting, infrastructure automation, and continuous integration and delivery. With our integrated DevOps model, we enable your enterprises to build, deploy and manage software to achieve greater speed and agility. ",
  cardData: [
    {
      id: 1,
      cardTitle: "Pipeline Modernization",
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/pipeline.png`}
          alt="pipeline"
        />
      ),
      cardDesc: (
        <>
          <p>
            Benefit from the right DevOps tools to automate your build, release,
            and deployment processes, while analyzing repetitive tasks, removing
            silos, shortening feedback loops, improving work transparency and
            eliminating pet tools and projects.
          </p>
          <p>Pipeline Modernization Process</p>
        </>
      ),
      cardSubItems: [
        {
          text: "Assess and Plan",
        },
        {
          text: "Select and Implement Tools",
        },
        {
          text: "Orchestrate Pipeline",
        },
        {
          text: "Templatize Pipelines",
        },
        {
          text: "Operate Pipelines",
        },
      ],
    },
    {
      id: 2,
      cardTitle: "DevOps Platform Implementation",
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/platform.png`}
          alt="platform"
        />
      ),
      cardDesc: (
        <>
          <p>
            Use our preconfigured, out-of-the-box, Continuous Delivery (CD) open
            source-based toolchain that enables projects to start rapidly using
            DevOps practices from the outset.
          </p>
          <p>
            Containing tools such as GIT, Jenkins, Docker, Cucumber w/Selenium
            Grid, SonarQube, Nexus and OWASP, our platform enables you to store,
            version, build, test, continuously deliver and release application
            and infrastructure code.
          </p>
        </>
      ),
    },
    {
      id: 3,
      cardTitle: "DevOps as a Service",
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/service.png`}
          alt="service"
        />
      ),
      cardDesc: (
        <>
          <p>
            Facilitate collaboration between your software development and
            operations teams, combine your tools and allow them to work as a
            single unit.
          </p>
          <p>
            We can build, run, and manage your entire end-to-end delivery
            pipeline and integrate your delivery systems with a fully automated
            solution.
          </p>
          <p>
            Then, every action in the delivery process can be tracked for
            monitoring and reporting while enabling your developers to do more
            meaningful tasks.
          </p>
        </>
      ),
    },
    {
      id: 4,
      cardTitle: "Cloud Migration/Operations",
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/cloud-migration.png`}
          alt="cloud-migration"
        />
      ),
      cardDesc: (
        <>
          <p>
            Move your DevOps platform to the cloud to improve reliability,
            scalability and speed of delivery.
          </p>
          <p>Our cloud migration process helps you:</p>
        </>
      ),
      cardSubItems: [
        {
          text: "Evaluate and assess infrastructure, applications and data",
        },
        {
          text: "Identify opportunities and optimal cloud migration strategy based on business needs",
        },
        {
          text: "Discover dependencies and make recommendations to reduce risk, time and cost ",
        },
      ],
    },
  ],
  fastforgeTitle: "DevOps FastForge Platform",
  fastforgeDescription: (
    <>
      <p className="text-lg leading-6 text-white pt-4">
        Surviving today depends on your organization’s ability to deploy
        meaningful change in a repeatable, reliable and quick manner.
      </p>
      <p className="text-lg leading-6 text-white pt-4">
        FastForge helps your development teams rapidly start building
        applications utilizing modern development practices.
      </p>
      <p className="text-lg leading-6 text-white pt-4">
        Practices such as DevOps and Automated Testing are considered from the
        start, ensuring low-risk pushes to the production of your application
        code. FastForge connects Azure’s core components so you can respond to
        evolving business needs at cloud-powered speed.
      </p>
    </>
  ),
  howTitle: "How It Works",
  howItems: (
    <ul className="pt-4">
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Configures Agile Project Management Tools to manage development efforts
        using Lean Agile Principles
      </li>
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Stands up core development infrastructure needed to support modern
        development best practices such as trunk-based development, modern
        modular architecture, containers/services, code scanning and more
      </li>
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Establishes seamless application deployment pipelines by standing up
        your DevOps build (CI) and deployment (CD) based on environment
        progression and blue-green production deployment strategies.
      </li>
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Prepares for ongoing Operations by configuring, alerting and monitoring
        in production environment
      </li>
      <li className="text-lg flex  leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Gives the development team a head start by installing a customizable
        sample or Reference Application that illustrates desired architectural
        patterns, modern development practices, testing frameworks and more.
      </li>
    </ul>
  ),
  howDesc: "Whether you need to swap one component or many, we can work with you to design and implement a solution that fits your organization’s needs. "
};

const Devops: React.FC = () => {
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
          <h1 className="text-3xl xl:text-5xl font-bold relative z-10 pt-44 text-white py-20">DevOps</h1>
        </div>
      </div>
      <div className="overflow-hidden relative w-full h-full">
      <div className="bg-devops-opacity"></div>
      <div className="container-common relative z-10 py-12">
        <h2 className="text-[18px] font-bold text-white mb-6">
          {devopsData.title}
        </h2>
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="w-full xl:w-1/2">
            <div>{devopsData.description}</div>
          </div>
          <div className="w-full xl:w-1/2 xl:pl-4 pt-4 xl:pt-0">{devopsData.imgUrl}</div>
        </div>
        {devopsData.devopsSubDesc}
        <div className="container-common py-12">
          <h1 className="text-[24px] xl:text-[30px] text-white pb-2 border-b border-gray-600">
            {devopsData.devopsSubTitle}
          </h1>
          <p className="py-4 text-lg text-white">{devopsData.devopsDescription}</p>
          <Tabs cards={devopsData.cardData} />
          <h1 className="text-[24px] xl:text-[30px] text-white py-6 border-b border-gray-600">
            {devopsData.fastforgeTitle}
          </h1>
          {devopsData.fastforgeDescription}
          <h1 className="text-[24px] xl:text-[30px] text-white py-6 border-b border-gray-600">
            {devopsData.howTitle}
          </h1>
          {devopsData.howItems}
          <p className="py-4 text-lg text-white">{devopsData.howDesc}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Devops;
