import React from "react";

const FilterBtn = (props) => {
  return (
    <div>
      <style jsx="true">
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }

          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          onClick={(e) => {
            props.setPageNumber(1);
            props.task(props.item);
          }}
          className="form-check-input x"
          type="radio"
          name={props.name}
          id={`${props.name}-${props.index}`}
        />
        <label
          className="btn btn-outline-primary"
          htmlFor={`${props.name}-${props.index}`}
        >
          {props.item}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
