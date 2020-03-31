import React from "react";
import { Link } from "react-router-dom";
import Chest from "../Chest";

export default function CharacterCard(props) {
  return (
    <div>
      <div>
        <strong>{props.character.name}</strong>
      </div>
      <div>{props.character.party}</div>
      <Chest chest={props.character.chest} />
      <Link to={`/character/${props.character.id}`}>Manage chest</Link>
    </div>
  );
}
