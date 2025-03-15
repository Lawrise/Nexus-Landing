import { HoverEffect } from "@/components/ui/card-over-effect";
import { LuFilePen } from "react-icons/lu";
import { LuGitFork } from "react-icons/lu";
import { LuListChecks } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { TbCards } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { Pi } from "lucide-react";
import { PiChalkboardTeacherFill } from "react-icons/pi";

const AllFeature: React.FC = () => {
  return (
    <section className="">
      <header className="flex w-full mx-auto mb-8 md:mb-16 justify-between gap-x-8">
        <div className="flex flex-col gap-4 w-4/10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Built to empower
            <br className="block sm:hidden md:block" />
            every learner.
          </h1>
          <p className="text-lg md:text-xl text-neutral-500">
            Define what you want to learn and why it matters to you.
            <br className="hidden md:block" />
            Let us create a learning path that is tailored to you.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 w-10/20">
          <div className="flex flex-col justify-center items-start gap-y-2 text-start px-4">
            <FaLaptopCode className="text-6xl" />
            <h3 className="font-bold">Self taught learner</h3>
            <p className="text-neutral-500">Learn any topic by your own with our learning path feture</p>
          </div>
          <div className="flex flex-col justify-center items-start gap-y-2 text-start px-4">
            <PiStudent className="text-6xl" />
            <h3 className="font-bold">Student</h3>
            <p className="text-neutral-500">Schedule your revision session and add flashcard</p>
          </div>
          <div className="flex flex-col justify-center items-start gap-y-2 text-start px-4">
            <PiChalkboardTeacherFill className="text-6xl" />
            <h3 className="font-bold">Teacher</h3>
            <p className="text-neutral-500">Jsp on a pas de feature pour vous (a venir) mais force</p>
          </div>
        </div>
      </header>
      <HoverEffect items={projects} />
    </section>
  );
};

export default AllFeature;

export const projects = [
  {
    title: "Note taking",
    description:
      "A note-taking app that helps you organize your notes and ideas.",
    link: "https://stripe.com",
    icon: <LuFilePen />,
  },
  {
    title: "Graph view",
    description:
      "A graph visualization tool that helps you understand complex relationships.",
    link: "https://netflix.com",
    icon: <LuGitFork />,
  },
  {
    title: "Learning path",
    description:
      "A learning path that helps you learn new skills and advance your career.",
    link: "https://google.com",
    icon: <LuListChecks />,
  },
  {
    title: "Calendar",
    description:
      "A calendar app that helps you manage your schedule and stay organized.",
    link: "https://meta.com",
    icon: <LuCalendarDays />,
  },
  {
    title: "Flashcards",
    description:
      "A flashcard app that helps you memorize information and study more effectively.",
    link: "https://amazon.com",
    icon: <TbCards />,
  },
  {
    title: "LLS integration",
    description:
      "An integration that connects your learning tools and helps you stay on track.",
    link: "https://microsoft.com",
    icon: <PiStudent />,
  },
];
