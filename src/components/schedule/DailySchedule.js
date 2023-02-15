import classes from "./DailySchedule.module.css";
import { Fragment } from "react";

const DailySchedule = (props) => {
  const scheduleList = [];
  const schedules = props.schedules;
  console.log(schedules);
  const example = schedules.map((data) => data.start > 3);
  console.log(example);

  // for (let i = 0; i < 24; i++) {
  //   if (schedules) {
  //     for (const schedule of schedules) {
  //       if (schedule.start === i) {
  //         <tr>
  //           <th>{`${i}:00`}</th>
  //           <td rowSpan={schedule.end - schedule.start}>{schedule.schedule}</td>
  //         </tr>;
  //       } else {
  //       <tr>
  //         <th>{`${i}:00`}</th>
  //         <td></td>
  //       </tr>;
  //     }
  //   }
  //   scheduleList.push(
  //     <tr>
  //       <th>{`${i}:00`}</th>
  //       <td></td>
  //     </tr>
  //   );
  // }

  return (
    <Fragment>
      <h4>2023-2-1 Monday</h4>
      <div className={classes.schedule}>
        <table>
          {/* <tbody className={classes.schedule}>{scheduleList}</tbody> */}

          <tbody>
            <tr>
              <th>1</th>
              <td rowSpan="3">sdfaw</td>
            </tr>
            <tr>
              <th>2</th>
            </tr>
            <tr>
              <th>3</th>
            </tr>
            <tr>
              <th>4</th>
              <td>skdfjlaw</td>
            </tr>
            <tr>
              <th>5</th>
            </tr>
            <tr>
              <th>6</th>
            </tr>
            <tr>
              <th>7</th>
              <td>klajfekl</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default DailySchedule;
