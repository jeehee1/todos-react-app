import { redirect, useSearchParams } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";
import useHttp from "../hooks/http";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  const { loading, error, sendRequest, data } = useHttp();

  const authenticateHandler = (authBody) => {
    console.log(authBody);
    if (isLogin) {
      sendRequest(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD5zLNBnsLuWNzLSZ5JCfD_tJ-Q_Q1yzII",
        "POST",
        JSON.stringify(authBody),
        null,
        "LOG_IN"
      );
    } else {
      sendRequest(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD5zLNBnsLuWNzLSZ5JCfD_tJ-Q_Q1yzII",
        "POST",
        JSON.stringify(authBody),
        null,
        "SIGN_IN"
      );
    }
    console.log(data);
    return redirect("/");
  };

  return (
    <AuthForm
      loginPage={isLogin}
      onAuthenticate={authenticateHandler}
      error={error}
      loading={loading}
      authData={data}
    />
  );
};

export default Auth;
