import { forwardRef } from "react";
import styles from "./Button.module.css";
import clsx from "classnames";

interface ButtonProps
  extends Common.ComponentProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: Common.Variants;
  disabled?: boolean;
}

export const Button = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>(({ testID, variant = "primary", ...props }, ref) => {
  // ! Destructure custom props from the `props` object before passing it to the root button element.
  return (
    <button
      ref={ref}
      {...props}
      data-testid={testID}
      className={clsx(
        styles.frame,
        styles[variant],
        props.disabled && styles.disabled
      )}
    >
      {props.label || props.children}
    </button>
  );
});
