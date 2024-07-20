import React from "react";
import Tabs from "../cloudsolutions/card";

const aiData = {
  title:
    "Using the power of artificial intelligence (AI) is no longer a choice; it’s a necessity. Whether you’re just starting to adopt AI or seeking to enhance current AI initiatives, Marvi Infotech Consulting is here to guide you through this disruptive landscape while prioritizing governance and security.",
  description: (
    <>
      <p className="text-lg leading-6 text-white">
        We firmly believe that the cloud serves as the business enabler, data
        acts as the business driver – and AI will become the ultimate business
        differentiator. Together, they enable smarter, faster decision-making
        and transformative growth, at scale.
      </p>
      <br />
      <p className="text-lg leading-6 text-white">
        Successful AI implementation demands governance, a well-crafted plan for
        how and where AI can move your business forward, and a workforce that is
        well-prepared to embrace changes. Our AI consultants bring the business
        and technical expertise needed to make artificial intelligence work for
        your business in a secure and responsible way.
      </p>
      <br />
      <p className="text-lg leading-6 text-white">
        The AI revolution is here. If you need strategic planning, governance,
        security, implementation or adoption, our artificial intelligence
        consulting services can help you succeed.
      </p>
    </>
  ),
  imgUrl: (
    <img
      src={`${process.env.PUBLIC_URL}/assets/ai.png`}
      alt="AI"
      className="h-full"
    />
  ),
  aiTitle: "Our Artificial Intelligence Consulting Services",
  aiDescription: (
    <>
      <p className="text-[18px] font-normal leading-6 text-white pt-4">
        Our AI consulting services are designed to meet you where you are in
        your organization’s artificial intelligence maturity, focusing on urgent
        and important needs first without neglecting the necessity of a
        bigger-picture vision and strategy.
      </p>
      <br />
      <p className="text-[18px] font-normal leading-6 text-white pb-4">
        We’ll help you plan, govern and deliver ethical and secure AI projects
        that align with business objectives and create better customer
        experiences.
      </p>
    </>
  ),
  cardData: [
    {
      id: 1,
      cardTitle: "AI Strategic Planning, Governance and Security",
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/ai-strategy.png`}
          alt="ai-strategy"
        />
      ),
      cardDesc: (
        <p>
          Prepare for an AI-augmented workforce with our strategic consulting
          services. We’ll guide you in integrating responsible AI into your
          strategic initiatives, ensuring a future-proof approach.
        </p>
      ),
    },
    {
      id: 2,
      cardTitle: "Enterprise Intelligence and Analytics",
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/ai-analytics.png`}
          alt="ai-analytics"
        />
      ),
      cardDesc: (
        <p>
          We’re employing new AI paradigms and technologies to address your
          business performance challenges. We’ll help you transform your
          enterprise with an AI-intelligent platform approach.
        </p>
      ),
    },
    {
      id: 3,
      cardTitle: "AI Innovation",
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/ai-innovation.png`}
          alt="ai-innovation"
        />
      ),
      cardDesc: (
        <p>
          From generative AI to conversational AI, from engineering to
          operations, we’ll help you leverage the maturing fields of AI while
          ensuring delivery at speed and scale.
        </p>
      ),
    },
    {
      id: 4,
      cardTitle: "Quick Start AI",
      cardImg: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/ai-quick.png`}
          alt="ai-quick"
        />
      ),
      cardDesc: (
        <p>
          Not quite ready for full-scale AI implementation? If you’re just
          getting started, learn how to foster an AI-ready workforce with our AI
          visioning workshops, or check out our other quick-start areas.
        </p>
      ),
    },
  ],
  genAiTitle: "Generative AI’s Impact on Workforce Productivity",
  genAiDescription: (
    <p className="text-lg leading-6 text-white pt-4">
      Generative AI, like ChatGPT, delivers a powerful and multiplicative
      productivity boost equivalent to a 2-year experience enhancement for every
      employee. For employees new to a subject, the productivity boost exceeds
      40% and even experienced employees gain a substantial productivity boost.
    </p>
  ),
  quickAi: "Our Quick Start AI Services",
  quickAiDescription: (
    <>
      <p className="text-lg leading-6 text-white pt-4">
        Not quite ready for full-scale AI implementation? If you’re just getting
        started, learn how to foster an AI-ready workforce with our AI visioning
        workshops, or check out our other quick-start areas.
      </p>
      <br />
      <p className="text-lg leading-6 text-white pb-4">
        Typical quick-start AI engagements focus on the key activities that most
        organizations need to embark on a successful AI journey:
      </p>
    </>
  ),
  genCardData: [
    {
      id: 1,
      cardTitle: "AI Strategy Development",
      cardDesc: (
        <p>
          develop and document your strategy, whether for ChatGPT, Microsoft
          CoPilot or a general AI strategy
        </p>
      ),
    },
    {
      id: 2,
      cardTitle: "AI Governance Plan",
      cardDesc: (
        <p>
          create a sound plan for governance and security while documenting
          critical AI policies and procedures
        </p>
      ),
    },
    {
      id: 3,
      cardTitle: "AI Readiness Assessment",
      cardDesc: (
        <p>
          assess your infrastructure, culture and processes ahead of a
          successful AI adoption plan
        </p>
      ),
    },
    {
      id: 4,
      cardTitle: "AI Visioning Workshops",
      cardDesc: (
        <p>
          create your AI adoption roadmap through collaboration and learning
          with key stakeholders
        </p>
      ),
    },
    {
      id: 5,
      cardTitle: "AI Innovation Lab",
      cardDesc: (
        <p>
          use our sandbox to develop AI prototypes and POCs and test your
          innovative ideas
        </p>
      ),
    },
  ],
};

const AI: React.FC = () => {
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
          <h1 className="text-3xl xl:text-5xl font-bold pt-44 relative z-10 text-white py-20">
            Artificial Intelligence (AI)
          </h1>
        </div>
      </div>
      <div className="overflow-hidden relative w-full h-full">
      <div className="bg-ai-opacity"></div>
      <div className="container-common relative z-10 py-12">
        <h2 className="text-[18px] font-bold text-white mb-6">
          {aiData.title}
        </h2>
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="w-full xl:w-1/2">
            {aiData.description}
          </div>
          <div className="w-full xl:w-1/2 xl:pl-4 pt-4 xl:pt-0">{aiData.imgUrl}</div>
        </div>
        <div className="container-common py-12">
          <h1 className="text-[24px] xl:text-[30px] text-white pb-2 border-b border-gray-600">
            {aiData.aiTitle}
          </h1>
          {aiData.aiDescription}
          <Tabs cards={aiData.cardData} />

          <div className="py-8">
            <h1 className="text-[24px] xl:text-[30px] text-white pb-2 border-b border-gray-600">
              {aiData.genAiTitle}
            </h1>
            {aiData.genAiDescription}
            <h1 className="text-[24px] xl:text-[30px] text-white pb-2 border-b border-gray-600 pt-8">
              {aiData.quickAi}
            </h1>
            {aiData.quickAiDescription}
            <Tabs cards={aiData.genCardData} />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AI;
