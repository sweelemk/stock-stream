import {
  HomeIcon,
  Bars3Icon,
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { cn } from "shared/utils";
import { Mock } from "./mock";

const IconComponents = {
  home: HomeIcon,
  burger: Bars3Icon,
  user: UserCircleIcon,
  chevronDown: ChevronDownIcon,
  settings: Cog6ToothIcon,
  exit: ArrowLeftOnRectangleIcon,
  mock: Mock,
  close: XMarkIcon
} as const;

export type IconName = keyof typeof IconComponents;

type IconProps = {
  name: IconName;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, className, ...props }) => {
  const Components = IconComponents[name];

  return <Components className={cn("w-5 h-5", className)} {...props} />;
};

export default Icon;
