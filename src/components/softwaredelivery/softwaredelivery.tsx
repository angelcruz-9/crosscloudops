import React from "react";
import { FaCheck } from "react-icons/fa";

const SoftwareDeliveryData = {
  title:
    "Our Modern Software Delivery (MSD) practice delivers software that your CIO loves to manage, your CFO is willing to pay for, and your CEO is excited to talk about, including:",
  description: (
    <ul className="pt-4">
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Software development that alleviates delivery and operational friction.
      </li>
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Innovative applications that enhance users’ satisfaction and usage.
      </li>
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Seamless tools that leverage modern software practices and improve
        culture.
      </li>
      <li className="text-lg flex leading-6 text-white py-2">
        <FaCheck className="text-green-500 mr-2 mt-1" />
        Artificial intelligence and machine learning technologies that automate
        processes and delight customers.
      </li>
    </ul>
  ),
  imgUrl: (
    <img
      src={`${process.env.PUBLIC_URL}/assets/softwaredelivery.png`}
      alt="softwaredelivery"
      className="h-full"
    />
  ),
  softwareDeliveryDesc: (
    <>
      <p className="text-lg leading-6 text-white pt-4">
        Modern tools and the skills to create them are critical in today’s
        market, where business success depends on your ability to identify and
        adapt to rapidly changing business conditions. Failing to deliver
        technology in a modern way has very real impacts. Over the last 10
        years, innovative S&P 500 companies have outperformed less innovative
        companies by more than 200%.
      </p>
      <p className="text-lg leading-6 text-white pt-4">
        However, outperforming today is not just about who gets to market first,
        but also who can scale the fastest, with the most optimized costs.
        Companies that do so succeed and thrive, while those that don’t go
        extinct.
      </p>
      <p className="text-lg leading-6 text-white pt-4">
        Our proven MSD methodology enables software delivery that provides
        reliable, scalable solutions for our clients. But we also teach teams to
        build and deliver modern software themselves, synergizing Agile
        management, effective test automation, DevOps practices, modular
        architecture and cloud platforms.
      </p>
    </>
  ),
  servicesTitle: "Our Modern Software Delivery Services",
  servicesDesc:
    "Using proven components and methodologies, we empower you to deliver software that meets customer expectations, defends against competitive threats, and adapts to industry disrupters.",
};

const SoftwareDelivery: React.FC = () => {
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
          <h1 className="text-3xl xl:text-5xl relative z-10 pt-44 font-bold text-white py-20">
            Modern Software Delivery
          </h1>
        </div>
      </div>
      <div className="overflow-hidden relative w-full h-full">
        <div className="bg-delivery-opacity"></div>
        <div className="container-common relative z-10 py-12">
          <h2 className="text-[18px] font-bold text-white mb-6">
            {SoftwareDeliveryData.title}
          </h2>
          <div className="flex flex-col xl:flex-row justify-between">
            <div className="w-full xl:w-1/2">
              <div>{SoftwareDeliveryData.description}</div>
            </div>
            <div className="w-full xl:w-1/2 xl:pl-4 pt-4 xl:pt-0">
              {SoftwareDeliveryData.imgUrl}
            </div>
          </div>
          <div className="container-common py-12">
            {SoftwareDeliveryData.softwareDeliveryDesc}
            <h1 className="text-[24px] xl:text-[30px] text-white  py-4 border-b border-gray-600">
              {SoftwareDeliveryData.servicesTitle}
            </h1>
            <p className="text-lg text-white leading-6">{SoftwareDeliveryData.servicesDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDelivery;
