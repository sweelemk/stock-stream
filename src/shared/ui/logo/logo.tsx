import logo from "shared/assets/images/logo.svg";
import { cn } from "shared/utils";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

const Logo: React.FC<LogoProps> = ({className, ...props}) => {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
