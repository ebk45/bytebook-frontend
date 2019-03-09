import React from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ByteBook from "./components/ByteBook";

export class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
      <ByteBook/>
      </div>
    );
  }
}


export default App;
