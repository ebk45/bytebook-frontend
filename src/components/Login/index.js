import React from "react";
import styled from "styled-components";
import { Row, Input, Button, Icon } from "react-materialize";

export class Login extends React.Component {

  handleLogin = (event) => {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    this.sendUser(email, password)
  }

  sendUser = (email, password) => {

    const body = JSON.stringify({ email: email, password: password})
    console.log(body)

    fetch("http://localhost:1234/users/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then((res)=> {
      this.validLogin(res);
      return res.json()
    })
    .then((res)=> {
      this.setUser(res[0]);
    })
  }

  validLogin(res) {
    if( res.status !== 200){
      return alert('Authentication failed. User not found.')
    }
  }

  setUser = (res) => {
    //this.props.action(res)
  }

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
