import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.title}</label>
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
  );
};

export default Input;
