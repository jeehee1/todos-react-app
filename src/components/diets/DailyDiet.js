import classes from "./DailyDiet.module.css";

import { Fragment } from "react";
import SearchDiet from "./SearchDiet";
import NewDiet from "./NewDiet";
import { useState } from "react";

const DailyDiet = (props) => {

  return (
    <Fragment>
      <p>breakfast: {props.diet.breakfast}</p>
      <p>lunch: {props.diet.lunch}</p>
      <p>dinner: {props.diet.dinner}</p>
    </Fragment>
  );
};

export default DailyDiet;
