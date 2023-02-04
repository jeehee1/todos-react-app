import { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";
import AuthContext from "../store/auth-context";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const authenticateHandler = (authBody) => {
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD5zLNBnsLuWNzLSZ5JCfD_tJ-Q_Q1yzII";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD5zLNBnsLuWNzLSZ5JCfD_tJ-Q_Q1yzII";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(authBody),
      headers: { "Content-Type": "applicaiton/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authnetication failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log("auth data");
        console.log(data);
        const expirationTime = new Date(
          new Date().getTime() + data.expiresIn * 1000
        );
        console.log(expirationTime);
        authCtx.login(data.idToken, expirationTime);
        console.log(authCtx);
        return navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
    // if (response.status === 422 || response.status === 401) {
    //   return response;
    // }
    // if (!response.ok) {
    //   throw json({ message: "Could not authenticate user" });
    // }
  };

  return <AuthForm loginPage={isLogin} onAuthenticate={authenticateHandler} />;
};

export default Auth;
