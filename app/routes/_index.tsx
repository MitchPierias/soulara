import type { MetaFunction } from "@remix-run/node";
import { PersonalImpact } from "packages/components/PersonalImpact";
import { Headline } from "packages/components/Headline";
import { Newsletter } from "@/components/Newsletter";

export const meta: MetaFunction = () => {
  return [
    { title: "Soulara Test" },
    { name: "description", content: "Soulara Test Project" },
  ];
};

export default function Index({
  testID = "home",
}: Readonly<Partial<Common.ComponentProps>>) {
  return (
    <div data-testid={testID}>
      <Headline
        testID={`${testID}.environment`}
        title={"eat. more. plants"}
        subtitle={
          "Soulara makes it easy to enjoy plant-rich meals that leave you feeling energised, joyful and ready to tackle the day."
        }
      />
      <PersonalImpact testID={`${testID}.impact`} />
      <Newsletter testID={`${testID}.newsletter`} />
    </div>
  );
}
