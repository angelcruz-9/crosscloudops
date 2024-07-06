import React, { useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../../../utils/cn";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [emailError, setEmailError] = useState(false);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (id === "email") {
      setEmailError(!IsEmail(value));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      saveContactDetails();
    }
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      alert("Please enter First Name");
      return false;
    }
    if (!formData.lastName.trim()) {
      alert("Please enter Last Name");
      return false;
    }
    if (!formData.email.trim()) {
      alert("Please enter Email");
      return false;
    }
    if (!IsEmail(formData.email)) {
      alert("Please enter a valid Email");
      return false;
    }
    return true;
  };

  const IsEmail = (email: any) => {
    // Updated regular expression with unnecessary escape characters removed
    var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  };

  const saveContactDetails = () => {
    const mailXmlString = `
      <contactMail>
        <customerName>${formData.firstName}</customerName>
        <customerLastName>${formData.lastName}</customerLastName>
        <email>${formData.email}</email>
        <phoneNumber>${formData.phoneNumber}</phoneNumber>
        <msg>${formData.message}</msg>
      </contactMail>
    `;
    console.log(mailXmlString);

    fetch("https://crosscloudops.com/Mail/services/mailsending/contactmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/xml",
      },
      body: mailXmlString,
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.Response.status === "MailSent") {
          alert("Contact Sent Successfully...");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
          });
          // Redirect or handle success state
        }
      })
      .catch((error) => console.error("Error sending contact mail:", error));
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="firstname">First name</Label>
          <Input
            id="firstName"
            placeholder="Tyler"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="lastname">Last name</Label>
          <Input
            id="lastName"
            placeholder="Durden"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {emailError && <p className="text-red-500">Please enter a valid email address</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="number">Phone Number</Label>
          <Input
            id="phoneNumber"
            placeholder=""
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="textarea">Message</Label>
          <Input
            id="message"
            placeholder=""
            type="textarea"
            className="h-24"
            value={formData.message}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
