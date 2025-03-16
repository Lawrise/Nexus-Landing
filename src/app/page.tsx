"use client";

import React from "react";
import Demonstration from "@/components/Demonstration";
import Hero from "@/components/Hero/Hero";
import AllFeature from "@/components/Presentation/AllFeatureSection";
import LearningPathFeature from "@/components/Presentation/LearningPathSection";
import HabitFeature from "@/components/Presentation/HabitSection";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import NotionLikeWaitlist from "@/components/Waitlist";

export default function Home() {
  return (
    <>
      <Hero />
      <Demonstration />
      <AllFeature />
      <LearningPathFeature />
      <HabitFeature />
      <Cta />
      <Faq />
      <NotionLikeWaitlist />
      <div className="h-[200px]">test</div>
    </>
  );
}
