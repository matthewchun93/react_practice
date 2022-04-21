import useInputTwo from "../hooks/use-input2";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    valueChangeHandler: enteredNameChangeHandler,
    inputBlurHandler: enteredNameBlurHandler,
    resetInputs: resetEnteredName,
  } = useInputTwo((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNameHasError,
    valueChangeHandler: enteredLastNameChangeHandler,
    inputBlurHandler: enteredLastNameBlurHandler,
    resetInputs: resetEnteredLastName,
  } = useInputTwo((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: enteredEmailBlurHandler,
    resetInputs: resetEnteredEmail,
  } = useInputTwo((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      !enteredNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid
    ) {
      return;
    }

    resetEnteredName();
    resetEnteredLastName();
    resetEnteredEmail();
  };

  const firstNameClasses = !enteredNameHasError
    ? "form-control"
    : "form-control invalid";
  const lastNameClasses = !enteredLastNameHasError
    ? "form-control"
    : "form-control invalid";
  const emailClasses = !enteredEmailHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={enteredName}
            onChange={enteredNameChangeHandler}
            onBlur={enteredNameBlurHandler}
          />
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={enteredLastName}
            onChange={enteredLastNameChangeHandler}
            onBlur={enteredLastNameBlurHandler}
          />
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={enteredEmailChangeHandler}
          onBlur={enteredEmailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
