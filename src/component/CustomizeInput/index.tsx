import React, { memo } from "react";

type TCustomizeInputProps = {
  id: string;
  name: string;
  title: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomizeInput: React.FC<TCustomizeInputProps> = ({
  title,
  ...inputProps
}): JSX.Element => {
  return (
    <>
      <label className="title" htmlFor={inputProps.id}>
        {title}
      </label>
      <input {...inputProps} type="text" />
    </>
  );
};

export default memo(CustomizeInput);
