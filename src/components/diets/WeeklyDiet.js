import { Fragment, useContext } from "react";
import { DietContext } from "../../store/diet-context";
import SearchDiet from "./SearchDiet";
import DailyDiet from "./DailyDiet";

const WeeklyDiet = () => {
  const dietCtx = useContext(DietContext);
  const weeklyDiet = dietCtx.diet;
  console.log(weeklyDiet);
  const dailyDiet = [];
  for (const key in weeklyDiet) {
    if (key !== "id") {
      const dietObj = { date: key, ...weeklyDiet[key] };
      dailyDiet.push(dietObj);
    }
  }

  console.log(dailyDiet);
  return (
    <Fragment>
      <SearchDiet />
      <p>2022/11/4주차</p>
      <ul>
        {dailyDiet.map((diet) => (
          <DailyDiet diet={diet}/>
        ))}
      </ul>
    </Fragment>
  );
};

export default WeeklyDiet;
