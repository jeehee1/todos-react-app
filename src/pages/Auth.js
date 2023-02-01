import { useParams, useSearchParams } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  
  return <AuthForm loginPage={isLogin}/>;
};

export default Auth;