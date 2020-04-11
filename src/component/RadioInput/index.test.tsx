import { fireEvent, render } from "@testing-library/react";
import RadioInput from "./index";
import React from "react";

describe("test RadioInput component", () => {
  test("component should init input value and label", () => {
    const { getByLabelText, getByDisplayValue } = render(
      <RadioInput
        id="mockId"
        labelName="mockLabelName"
        checked={false}
        value="mockValue"
        name="mockName"
        onChange={() => {}}
      />
    );
    const label = getByLabelText("mockLabelName");
    const input = getByDisplayValue("mockValue");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("component should pass correct value when input change value", (done) => {
    const handerInputChange: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => void = (event) => {
      expect(event.currentTarget.value).toBe("mockValueB");
      expect(event.currentTarget.checked).toBe(true);
      done();
    };

    const { getByDisplayValue } = render(
      <>
        <RadioInput
          id="mockIdA"
          labelName="mockLabelNameA"
          checked={false}
          value="mockValueA"
          name="mockName"
          onChange={handerInputChange}
        />
        <RadioInput
          id="mockIdB"
          labelName="mockLabelNameB"
          checked={false}
          value="mockValueB"
          name="mockName"
          onChange={handerInputChange}
        />
      </>
    );

    const input = getByDisplayValue("mockValueB");

    fireEvent.click(input);
  });
});
