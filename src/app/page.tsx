import React from "react";
import Demonstration from "@/app/component/Demonstration";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-6xl font-bold">Nexus landing !</h1>
        <Demonstration />
    </main>
  );
}
