import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon: React.ReactNode;
    replace?: string[];
    blend?: string[];
    withIcon?: React.ReactNode[];
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  flex flex-col h-full w-full p-4"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-blue-50 dark:bg-slate-800/[0.8] block  rounded-4xl"
                layoutId="hoverBackground"
                initial={{ opacity: 1 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.5 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="w-full flex justify-start items-center text-4xl">
              {item.icon}
            </div>
            <div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="hidden md:block">
                {item.description}
              </CardDescription>
            </div>
            {item.replace && (
              <div className=" items-start justify-start space-x-2 hidden md:flex flex-col">
                <p className="font-semibold">Like</p>
                <div className="flex items-start space-x-1">

                {item.withIcon &&
                  item.withIcon.map((icon, index) => (
                    <span key={index} className="flex items-center space-x-1">
                      {icon}
                      <span>{item.replace ? item.replace[index] : ""}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
            {item.blend && (
              <div className=" items-start justify-start space-x-2 hidden md:flex flex-col">
                <p className="font-semibold">Linked to</p>
                {item.withIcon &&
                  item.withIcon.map((icon, index) => (
                    <span key={index} className="flex items-start space-x-1">
                      {icon}
                      <span>{item.blend ? item.blend[index] : ""}</span>
                    </span>
                  ))}
              </div>
            )}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-4xl h-60 w-full p-8 flex flex-col justify-around bg-white text-start overflow-hidden  dark:border-white/[0.2]  relative z-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-lg mb-2 font-bold tracking-wide", className)}>{children}</h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("tracking-wide leading-relaxed text-base text-neutral-500", className)}>
      {children}
    </p>
  );
};
