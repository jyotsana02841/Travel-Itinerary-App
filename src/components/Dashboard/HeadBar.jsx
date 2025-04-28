import React from "react";
import '../../styles/Dashboard/HeadBar.css'

const HeadBar = ({title}) => {
  return (
    <div>
      <div className="head">
        <span className="one text">{title}</span>
        <span className="two">See all</span>
      </div>
    </div>
  );
};

export default HeadBar;
