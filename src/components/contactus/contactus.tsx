import React from "react";
import { SignupFormDemo } from "./signupform/signupForm";

const ContactUs: React.FC = () => {
  return (
    <div className="container-common py-24">
      <h1 className="text-4xl font-bold tracking-wider text-center pt-8 text-white">
        Contact us
      </h1>
      <div className="grid xl:grid-cols-[40%_60%] flex justify-start items-start">
        <SignupFormDemo />
        <div className="flex flex-col justify-between mt-4 xl:mt-20 xl:ml-8">
          <p className="text-gray-600 text-xl mt-2 text-white">
            Ready to see how Cross Cloud Ops can help you drive rapid growth?
            Contact us today with the form on the left, or instantly schedule a
            meeting below.
          </p>
          <div className="flex flex-col justify-start py-8">
            <label className="text-orange-400">Phone :</label>
            <p className="text-white">(317) 296-6393 , (317) 835-6132</p>
          </div>
          <div className="flex flex-col justify-start">
            <label className="text-orange-400">Email :</label>
            <p className="text-white">info@crosscloudops.com</p>
          </div>
          <div className="relative py-8 w-44 cursor-pointer">
            <div className="border b-white p-1 rounded-lg">
              <div className="bg-orange-400 rounded-lg hover:bg-orange-600">
                <h2 className="text-white text-center text-xl text-semibold p-1">Schedule a Demo</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-8">
        <h2 className="text-3xl font-fold text-white">Addresses :</h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 py-4">
            <div className="mb-4 xl:mb-0 text-white">
              <strong>USA Corporate Headquarters & Main Office:</strong> 201 N Illinois Street, South Tower Suite 1600, Indianapolis, IN 46204, USA
            </div>
            <div className="mb-4 xl:mb-0 text-white">
              <strong>Cincinnati Office:</strong> 8044 Montgomery Rd Suite 700, Kenwood, OH 45236, USA
            </div>
            <div className="mb-4 xl:mb-0 text-white">
              <strong>India Office:</strong> 14/46, 1st Floor, Phoenix Tech Tower, Uppal, Hyderabad, Telangana 500039. Phone: +91-40-6793 4217
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
