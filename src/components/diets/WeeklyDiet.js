import classes from "./WeeklyDiet.module.css";

import { Fragment, useContext } from "react";
import { DietContext } from "../../store/diet-context";
import SearchDiet from "./SearchDiet";
import DailyDiet from "./DailyDiet";

const WeeklyDiet = () => {
  const dietCtx = useContext(DietContext);
  const weeklyDiet = dietCtx.diet;
  const dailyDiet = [];
  console.log("WeeklyDiet componenet");
  console.log(weeklyDiet)
  let dietObj;
  for (const key in weeklyDiet) {
    const id = weeklyDiet['id'];
    if (key !== "id") {
      dietObj = { id:id.concat(key), date: key, ...weeklyDiet[key] };
      dailyDiet.push(dietObj);
    }
  }

  console.log("dailyDiet");
  console.log(dailyDiet)
  return (
    <Fragment>
      <SearchDiet />
      <p className={classes.week}>{'week'}</p>
      <ul className={classes.list}>
        {dailyDiet.map((diet) => (
          <DailyDiet diet={diet} id={diet.id}/>
        ))}
      </ul>
    </Fragment>
  );
};

export default WeeklyDiet;
