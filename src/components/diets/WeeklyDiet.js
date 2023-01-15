import { useState } from "react";
import DailyDiet from "./DailyDiet";

const WeeklyDiet = (props) => {
  // [{day:..., date: ..., break:..., lunch:..., dinner: ...}, {day:..., date: ..., break:..., lunch:..., dinner: ...}, {day:..., date: ..., break:..., lunch:..., dinner: ...}]
  const week = props.week;
  let date = props.date;
  const [showUpdateBtn, setShowUpdateBtn] = useState(true);

  return (
    <ul>
      <p>{week}</p>
      {date.map((date) => (
        <li key={date}>
          <DailyDiet
            onVisibleUpdateBtn = {() => {setShowUpdateBtn(true)}}
            onInvisibleUpdateBtn = {() => {setShowUpdateBtn(false)}}
            updateBtn={showUpdateBtn}
            searchWeek={week}
            searchDate={date}
          />
        </li>
      ))}
    </ul>
  );
};

export default WeeklyDiet;
