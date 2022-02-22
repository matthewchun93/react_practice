import React from "react";

// styles
import classes from "./Cards.module.scss";

const Cards = (props) => {
  let display;

  // const statusTag = (result) => {
  //   if (result.status === "Dead") {
  //     return (
  //       <div className={`${classes.badge} badge position-absolute bg-danger`}>
  //         {result.status}
  //       </div>
  //     );
  //   } else if (result.status === "Alive") {
  //     return (
  //       <div className={`${classes.badge} badge position-absolute bg-success`}>
  //         {result.status}
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div
  //         className={`${classes.badge} badge position-absolute bg-secondary`}
  //       >
  //         {result.status}
  //       </div>
  //     );
  //   }
  // };

  if (props.results) {
    display = props.results.map((result) => (
      <div className="col-4 mb-4 position-relative" key={result.id}>
        <div className={`${classes.cards}`}>
          <img
            src={result.image}
            alt=""
            className={`${classes.img} img-fluid`}
          />
          <div style={{ padding: "10px" }} className="content">
            <div className="fs-4 fw-bold mb-4">{result.name}</div>
            <div className="">
              <div className="">Last Location</div>
              <div className="fs-6">{result.location.name}</div>
            </div>
          </div>
        </div>
        {(() => {
          if (result.status === "Dead") {
            return (
              <div
                className={`${classes.badge} badge position-absolute bg-danger`}
              >
                {result.status}
              </div>
            );
          } else if (result.status === "Alive") {
            return (
              <div
                className={`${classes.badge} badge position-absolute bg-success`}
              >
                {result.status}
              </div>
            );
          } else {
            return (
              <div
                className={`${classes.badge} badge position-absolute bg-secondary`}
              >
                {result.status}
              </div>
            );
          }
        })()}
      </div>
    ));
  } else {
    display = "Characters not found";
  }

  return <>{display}</>;
};

export default Cards;
