"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const DemoTab = [
  {
    id: 1,
    title: "Notes taking",
    borderColor: "border-teal-500",
    content: "Screenshot of the notes taking feature",
    more: "More about notes taking",
    detail:
      "Capture ideas, organize lesson, and stay on track. A flexible note-taking tool that adapts to your flow.",
  },
  {
    id: 2,
    title: "Learning path",
    borderColor: "border-blue-500",
    content: "Screenshot of the learning path feature",
    more: "More about learning path",
    detail:
      "Design your perfect learning path. Set goals, track progress, and discover what to learn next.",
  },
  {
    id: 3,
    title: "Calendar",
    borderColor: "border-purple-500",
    content: "Screenshot of the calendar feature",
    more: "More about calendar",
    detail:
      "Make learning a habit. Schedule study sessions, set reminders, and never miss a deadline.",
  },
  {
    id: 4,
    title: "Flashcards",
    borderColor: "border-yellow-500",
    content: "Screenshot of the flashcard feature",
    more: "More about flashcards",
    detail:
      "Retain information faster and longer with flashcard and active recall.",
  },
];

const Demonstration = () => {
  const [activeTab, setActiveTab] = useState(1);

  const activeTabData =
    DemoTab.find((tab) => tab.id === activeTab) || DemoTab[0];

  return (
    <section className="w-full flex flex-col">
      {/* Image/Content Section */}
      <div className="flex gap-8 mb-8 justify-center">
        <div
          className={`relative w-full rounded-lg shadow-xl overflow-hidden transition-colors duration-500 border border-double ${activeTabData.borderColor} aspect-video`} // Using aspect-video class for 16:9 aspect ratio
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-base font-semibold">{activeTabData.content}</p>
          </div>
        </div>
      </div>

      {/* Tab Buttons Section */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {DemoTab.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "outline" : "ghost"}
            onClick={() => setActiveTab(tab.id)}
            className={`transition-color duration-300 ${activeTab === tab.id ? "scale-105" : ""}`}
            aria-selected={activeTab === tab.id ? "true" : "false"}
            aria-label={`Tab: ${tab.title}`}
          >
            {tab.title}
          </Button>
        ))}
      </div>

      {/* Detailed Content Section */}
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-center text-lg text-neutral-500 font-semibold hidden sm:block px-40">{activeTabData.detail}</p>
        <Button
          variant="link"
          className="group hover:-translate-y-1 transform transition-all w-56 duration-300 font-bold py-1 mt-4"
        >
          {activeTabData.more}
          <ChevronRight className="group-hover:translate-x-0.5 transform transition-all duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default Demonstration;
