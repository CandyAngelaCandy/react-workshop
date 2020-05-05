import React, { memo } from "react";

type TCustomizeInputProps = {
  id: string;
  name: string;
  title: string;
  value: string;
  errorMessage: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomizeInput: React.FC<TCustomizeInputProps> = ({
  title,
  errorMessage,
  ...inputProps
}): JSX.Element => {
  return (
    <>
      <label className="title" htmlFor={inputProps.id}>
        {title}
      </label>
      <input {...inputProps} type="text" />
      {errorMessage && <label className="tip">{errorMessage}</label>}
    </>
  );
};

export default memo(CustomizeInput);
