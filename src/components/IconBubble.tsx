import { IconType } from "react-icons";

const IconBubble = ({
  position,
  icon: Icon,
  color,
  rotateClass = "",
}: {
  position: string;
  icon: IconType;
  color: string;
  rotateClass?: string;
}) => (
  <div className={`absolute hover:animate-spin ${position}`}>
    <div className={`p-3 bg-white shadow-lg rounded-xl ${rotateClass}`}>
      <Icon className={`${color} text-xl`} aria-label={`${Icon.name} Icon`} />
    </div>
  </div>
);

export default IconBubble;
