import classes from "./DailySchedule.module.css";
import { Fragment } from "react";

const DailySchedule = (props) => {
  const scheduleList = [];
  const schedules = props.schedules;
  
  for (let i = 0; i < 24; i++) {
    if (schedules) {
      const matchedTimeSchedule = schedules.filter((data) => data.start === i);
      matchedTimeSchedule.length > 0
        ? scheduleList.push(
            <tr key={matchedTimeSchedule.key}>
              <th>{`${i}:00`}</th>
              <td rowSpan={matchedTimeSchedule[0].end - matchedTimeSchedule[0].start}>
                <p>{matchedTimeSchedule[0].schedule}</p>
                {props.isUpdating&&<button onClick={() => {props.onDeleteSchedule(matchedTimeSchedule[0].key)}}>delete</button>}
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
        <td></td>
      </tr>);
    }
  }

  return (
    <Fragment>
        <table className={classes.table}>
          <tbody className={classes.schedule}>{scheduleList}</tbody>
        </table>
    </Fragment>
  );
};

export default DailySchedule;
