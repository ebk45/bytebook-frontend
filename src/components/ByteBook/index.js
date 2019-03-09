import React from "react";
import Nav from "../Nav";
import Feed from "../Feed";
import Compose from "../Compose";
import Welcome from "../Welcome";

export class ByteBook extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLogin = (event) => {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    this.sendUser(email, password)
  }

  sendUser = (email, password) => {

    const body = JSON.stringify({ email: email, password: password})

    fetch("http://localhost:1234/users/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then((res) => {
      if (this.validLogin(res) === true) {
        return res.json()
      } else {
        return alert('Authentication failed. User not found.')
      }
      })
    .then((res) => {
      const isLoggedIn = res;
      this.setState({ isLoggedIn });
      console.log(this.state.isLoggedIn.success)
    })
  }

  validLogin(res) {
    console.log("validLogin");
    return true
  //  if( res.status !== 200){
    //  return alert('Authentication failed. User not found.')
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn.success;
    if (isLoggedIn) {
      return (
        <div className="loggedInDisplay">
        <Compose />
        <Feed />
        </div>
      );
    }
    return <Welcome />;
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn.success;
    let display;

    if (isLoggedIn) {
      display =
      <React.Fragment>
      <div className="loggedInDisplay>">
        <Compose />
      </div>;
      </React.Fragment>
    }
    return <Welcome />;

    return (
      <div className="bytebook">
        <Greeting isLoggedIn={isLoggedIn} />
      </div>
    )
  }
}

export default ByteBook;
