import { useContext } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchDiet from "../components/diets/SearchDiet";
import WeeklyDiet from "../components/diets/WeeklyDiet";
import AuthContext from "../store/auth-context";

const Diet = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchWeek, setSearchWeek] = useState();
  const [dateOfWeek, setDateOfWeek] = useState([]);

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      return navigate("/auth");
    }
  }, []);

  return (
    // <DietContextProvider>
    <Fragment>
      <SearchDiet
        date={searchWeek}
        onSetStartDate={(week, date) => {
          setSearchWeek(week);
          setDateOfWeek(date);
        }}
      />
      {searchWeek && <WeeklyDiet date={dateOfWeek} week={searchWeek} />}
    </Fragment>
    // </DietContextProvider>
  );
};

export default Diet;
