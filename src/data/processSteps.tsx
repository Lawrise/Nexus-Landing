import React from "react";

export interface ProcessStepInterface {
  id: number;
  title: string;
  description: string;
  icon: string;
  content: React.FC;
}

export const ProcessSteps = [
  {
    id: 1,
    title: "Goal Setting",
    description: "Define what you want to learn and why it matters to you. This is the first step in creating a learning path that is tailored to you.",
    icon: "🎯",
    content: (
      <div className="flex justify-center items-center h-full">
        <h3 className="text-2xl font-semibold mb-2">Goal Setting</h3>
      </div>
    ),
  },
  {
    id: 2,
    title: "Knowledge Analysis",
    description: "AI assesses your current understanding and identifies gaps. This ensures that you are building on a solid foundation.",
    icon: "🧠",
    content: (
      <div className="flex justify-center items-center h-full">
        <h3 className="text-2xl font-semibold mb-2">Knowledge Analysis</h3>
      </div>
    ),
  },
  {
    id: 3,
    title: "Path Generation",
    description: "Custom curriculum creation with resources tailored to you. This includes videos, articles, and quizzes that are designed to help you learn.",
    icon: "🗺️",
    content: (
      <div className="flex justify-center items-center h-full">
        <h3 className="text-2xl font-semibold mb-2">Path Generation</h3>
      </div>
    ),
  },
  {
    id: 4,
    title: "Integration",
    description: " Seamlessly connects to your calendar, notes, and flashcards. This ensures that you can easily incorporate learning into your daily routine.",
    icon: "🔄",
    content: (
      <div className="flex justify-center items-center h-full">
        <h3 className="text-2xl font-semibold mb-2">Integration</h3>
      </div>
    ),
  },
];
