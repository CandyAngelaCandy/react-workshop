import React, { memo, useEffect, useState } from "react";

export type SelectItem = {
  text: string;
  value: string;
  isSelected: boolean;
};

type SelectProps = {
  id: string;
  labelName: string;
  name: string;
  isMultiple?: boolean;
  items: SelectItem[];
  onItemClicked: (SelectItem) => void;
  placeHolder: string;
};

const Select: React.FC<SelectProps> = ({
  id,
  labelName,
  name,
  isMultiple,
  items,
  onItemClicked,
  placeHolder,
}) => {
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const selectedValues = items
    .filter((item) => item.isSelected)
    .map((item) => item.value);
  const selectedText = items
    .filter((item) => item.isSelected)
    .map((item) => item.text)
    .join(";");
  useEffect(() => {
    document.addEventListener("click", () => {
      setIsOpenOptions(false);
    });
  });

  return (
    <div className="select-container">
      <label className="title" htmlFor={id}>{labelName}</label>
      <div
        className="select-text"
        onClick={(event) => {
          event.nativeEvent.stopImmediatePropagation();
          setIsOpenOptions(!isOpenOptions);
        }}
      >
        {selectedText ? selectedText : placeHolder}
      </div>
      {isOpenOptions && (
        <ul className="select-option-container">
          {items.map((item) => {
            return (
              <li
                key={item.value}
                onClick={(event) => {
                  if (isMultiple) {
                    event.nativeEvent.stopImmediatePropagation();
                  }
                  onItemClicked(item);
                }}
                className={`select-option ${item.isSelected ? "selected" : ""}`}
              >
                {item.text}
              </li>
            );
          })}
        </ul>
      )}
      <select
        id={id}
        value={isMultiple ? selectedValues : selectedValues.join(";")}
        title={labelName}
        name={name}
        onChange={() => {}}
        multiple={isMultiple}
        className="native-select"
      >
        {items.map((item) => {
          return (
            <option value={item.value} key={item.value} onClick={onItemClicked}>
              {item.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default memo(Select);
