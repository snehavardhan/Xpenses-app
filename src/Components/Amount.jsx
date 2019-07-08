import React from "react";

const Amount = props => {
  return (
    <div className="form-group">
      <label className="control-label" htmlFor={props.name}>
        {props.title}
      </label>
      <div className="form-group">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            type={props.type}
            name={props.name}
            id={props.name}
            value={props.value}
            onChange={props.handleChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amount;
