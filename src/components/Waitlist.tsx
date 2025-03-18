import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FeatureIcon } from "./Presentation/SectionsHeader";
import { WAIT_LIST_ADVANTAGE, FormData } from "@/data/waitlist";

const NotionLikeWaitlist: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    reason: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field if it exists
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (step === 2) {
      if (!formData.name) {
        newErrors.name = "Name is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      if (step === 1) {
        setStep(2);
      } else {
        // Here you would typically send the data to your backend
        console.log("Submitting waitlist request:", formData);
        setShowSuccess(true);
      }
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-6 space-y-8 py-16 shadow-md bg-neutral-100 rounded-lg">
      <div className="grid-cols-3 gap-4 w-10/20 mb-16 hidden md:grid">
        {WAIT_LIST_ADVANTAGE.map((advantage, index) => (
          <FeatureIcon
            key={index}
            icon={advantage.icon}
            title={advantage.title}
            description={advantage.description}
            className="flex flex-col justify-center items-center text-center"
          />
        ))}
      </div>
      <div className="text-start sm:text-center w-full">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Join the waitlist
        </h1>
        <p className="text-lg md:text-xl text-neutral-500">
          Get notified when we&apos;re ready to launch.
          <br className="hidden md:block" />
        </p>
      </div>

      <AnimatePresence mode="wait">
        {showSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-start py-8"
          >
            <div className=" h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              You&apos;re on the list!
            </h3>
            <p className="text-gray-600">
              We&apos;ll notify you when we&apos;re ready to launch.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key={`step-${step}`}
            initial={{ opacity: 0, x: step === 1 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: step === 1 ? 20 : -20 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="md:space-y-6 w-full md:w-1/2"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoFocus
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Continue
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      <div className="md:mt-8 text-center text-sm text-gray-500">
        <p>We&apos;ll never share your information with anyone else.</p>
      </div>
    </div>
  );
};

export default NotionLikeWaitlist;
