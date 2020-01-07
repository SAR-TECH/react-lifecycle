import React, { Component } from "react";

class E extends Component {
  // 1 - if constructor is defined in class component then this will be called FIRST or FIRST TIME COMPONENT MOUNT

  // -1 Mounting Phase - Once
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      value: props.propE,
      isDataLoaded: true
    };
    debugger;
    console.log("constructor is called (this)", this);
    //Method Binding with 'this'
    this.changeValue = this.changeValue.bind(this);
  }

  //Start: React LifeCycle Methods -- Common React Lifecycle Methods
  // -4 Mounting Phase - Once
  componentDidMount() {
    debugger;
    console.log("componentDidMount() called this", this);
    //this.setState({ isDataLoaded: true, value: this.props.propE });
  }
  //-4 Updating Phase
  componentDidUpdate(prevProps, prevState) {
    debugger;
    console.log("componentDidUpdate is Called (this)", this);
    //if (this.props.propE !== prevProps.propE) {
    //  this.setState({ isDataLoaded: true, value: this.props.propE });
    //}
  }
  //End: React LifeCycle Methods

  //Start: React LifeCycle Methods -- Uncommon React Lifecycle Methods
  //-2 Updating Phase
  shouldComponentUpdate(nextProps, nextState) {
    debugger;
    console.log("shouldComponentUpdate is Called (this)", this);
    return true;
  }

  // Deprecated Lifecycle Method.
  componentWillReceiveProps(nextProps) {
    debugger;
    if (nextProps.selected !== this.props.selected) {
      this.setState({ selected: nextProps.selected });
      this.selectNew();
    }
  }

  //-2 Mounting Phase
  //-1 Updating Phase
  static getDerivedStateFromProps(nextProps, nextState) {
    debugger;
    console.log("getDerivedStateFromProps is Called (this)", this);
    return { value: nextProps.propE };
  }

  //componentWillReceiveProps(newProps) {
  // debugger;
  ////this.setState({ value: newProps.propE, valueSlider: newProps.sliderValue });
  //}
  //End: React LifeCycle Methods

  //Start: Component Level Methods
  changeValue(value) {
    debugger;
    console.log("changeValue method called");
    this.setState({ value: value });
  }
  //End: Component Level Methods

  // -3 Mounting Phase
  // -3 Updating Phase
  render() {
    debugger;
    let { isDataLoaded } = this.state;
    //let isDataLoaded = true;
    return isDataLoaded ? (
      <div
        style={{ width: 100, height: 100, background: "black", color: "White" }}
      >
        E - {this.state != null ? this.state.value : null}
        {/*this.props != null ? this.props.propE : null*/}
        <input
          type="submit"
          value="Submit"
          onClick={() => this.changeValue("Text From E")}
        />
      </div>
    ) : null;
  }
}

export default E;

//When CONSTRUCTOR is defined in CLASS COMPONENT
// 1- contructor is called
// 2- static getDerivedStateFromProps() is called
// 3- render is called
// 4- componentDidMount is called -- In that we can call the setState method
//if setState is called inside this method then
//after every setState call and before the render method call  shouldComponentUpdate(nextProps, nextState) is executed if it returns TRUE then render method is called
//4-1 render is again called
//4-2 componentDidUpdate is called which hold the prevProps, prevState

//When CONSTRUCTOR is not defined in CLASS COMPONENT
// 1- static getDerivedStateFromProps() is called
// 2- render is called
// 3- componentDidMount is called -- In that we can call the setState method
