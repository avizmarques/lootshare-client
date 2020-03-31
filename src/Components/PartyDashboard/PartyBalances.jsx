import React from "react";
import Chest from "../Chest";

export default function PartyBalances(props) {
  const { name, chest } = props.character;
  return (
    <div>
      <div>{name}</div>
      <Chest chest={chest} />
    </div>
  );
}
