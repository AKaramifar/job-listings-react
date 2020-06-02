import React from "react";
import "./FilterBox.css";

const FilterBox = (props) => {
  return (
    <div id="Div_FilterBox_JSX" className="Div_FilterBox_CSS">
      <div className="Div_Tag_CSS">
        {props.arrayTags.map((tag, index) => {
          return (
            <p className="P_Tag_CSS" key={index}>
              {tag}
              <i className="I_Times_CSS fas fa-times"></i>
            </p>
          );
        })}
      </div>
      <div className="Div_RemoveTag_CSS">
        <p className="P_RemoveTag_CSS"></p>
      </div>
    </div>
  );
};

export default FilterBox;
