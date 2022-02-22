import React from "react";

// components
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = (props) => {
  const clear = () => {
    props.setStatus("");
    props.setSpecies("");
    props.setGender("");
    props.setPageNumber(1);
    window.location.reload(false);
  };

  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-decoration-underline text-primary mb-4"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          setStatus={props.setStatus}
          setPageNumber={props.setPageNumber}
        />
        <Species
          setSpecies={props.setSpecies}
          setPageNumber={props.setPageNumber}
        />
        <Gender
          setGender={props.setGender}
          setPageNumber={props.setPageNumber}
        />
      </div>
    </div>
  );
};

export default Filters;
