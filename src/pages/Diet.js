import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchDiet from "../components/diets/SearchDiet";
import WeeklyDiet from "../components/diets/WeeklyDiet";
import AuthContext from "../store/auth-context";
import Layout from "../components/layout/Layout";

const Diet = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [dateOfWeek, setDateOfWeek] = useState([]);

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      return navigate("/auth?mode=login");
    }
  }, []);

  return (
    <Layout>
      <SearchDiet
        date={dateOfWeek}
        onSetStartDate={(date) => {
          setDateOfWeek(date);
        }}
      />
      {dateOfWeek && <WeeklyDiet date={dateOfWeek} />}
    </Layout>
  );
};

export default Diet;
