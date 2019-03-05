import React from 'react';

const Bit = props => (
  <div className={props.className}>
    <p>{props.body}</p>
    <h5>{props.timestamp}</h5>
  </div>
);

export default Bit;
