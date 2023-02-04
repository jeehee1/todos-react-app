import { useContext } from "react";
import { redirect } from "react-router-dom";
import AuthContext from "../../store/auth-context";

export const logout = () => {
  const authCtx = useContext(AuthContext);
  authCtx.logout();
  return redirect("/");
};
