import classes from "./DailySchedule.module.css";
import { Fragment } from "react";

const DailySchedule = (props) => {
  const scheduleList = [];
  const schedules = props.schedules;
  console.log(schedules);
  const example = schedules.map((data) => data.start > 3);
  console.log(example);

  for (let i = 0; i < 24; i++) {
    if (schedules) {
      const matchedTime = schedules.filter((data) => data.start === i);
      // if (matchedTime.length > 0) {
      //   console.log(matchedTime[0]);
      //   console.log(matchedTime[0].end - matchedTime[0].start);
      // }
      matchedTime.length > 0
        ? scheduleList.push(
            <tr>
              <th>{`${i}:00`}</th>
              <td rowSpan={matchedTime[0].end - matchedTime[0].start}>
                {matchedTime[0].schedule}
              </td>
            </tr>
          )
        : scheduleList.push(
            <tr>
              <th>{`${i}:00`}</th>
            </tr>
          );
    } else {
      <tr>
        <th>{`${i}:00`}</th>
      </tr>;
    }
  }
  console.log(scheduleList);

  return (
    <Fragment>
      <h4>2023-2-1 Monday</h4>
      <div className={classes.schedule}>
        <table>
          <tbody className={classes.schedule}>{scheduleList}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default DailySchedule;
