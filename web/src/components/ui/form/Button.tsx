"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import control from "@ui/primitives/controls/control.module.css";

type Variant =
  | "primary"
  | "secondary"
  | "ghost"
  | "icon-primary"
  | "icon-secondary";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, variant = "primary", className, ...rest }, ref) => {
    const variantClassMap: Record<Variant, string> = {
      primary: control.primary,
      secondary: control.secondary,
      ghost: control.ghost,
      "icon-primary": control.iconPrimary,
      "icon-secondary": control.iconSecondary,
    };

    const variantClass = variantClassMap[variant];

    return (
      <button
        ref={ref}
        className={clsx(control.control, variantClass, className)}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;
