import React from "react";
import Bit from "../Bit";
import styled from "styled-components";

class Feed extends React.Component {
  state = { bits: null };

  componentWillMount() {
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
        {this.state.bits &&
          this.state.bits.map((bit, index) => {
            return <Bit body={bit.post} timestamp={bit.createdAt} />;
          })}
      </React.Fragment>
    );
  }
}

const StyledFeed = styled(Feed)`
  background-color: blue;
`;

export default StyledFeed;
