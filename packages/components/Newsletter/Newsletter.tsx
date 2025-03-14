import { Button, Input } from "@/elements";
import styles from "./Newsletter.module.css";

interface NewsletterProps extends Common.ComponentProps {}

export const Newsletter = ({ testID, ...props }: NewsletterProps) => {
  return (
    <div data-testid={testID} className={styles.frame}>
      <h1 data-testid={`${testID}.title`} className={styles.title}>
        sign-up for plant-based news & offers
      </h1>
      <div data-testid={`${testID}.form`} className={styles.form}>
        <Input testID={`${testID}.email`} placeholder={"Email"} />
        <Button testID={`${testID}.submit`}>Subscribe</Button>
      </div>
    </div>
  );
};
