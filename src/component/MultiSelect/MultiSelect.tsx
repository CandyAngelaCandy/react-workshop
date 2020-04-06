import React, { memo, useState } from 'react';
import {dimgray} from "color-name";

const MultiSelect: React.FC = (): JSX.Element => {
  const [isSkillListVisible, setIsSkillListVisible] = useState(false);
  const [skillMap, setSkillMap] = useState({
    'C++': false,
    'C#': false,
    Java: false,
    JavaScript: false
  });
  const [skill, setSkill] = useState('');

  const handleSkillClick = skill => {
    skillMap[skill] = !skillMap[skill];
    setSkillMap({ ...skillMap });
    const selectedSkill: string[] = [];
    for (const key in skillMap) {
      if (skillMap[key]) {
        selectedSkill.push(key);
      }
    }
    setSkill(selectedSkill.join(';'));
  };

  return (
    <>
      <label className="skill" htmlFor="skill-select">
        Skill:
      </label>
      <div
          className="skill-box"
        onClick={() => {
          setIsSkillListVisible(!isSkillListVisible);
        }}
      >
        {skill}
      </div>
      <div>
        {isSkillListVisible &&
          Object.keys(skillMap).map(skill => {
            return (
              <div
                key={skill}
                className={`skillOption ${skillMap[skill] ? 'active' : ''}`}
                onClick={() => {
                  handleSkillClick(skill);
                }}
              >
                {skill}
              </div>

            );
          })}
      </div>
    </>
  );
};

export default memo(MultiSelect);
