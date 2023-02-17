import classes from "./DailySchedule.module.css";
import { Fragment } from "react";

const DailySchedule = (props) => {
  const scheduleList = [];
  const schedules = props.schedules;
  console.log(schedules);


  for (let i = 0; i < 24; i++) {
    if (schedules) {
      const matchedTime = schedules.filter((data) => data.start === i);
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
      scheduleList.push(<tr>
        <th>{`${i}:00`}</th>
      </tr>);
    }
  }
  console.log(scheduleList);

  return (
    <Fragment>
      <div className={classes.schedule}>
        <table>
          <tbody className={classes.schedule}>{scheduleList}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default DailySchedule;
