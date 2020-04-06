import React, { memo } from 'react';

type TCustomizeInputProps = {
  id: string;
  name: string;
  title: string;
  value: string;
  setValue: Function;
};

const CustomizeInput: React.FC<TCustomizeInputProps> = ({
  id,
  name,
  title,
  value,
  setValue
}): JSX.Element => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLTextAreaElement;
    setValue(target.value);
  };
  return (
    <>
      <label className="title" htmlFor={id}>
        {title}
      </label>
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

// @ts-ignore
export default memo(CustomizeInput);
