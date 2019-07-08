import React from "react";

const Button = props => {
  return (
    <button
      type={props.type}
      onClick={props.action}
      className="btn btn-primary"
    >
      {props.title}
    </button>
  );
};

export default Button;
