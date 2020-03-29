import React, { memo } from 'react';

type TCustomizeInputProps = {
  value: string;
  setValue: Function;
};

const CustomizeInput: React.FC<TCustomizeInputProps> = ({
  value,
  setValue
}): JSX.Element => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLTextAreaElement;
    setValue(target.value);
  };
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
    </>
  );
};

export default memo(CustomizeInput);
