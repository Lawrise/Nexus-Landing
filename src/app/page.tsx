"use client";

import React from "react";
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
      <AllFeature />
      <div className="py-20 bg-neutral-50 rounded-4xl">
        {PRESENTATIONS.map((presentation, index) => (
          <Presentation key={index} {...presentation} />
        ))}
      </div>
      <Cta />
      <Faq />
      <NotionLikeWaitlist />
    </>
  );
}
