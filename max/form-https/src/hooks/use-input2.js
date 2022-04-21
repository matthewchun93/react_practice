import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.payload, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return inputStateReducer;
};

const useInputTwo = (validation) => {
  const [inputState, inputDispatch] = useReducer(
    inputStateReducer,
    initialState
  );

  const valueIsValid = validation(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    inputDispatch({ type: "INPUT", payload: e.target.value });
  };
  const inputBlurHandler = () => {
    inputDispatch({ type: "BLUR" });
  };
  const resetInputs = () => {
    inputDispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetInputs,
  };
};

export default useInputTwo;
