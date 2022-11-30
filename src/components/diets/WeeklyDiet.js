import { Fragment, useContext } from "react";
import { DietContext } from "../../store/diet-context";
import SearchDiet from "./SearchDiet";

const WeeklyDiet = () => {
  const dietCtx = useContext(DietContext);
  console.log(dietCtx.diet);
  return (
    <Fragment>
      <SearchDiet />
      <p>2022/11/4주차</p>
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thur</div>
      <div>Fri</div>
      <div>Sat</div>
      <div>Sun</div>
    </Fragment>
  );
};

export default WeeklyDiet;
