import classes from "./DailyDiet.module.css";

import { Fragment, useContext } from "react";
import { DietContext } from "../../store/diet-context";
import SearchDiet from "./SearchDiet";
import NewDiet from "./NewDiet";
import { useState } from "react";

const DailyDiet = () => {
  const dietCtx = useContext(DietContext);
  const [showUpdate, setShowUpdate] = useState(false);
  const dailyDiet = dietCtx.diet ? dietCtx.diet[0] : null;
  const showUpdateHandler = () => {
    setShowUpdate(true);
  };
  const closeNewDietHandler = () =>{
    setShowUpdate(false);
  }

  let dietObj;
  return (
    <Fragment>
      <SearchDiet />
      <h3 className={classes.date}>
        {dietCtx.date + " MEAL PLAN" || "Please select the date"}
        {dietCtx.date && (
          <button onClick={showUpdateHandler}>Update Plan</button>
        )}
      </h3>
      {showUpdate && <NewDiet date={dietCtx.date} diet={dietCtx.diet[0]} closeNewDiet={closeNewDietHandler}/>}
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
