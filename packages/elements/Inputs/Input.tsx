import { forwardRef } from "react";
import style from "./Input.module.css";

interface InputProps<T = string> extends Common.ComponentProps {
  variant?: Common.Variants;
  value: T;
  onChange: (value: T) => void;
}

export const Input = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<InputProps>
>(({ testID, variant = "primary", ...props }, ref) => {
  // ! Destructure custom props from the `props` object before passing it to the root input element.
  return <input data-testid={testID} className={style.frame} type="text" />;
});
