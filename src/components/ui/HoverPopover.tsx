"use client";
import React, { useRef, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SubmenuItem } from "@/data";

interface MenuItemProps {
  title: string;
  link?: string;
  submenu?: SubmenuItem[];
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  link,
  submenu,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  if (!submenu || submenu.length === 0) {
    return (
      <Link href={link || "#"}>
        <Button
          variant="ghost"
          className="h-8 px-3 py-2 text-sm font-normal hover:bg-gray-100 rounded-md"
        >
          <span className="text-gray-800">{title}</span>
        </Button>
      </Link>
    );
  }

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 px-3 py-2 text-sm font-normal hover:bg-gray-100 rounded-md"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-gray-800">{title}</span>
          {isOpen ? (
            <ChevronUp className="h-4 w-4 ml-1 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 ml-1 text-gray-500" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-64 p-1 bg-white shadow-lg border border-gray-200 rounded-md mt-1"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="py-1">
          {submenu?.map((item) => (
            <Link
              key={item.title}
              target="_blank"
              href={item.link}
              className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-md group"
            >
              {item.icon && (
                <div className="flex justify-center items-center mr-3 text-neutral-500 border border-neutral-200 p-2 rounded-md bg-white">
                  {item.icon}
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800">
                  {item.title}
                </span>
                {item.description && (
                  <span className="text-xs text-gray-500 mt-0.5">
                    {item.description}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MenuItem;
