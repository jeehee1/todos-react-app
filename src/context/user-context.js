const UserContext = React.createContext({
  userEmail: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const UserContextProvider = () => {
  const tokenData = localStorage.getItme("token");
};

export default UserContext;
