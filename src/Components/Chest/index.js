import React from "react";
import "./style.css";

export default function Chest(props) {
  const { pp, gp, ep, sp, cp } = props.chest;
  return (
    <div className="chest">
      <div>{pp}</div>
      <div>{gp}</div>
      <div>{ep}</div>
      <div>{sp}</div>
      <div>{cp}</div>
    </div>
  );
}
