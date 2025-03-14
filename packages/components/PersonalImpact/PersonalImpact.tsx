import { useMemo, useState } from "react";
import styles from "./PersonalImpact.module.css";
import { calculatePlantBasedSavings } from "@/common/calculators/calculatePlantBasedSavings";
import { Button } from "@/elements";

export const PersonalImpact = ({ testID }: Common.ComponentProps) => {
  const [years, setYears] = useState(1);

  const metrics = useMemo(
    () => calculatePlantBasedSavings(years * 365),
    [years]
  );

  const increaseTimeRange = () => setYears((prev) => prev + 1);
  const decreaseTimeRange = () => setYears((prev) => prev - 1);

  return (
    <div data-testid={testID} className={styles.frame}>
      <div data-testid={`${testID}.header`} className={styles.header}>
        <h1 data-testid={`${testID}.header`} className={styles.header}>
          {"How much difference can you make?"}
        </h1>
        <h2 data-testid={`${testID}.subheader`} className={styles.subheader}>
          {`A person following a plant based diet for ${years} year${
            years !== 1 ? "s" : ""
          } can save:`}
        </h2>
        <div data-testid={`${testID}.controls`} className={styles.controls}>
          <Button
            testID={`${testID}.subtract`}
            onClick={decreaseTimeRange}
            disabled={years <= 1}
          >
            Say less
          </Button>
          <Button testID={`${testID}.add`} onClick={increaseTimeRange}>
            Do more
          </Button>
        </div>
      </div>
      {metrics.map((section, index) => (
        <div
          data-testid={`${testID}.section`}
          key={`section-${index}`}
          className={styles.section}
        >
          <h2 data-testid={`${testID}.title`}>{section.title}</h2>
          <p data-testid={`${testID}.body`}>{section.description}</p>
        </div>
      ))}
    </div>
  );
};
