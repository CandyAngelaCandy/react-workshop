import React, { useState, memo, useEffect, useRef } from "react";
import styled from "styled-components";
import CustomizeInput from "../component/CustomizeInput";
import RadioInput from "../component/RadioInput";
import Select, { SelectItem } from "../component/Select";
import axios from "axios";
import _ from "lodash";
import useSingleSelect from "../component/CustomizeHooks/useSingleSelect";
import useMultipleSelect from "../component/CustomizeHooks/useMultipleSelect";
import useProvinceCitys from "../component/CustomizeHooks/useProvinceCitys";
import useNameInput from "../component/CustomizeHooks/useNameInput";
import { PROVINCE_META_DATA, ProvinceName } from "../constant/citys";

type ProvinceItem = {
  text: string;
  value: string;
  isSelected: boolean;
  city: SelectItem[];
};

const Form: React.FC = (): JSX.Element => {
  const [firstName, setFirstName, firstNameErrorMessage] = useNameInput("");
  const [lastName, setLastName, lastNameErrorMessage] = useNameInput("");

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
  const [gradeItems, setSelectedGrade] = useSingleSelect(defaultGradeItems);
  const [skillItems, setSelectedSkill] = useMultipleSelect(defaultSkillItems);

  const [citys, setProvince] = useProvinceCitys("");
  const defaultProvinceItems = PROVINCE_META_DATA.map((province) => ({
    value: province.id,
    text: province.name,
    isSelected: false,
  }));
  const defaultCityItem = citys.map((city) => ({
    value: city.id,
    text: city.name,
    isSelected: false,
  }));

  const [cityItems, setSelectedCity, resetCityItems] = useSingleSelect(
    defaultCityItem
  );
  const [provinceItems, setSelectedProvince] = useSingleSelect(
    defaultProvinceItems
  );
  useEffect(() => {
    if (citys.length === 0) return;
    const isCitysChanged = !citys.some((city) => {
      cityItems.find((cityItem) => cityItem.value === city.id);
    });
    if (isCitysChanged) {
      const newCityItems = citys.map((city) => ({
        value: city.id,
        text: city.name,
        isSelected: false,
      }));
      resetCityItems(newCityItems);
    }
  }, [citys]);

  const [isDisableSubmit, setIsDisableSubmit] = useState(true);
  const [skillValue, setSkillValue] = useState("");
  const [gradeValue, setGradeValue] = useState("");
  const [provinceValue, setProvinceValue] = useState("");
  const [cityValue, setCityValue] = useState("");

  useEffect(() => {
    validateForm();
  });
  const handleSubmit = (): void => {
    axios
      .post(`http://localhost:3000/employees/`, {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        grade: gradeValue,
        skills: skillValue,
        province: provinceValue,
        city: cityValue,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    window.open(`http://localhost:3000/employees/`);
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
  const validateForm = () => {
    let isFirstNameValid = true;
    let isLastNameValid = true;
    if (!firstName || !/^[a-zA-Z]*$/.test(firstName)) {
      isFirstNameValid = false;
    }
    if (!lastName || !/^[a-zA-Z]*$/.test(lastName)) {
      isLastNameValid = false;
    }
    if (
      !isFirstNameValid ||
      !isLastNameValid ||
      !gradeValue ||
      !cityValue ||
      !provinceValue ||
      !skillValue
    ) {
      setIsDisableSubmit(true);
    } else {
      setIsDisableSubmit(false);
    }
  };

  return (
    <FormWrapper>
      <h1 className="header">Personal Info</h1>
      <form onSubmit={handleSubmit}>
        <CustomizeInput
          id="first-name"
          name="firstName"
          title="First name:"
          value={firstName}
          errorMessage={firstNameErrorMessage}
          onChange={(event) => {
            handleFirstNameChange(event);
          }}
        />
        <CustomizeInput
          id="last-name"
          name="lastName"
          title={"Last name:"}
          value={lastName}
          errorMessage={lastNameErrorMessage}
          onChange={(event) => {
            handleLastNameChange(event);
          }}
        />
        <fieldset>
          <legend className="title">Gender:</legend>
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
          items={gradeItems}
          labelName="Grade:"
          placeHolder="please select grade"
          onItemClicked={setSelectedGrade}
          setSelectedValue={setGradeValue}
        />
        <Select
          id="skill"
          name="skill"
          items={skillItems}
          labelName="Skill:"
          placeHolder="please select skill"
          onItemClicked={setSelectedSkill}
          isMultiple={true}
          setSelectedValue={setSkillValue}
        />
        <Select
          id="province"
          name="province"
          items={provinceItems}
          labelName="Province:"
          placeHolder="please select province"
          onItemClicked={(selectedProvince) => {
            setSelectedProvince(selectedProvince);
            setProvince(selectedProvince.text as ProvinceName);
          }}
          setSelectedValue={setProvinceValue}
        />
        <Select
          id="city"
          name="city"
          items={cityItems}
          labelName="City:"
          placeHolder="please select city"
          onItemClicked={setSelectedCity}
          setSelectedValue={setCityValue}
        />
        <button
          className="submit-btn"
          id="submit-button"
          disabled={isDisableSubmit}
        >
          Submit
        </button>
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  font-size: 16px;
  width: 180px;
  .header {
    width: 200px;
  }
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
    margin-top: 10px;
    position: relative;
  }
  .select-text {
    padding: 4px;
    border: 1px solid #ddd;
  }
  .native-select {
    display: none;
  }
  .select-option-container {
    width: 180px;
    position: absolute;
    top: 30px;
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
  .title {
    margin-bottom: 3px;
    font-weight: bold;
  }
  .submit-btn {
    margin-top: 10px;
    font-size: 16px;
  }
  .tip {
    display: inline-block;
    width: 200px;
    margin-bottom: 7px;
    font-size: 10px;
    color: red;
  }
`;

export default memo(Form);
