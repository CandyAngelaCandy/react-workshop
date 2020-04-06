import React, { useState, memo } from 'react';
import styled from 'styled-components';
import CustomizeInput from '../component/CustomizeInput/CustomizeInput';
import CustomizeButton from '../component/CustomizeButton';

export const Form: React.FC = (): JSX.Element => {
  const [firstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');

  return (
    <FormWrapper>
      <h1>Personal Info</h1>
      <form>
        <CustomizeInput
          id="first-name"
          name="firstName"
          title="First name:"
          value={firstName}
          setValue={setFirstName}
        />
        <CustomizeInput
          id="last-name"
          name="lastName"
          title={'Last name:'}
          value={LastName}
          setValue={setLastName}
        />
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
