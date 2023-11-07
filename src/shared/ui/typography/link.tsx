import { Link as RouterLink, LinkProps } from "react-router-dom";
import { cn } from "shared/utils";

const Link: React.FC<LinkProps> = ({children, className, rel, ...restProps}) => {
  const classNames = cn("text-primary hover:text-primary/90", className);
  const mergedProps = {
    ...restProps,
    rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel,
  };

  return (
    <RouterLink className={classNames} {...mergedProps}>{children}</RouterLink>
  )
}
export default Link;