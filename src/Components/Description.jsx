import React from "react";

const Description = props => {
  return (
    <div className="form-group">
      <label className="col-form-label" htmlFor={props.name}>
        {props.title}
      </label>
      <input
        className="form-control"
        type={props.type}
        id={props.name}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Description;
