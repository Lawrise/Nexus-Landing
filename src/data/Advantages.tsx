import { LuChartNoAxesCombined } from "react-icons/lu";
import {
  PiCalendar,
  PiCalendarDots,
  PiCompass,
  PiHourglassHigh,
  PiHourglassHighFill,
  PiTarget,
  PiTrophy,
  PiChartBar,
  PiHandshake,
  PiCheckSquare,
  PiBrain,
  PiMagnifyingGlass,
} from "react-icons/pi";
import { PiGraph } from "react-icons/pi";

export interface BeneficesInterface {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const HABIT_ADVANTAGES = [
  {
    icon: <PiCalendarDots className="text-6xl" />,
    title: " Stay on Track",
    description: "Set goals and get gentle nudges to keep learning.",
  },
  {
    icon: <PiHourglassHighFill className="text-6xl" />,
    title: "See Progress",
    description: "Learn in bite-sized sessions without burnout. ",
  },
  {
    icon: <PiTrophy className="text-6xl" />,
    title: "See Your Growth",
    description: "Track streaks and milestones to stay motivated.",
  },
];

export const PATH_ADVANTAGES = [
  {
    icon: <PiCompass className="text-6xl" />,
    title: "No more guesswork",
    description: "Learn any topic by your own with our learning path feature",
  },
  {
    icon: <PiTarget className="text-6xl" />,
    title: "Learn efficiently",
    description:
      "Focus on the right next step, not just consuming more content.",
  },
  {
    icon: <LuChartNoAxesCombined className="text-6xl" />,
    title: "Stay motivated",
    description: "Track progress and see how each concept connects.",
  },
];

export const PROJECT_ADVANTAGES = [
  {
    icon: <PiCheckSquare className="text-6xl" />,
    title: "Knowledge to action",
    description:
      "Link notes to actionable tasks and goals and turn knowledge into real-world skills.",
  },
  {
    icon: <PiBrain className="text-6xl" />,
    title: "Stay Motivated & Retain More",
    description:
      "Make learning active, engaging, and unforgettable.",
  },
  {
    icon: <PiHandshake className="text-6xl" />,
    title: "Collaborate & Organize",
    description:
      "Use templates, task tools, and shared workspaces to achieve more, together.",
  },
];

export const VISUAL_ADVANTAGES = [
  {
    icon: <PiGraph className="text-6xl" />,
    title: "Interactive graphs",
    description:
      "Connect your knowledge and define how concepts relate to each other.",
  },
  {
    icon: <PiChartBar className="text-6xl" />,
    title: " Boost Memory",
    description: "Map knowledge to organize, retain, and recall information better.",
  },
  {
    icon: <PiMagnifyingGlass className="text-6xl" />,
    title: "Explore and discover",
    description:
      "Explore hidden patterns and dive deeper into related topics effortlessly.",
  },
];

export const WAIT_LIST_ADVANTAGE = [
  {
    icon: <PiCalendar className="text-6xl" />,
    title: "Early Access",
    description: "Get early access to our product before anyone else.",
  },
  {
    icon: <PiHourglassHigh className="text-6xl" />,
    title: "Updates",
    description: "Get updates on our progress and new features.",
  },
  {
    icon: <PiTrophy className="text-6xl" />,
    title: "Help Shape the Product",
    description: "Share your feedback and help us build a better product.",
  },
];
