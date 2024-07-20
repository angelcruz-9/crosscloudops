import React from "react";

const oracleData = {
  title:
    "Our Oracle National Practice has been helping clients strategize, implement and manage Oracle solutions since 2002. We work with clients to resolve tough business problems by blending process, application and technology skills together.",
  description: (
    <>
      <p className="text-lg text-white leading-6">
        The products and capabilities of the Oracle Innovation Stack continue to
        grow every day, and it can be difficult for companies to keep pace. As
        an Oracle Gold Partner, we focus on helping clients gain value on their
        investments through cloud-based solutions, E-Business Suite, engineered
        solutions and business intelligence.
      </p>
      <br />
      <p className="text-lg text-white leading-6">
        We differentiate ourselves by striving to create unmatched experiences
        with both our clients and our people. Whether it’s a handwritten note of
        kindness, or throwing strikes on a Major League Baseball field, we focus
        on creating positive experiences. Our teams are specialized,
        collaborative and transparent.
      </p>
    </>
  ),
  description1: (
    <p className="text-lg leading-6 text-white">
      By working closely with our geographic offices, we blend local skills with
      deep expertise to deliver high-quality solutions. For 24×7 coverage and
      alternative delivery options, we provide offshore capability through Marvi
      Infotech India.
    </p>
  ),
  imgUrl: (
    <img
      src={`${process.env.PUBLIC_URL}/assets/oracle.png`}
      alt="cloudsolutions"
      className="h-full"
    />
  ),
  oracleTitle: "Oracle Engineered Systems",
  oracleDescription: (
    <>
      <p className="text-[18px] text-white leading-8">
        As an early advocate of Oracle Engineered Systems, we understand the
        power and performance that Oracle technology provides for data-intensive
        solutions.
      </p>
      <br />
      <p className="text-[18px] text-white leading-8">
        Whether it’s implementing Oracle’s Exadata Database Machine, designing
        and implementing a Disaster Recovery solution using Data Guard, or
        helping you think how to use Oracle Exadata Cloud, we have the technical
        leadership and experience to help your team unlock the power and
        potential of Oracle’s technology.
      </p>
    </>
  ),
};

const OracleServices: React.FC = () => {
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
          <h1 className="text-3xl xl:text-5xl pt-44 relative z-10 font-bold text-white py-20">Oracle</h1>
        </div>
      </div>
      <div className="overflow-hidden w-full h-full relative">
      <div className="bg-oracle-opacity"></div>
      <div className="container-common relative z-10 py-12">
        <h1 className="text-[18px] font-bold leading-6 text-white pb-6">{oracleData.title}</h1>
        <div className="flex flex-col xl:flex-row justify-between pb-6">
          <div className="w-full xl:w-1/2">
            <div>
              {oracleData.description}
            </div>
          </div>
          <div className="w-full xl:w-1/2 xl:pl-4 pt-4 xl:pt-0">{oracleData.imgUrl}</div>
        </div>
        {oracleData.description1}
        <div className="pt-8">
            <h1 className="text-[24px] xl:text-[30px] text-white pb-2 border-b border-gray-600">{oracleData.oracleTitle}</h1>
            {oracleData.oracleDescription}
        </div>
      </div>
      </div>
    </div>
  );
};

export default OracleServices;
