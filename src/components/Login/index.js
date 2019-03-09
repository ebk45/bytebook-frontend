import React from "react";
import { Row, Input, Button, Icon } from "react-materialize";

export class Login extends React.Component {

  render() {
    return (
      <Row>
        <Input id="email" type="email" label="Email" s={12}>
          <Icon>account_circle</Icon>
        </Input>
        <Input id="password" type="password" label="Password" s={12}>
          <Icon>email</Icon>
        </Input>
        <Button onClick={this.handleLogin} waves="light">
          Login
        </Button>
      </Row>
    );
  }
}

export default Login;
