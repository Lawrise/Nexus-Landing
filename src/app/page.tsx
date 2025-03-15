"use client";

import React from "react";
import Demonstration from "@/components/Demonstration";
import Hero from "@/components/Hero";
import LearningPathFeature from "@/components/LearningPathFeature/LearningPathFeature";
import AllFeature from "@/components/AllFeature";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-8 md:gap-y-48 row-start-2 items-center py-8 px-8 sm:px-16 md:px-32 xl:px-64 relative">
      <Hero />
      <Demonstration />
      <AllFeature />
      <LearningPathFeature />
      <div className="h-[200px]">test</div>
    </main>
  );
}
