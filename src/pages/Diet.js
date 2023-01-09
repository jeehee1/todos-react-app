import { useState } from "react";
import DailyDiet from "../components/diets/DailyDiet";
import NewDiet from "../components/diets/NewDiet";
import SearchDiet from "../components/diets/SearchDiet";
import WeeklyDiet from "../components/diets/WeeklyDiet";
import DietContextProvider from "../store/diet-context";

const Diet = () => {
  const [searchWeek, setSearchWeek] = useState();
  const [dateOfWeek, setDateOfWeek] = useState([]);

  return (
    <DietContextProvider>
      <SearchDiet
        date={searchWeek}
        onSetStartDate={(week, date) => {
          setSearchWeek(week);
          setDateOfWeek(date);
        }}
      />
      {searchWeek && <WeeklyDiet date={dateOfWeek}/>}
    </DietContextProvider>
  );
};

export default Diet;
