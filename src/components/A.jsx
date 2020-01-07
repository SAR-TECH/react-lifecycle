import React, { Component } from "react";
import B from "./B";
import C from "./C";
import Input from "./forms/Input";

class A extends Component {
  state = {
    sayHello: "Text From A"
  };

  changeValue = value => {
    debugger;
    this.setState({ sayHello: value });
  };

  render() {
    return (
      <React.Fragment>
        <Input />

        <div
          style={{ width: 200, height: 200, background: "red", color: "White" }}
        >
          A
        </div>
        <B />
        <C propC={this.state.sayHello} changeValue={this.changeValue} />
      </React.Fragment>
    );
  }
}

export default A;
