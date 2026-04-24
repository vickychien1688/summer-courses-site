import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-orange",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-orange text-white hover:bg-brand-orange/90 shadow-sm",
        outline:
          "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange/10",
        ghost: "text-brand-brown hover:bg-brand-orange/10",
      },
      size: {
        md: "h-10 px-5",
        lg: "h-12 px-7 text-base",
        sm: "h-8 px-4 text-xs",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button };
