import styles from "./Headline.module.css";
import clsx from "classnames";

interface HeadlineProps extends Common.ComponentProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Headline = ({ testID, ...props }: HeadlineProps) => {
  return (
    <div data-testid={testID} className={clsx(props.className, styles.frame)}>
      <h1 data-testid={`${testID}.title`} className={styles.title}>
        {props.title}
      </h1>
      <p data-testid={`${testID}.subtitle`} className={styles.subtitle}>
        {props.subtitle}
      </p>
    </div>
  );
};
