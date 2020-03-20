import React from "react";
import { Link } from "react-router-dom";

export default function PartyCard(props) {
  const { pp, gp, ep, sp, cp } = props.party.chest;
  return (
    <div>
      <Link to={`/party/${props.party.id}`}>
        <div>{props.party.name}</div>
        <div>
          <div>{pp}</div>
          <div>{gp}</div>
          <div>{ep}</div>
          <div>{sp}</div>
          <div>{cp}</div>
        </div>
      </Link>
    </div>
  );
}
