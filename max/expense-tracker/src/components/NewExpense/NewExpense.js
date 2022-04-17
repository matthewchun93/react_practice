import React, { useState } from "react";
// styles
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsOpen(false);
  };

  const startEditingHandler = () => {
    setIsOpen(true);
  };

  const stopEditingHandler = () => {
    setIsOpen(false);
  };
  return (
    <div className="new-expense">
      {!isOpen && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
