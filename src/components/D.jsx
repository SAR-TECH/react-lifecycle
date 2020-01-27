import React, { Component } from "react";
import E from "./E";

class D extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.propD, sliderValue: [0, 20] };
  }

  //changeValue = value => {
  // debugger;
  //  this.setState({ value });
  //};

  onChange = value => {
    debugger;
    this.setState({ value });
  };
  onReset = () => {
    debugger;
    this.setState({ sliderValue: [0, 20] });
  };
  render() {
    return (
      <React.Fragment>
        {" "}
        <div
          style={{
            width: 100,
            height: 100,
            background: "yellow",
            color: "Black"
          }}
        >
          D
        </div>
        <E
          propE={this.props.propD}
          sliderValue={this.state.sliderValue}
          changeValue={this.props.changeValue}
          onChange={this.onChange}
          onReset={this.onReset}
        />
      </React.Fragment>
    );
  }
}

export default D;
