import React, { useState, memo } from "react";
import styled from "styled-components";
import CustomizeInput from "../component/CustomizeInput";
import RadioInput from "../component/RadioInput";
import Select, { SelectItem } from "../component/Select";

const Form: React.FC = (): JSX.Element => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const defaultGradeItems: SelectItem[] = [
    {
      value: "junior consultant",
      text: "Junior Consultant",
      isSelected: false,
    },
    {
      value: "senior consultant",
      text: "Senior Consultant",
      isSelected: false,
    },
    {
      value: "lead consultant",
      text: "Lead Consultant",
      isSelected: false,
    },
  ];
  const defaultSkillItems: SelectItem[] = [
    {
      value: "c++",
      text: "C++",
      isSelected: false,
    },
    {
      value: "javascript",
      text: "Javascript",
      isSelected: false,
    },
    {
      value: "html",
      text: "HTML",
      isSelected: false,
    },
    {
      value: "css",
      text: "CSS",
      isSelected: false,
    },
  ];
  const [gradeItem, setGradeItem] = useState(defaultGradeItems);
  const [skillItem, setSkillItem] = useState(defaultSkillItems);

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
  const handleGradeItemClick: (SelectItem) => void = (selectedItem) => {
    const updatedItems = gradeItem.map((item) => {
      return {
        ...item,
        isSelected: item.value === selectedItem.value,
      };
    });
    setGradeItem(updatedItems);
  };
  const handleSkillItemClick: (SelectItem) => void = (selectedItem) => {
    const updatedItems = skillItem.map((item) => {
      if (item.value === selectedItem.value) {
        return {
          ...item,
          isSelected: !selectedItem.isSelected,
        };
      }
      return { ...item };
    });
    setSkillItem(updatedItems);
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
        <Select
          id="grade"
          name="grade"
          items={gradeItem}
          labelName="Grade"
          placeHolder="please select grade"
          onItemClicked={handleGradeItemClick}
        />
        <Select
          id="skill"
          name="skill"
          items={skillItem}
          labelName="Skill"
          placeHolder="please select skill"
          onItemClicked={handleSkillItemClick}
          isMultiple={true}
        />
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
  .select-container {
    position: relative;
  }
  .select-text {
    padding: 4px;
    border: 1px solid #ddd;
    font-size: 11px;
  }
  .native-select {
    display: none;
  }
  .select-option-container {
    position: absolute;
    top: 23px;
    left: 0px;
    padding: 0;
    list-style: none;
    text-align: left;
    background-color: white;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    z-index: 2;
  }
  .select-option {
    white-space: no-warp;
    border-bottom: 1px solid #ddd;
    padding: 4px 8px;
  }
  .select-option.selected {
    opacity: 0.5;
  }
`;

export default memo(Form);
