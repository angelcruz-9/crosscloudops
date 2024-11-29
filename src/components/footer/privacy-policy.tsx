// components/PrivacyPolicy.tsx
import React from 'react';

interface Section {
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    title: 'Authorization of Use',
    content: `By using our website, you agree to abide by the following terms and conditions. If you do not accept these conditions, do not use this website.`,
  },
  {
    title: 'Notification of Changes',
    content: `We may change our Policy from time to time. If substantial changes are made to our Policy, the announcement of the changes will be prominently displayed on our website home page.`,
  },
  {
    title: 'Information Collection, Use, and Sharing',
    content: `If you voluntarily submit information to our website, for example, in a request for general information or through the submission of a request to attend a webinar or demonstration, we may record and use any personally identifiable information, such as your name, phone number and e-mail address, for reasonable business purposes including, but not limited to, fulfilling your request. We will not use your personally identifiable information for any other purpose without your permission.`,
  },
  {
    title: 'Registration',
    content: `For other than public areas of our website, a user must first be registered as a user in our system. During registration a user or their sponsoring company is required to give certain information necessary to uniquely identify you. This information is required to ensure the security of our systems and our data and to accurately identify you to provide services.`,
  },
  {
    title: 'Security',
    content: `We take precautions to protect your information. Your information is protected both online and offline, and for sensitive and personal identifiable information we collect or store, that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser or looking for "https" at the beginning of the address of the web page.`,
  },
  {
    title: 'Cookies',
    content: `We may use "cookies" on our website and by using our website, you explicitly give permission for the use of cookies. A cookie is a piece of data stored on a website visitor's hard drive to help us improve your access to our website, maintain your user session, and identify repeat visitors to our website. Usage of a cookie is in no way linked to any personally identifiable information on our website. Some of our business partners may also use cookies during the provision of services.`,
  },
  {
    title: 'Links',
    content: `Our website may contain links to other websites or articles. Please be aware that we are not responsible for the content or privacy practices of such other websites. We encourage our users to be aware when they leave our website and to read the privacy statements of any other website that collects personally identifiable information.`,
  },
  {
    title: 'Other Provisions as Required by Law',
    content: `Numerous other provisions and/or practices may be required as a result of laws, international treaties, or industry practices. It is up to you to determine what additional practices must be followed and/or what additional disclosures are required. Please take special notice of the California Online Privacy Protection Act (CalOPPA), which is frequently amended and now includes a disclosure requirement for "Do Not Track" signals.`,
  },
  {
    title: 'Limitations of Liability',
    content: `We are not responsible for any damages or injury, including but not limited to special or consequential damages, that result from your use of (or inability to use) our website, including any damages or injury caused by any failure of performance, error, omission, interruption, defect, delay in operation, computer virus, line failure, or other computer malfunction. You acknowledge that we provide the contents of our website on an "as is" basis with no warranties of any kind. Your use of our website and use or reliance upon any of the materials on it is solely at your own risk.`,
  },
];

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container-common px-4 py-20">
      <div className="mb-6">
        <h1 className="text-3xl font-bold pb-2 mb-4">Privacy Policy</h1>
        <p className="text-base text-gray-200 mb-4">
          Thank you for visiting the CrossClouds, LLC ("CrossClouds", "we" or "our") website! Your privacy is important to us. We present this Privacy Policy ("Policy") which discloses our privacy practices. This Policy covers the following:
        </p>
        <ul className="list-disc list-inside mb-4 pl-4 text-gray-400">
          <li>Authorization of Use</li>
          <li>How Policy changes will be communicated</li>
          <li>What information we collect</li>
          <li>With whom it is shared</li>
          <li>How it is secured</li>
          <li>Legal considerations</li>
          <li>How to address concerns over misuse of personal data</li>
        </ul>
      </div>
      {sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl text-white font-semibold pb-2">{section.title}</h2>
          <p className="text-base text-gray-400">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
