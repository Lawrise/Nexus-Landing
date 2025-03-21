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
  id: number;
  className?: string;
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
    id: 1,
    className: "md:col-span-2",
    title: "Note taking",
    description:
      "",
    link: "https://stripe.com",
    icon: <LuFilePen  />,
    replace: ["Notion", "Evernote"],
    withIcon: [<RiNotionFill key={1} />, <RiEvernoteLine key={2} />],
  },
  {
    id: 2,
    title: "Graph view",
    description:
      "Simple to complex link between anythings",
    link: "https://netflix.com",
    icon: <LuGitFork />,
    replace: ["Obsidian", "Roam Research"],
    withIcon: [<SiObsidian key={1} />],
  },
  {
    id: 3,
    title: "Calendar",
    description:
    "Make learning a dayly habit.",
    link: "https://meta.com",
    icon: <LuCalendarDays />,
    blend: ["Google Calendar"],
    withIcon: [<SiGooglecalendar key={1} />],
  },
  {
    id: 4,
    title: "Learning path",
    className: "md:col-span-2",
    description:
      "Don't be lost in your learning journey",
    link: "https://google.com",
    icon: <LuListChecks />,
    replace: ["Passive consumption"],
  },
  {
    id: 5,
    title: "Flashcards",
    className: "md:col-span-2",
    description:
      "Once encoded, never forget it.",
    link: "https://amazon.com",
    icon: <TbCards />,
    replace: ["Anki"],
    withIcon: [<SiAnki key={1} />],
  },
  {
    id: 6,
    title: "LLS integration",
    description:
      "Connect to your favorite learning platform",
    link: "https://microsoft.com",
    icon: <PiStudent />,
    blend: ["Coursera", "Udemy"],
    withIcon: [<SiCoursera key={1} />, <SiUdemy key={2} />],
  },
];

export const ALL_ADVANTAGES = [
  {
    icon: <FaLaptopCode className="text-6xl" />,
    title: "Self taught",
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
