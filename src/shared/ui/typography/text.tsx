import React, { HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "shared/utils";
import { VariantProps, cva } from "class-variance-authority";

const textVariants = cva("", {
  variants: {
    size: {
      1: "text-xs",
      2: "text-sm",
      3: "text-base",
      4: "text-lg",
      5: "text-xl",
      6: "text-2xl",
      7: "text-3xl",
      8: "text-4xl",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: 3,
    weight: "normal",
  },
});

type TextSpanProps = { as?: 'span'; asChild?: never };
type TextDivProps = { as: 'div'; asChild?: never };
type TextLabelProps = { as: 'label'; asChild?: never };
type TextPProps = { as: 'p'; asChild?: never };

type TextProps = VariantProps<typeof textVariants> &
  (HTMLAttributes<HTMLSpanElement> & TextSpanProps |
  HTMLAttributes<HTMLDivElement> & TextDivProps|
  HTMLAttributes<HTMLLabelElement> & TextLabelProps | 
  HTMLAttributes<HTMLParagraphElement> & TextPProps);

const Text = React.forwardRef<React.ElementRef<'span'>, TextProps>(
  ({ asChild, as: Tag = 'span', size, weight, className, children,  ...restProps }, ref) => {
    return (
      <Slot
        ref={ref}
        className={cn(textVariants({ size, weight, className }))}
        {...restProps}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  }
);

export default Text;
