import { HTMLAttributes } from "react";
import { cn } from "shared/utils";
import { SIZES, WEIGHT } from "./constants";


type HeadingOwnProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
  size?: (keyof typeof SIZES);
  weight?: keyof typeof WEIGHT;
};

type HeadingProps = HeadingOwnProps &
  Omit<HTMLAttributes<HTMLHeadElement>, keyof HeadingOwnProps>;

const Heading: React.FC<HeadingProps> = ({
  children,
  as = 'h1',
  size = 3,
  weight = 'medium',
  className,
  ...restProps
}) => {
  const Component: keyof JSX.IntrinsicElements = as;
  const classNames = cn(`${SIZES[size]} ${WEIGHT[weight]}`, className);

  return (
    <Component className={classNames} {...restProps}>
      {children}
    </Component>
  );
};
export default Heading;
