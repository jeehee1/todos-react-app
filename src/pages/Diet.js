import { useContext } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchDiet from "../components/diets/SearchDiet";
import WeeklyDiet from "../components/diets/WeeklyDiet";
import AuthContext from "../store/auth-context";
import Layout from "../components/layout/Layout";

const Diet = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchWeek, setSearchWeek] = useState();
  const [dateOfWeek, setDateOfWeek] = useState([]);

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      return navigate("/auth?mode=login");
    }
  }, []);

  return (
    <Layout>
      <SearchDiet
        date={searchWeek}
        onSetStartDate={(week, date) => {
          setSearchWeek(week);
          setDateOfWeek(date);
        }}
      />
      {searchWeek && <WeeklyDiet date={dateOfWeek} week={searchWeek} />}
    </Layout>
  );
};

export default Diet;
