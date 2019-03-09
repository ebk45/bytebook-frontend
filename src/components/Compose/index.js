import React from 'react';
import ByteForm from '../ByteForm';

class Compose extends React.Component {

  handleForm = (event) => {
    event.preventDefault();
    let message = document.getElementById('message').value;
    console.log(message)
    this.sendByte(message)
  }

  sendByte = (message) => {
    const body = JSON.stringify({ post: message})
    console.log(body)
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
    console.log(this.state)
    return (
      <ByteForm
      handleForm={this.handleForm}
      />
    )
  }
}

export default Compose;
