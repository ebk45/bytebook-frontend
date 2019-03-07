import React from "react";
import styled from "styled-components";
import { Row, Input, Button, Icon } from "react-materialize";

export class Login extends React.Component {
  handleLogin() {}
  render() {
    return (
      <Row>
        <Input type="email" label="Email" s={12}>
          <Icon>account_circle</Icon>
        </Input>
        <Input type="password" label="Password" s={12}>
          <Icon>email</Icon>
        </Input>
        <Button onClick={this.handleLogin} waves="light">
          Login
        </Button>
      </Row>
    );
  }
}

const StyledLogin = styled(Login)`
  display: flex;
  justify-content: right;
  padding: 20px;

  nav {
    background-color: white;
  }

  h1 {
    font-family: "Press Start 2p";
    font-size: 18px;
  }
`;

export default StyledLogin;
