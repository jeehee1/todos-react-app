import classes from "./AuthForm.module.css";
import { useReducer } from "react";
import Card from "../../layout/Card";
import { Link, useSearchParams } from "react-router-dom";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_INPUT":
      return {
        ...state,
        emailValue: action.value,
        emailIsValid: action.isValid,
      };

    case "PWD_INPUT":
      return { ...state, pwdValue: action.value, pwdIsValid: action.isValid };

    case "EMAIL_TOUCHED":
      return {
        ...state,
        emailIsTouched: true,
      };

    case "PWD_TOUCHED":
      return {
        ...state,
        pwdIsTouched: true,
      };

    case "RESET":
      return {
        eamilIsTouched: false,
        emailValue: "",
        pwdIsTouched: false,
        pwdValue: "",
        emailIsValid: false,
        pwdIsValid: false,
      };
  }
};

const AuthForm = (props) => {
  const isLogin = props.loginPage;

  const [inputState, dispatch] = useReducer(inputReducer, {
    eamilIsTouched: false,
    emailValue: "",
    emailIsValid: false,
    pwdIsTouched: false,
    pwdValue: "",
    pwdIsValid: false,
  });

  const getEmailHandler = (event) => {
    event.preventDefault();

    const inputEmail = event.target.value;
    let emailIsValid;
    if (!inputEmail.includes("@") || inputEmail.trim().length < 4) {
      console.log("Email must include @");
      emailIsValid = false;
    } else if (inputEmail.includes("@") && inputEmail.trim().length >= 4) {
      emailIsValid = true;
    }
    dispatch({ type: "EMAIL_INPUT", value: inputEmail, isValid: emailIsValid });
  };

  const blurEmailHalndler = (event) => {
    event.preventDefault();
    dispatch({ type: "EMAIL_TOUCHED" });
  };

  const getPwdHandler = (event) => {
    event.preventDefault();

    const inputPwd = event.target.value;
    let pwdIsValid;
    if (inputPwd.trim().length < 6) {
      console.log("Enter your password");
      pwdIsValid = false;
      // setPwdIsValid(false);
    } else if (inputPwd.trim().length >= 6) {
      pwdIsValid = true;
      // setPwdIsValid(true);
    }
    dispatch({ type: "PWD_INPUT", value: inputPwd, isValid: pwdIsValid });
  };

  const blurPwdHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "PWD_TOUCHED" });
  };

  let formIsValid = false;
  if (inputState.emailIsValid && inputState.pwdIsValid) {
    formIsValid = true;
  }

  const authenticateHandler = (event) => {
    event.preventDefault();
    props.onAuthenticate({
      email: inputState.emailValue,
      password: inputState.pwdValue,
      returnSecureToken: true,
    });
    console.log({
      email: inputState.emailValue,
      password: inputState.pwdValue,
      returnSecureToken: true,
    });
    dispatch({ type: "RESET" });
  };

  return (
    <Card>
      <form onSubmit={authenticateHandler} className={classes.form}>
        <label htmlFor="email">User Email</label>
        <input
          type="text"
          id="email"
          onChange={getEmailHandler}
          onBlur={blurEmailHalndler}
          value={inputState.emailValue}
        />
        {inputState.emailIsTouched && !inputState.emailIsValid && (
          <p className={classes.invalid}>Email must include "@"</p>
        )}
        <label htmlFor="password">User Password</label>
        <input
          type="password"
          id="password"
          onChange={getPwdHandler}
          onBlur={blurPwdHandler}
          value={inputState.pwdValue}
        />
        {inputState.pwdIsTouched && !inputState.pwdIsValid && (
          <p className={classes.invalid}>
            Password must be longer than 6 digis.
          </p>
        )}
        {inputState.emailIsTouched || inputState.pwdIsTouched ? null : (
          <p className={classes.invalid}>{props.error}</p>
        )}
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create New User" : "Login"}
          </Link>
          <button disabled={!formIsValid}>
            {isLogin ? "Login" : props.loading ? "Sending..." : "Sign Up"}
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AuthForm;
