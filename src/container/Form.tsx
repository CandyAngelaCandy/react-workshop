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
        <label className="gender">Gender:</label>
        <div>
          <input type="radio" id="male" name="gender" value="male" checked/>
          <label htmlFor="male">male</label>
        </div>
        <div>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">female</label>
        </div>

        <label className="grade" htmlFor="grade-select">
          Grade:
        </label>
        <select name="grade" id="grade-select">
          <option value="Junior Consultant">Junior Consultant</option>
          <option value="Senior Consultant">Senior Consultant</option>
          <option value="Lead Consultant">Lead Consultant</option>
        </select>

        <CustomizeButton firstName={firstName} lastName={LastName} />
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  .title,
  #submit-button,
  .gender,
  .grade,
  .skill {
    display: block;
  }
`;

export default memo(Form);
