import React, { Component } from "react";

// Class Component Without Constructor
export class EmptyComp extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>Empty Compo</p>
        <EmptyComp1></EmptyComp1>
        <EmptyComp2></EmptyComp2>
      </React.Fragment>
    );
  }
}

// Class Component With Contructor
export class EmptyComp1 extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <p>Empty Compo1</p>;
  }
}

// Stateless Functional Component
export const EmptyComp2 = () => {
  return <p>Empty Compo3</p>;
};
