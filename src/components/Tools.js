import React from "react";
import { TOOLS } from "../data/skills";
import "./styles.css";

const ToolBox = ({ text }) => {
  return (
    <span className="tag is-large tool-item p-5 m-2 has-text-weight-semibold">
      {text}
    </span>
  );
};

const Tools = () => {
  return (
    <div>
      {Object.values(TOOLS).map((t) => (
        <ToolBox text={t} key={t} />
      ))}
    </div>
  );
};

export default Tools;
