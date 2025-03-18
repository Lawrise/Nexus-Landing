import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { LuArrowRight } from "react-icons/lu";
import { cn } from "@/lib/utils";

interface FeatureIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const FeatureIcon: React.FC<FeatureIconProps> = ({
  icon,
  title,
  description,
  className,
}) => (
  <div className={cn("flex flex-col gap-2 flex-grow", className)}>
    {icon}
    <h3 className="font-bold">{title}</h3>
    <p className="text-neutral-500 text-base font-semibold">{description}</p>
  </div>
);

interface SectionHeaderProps {
  title: string;
  description: string;
  link?: {
    title: string;
    href: string;
  };
  items: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  link,
  items,
}) => (
  <header className="grid grid-cols-13 w-full mb-8 items-end">
    <div className="flex flex-col gap-4 col-start-1 col-span-full md:col-span-6 mr-8 text-start">
      <h1 className="text-5xl sm:text-6xl w-3/4 font-bold text-start xl-text-center">
        {title}
        <br className="block sm:hidden md:block" />
      </h1>
      <p className="text-lg font-semibold text-neutral-500">
        {description}
        <br className="hidden md:block" />
      </p>
      {link && (
        <Link href={link.href} className="flex justify-start group p-0 w-full">
          <Button
            variant="link"
            className="text-primary px-0 mx-0 text-md md:text-base  xl:text-lg justify-start"
          >
            {link.title}
            <LuArrowRight className="group-hover:translate-x-1 transform transition-all duration-300" />
          </Button>
        </Link>
      )}
    </div>
    <ul className="hidden md:grid grid-cols-3 col-start-7 col-span-7 gap-4 ">
      {items.map((item, index) => (
        <li key={index} className="flex flex-col flex-grow flex- justify-end">
          <FeatureIcon
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  </header>
);

export default SectionHeader;
