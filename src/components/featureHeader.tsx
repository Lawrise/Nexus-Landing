import React from "react";

interface FeatureIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col justify-center items-start gap-y-2 text-start px-4">
    {icon}
    <h3 className="font-bold">{title}</h3>
    <p className="text-neutral-500">{description}</p>
  </div>
);

interface FeatureHeaderProps {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const FeatureHeader: React.FC<FeatureHeaderProps> = ({
  title,
  description,
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

export default FeatureHeader;
