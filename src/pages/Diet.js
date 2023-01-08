import { useState } from "react";
import DailyDiet from "../components/diets/DailyDiet";
import NewDiet from "../components/diets/NewDiet";
import SearchDiet from "../components/diets/SearchDiet";
import WeeklyDiet from "../components/diets/WeeklyDiet";
import DietContextProvider from "../store/diet-context";

const Diet = () => {
  const [searchWeek, setSearchWeek] = useState();
  const [dateOfWeek, setDateOfWeek] = useState([]);

  
  console.log(searchWeek);
  console.log(dateOfWeek);

  return (
    <DietContextProvider>
      <SearchDiet
        date={searchWeek}
        onSetStartDate={(week, date) => {
          setSearchWeek(week);
          setDateOfWeek(date);
        }}
      />
      {searchWeek && <WeeklyDiet />}
    </DietContextProvider>
  );
};

export default Diet;
