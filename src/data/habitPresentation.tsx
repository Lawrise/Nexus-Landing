import { PiCalendarDots, PiHourglassHighFill, PiTrophy } from "react-icons/pi";

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
	description:
	  "Learn in bite-sized sessions without burnout. ",
  },
  {
	icon: <PiTrophy className="text-6xl" />,
	title: "See Your Growth",
	description: "Track streaks and milestones to stay motivated.",
  },
];
