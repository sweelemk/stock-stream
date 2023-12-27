import { cn } from "shared/utils";
import Icon from "../icons";

const AvatarSize = {
  1: "w-6 h-6",
  2: "w-8 h-8",
  3: "w-10 h-10",
  4: "w-12 h-12",
  5: "w-16 h-16",
  6: "w-20 h-24",
  7: "w-24 h-24",
  8: "w-32 h-32",
  9: "w-36 h-36",
} as const;

type AvatarProps = {
  size?: keyof typeof AvatarSize;
  url: string | null;
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({ size = 2, url, className }) => {
  return (
    <div className={cn(`${AvatarSize[size]} flex items-center justify-center rounded-full overflow-hidden bg-primary/10`, className)}>
      {url ? (
        <img src={url} alt="avatar" />
      ) : (
        <span className="w-full h-full flex items-center justify-center">
          <Icon name="user" className="w-5 h-5 text-gray-400" />
        </span>
      )}
    </div>
  );
};

export default Avatar;
