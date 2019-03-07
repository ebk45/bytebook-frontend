import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Navbar, NavItem, Button, Icon } from "react-materialize";

export class Nav extends React.Component {
  render() {
    return (
      <Navbar brand="<h1>ByteBook</h1>" right class="teal accent-3">
        <NavItem href="/login">
          Login<Icon left>perm_identity</Icon>
        </NavItem>
      </Navbar>
    );
  }
}

const StyledNav = styled(Nav)`
  background-color: pink;

  a.brand-logo {
    font-family: "Press Start 2p";
    font-size: 36px;
  }
`;

export default StyledNav;
