import React from "react";
import Demonstration from "@/components/Demonstration";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center py-8">
        <Hero />
        <Demonstration />
    </main>
  );
}
