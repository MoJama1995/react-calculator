import React from "react";

const Result = props => {
  console.log(props);
  return (
    <div>
      <label>
        <input type="text" value={props.displayValue} />
      </label>
    </div>
  );
};
export default Result;
