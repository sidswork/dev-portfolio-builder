import React from "react";
import { settings } from "../data/metadata";
import { SKILL_ICONS } from "../data/skills";
import "./styles.css";

const SkillBox = ({ isActive, skill }) => {
  const getBoxClass = () => {
    let base = "p-2 m-2 skill-box box";
    if (isActive) {
      base += " is-active";
    } else if (settings.HIDE_DISABLED) {
      base += " hide-box";
    } else {
      base += " is-hidden-touch";
    }
    return base;
  };

  return (
    <div className={getBoxClass()}>
      {SKILL_ICONS[skill] ? (
        <i className={`${SKILL_ICONS[skill]} is-size-1 has-text-light`}></i>
      ) : (
        <span className="has-text-light">{skill}</span>
      )}
    </div>
  );
};

export default SkillBox;
