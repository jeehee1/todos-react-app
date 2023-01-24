import { useState } from "react";

const Login = () => {
  const [eamilIsValid, setEmailIsValid] = useState(false);
  const [pwdIsValid, setPwdIsValid] = useState(false);

  const getEmailHandler = (event) => {
    event.preventDefault();

    const inputEmail = event.target.value;
    if (!inputEmail.includes("@") && inputEmail.trim().length < 4) {
      console.log("Email must include @");
      setEmailIsValid(false);
    } else if (inputEmail.includes("@") && inputEmail.trim().length >= 4) {
      setEmailIsValid(true);
    }
  };

  const getPwdHandler = (event) => {
    event.preventDefault();

    const inputPwd = event.target.value;
    if (inputPwd.trim().length < 6) {
      console.log("Enter your password");
      setPwdIsValid(false);
    } else if (inputPwd.trim().length >= 6) {
      setPwdIsValid(true);
    }
  };

  return (
    <form>
      <label htmlFor="email">User Email</label>
      <input type="text" id="email" onChange={getEmailHandler} />
      <label htmlFor="password">User Password</label>
      <input type="password" id="password" onChange={getPwdHandler} />
      <button disabled={!eamilIsValid || !pwdIsValid}>Login</button>
    </form>
  );
};

export default Login;
