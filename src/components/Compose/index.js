import React from 'react';
import Form from '../Form';

class Compose extends React.Component {

  handleForm = (event) => {
    event.preventDefault();
    let message = document.getElementById('message').value;
    console.log(message)
    this.sendByte(message)
  }

  sendByte = (message) => {
    const body = JSON.stringify({ message: message})
    fetch("http://localhost:1234/bits/create",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then(response => response.json())
  }

  render() {
    return (
      <Form
      handleForm={this.handleForm}
      />
    )
  }
}

export default Compose;
