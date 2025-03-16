import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeatureHeader from './Presentation/SectionsHeader';
import { PiCalendar, PiHourglassHigh, PiTrophy } from 'react-icons/pi';

// TypeScript interface for form data
interface FormData {
  email: string;
  name: string;
  reason: string;
}

// Waitlist advantage data
export const WAIT_LIST_ADVANTAGE = [
  {
    icon: <PiCalendar className="text-6xl" />,
    title: "Early Access",
    description: "Get early access to our product before anyone else.",
  },
  {
    icon: <PiHourglassHigh className="text-6xl" />,
    title: "Updates",
    description: "Get updates on our progress and new features.",
  },
  {
    icon: <PiTrophy className="text-6xl" />,
    title: "Help Shape the Product",
    description: "Share your feedback and help us build a better product.",
  },
];

const NotionLikeWaitlist: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    reason: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (step === 2) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
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
        console.log('Submitting waitlist request:', formData);
        setShowSuccess(true);
      }
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg">
      <FeatureHeader
        title="Join the waitlist"
        description="Get notified when we're ready to launch."
        items={WAIT_LIST_ADVANTAGE} />
      
      <AnimatePresence mode="wait">
        {showSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">You&apos;re on the list!</h3>
            <p className="text-gray-600">We&apos;ll notify you when we&apos;re ready to launch.</p>
          </motion.div>
        ) : (
          <motion.form
            key={`step-${step}`}
            initial={{ opacity: 0, x: step === 1 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: step === 1 ? 20 : -20 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
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
            )}
            
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                    Why are you interested? (optional)
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Tell us why you're interested in our product..."
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex space-x-3">
                  <motion.button
                    type="button"
                    onClick={handleBack}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-1/3 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Back
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-2/3 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Join Waitlist
                  </motion.button>
                </div>
              </div>
            )}
          </motion.form>
        )}
      </AnimatePresence>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>We&apos;ll never share your information with anyone else.</p>
      </div>
    </div>
  );
};

export default NotionLikeWaitlist;