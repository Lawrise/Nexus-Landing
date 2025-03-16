"use client";

import React from "react";
import Demonstration from "@/components/Demonstration";
import Hero from "@/components/Hero";
import AllFeature from "@/components/AllFeature";
import LearningPathFeature from "@/components/learningpathFeature";
import HabitFeature from "@/components/habitFeature";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Hero />
      <Demonstration />
      <AllFeature />
      <LearningPathFeature />
      <HabitFeature />
      
      <div className="h-[200px]">test</div>
    </>
  );
}
