import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const userId = useSelector(state => state.user.id);

  if (!userId) {
    return <div></div>;
  }

  return (
    <div>
      <Link to={`/user/${userId}/dashboard`}>Home</Link>
      <Link to={`/partylist`}>All parties</Link>
    </div>
  );
}
