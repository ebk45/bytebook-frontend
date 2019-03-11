import React from "react";
//import ReactDOM from "react-dom";
import { Navbar, NavItem, Button, Icon } from "react-materialize";

export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    status: false,
    isLoggedIn: this.props.isLoggedIn
    }
    console.log(this.state)
  }

  render() {
    return (
      <Navbar brand="<h1>ByteBook</h1>" right className="teal accent-3">
        <NavItem href="/login">
          Login<Icon left>perm_identity</Icon>
        </NavItem>
      </Navbar>
    );
  }
}

export default Nav;
