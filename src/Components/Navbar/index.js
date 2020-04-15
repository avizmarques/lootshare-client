import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Navbar as StyledNavbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "shards-react";

export default function Navbar() {
  const userId = useSelector((state) => state.user.id);

  // if (!userId) {
  //   return <div></div>;
  // }

  return (
    <StyledNavbar type="dark" theme="primary" expand="md">
      <NavbarBrand href="#">Lootshare</NavbarBrand>
      <Nav navbar>
        <NavItem>
          <Link to={`/user/${userId}/dashboard`}>Home</Link>
        </NavItem>
      </Nav>
      <Link to={`/partylist`}>All parties</Link>
    </StyledNavbar>
  );
}
