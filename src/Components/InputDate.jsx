import React from "react";

const InputDate = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.title}</label>
      <br />
      <input
        style={{ borderRadius: "4px" }}
        name={props.name}
        type={props.type}
        id={props.name}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};
export default InputDate;
