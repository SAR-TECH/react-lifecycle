import React, { Component } from "react";
import B from "./B";
import C from "./C";

class A extends Component {
  state = {
    sayHello: "Text From A"
  };
  render() {
    return (
      <React.Fragment>
        <div
          style={{ width: 200, height: 200, background: "red", color: "White" }}
        >
          A
        </div>
        <B />
        <C propC={this.state.sayHello} />
      </React.Fragment>
    );
  }
}

export default A;
