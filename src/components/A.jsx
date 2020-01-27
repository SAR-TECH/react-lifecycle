import React, { Component } from "react";
import B from "./B";
import C from "./C";
import Input from "./forms/Input";
import ReactContext from "../context/ReactContext";

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
        <ReactContext.Provider value="Hello From Context">
          <B />
          <C propC={this.state.sayHello} changeValue={this.changeValue} />
        </ReactContext.Provider>
      </React.Fragment>
    );
  }
}

export default A;
