import React from "react";
import { SKILLS_MAP, SKILL_TIMELINE } from "../data/skills";
import SkillBox from "./SkillBox";
import "./styles.css";

const SkillMatrix = ({ selectedYear }) => {
  const selectedYearSkills = SKILL_TIMELINE[selectedYear] || [];
  const allSkills = Object.values(SKILLS_MAP);

  return (
    <div className="skill-matrix">
      {allSkills.map((skill) => {
        const isActive = selectedYearSkills.includes(skill);
        return <SkillBox isActive={isActive} skill={skill} key={skill} />;
      })}
    </div>
  );
};

export default SkillMatrix;
