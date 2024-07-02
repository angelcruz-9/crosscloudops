import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="container-common py-12">
      <h1 className="text-4xl font-bold tracking-wider pb-8 text-center py-8">
        Contact us
      </h1>
      <div className="grid xl:grid-cols-[40%_60%] flex justify-start items-start">
        <div className="form flex flex-col">
          <input
            type="text"
            id="firstNameId"
            placeholder="First Name *"
            className="border border-slate-400	border-solid rounded py-1 px-2 w-full mb-4"
          />
          <input
            type="text"
            id="secondNameId"
            placeholder="Last Name *"
            className="border border-slate-400	border-solid rounded py-1 px-2 w-full mb-4"
          />
          <input
            type="email"
            id="emailId"
            placeholder="E-Mail *"
            className="border border-slate-400 border-solid rounded py-1 px-2 w-full mb-4"
          />
          <input
            type="text"
            id="phoneId"
            placeholder="Phone"
            className="border border-slate-400 border-solid rounded py-1 px-2 w-full mb-4"
          />
          <div className="messageContainer">
            <textarea
              id="textAreaId"
              placeholder="Tell us how we can help."
              className="border border-slate-400 border-solid rounded py-1 px-2 w-full mb-4"
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              className="w-full rounded bg-slate-950 text-white h-12 cursor-pointer"
              value="Submit"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between mt-4 xl:mt-0 xl:ml-8">
          <p className="text-gray-600 text-xl mt-2">
            Ready to see how Cross Cloud Ops can help you drive rapid growth?
            Contact us today with the form on the left, or instantly schedule a
            meeting below.
          </p>
          <div className="flex flex-col justify-start py-8">
            <label className="text-orange-400">Phone :</label>
            <p>(317) 296-6393 , (317) 835-6132</p>
          </div>
          <div className="flex flex-col justify-start">
            <label className="text-orange-400">Email :</label>
            <p>info@crosscloudops.com</p>
          </div>
          <div className="relative w-full">
            <img src={`${process.env.PUBLIC_URL}/assets/schedulemeeting.jpeg`} alt="Schedular" className="w-56 pl-0 pt-4"/>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-8">
        <h2 className="text-3xl font-fold">Addresses :</h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 py-4">
            <div className="mb-4 xl:mb-0">
              <strong>USA Corporate Headquarters & Main Office:</strong> 201 N Illinois Street, South Tower Suite 1600, Indianapolis, IN 46204, USA
            </div>
            <div className="mb-4 xl:mb-0">
              <strong>Cincinnati Office:</strong> 8044 Montgomery Rd Suite 700, Kenwood, OH 45236, USA
            </div>
            <div className="mb-4 xl:mb-0">
              <strong>India Office:</strong> 14/46, 1st Floor, Phoenix Tech Tower, Uppal, Hyderabad, Telangana 500039. Phone: +91-40-6793 4217
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
