import React from "react";
import Chest from "../Chest";

export default function TransactionList(props) {
  return (
    <div>
      {props.transactions.map(transaction => (
        <div>
          <Chest chest={transaction.transaction} />
          <div>{transaction.description}</div>
        </div>
      ))}
    </div>
  );
}
