import React from 'react';
import Bit from '../Bit';

class Feed extends React.Component {
  state = { bits: null};

  componentDidMount() {
    fetch("http://localhost:1234/bits")
      .then(response => response.json())
      .then(json => {
        const bits = json;
        this.setState({ bits });
      });
  }

  render() {
    return (
      <React.Fragment>
      Bytebook Feed
      {this.state.bits &&
        this.state.bits.map((bit, index) => {
          return <Bit body={bit.post} timestamp={bit.createdAt} />;
        })}
        </React.Fragment>
    );
  }
}

export default Feed;
