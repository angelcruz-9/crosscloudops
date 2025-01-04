import React, { useState } from "react";
import { Label } from "./label";
import { Input } from "./input"; // Ensure this Input component is correctly implemented
import { cn } from "../../../utils/cn";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "6LdPqnwqAAAAAD0YzHkCSAlZWJV6yLZ1qNfk2_Mm";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "email") {
      setEmailError(!IsEmail(value));
    }
  };

  const IsEmail = (email: string) => {
    const regex =
      /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting || !recaptchaToken) {
      alert(isSubmitting ? "Form is already submitting." : "Please complete the reCAPTCHA");
      return;
    }
    setIsSubmitting(true);
    try {
      const payload = { ...formData, recaptchaToken };
      const response = await fetch("https://node-crosscloudops.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payload }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Submission failed");

      alert("Form submitted successfully!");
      setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "", message: "" });
      setRecaptchaToken(null);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
};


  const onRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
      <form className="my-8" method="POST" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="firstName">
            First name <span className="text-red-600">*</span>
          </Label>
          <Input
            id="firstName"
            placeholder=""
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="lastName">
            Last name <span className="text-red-600">*</span>
          </Label>
          <Input
            id="lastName"
            placeholder=""
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">
            Email Address <span className="text-red-600">*</span>
          </Label>
          <Input
            id="email"
            placeholder=""
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          {emailError && (
            <p className="text-red-500">Please enter a valid email address</p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phoneNumber">
            Phone Number <span className="text-red-600">*</span>
          </Label>
          <Input
            id="phoneNumber"
            placeholder=""
            type="tel"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder=""
            className="h-24 p-2 rounded-md bg-slate-800	 text-white"
            value={formData.message}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={onRecaptchaChange} />

        <button
          className="bg-gradient-to-br mt-8 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={isSubmitting} // Disable button during submission
        >
          {isSubmitting ? "Submitting..." : "Submit"}{" "}
          <span className="absolute pl-2 top-[9px]">&rarr;</span>
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
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
