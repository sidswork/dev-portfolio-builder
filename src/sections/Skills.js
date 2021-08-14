import React, { useState } from "react";
import SkillMatrix from "../components/SkillMatrix";
import Slider, { MAX_VAL } from "../components/Slider";
import Tools from "../components/Tools";
import "./skills.css";

const Skills = () => {
  const [year, setYear] = useState(MAX_VAL.toString());

  return (
    <div className="section pb-6">
      <div className="columns is-centered has-text-centered">
        <div className="column is-four-fifths p-0">
          <span className="year-tag has-text-weight-bold">{year}</span>
        </div>
      </div>
      <Slider setYear={setYear} year={year} />
      <div className="columns is-centered has-text-centered">
        <div className="column is-four-fifths">
          <SkillMatrix selectedYear={year}></SkillMatrix>
        </div>
      </div>

      <div className="columns is-centered has-text-centered">
        <div className="column is-four-fifths">
          <Tools />
        </div>
      </div>
    </div>
  );
};

export default Skills;
