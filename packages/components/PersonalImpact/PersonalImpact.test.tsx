import { render, fireEvent } from "@testing-library/react";
import { PersonalImpact } from "./PersonalImpact";
import { createTestId } from "@/common/test-utils/TestID";

const TESTID = createTestId("personal-impact");

describe(PersonalImpact, () => {
  it("should disable subtract button when timespan is less than or equal to 1", () => {
    const { getByTestId } = render(
      <PersonalImpact testID={TESTID.toString()} />
    );

    expect(getByTestId(TESTID.key("add")).getAttribute("disabled")).toBeNull();
    expect(
      getByTestId(TESTID.key("subtract")).getAttribute("disabled")
    ).not.toBeNull();
  });

  it("should enable subtract button when timespan is greater than 1", () => {
    const { getByTestId } = render(
      <PersonalImpact testID={TESTID.toString()} />
    );

    fireEvent.click(getByTestId(TESTID.key("add")));

    expect(getByTestId(TESTID.key("add")).getAttribute("disabled")).toBeNull();
    expect(
      getByTestId(TESTID.key("subtract")).getAttribute("disabled")
    ).toBeNull();
  });

  it.todo("should output correct metric labels based on timespan");
});
