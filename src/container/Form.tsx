import React, { useState, memo, useEffect, useRef } from "react";
import styled from "styled-components";
import CustomizeInput from "../component/CustomizeInput";
import RadioInput from "../component/RadioInput";
import Select, { SelectItem } from "../component/Select";
import axios from "axios";
import _ from "lodash";
import useSingleSelect from "../component/CustomizeHooks/useSingleSelect";
import useMultipleSelect from "../component/CustomizeHooks/useMultipleSelect";

type ProvinceItem = {
  text: string;
  value: string;
  isSelected: boolean;
  city: SelectItem[];
};

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
  const defaultProvinceItems: ProvinceItem[] = [
    {
      value: "shaanxi",
      text: "陕西省",
      isSelected: false,
      city: [
        {
          value: "baoji",
          text: "宝鸡市",
          isSelected: false,
        },
        {
          value: "xian",
          text: "西安市",
          isSelected: false,
        },
        {
          value: "xianyang",
          text: "咸阳市",
          isSelected: false,
        },
        {
          value: "tongchuan",
          text: "铜川市",
          isSelected: false,
        },
      ],
    },
    {
      value: "shanxi",
      text: "山西省",
      isSelected: false,
      city: [
        {
          value: "taiyuan",
          text: "太原市",
          isSelected: false,
        },
        {
          value: "yuncheng",
          text: "运城市",
          isSelected: false,
        },
        {
          value: "wanrong",
          text: "万荣市",
          isSelected: false,
        },
        {
          value: "changzhi",
          text: "长治市",
          isSelected: false,
        },
      ],
    },
    {
      value: "henan",
      text: "河南省",
      isSelected: false,
      city: [
        {
          value: "handan",
          text: "邯郸市",
          isSelected: false,
        },
        {
          value: "zhengzhou",
          text: "郑州市",
          isSelected: false,
        },
        {
          value: "luoyang",
          text: "洛阳市",
          isSelected: false,
        },
        {
          value: "kaifeng",
          text: "开封市",
          isSelected: false,
        },
      ],
    },
  ];
  const defaultCityItem: SelectItem[] = [];
  const [gradeItems, setSelectedGrade] = useSingleSelect(defaultGradeItems);
  const [skillItems, setSelectedSkill] = useMultipleSelect(defaultSkillItems);
  const [provinceItem, setProvinceItem] = useState(defaultProvinceItems);
  const [cityItem, setCityItem] = useState(defaultCityItem);
  const [firstNameTip, setFirstNameTip] = useState("");
  const [lastNameTip, setLastNameTip] = useState("");
  const [isDisableSubmit, setIsDisableSubmit] = useState(true);
  const [skillValue, setSkillValue] = useState("");
  const [gradeValue, setGradeValue] = useState("");
  const [provinceValue, setProvinceValue] = useState("");
  const [cityValue, setCityValue] = useState("");

  useEffect(() => {
    validateForm();
    console.log("gender", gender);
  });
  const validateFirstName = (firstName): void => {
    if (!firstName) {
      setFirstNameTip("The first name is required");
    } else if (!/^[a-zA-Z]*$/.test(firstName)) {
      setFirstNameTip("The first name must be arabic alphabet");
    } else {
      setFirstNameTip("");
    }
  };
  const validateLastName = (lastName): void => {
    if (!lastName) {
      setLastNameTip("The last name is required");
    } else if (!/^[a-zA-Z]*$/.test(lastName)) {
      setLastNameTip("The last name must be arabic alphabet");
    } else {
      setLastNameTip("");
    }
  };
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
    validateFirstName(event.currentTarget.value);
  };
  const handleLastNameChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (event) => {
    setLastName(event.currentTarget.value);
    validateLastName(event.currentTarget.value);
  };
  const handleGenderChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (event) => {
    setGender(event.currentTarget.value);
  };
  const handleProvinceClick: (ProvinceItem) => void = (selectedItem) => {
    const updatedItems = provinceItem.map((item) => {
      if (item.value === selectedItem.value) {
        return {
          ...item,
          isSelected: !selectedItem.isSelected,
        };
      }
      return { ...item };
    });
    setProvinceItem(updatedItems);

    const citys = updatedItems
      .filter((item) => item.isSelected)
      .map((item) => {
        return item.city;
      });
    setCityItem(_.flatten(citys));
  };
  const handleCityClick: (SelectItem) => void = (selectedItem) => {
    const updatedItems = cityItem.map((item) => {
      return {
        ...item,
        isSelected: item.value === selectedItem.value,
      };
    });
    setCityItem(updatedItems);
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
          onChange={(event) => {
            handleFirstNameChange(event);
          }}
        />
        <label className="tip">{firstNameTip}</label>
        <CustomizeInput
          id="last-name"
          name="lastName"
          title={"Last name:"}
          value={lastName}
          onChange={(event) => {
            handleLastNameChange(event);
          }}
        />
        <label className="tip">{lastNameTip}</label>
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
          items={provinceItem}
          labelName="Province:"
          placeHolder="please select province"
          onItemClicked={handleProvinceClick}
          isMultiple={true}
          setSelectedValue={setProvinceValue}
        />
        <Select
          id="city"
          name="city"
          items={cityItem}
          labelName="City:"
          placeHolder="please select city"
          onItemClicked={handleCityClick}
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
