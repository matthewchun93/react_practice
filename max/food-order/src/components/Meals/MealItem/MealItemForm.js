import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [qtyIsValid, setQtyIsValid] = useState(true);

  const qtyInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredQty = qtyInputRef.current.value;
    const enteredQtyNum = +enteredQty;

    if (
      enteredQty.trim().length === 0 ||
      enteredQtyNum < 1 ||
      enteredQtyNum > 5
    ) {
      setQtyIsValid(false);
      return;
    }

    props.onAddToCart(enteredQtyNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={qtyInputRef}
        label="Qty"
        input={{
          id: "qty_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!qtyIsValid && <p>Please enter a valid qty 1-5</p>}
    </form>
  );
};

export default MealItemForm;
