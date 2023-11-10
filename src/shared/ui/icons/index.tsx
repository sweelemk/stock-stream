import { HomeIcon } from "@heroicons/react/24/outline";
import { cn } from "shared/utils";
import { Mock } from "./mock";

const IconComponents = {
  home: HomeIcon,
  mock: Mock
} as const;

export type IconName = keyof typeof IconComponents;

type IconProps = {
  name: IconName;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, className, ...props}) => {
  const Components = IconComponents[name];

  return <Components className={cn('w-6 h-6', className)} {...props}/>;
};

export default Icon;
