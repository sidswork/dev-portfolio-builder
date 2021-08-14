import React from "react";
import { SKILL_TIMELINE } from "../data/skills";
import "./styles.css";

const SLIDER_RANGE = Object.keys(SKILL_TIMELINE);
const MIN_VAL = Math.min(...SLIDER_RANGE);
export const MAX_VAL = Math.max(...SLIDER_RANGE);
const DISPLAY_RANGE = [MIN_VAL, MAX_VAL];

const Slider = ({ year, setYear }) => {
  const sliderChanged = (event) => {
    setYear(event.target.value);
  };

  const yearClick = (value) => {
    setYear(value);
  };

  console.log(year);

  return (
    <div className={`columns is-centered has-text-centered`}>
      <div className="column is-three-fifths">
        <div className="slidecontainer">
          <div className="slider-label">
            {DISPLAY_RANGE.map((Y) => {
              const displayYear = Y.toString();
              if (displayYear === year) {
                return (
                  <span
                    key={displayYear}
                    onClick={() => yearClick(displayYear)}
                    className="show-pointer has-text-black has-text-weight-medium"
                  >
                    {displayYear}
                  </span>
                );
              }
              return (
                <span
                  key={displayYear}
                  onClick={() => yearClick(displayYear)}
                  className="show-pointer has-text-grey-light"
                >
                  {displayYear}
                </span>
              );
            })}
          </div>
          <input
            type="range"
            min={MIN_VAL}
            max={MAX_VAL}
            value={year}
            className="slider"
            id="myRange"
            onChange={sliderChanged}
          />

          <div className="has-text-grey-light">
            Move the slider to view tech stack from previous years
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
