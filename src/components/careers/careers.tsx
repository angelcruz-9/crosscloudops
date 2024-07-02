import React, { useState } from "react";

interface JobListing {
  id: number;
  title: string;
  exp: string;
  popupTitle: string;
  description: React.ReactNode;
}

const Careers: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

  //  data for job listings
  const jobListings: JobListing[] = [
    {
      id: 1,
      title: "SFMC Consultant/Developer",
      exp: "2+ years",
      popupTitle:
        "SFMC Consultant/Developer Job Description (JD) : 2+ years exp",
      description: (
        <>
          <p className="text-lg text-[#b7b7b7] py-4">
            <span className="text-black font-bold">Role:</span> <br />{" "}
            Salesforce Marketing Cloud (SFMC) Consultant is a hybrid of business
            and technical consultants with the ability to operate as a digital
            tech lead focusing on the Salesforce Marketing Cloud. Be part of and
            lead the operations team to design and deliver high-quality,
            scalable technical solutions.
          </p>
          <p className="text-lg text-[#b7b7b7] py-4">
            <span className="text-black font-bold">Responsibilities:</span>
            <ul className="list-disc pl-6 py-2">
              <li>
                Manage administration of customer communication campaigns across
                the cloud, either in each function (email, SMS, Push, Cloud
                Pages), or leveraging Journey Builder to deliver multi-touch
                communications.
              </li>
              <li>
                Create standards and solutions to accelerate implementations and
                improve quality through the use of technology.
              </li>
              <li>
                Proactively identify and resolve problems including client data
                feed issues.
              </li>
              <li>
                Stay abreast of industry technology innovations, new business
                practices, and third-party technology solutions.
              </li>
              <li>
                Act as a consultant and technical expert on the Salesforce
                Marketing Cloud to serve clients’ needs.
              </li>
              <li>
                Contributes to team effort by accomplishing related results as
                needed and maintaining quality assurance.
              </li>
              <li>
                Ensure alignment of business requirements with Marketing
                Solutions standards and policies, and with industry best
                practices.
              </li>
            </ul>
          </p>
          <p className="text-lg text-[#b7b7b7] py-4">
            <span className="text-black font-bold">Required Skills:</span>
            <ul className="list-disc pl-6 py-2">
              <li>
                Bachelor's degree in a discipline related to functional work or
                role with 2 plus years of relevant work experience.
              </li>
              <li>
                Minimum 1-2 years experience on Salesforce Marketing Cloud,
                and/or other SFMC platforms (i.e. Audience Studio-DMP, Datorama,
                Interaction Studio, etc.)
              </li>
              <li>
                Experience in a technical role designing, building, and
                executing complex automated email campaigns in Salesforce
                Marketing Cloud is required.
              </li>
              <li>
                SFMC Email Specialist/Consultant/Developer/Administrator
                Certifications strongly preferred.
              </li>
              <li>Experience in SFMC implementations and integrations.</li>
              <li>
                Excellent hands-on experience in AMPScript, SSJS, and SQL.
              </li>
              <li>
                Experience in HTML, CSS, JavaScript implementing Emails, SMS,
                CloudPages & web is preferred
              </li>
              <li>
                Excellent communication skills – needs to be able to interact
                with clients and sponsors.
              </li>
            </ul>
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "SFMC Sr. Consultant /Developer",
      exp: "3+ years",
      popupTitle:
        "Sr.SFMC Developer/Consultant Job Description (JD) : 3+ years exp",
      description: (
        <>
          <p className="text-lg text-[#b7b7b7] py-4">
            <span className="text-black font-bold">Role:</span> <br />{" "}
            Salesforce Marketing Cloud (SFMC) Sr.Developer/Consultant is a
            hybrid of business and technical consultants with the ability to
            operate as a digital tech lead focusing on the Salesforce Marketing
            Cloud. Be part of and lead the operations team to design and deliver
            high-quality, scalable technical solutions.
          </p>
          <p className="text-lg text-[#b7b7b7] py-4">
            <span className="text-black font-bold">Responsibilities:</span>
            <ul className="list-disc pl-6 py-2">
              <li>
                Manage administration of customer communication campaigns across
                the cloud, either in each function (email, SMS, Push, Cloud
                Pages), or leveraging Journey Builder to deliver multi-touch
                communications.
              </li>
              <li>
                Create standards and solutions to accelerate implementations and
                improve quality through the use of technology.
              </li>
              <li>
                Proactively identify and resolve problems including client data
                feed issues.
              </li>
              <li>
                Stay abreast of industry technology innovations, new business
                practices, and third-party technology solutions.
              </li>
              <li>
                Act as a consultant and technical expert on the Salesforce
                Marketing Cloud to serve clients’ needs.
              </li>
              <li>
                Contributes to team effort by accomplishing related results as
                needed and maintaining quality assurance.
              </li>
              <li>
                Ensure alignment of business requirements with Marketing
                Solutions standards and policies, and with industry best
                practices.
              </li>
            </ul>
          </p>
          <p className="text-lg text-[#b7b7b7] py-4">
            <span className="text-black font-bold">Required Skills:</span>
            <ul className="list-disc pl-6 py-2">
              <li>
                Bachelor's degree in a discipline related to functional work or
                role with 5 plus years of relevant work experience.
              </li>
              <li>
                Minimum 3 plus years experience on Salesforce Marketing Cloud,
                and/or other SFMC platforms (i.e. Audience Studio-DMP, Datorama,
                Interaction Studio, etc.)
              </li>
              <li>
                Experience in a technical role designing, building, and
                executing complex automated email campaigns in Salesforce
                Marketing Cloud is required.
              </li>
              <li>
                SFMC Email Specialist/Consultant/Developer/Administrator
                Certifications strongly preferred.
              </li>
              <li>Experience in SFMC implementations and integrations.</li>
              <li>
                Excellent hands-on experience in AMPScript, SSJS, and SQL.
              </li>
              <li>
                Experience in HTML, CSS, JavaScript implementing Emails, SMS,
                CloudPages & web is preferred
              </li>
              <li>
                Excellent communication skills – needs to be able to interact
                with clients and sponsors.
              </li>
            </ul>
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "SSFMC Technical Lead/Architect",
      exp: "5+ years",
      popupTitle:
        "SFMC Technical Lead/Architect Job Description (JD) : 5+ years exp",
      description: (
        <>
          <p className="text-lg text-[#b7b7b7] py-4">
            <span className="text-black font-bold">Role:</span> <br />{" "}
            Salesforce Marketing Cloud (SFMC) Sr.Developer/Consultant is a
            hybrid of business and technical consultants with the ability to
            operate as a digital tech lead focusing on the Salesforce Marketing
            Cloud. Be part of and lead the operations team to design and deliver
            high-quality, scalable technical solutions.
          </p>
          <p className="text-lg text-[#b7b7b7] py-4">
            <span className="text-black font-bold">Responsibilities:</span>
            <ul className="list-disc pl-6 py-2">
              <li>
                Architect data feeds, platform configuration, and components
                needed to run complex automated interactions/campaigns.
              </li>
              <li>
                Proactively identify and resolve problems including client data
                feed issues.
              </li>
              <li>
                Stay abreast of industry technology innovations, new business
                practices, and third-party technology solutions Design data
                architecture and solutions within Salesforce Marketing Cloud,
                validate against client use cases, and execute on design
              </li>
              <li>
                Clearly and articulately document technical solutions and
                integrations (i.e. data design documents, code samples,
                screenshots, etc.)
              </li>
              <li>
                Configure Marketing Cloud data and contact schema, including
                designing business unit structure and hierarchy
              </li>
              <li>
                Lead client-facing conversations, particularly requirements
                gathering and presenting solutions
              </li>
              <li>
                Leverage CRM integration to trigger customer communication
                campaigns and trigger operational communications.
              </li>
              <li>
                Act as a consultant and technical expert on the Salesforce
                Marketing Cloud to serve clients’ needs.
              </li>
              <li>
                Contributes to team effort by accomplishing related results as
                needed and maintaining quality assurance.
              </li>
              <li>
                Ensure alignment of business requirements with Marketing
                Solutions standards and policies, and with industry best
                practices.
              </li>
            </ul>
          </p>
          <p className="text-lg text-[#b7b7b7] py-4">
            <span className="text-black font-bold">Required Skills:</span>
            <ul className="list-disc pl-6 py-2">
              <li>
                Bachelor's degree in a discipline related to functional work or
                role with 5 plus years of relevant work experience.
              </li>
              <li>
                Minimum 3 plus years experience on Salesforce Marketing Cloud,
                and/or other SFMC platforms (i.e. Audience Studio-DMP, Datorama,
                Interaction Studio, etc.)
              </li>
              <li>
                Experience in a technical role designing, building, and
                executing complex automated email campaigns in Salesforce
                Marketing Cloud is required.
              </li>
              <li>
                SFMC Email Specialist/Consultant/Developer/Administrator
                Certifications strongly preferred.
              </li>
              <li>Experience in SFMC implementations and integrations.</li>
              <li>
                Excellent hands-on experience in AMPScript, SSJS, and SQL.
              </li>
              <li>
                Experience in HTML, CSS, JavaScript implementing Emails, SMS,
                CloudPages & web is preferred
              </li>
              <li>
                Excellent communication skills – needs to be able to interact
                with clients and sponsors.
              </li>
            </ul>
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: "SFMC Solutions Architect",
      exp: "5+ years",
      popupTitle:
        "SFMC Solutions Architect Job Description (JD) : 5+ years exp",
      description: (
        <>
          <p className="text-lg text-[#b7b7b7] py-4">
            <span className="text-black font-bold">Role:</span> <br />{" "}
            Salesforce Marketing Cloud (SFMC) Sr.Developer/Consultant is a
            hybrid of business and technical consultants with the ability to
            operate as a digital tech lead focusing on the Salesforce Marketing
            Cloud. Be part of and lead the operations team to design and deliver
            high-quality, scalable technical solutions.
          </p>
          <p className="text-lg text-[#b7b7b7] py-4">
            <span className="text-black font-bold">Responsibilities:</span>
            <ul className="list-disc pl-6 py-2">
              <li>
                Architect a detailed solution tailored to customers' goals,
                taking into account their current and future-state environment.
              </li>
              <li>
                Architect data feeds, platform configuration, and components
                needed to run complex automated interactions/campaigns.
              </li>
              <li>
                Proactively identify and resolve problems including client data
                feed issues.
              </li>
              <li>
                Ability to quickly learn new technologies and jump in to lead.
              </li>
              <li>
                Architect must know how and/or where to find information by
                being highly resourceful. They should be on the front line of
                learning so they can assist and teach others.
              </li>
              <li>
                Lead consultative engagements with customers on business goals
                and challenges
              </li>
              <li>
                Must have experience in developing System Architecture
                Documents, Data Model
              </li>
              <li>Documentation (ERDs) and Security Model Documentation.</li>
              <li>
                Strong technical writing skills. The ability to take the lead
                role in developing comprehensive solution and documentation
              </li>
              <li>
                Demonstrates excellence in understanding complex business
                processes and ability to apply scenarios to Salesforce Use Cases
              </li>
              <li>
                Outstanding written and verbal communication skills; executive
                level presence and experience facilitating meetings
              </li>
              <li>
                Ability to communicate complex technical solutions to
                non-technical business users from various backgrounds including
                sales, support and marketing
              </li>
              <li>
                Configure Marketing Cloud data and contact schema, including
                designing business unit structure and hierarchy.
              </li>
              <li>
                Lead client-facing conversations, particularly requirements
                gathering and presenting solutions
              </li>
              <li>
                Ensure alignment of business requirements with Marketing
                Solutions standards and policies, and with industry best
                practices.
              </li>
            </ul>
          </p>
          <p className="text-lg text-[#b7b7b7] py-4">
            <span className="text-black font-bold">Required Skills:</span>
            <ul className="list-disc pl-6 py-2">
              <li>
                Bachelor's degree in a discipline related to functional work or
                role with 5 plus years of relevant work experience.
              </li>
              <li>
                Minimum 3 plus years experience on Salesforce Marketing Cloud,
                and/or other SFMC platforms (i.e. Audience Studio-DMP, Datorama,
                Interaction Studio, etc.)
              </li>
              <li>
                Experience in a technical role designing, building, and
                executing complex automated email campaigns in Salesforce
                Marketing Cloud is required.
              </li>
              <li>
                SFMC Email Specialist/Consultant/Developer/Administrator
                Certifications strongly preferred.
              </li>
              <li>Experience in SFMC implementations and integrations.</li>
              <li>
                Excellent hands-on experience in AMPScript, SSJS, and SQL.
              </li>
              <li>
                Experience in HTML, CSS, JavaScript implementing Emails, SMS,
                CloudPages & web is preferred
              </li>
              <li>
                Excellent communication skills – needs to be able to interact
                with clients and sponsors.
              </li>
            </ul>
          </p>
        </>
      ),
    },
  ];

  // Function to handle opening details popup
  const handleOpenDetails = (jobTitle: string) => {
    const job = jobListings.find((job) => job.title === jobTitle);
    if (job) {
      setSelectedJob(job);
      setShowDetails(true);
    }
  };

  // Function to handle closing details popup
  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedJob(null);
  };

  return (
    <div className="container-common py-24">
      <div className="flex flex-col items-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/carrer.png`}
          alt="Career"
          className="w-full h-auto max-h-96 object-contain"
        />
        <h1 className="text-4xl font-bold text-center">Careers</h1>
        <p className="text-xl py-4">Work for the Best</p>
        <p className="text-xl text-[#b7b7b7]">
          Join the quickly developing, experienced global innovator in
          programming quality affirmation and drive your vocation higher than
          ever of progress.
        </p>
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {jobListings.map((job) => (
          <div key={job.id} className="bg-white p-4 cursor-pointer rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <div className="mt-2 flex justify-between items-center">
              <p className="text-lg py-4">
                <span className="text-blue-900">Experience:</span> {job.exp}
              </p>
              <button
                className="text-blue-500 hover:underline"
                onClick={() => handleOpenDetails(job.title)}
              >
                ...Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Details Popup */}
      {showDetails && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 w-[90%] h-[600px] xl:max-w-lg xl:h-[900px] mx-auto rounded-lg shadow-xl overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">
              {selectedJob?.popupTitle}
            </h2>
            {selectedJob?.description}
            <div className="mt-4 flex justify-end">
              <button
                className="text-blue-500 hover:underline"
                onClick={handleCloseDetails}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
