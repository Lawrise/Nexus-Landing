"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const DemoTab = [
  {
    id: 1,
    title: "Notes taking",
    bgColor: "bg-teal-500",
    content: "Screenshot of the notes taking feature",
  },
  {
    id: 2,
    title: "Learning path",
    bgColor: "bg-blue-500",
    content: "Screenshot of the learning path feature",
  },
  {
    id: 3,
    title: "Peer to peer",
    bgColor: "bg-purple-500",
    content: "Screenshot of the peer to peer feature",
  },
];

const Demonstration = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  // Get the current active tab data
  const activeTabData = DemoTab.find(tab => tab.id === activeTab) || DemoTab[0];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div 
            className={`flex justify-center items-center h-[500px] lg:h-[700px] w-full max-w-4xl rounded-lg shadow-xl mb-12 overflow-hidden transition-colors duration-500 ${activeTabData.bgColor}`}
          >
            <p className="text-white text-xl font-medium">{activeTabData.content}</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {DemoTab.map((tab) => {
              return (
                <Button 
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  onClick={() => setActiveTab(tab.id)}
                  className={`transition-all duration-300 ${
                    activeTab === tab.id ? "scale-105" : ""
                  }`}
                >
                  {tab.title}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demonstration;