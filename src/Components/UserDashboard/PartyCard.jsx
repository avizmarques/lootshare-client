import React from "react";
import { Link } from "react-router-dom";
import Chest from "../Chest";

export default function PartyCard(props) {
  return (
    <div>
      <div>{props.party.name}</div>
      <Chest chest={props.party.chest} />
      <Link to={`/party/${props.party.id}`}>Go to dashboard</Link>
    </div>
  );
}
