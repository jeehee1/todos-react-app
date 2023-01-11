import { useState } from "react";
import DailyDiet from "./DailyDiet";

const WeeklyDiet = (props) => {
  // [{day:..., date: ..., break:..., lunch:..., dinner: ...}, {day:..., date: ..., break:..., lunch:..., dinner: ...}, {day:..., date: ..., break:..., lunch:..., dinner: ...}]
  const week = props.week;
  const date = props.date;

  return (
    <ul>
      <p>{week}</p>
      {date.map((date) => (
        <li>
          <DailyDiet
            searchWeek={week}
            searchDate={date}
          />
        </li>
      ))}
    </ul>
  );
};

export default WeeklyDiet;
