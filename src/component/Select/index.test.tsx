import React from "react";
import { render } from "@testing-library/react";
import Select, { SelectItem } from "./index";

describe("test Select component", () => {
  let items: SelectItem[];
  beforeEach(() => {
    items = [
      {
        text: "text1",
        value: "value1",
        isSelected: false,
      },
      {
        text: "text2",
        value: "value2",
        isSelected: false,
      },
      {
        text: "text3",
        value: "value3",
        isSelected: false,
      },
    ];
  });
  test("single choice should init value correctly", () => {
    items[0].isSelected = true;
    const { getByLabelText, getByTitle } = render(
      <Select
        id="mockId"
        onItemClicked={() => {}}
        name="mockName"
        labelName="mockLabelName"
        placeHolder="mockPlaceHolder"
        items={items}
      />
    );
    const label = getByLabelText("mockLabelName");
    const select = getByTitle("mockLabelName") as HTMLSelectElement;

    expect(label).toBeInTheDocument();
    expect(select.selectedOptions.length).toBe(1);
    expect(select.selectedOptions[0].text).toBe("text1");
  });

  test("multiple choice should init value correctly", () => {
    items[0].isSelected = true;
    items[1].isSelected = true;
    const { getByLabelText, getByTitle } = render(
      <Select
        id="mockId"
        onItemClicked={() => {}}
        name="mockName"
        labelName="mockLabelName"
        placeHolder="mockPlaceHolder"
        items={items}
        isMultiple={true}
      />
    );
    const label = getByLabelText("mockLabelName");
    const select = getByTitle("mockLabelName") as HTMLSelectElement;

    expect(label).toBeInTheDocument();
    expect(select.selectedOptions.length).toBe(2);
    expect(select.selectedOptions[0].text).toBe("text1");
    expect(select.selectedOptions[1].text).toBe("text2");
  });
});
