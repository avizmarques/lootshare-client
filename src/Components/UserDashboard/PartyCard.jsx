import React from "react";

export default function PartyCard(props) {
  const { pp, gp, ep, sp, cp } = props.party.chest;
  return (
    <div>
      <div>{props.party.name}</div>
      <div>
        <div>{pp}</div>
        <div>{gp}</div>
        <div>{ep}</div>
        <div>{sp}</div>
        <div>{cp}</div>
      </div>
    </div>
  );
}
