import React, { useState, memo } from "react";
import styled from "styled-components";
import CustomizeInput from "../component/CustomizeInput";
import MultiSelect from "../component/MultiSelect/MultiSelect";
import RadioInput from "../component/RadioInput";

const Form: React.FC = (): JSX.Element => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (): void => {
    alert(firstName + " " + lastName);
  };
  const handleFirstNameChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (event) => {
    setFirstName(event.currentTarget.value);
  };
  const handleLastNameChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (event) => {
    setLastName(event.currentTarget.value);
  };
  const handleGenderChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (event) => {
    setGender(event.currentTarget.value);
  };

  return (
    <FormWrapper>
      <h1>Personal Info</h1>
      <form onSubmit={handleSubmit}>
        <CustomizeInput
          id="first-name"
          name="firstName"
          title="First name:"
          value={firstName}
          onChange={(event) => {
            handleFirstNameChange(event);
          }}
        />
        <CustomizeInput
          id="last-name"
          name="lastName"
          title={"Last name:"}
          value={lastName}
          onChange={(event) => {
            handleLastNameChange(event);
          }}
        />
        <fieldset>
          <legend>Gender:</legend>
          <RadioInput
            id="male"
            name="gender"
            labelName="Male"
            checked={gender === "male"}
            onChange={handleGenderChange}
            value={gender}
          />
          <RadioInput
            id="female"
            name="gender"
            labelName="Female"
            checked={gender === "female"}
            onChange={handleGenderChange}
            value={gender}
          />
        </fieldset>

        <label className="grade" htmlFor="grade-select">
          Grade:
        </label>
        <select name="grade" id="grade-select">
          <option value="Junior Consultant">Junior Consultant</option>
          <option value="Senior Consultant">Senior Consultant</option>
          <option value="Lead Consultant">Lead Consultant</option>
        </select>
        <MultiSelect />
        <button id="submit-button">Submit</button>
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 160px;
  .title,
  #submit-button,
  .gender,
  .grade,
  .skill {
    display: block;
  }
  .skill-box {
    font-size: 11px;
    height: 19px;
    border: 1px solid rgb(238, 238, 238);
  }
  .skillOption {
    background-color: blue;
  }
  .active {
    background-color: black;
    color: white;
  }
`;

export default memo(Form);
