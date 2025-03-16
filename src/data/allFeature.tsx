import { RiNotionFill } from "react-icons/ri";
import { SiObsidian } from "react-icons/si";
import { RiEvernoteLine } from "react-icons/ri";
import { SiGooglecalendar } from "react-icons/si";
import { SiAnki } from "react-icons/si";
import { SiCoursera } from "react-icons/si";
import { SiUdemy } from "react-icons/si";
import { LuFilePen } from "react-icons/lu";
import { LuGitFork } from "react-icons/lu";
import { LuListChecks } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { TbCards } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { PiChalkboardTeacherFill } from "react-icons/pi";

export interface FeatureInterface {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  replace?: string[];
  blend?: string[];
  withIcon?: React.ReactNode[];
}

export const FEATURES: FeatureInterface[] = [
  {
    title: "Note taking",
    description:
      "A note-taking app that helps you organize your notes and ideas.",
    link: "https://stripe.com",
    icon: <LuFilePen className="text-red-500" />,
    replace: ["Notion", "Evernote"],
    withIcon: [<RiNotionFill key={1} />, <RiEvernoteLine key={2} />],
  },
  {
    title: "Graph view",
    description:
      "A graph visualization tool that helps you understand complex relationships.",
    link: "https://netflix.com",
    icon: <LuGitFork className="text-blue-500" />,
    replace: ["Obsidian", "Roam Research"],
    withIcon: [<SiObsidian key={1} />],
  },
  {
    title: "Learning path",
    description:
      "A learning path that helps you learn new skills and advance your career.",
    link: "https://google.com",
    icon: <LuListChecks className="text-green-500" />,
  },
  {
    title: "Calendar",
    description:
      "A calendar app that helps you manage your schedule and stay organized.",
    link: "https://meta.com",
    icon: <LuCalendarDays className="text-yellow-500" />,
    blend: ["Google Calendar"],
    withIcon: [<SiGooglecalendar key={1} />],
  },
  {
    title: "Flashcards",
    description:
      "A flashcard app that helps you memorize information and study more effectively.",
    link: "https://amazon.com",
    icon: <TbCards className="text-fuchsia-500" />,
    replace: ["Anki"],
    withIcon: [<SiAnki key={1} />],
  },
  {
    title: "LLS integration",
    description:
      "An integration that connects your learning tools and helps you stay on track.",
    link: "https://microsoft.com",
    icon: <PiStudent className="text-orange-500" />,
    blend: ["Coursera", "Udemy"],
    withIcon: [<SiCoursera key={1} />, <SiUdemy key={2} />],
  },
];

export const TARGET_USERS = [
  {
    icon: <FaLaptopCode className="text-6xl" />,
    title: "Self taught learner",
    description: "Learn any topic by your own with our learning path feature",
  },
  {
    icon: <PiStudent className="text-6xl" />,
    title: "Student",
    description: "Schedule your revision session and add flashcard",
  },
  {
    icon: <PiChalkboardTeacherFill className="text-6xl" />,
    title: "Teacher",
    description: "Jsp on a pas de feature pour vous (a venir) mais force",
  },
];
