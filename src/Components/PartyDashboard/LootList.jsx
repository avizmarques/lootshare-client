import React from "react";
import Chest from "../Chest";

export default function LootList(props) {
  return (
    <div>
      <h2>Recent loot</h2>
      <div>
        {props.loot.map(loot => (
          <div>
            <Chest chest={loot.loot} />
            <div>{loot.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
