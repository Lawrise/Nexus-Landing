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
  <div className={cn("flex flex-col justify-center items-start gap-y-2 text-start px-4", className)}>
    {icon}
    <h3 className="font-bold">{title}</h3>
    <p className="text-neutral-500">{description}</p>
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
  <header className="flex w-full mx-auto mb-8 md:mb-16 justify-between gap-x-8">
    <div className="flex flex-col gap-4 w-4/10">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
        {title}
        <br className="block sm:hidden md:block" />
      </h1>
      <p className="text-lg md:text-xl text-neutral-500">
        {description}
        <br className="hidden md:block" />
      </p>
      {link && (
        <Link
          href={link.href}
          className="flex items-center justify-start group p-0"
        >
          <Button
            variant="link"
            className="text-primary px-0 mx-0 text-lg justify-start"
          >
            {link.title}
            <LuArrowRight className=" group-hover:translate-x-1 transform transition-all duration-300" />
          </Button>
        </Link>
      )}
    </div>
    <div className="grid grid-cols-3 gap-4 w-10/20">
      {items.map((item, index) => (
        <FeatureIcon
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  </header>
);

export default SectionHeader;
