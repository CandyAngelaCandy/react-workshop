import React, { memo } from "react";

type radioInputProps = {
  id: string;
  name: string;
  value: string;
  labelName: string;
  checked: boolean;
  onChange: (event:React.ChangeEvent<HTMLInputElement>) => void
};

const RadioInput: React.FC<radioInputProps> = ({
  labelName,
  checked,
  ...inputProps
}): JSX.Element => {
  return (
    <label htmlFor={inputProps.id}>
      <input type="radio" {...inputProps} />
      {labelName}
    </label>
  );
};

export default memo(RadioInput);
