import React from "react";

function Radio(props) {
  const {radioName, radioValue} = props;
  return (
    <label>
      <input type="radio" name={radioName} id="" />
      {radioValue}
    </label>
  );
}

export default Radio;
