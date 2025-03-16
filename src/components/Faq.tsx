import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeatureHeader from "./Presentation/SectionsHeader";
import { FAQ_ICON, FAQ_QUESTIONS, FAQQuestionInterface } from "@/data";



// FAQ Item component
const FAQItem: React.FC<{ item: FAQQuestionInterface }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          {item.icon && (
            <div className="flex items-center justify-center border rounded-lg border-neutral-200 text-neutral-500 p-1">
              {item.icon}
            </div>
          )}
          <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl text-gray-500"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600 pl-1">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main FAQ component
const FAQ: React.FC = () => {
  return (
    <div className=" w-full  bg-white ">
      <FeatureHeader
        title="FAQ"
        description="Get answers to the most common questions about Nexus."
        items={FAQ_ICON}
      />
      <div className="space-y-1  pb-8 pt-4 rounded-lg">
        {FAQ_QUESTIONS.map((item) => (
          <FAQItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
