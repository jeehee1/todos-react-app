import { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";
import AuthContext from "../store/auth-context";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  let isLoading = false;

  const authenticateHandler = (authBody) => {
    isLoading = true;
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
            console.log('data when error occured')
            console.log(data)
            let errorMessage = data.error.message || "Authnetication failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log("auth data");
        console.log(data);
        isLoading = false;
        const expirationTime = new Date(
          new Date().getTime() + data.expiresIn * 1000
        );
        authCtx.login(data.idToken, data.localId, expirationTime);
        return navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <AuthForm
      loginPage={isLogin}
      onAuthenticate={authenticateHandler}
      loading={isLoading}
    />
  );
};

export default Auth;
