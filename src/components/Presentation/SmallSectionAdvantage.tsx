interface SectionAdvantageProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const SmallSectionAdvantage: React.FC<SectionAdvantageProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex gap-2 flex-grow">
    <div className="text-base mr-4">{icon}</div>
    <div className="flex flex-col gap-1 flex-grow">
      <h3 className="font-bold">{title}</h3>
      <p className="text-neutral-500 text-sm font-semibold">{description}</p>
    </div>
  </div>
);
