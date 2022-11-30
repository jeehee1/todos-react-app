import { Fragment } from "react";
import SearchDiet from "./SearchDiet";

const WeeklyDiet = () => {
  return (
    <Fragment>
      <SearchDiet />
      <p>2022/11/4주차</p>
      <div>Breakfast</div>
      <div>Lunch</div>
      <div>Dinner</div>
    </Fragment>
  );
};

export default WeeklyDiet;
