import React, { Component } from "react";
import D from "./D";

class C extends Component {
  state = {};
  render() {
    return (
      <div
        style={{ width: 200, height: 200, background: "blue", color: "White" }}
      >
        C
        <D propD={this.props.propC} />
      </div>
    );
  }
}

export default C;
