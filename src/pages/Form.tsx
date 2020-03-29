import React, { useState, memo } from 'react';
import styled from 'styled-components';
import CustomizeInput from '../component/CustomizeInput';
import CustomizeButton from '../component/CustomizeButton';

export const Form: React.FC = (): JSX.Element => {
  const [firstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');

  return (
    <FormWrapper>
      <h1>Personal Info</h1>
      <form>
        <label className="title">First name:</label>
        <CustomizeInput value={firstName} setValue={setFirstName} />
        <label className="title">Last name:</label>
        <CustomizeInput value={LastName} setValue={setLastName} />
        <CustomizeButton firstName={firstName} lastName={LastName} />
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  .title,
  #submit-button {
    display: block;
  }
`;

export default memo(Form);
