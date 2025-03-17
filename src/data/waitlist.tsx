import { PiCalendar, PiHourglassHigh, PiTrophy } from "react-icons/pi";

export interface FormData {
  email: string;
  name: string;
  reason: string;
}

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