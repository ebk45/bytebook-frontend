import React from "react";
import { Col, Card, Button, Icon } from "react-materialize";

const Bit = props => (
  <Col m={6} s={12}>
    <Card
      className="blue lighten-1"
      textClassName="white-text"
      actions={props.timestamp}
    >
      {props.body}
      <div>
        <Button onClick={console.log("click")} className="pink" waves="light">
          Like<Icon right>favorite</Icon>
        </Button>
        <Button
          onClick={console.log("click")}
          className="purple accent-3"
          waves="light"
        >
          Delete<Icon right>delete</Icon>
        </Button>
      </div>
    </Card>
  </Col>
  // <div className={props.className}>
  //   <p>{props.body}</p>
  //   <h5>{props.timestamp}</h5>
  // </div>
);

export default Bit;

// Press+Start+2P
