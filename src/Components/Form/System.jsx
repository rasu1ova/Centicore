import React from "react";

export default function System(props) {
  const { checkDesc, id, checked, onClicks } = props;
  return (
    <label className="checking" htmlFor={"checkbox" + id} onClick={onClicks}>
      <input
        type="checkbox"
        // checked={checked}
        id={"checkbox" + id}
        defaultChecked={checked}
      />
      {checkDesc}
    </label>
  );
}
