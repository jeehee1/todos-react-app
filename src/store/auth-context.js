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
  const storedUserId = localStorage.getItem('userId');

  const remainingTime = calculateRemainingTime(storedExpirationDate);
  if (remainingTime < 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem('userId');
    return null;
  }

  return {
    token: storedToken,
    userId: storedUserId,
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
  console.log("authContextProvider");

  const tokenData = retrieveStoredToken();
  let initialToken;
  let initialUser
  if (tokenData) {
    initialToken = tokenData.token;
    initialUser = tokenData.userId;
  }
  // const [token, setToken] = useState(initialToken);
  // const [userId, setUserId] = useState("");

  const [user, dispatch] = useReducer(setUserReducer, {
    token: initialToken,
    userId: initialUser,
  });

  const userIsLogggedIn = !!user.token;

  const loginHandler = (token, userId, expirationTime) => {
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    localStorage.setItem("userId", userId);
    dispatch({ type: "SET", token: token, userId: userId });

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
