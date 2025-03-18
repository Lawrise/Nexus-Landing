"use client";

import React from "react";
import Demonstration from "@/components/Demonstration";
import Hero from "@/components/Hero/Hero";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import NotionLikeWaitlist from "@/components/Waitlist";
import Presentation from "@/components/Presentation/Presentation";
import PRESENTATIONS from "@/data/presentations";
import AllFeature from "@/components/Presentation/AllFeatureSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Demonstration />
      <AllFeature />
      {PRESENTATIONS.map((presentation, index) => (
        <Presentation key={index} {...presentation} />
      ))}
      <Cta />
      <Faq />
      <NotionLikeWaitlist />
    </>
  );
}
