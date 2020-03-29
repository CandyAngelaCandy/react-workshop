import React, { memo } from 'react';

type TCustomizeButtonProps = {
  firstName: string;
  lastName: string;
};

const CustomizeButton: React.FC<TCustomizeButtonProps> = ({
  firstName,
  lastName
}): JSX.Element => {
  const handleSubmit = (): void => {
    alert(firstName + ' ' + lastName);
  };

  return (
    <>
      <button id="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};
export default memo(CustomizeButton);
