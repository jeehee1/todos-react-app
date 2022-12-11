import classes from "./DailyDiet.module.css";

import { Fragment, useContext } from "react";
import { DietContext } from "../../store/diet-context";
import SearchDiet from "./SearchDiet";

const DailyDiet = () => {
  const dietCtx = useContext(DietContext);
  const dailyDiet = dietCtx.diet ? dietCtx.diet[0] : null;
  console.log("dailyDiet componenet");
  console.log(dailyDiet);

  let dietObj;
  return (
    <Fragment>
      <SearchDiet />
      <h3 className={classes.date}>{dietCtx.date+ ' MEAL PLAN'||'Please select the date'}</h3>
      <ul className={classes.list}>
        <li>Breakfast : {dailyDiet ? dailyDiet.Breakfast : "-"}</li>
        <li>Lunch : {dailyDiet ? dailyDiet.Lunch : "-"}</li>
        <li>Dinner : {dailyDiet ? dailyDiet.Dinner : "-"}</li>
        <li>Snack : {dailyDiet ? dailyDiet.Snack : "-"}</li>
      </ul>
    </Fragment>
  );
};

export default DailyDiet;
