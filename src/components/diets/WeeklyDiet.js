import classes from "./WeeklyDiet.module.css";
import { useState } from "react";
import DailyDiet from "./DailyDiet";

const WeeklyDiet = (props) => {
  const week = props.week;
  const date = props.date;
  const [showUpdateBtn, setShowUpdateBtn] = useState(true);

  return (
    <ul className={classes.list}>
      <h3 className={classes.week}>{week}</h3>
      {date.map((date) => (
        <li key={date}>
          <DailyDiet
            onVisibleUpdateBtn={() => {
              setShowUpdateBtn(true);
            }}
            onInvisibleUpdateBtn={() => {
              setShowUpdateBtn(false);
            }}
            updateBtn={showUpdateBtn}
            // searchWeek={week}
            searchDate={date}
          />
        </li>
      ))}
    </ul>
  );
};

export default WeeklyDiet;
