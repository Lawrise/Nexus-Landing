import React, { JSX } from "react";
import { LuNetwork } from "react-icons/lu";
import { LuFilePen } from "react-icons/lu";
import { LuBrainCircuit } from "react-icons/lu";
import { LuMicroscope } from "react-icons/lu";
import { LuUsers, LuMail, LuPenTool } from "react-icons/lu";
import { FaDiscord } from "react-icons/fa6";

export interface SubmenuItem {
	title: string;
	description?: string;
	link: string;
	icon: JSX.Element | string;
}

export const ProductSubmenu: SubmenuItem[] = [
	{
		title: 'IA',
		description: 'Intelligence Artificielle',
		link: '/ia',
		icon: <LuBrainCircuit className="h-full w-full"/>,
	},
	{
		title: 'Powerful Editor',
		description: 'Editeur puissant',
		link: '/powerful-editor',
		icon: <LuFilePen className="h-full w-full"/>,
	},
	{
		title: 'Living Graph',
		description: 'Graph vivant',
		link: '/living-graph',
		icon: <LuNetwork className="h-full w-full"/>,
	},
	{
		title: 'Learning',
		description: 'Apprentissage',
		link: '/learning',
		icon: <LuMicroscope className="h-full w-full"/>,
	},
	{
		title: 'Social et Collab',
		description: 'Social et Collaboration',
		link: '/social-et-collab',
		icon: <LuUsers className="h-full w-full"/>,
	},
]

export const CommunitySubmenu: SubmenuItem[] = [
	{
		title: 'Discord',
		description: 'Join our Discord',
		link: 'https://discord.gg/ukQnD5ZpKr',
		icon: <FaDiscord className="h-full w-full"/>,
	},
	{
		title: 'Blog',
		description: 'Learn about neuroscience study techniques',
		link: '/blog',
		icon: <LuPenTool className="h-full w-full"/>,
	},
	{
		title: 'Newsletter',
		description: 'Newsletter',
		link: '/newsletter',
		icon: <LuMail className="h-full w-full"/>,
	},
]



