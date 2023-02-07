import React, { useReducer, useEffect } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  user: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationDate) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationDate).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);
  if (remainingTime < 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

const setUserReducer = (curUser, action) => {
  if (action.type === "SET") {
    return { token: action.token, userId: action.userId };
  }
  if (action.type === "REMOVE") {
    return { token: null, userId: null };
  }
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  // const [token, setToken] = useState(initialToken);
  // const [userId, setUserId] = useState("");

  const [user, dispatch] = useReducer(setUserReducer, {
    token: initialToken,
    userId: null,
  });

  const userIsLogggedIn = !!user.token;

  const loginHandler = (token, userId, expirationTime) => {
    console.log("login");
    dispatch({ type: "SET", token: token, userId:userId });
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  const logoutHandler = () => {
    dispatch({ type: "REMOVE" });
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };

  useEffect(() => {
    if (tokenData) {
      console.log("tokenData.duration");
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData]);

  const contextValue = {
    token: user.token,
    user: user.userId,
    isLoggedIn: userIsLogggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
