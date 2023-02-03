import { Fragment } from "react";
import { useState } from "react";
import SearchDiet from "../components/diets/SearchDiet";
import WeeklyDiet from "../components/diets/WeeklyDiet";
import DietContextProvider from "../store/diet-context";

const Diet = () => {
  const [searchWeek, setSearchWeek] = useState();
  const [dateOfWeek, setDateOfWeek] = useState([]);

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
