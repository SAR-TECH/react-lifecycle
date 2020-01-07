import React, { Component } from "react";

/*
//Class Component
class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //React LifeCycle Method Render()
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default FormContainer;
*/

//Stateless Functional Component
//ES5
/*
function FormContainer() {
  return <p>Stateless Functional Component</p>;
}
export default FormContainer;
*/
const FormContainer = props => {
  return <p>Props</p>;
};

export default FormContainer;
