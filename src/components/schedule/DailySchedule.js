import classes from "./DailySchedule.module.css";
import { Fragment } from "react";
import useHttp from "../../hooks/http";
import { useEffect } from "react";

const DailySchedule = () => {
  const { sendRequest, loading, error, data } = useHttp();
  const date = null;

  useEffect(() => {
    sendRequest(
      `https://todos-project-a5fb8-default-rtdb.firebaseio.com/schedules/${date}.json`,
      "GET",
      null,
      null,
      "GET_SCHEDULES"
    );
  }, sendRequest);

  return (
    <Fragment>
      <h4>2023-2-1 Monday</h4>
      <div className={classes.schedule}>
        {/* <div className={classes.time}>{timeList}</div> */}
        <table>
          <tbody className={classes.schedule}>
            <tr>
              <th>7:00</th>
              <td>asdfa</td>
            </tr>
            <tr>
              <th>8:00</th>
              <td>asdfa</td>
            </tr>
            <tr>
              <th>9:00</th>
              <td>asdfa</td>
            </tr>
            <tr>
              <th>10:00</th>
              <td rowSpan="3">asdfa</td>
            </tr>
            <tr>
              <th>11:00</th>
            </tr>
            <tr>
              <th>12:00</th>
            </tr>
            <tr>
              <th>13:00</th>
              <td>asdfa</td>
            </tr>
            <tr>
              <th>14:00</th>
              <td>asdfa</td>
            </tr>
            <tr>
              <th>15:00</th>
              <td>asdfa</td>
            </tr>
            <tr>
              <th>16:00</th>
              <td></td>
            </tr>
            <tr>
              <th>17:00</th>
              <td></td>
            </tr>
            <tr>
              <th>18:00</th>
              <td></td>
            </tr>
            <tr>
              <th>19:00</th>
              <td></td>
            </tr>
            <tr>
              <th>20:00</th>
              <td></td>
            </tr>
            <tr>
              <th>21:00</th>
              <td></td>
            </tr>
            <tr>
              <th>22:00</th>
              <td></td>
            </tr>
            <tr>
              <th>23:00</th>
              <td></td>
            </tr>
            <tr>
              <th>24:00</th>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default DailySchedule;
