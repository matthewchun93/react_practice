import React from "react";

const InputGroup = (props) => {
  console.log([...Array(props.total).keys()]);

  return (
    <div className="input-group mb-3">
      <select
        className="form-select"
        id={props.name}
        onChange={(e) => props.setId(e.target.value)}
      >
        <option defaultValue>Choose...</option>
        {[...Array(props.total).keys()].map((episode) => {
          return (
            <option value={episode + 1}>
              {props.name} {episode + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
