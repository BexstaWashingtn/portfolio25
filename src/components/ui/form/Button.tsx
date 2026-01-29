"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import control from "@ui/primitives/controls/control.module.css";

type Variant = "primary" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, variant = "primary", className, ...rest }, ref) => {
    const variantClass = variant === "ghost" ? control.ghost : control.primary;

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
