import classes from "./Schedule.module.css";
import { useCallback, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import DailySchedule from "../components/schedule/DailySchedule";
import SearchSchedule from "../components/schedule/SearchSchedule";
import UpdateSchedules from "../components/schedule/UpdateSchedules";
import useHttp from "../hooks/http";
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";

const isTimeDuplicated = (time, comparedTime) => {
  return time.some((t) => comparedTime.includes(t));
};

const getToday = () => {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth =
    today.getMonth() < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
  const todayDate = today.getDate();
  const formattedToday = `${todayYear}-${todayMonth}-${todayDate}`;
  return formattedToday;
};

const Schedule = (props) => {
  const { isLoggedIn, user } = useContext(AuthContext);
  const formattedToday = getToday();
  const { sendRequest, loading, error, data, identifier, extra } = useHttp();
  const [update, setUpdate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(formattedToday);
  const [schedules, setSchedules] = useState();
  const navigate = useNavigate();

  const getSchedulesHandler = (date) => {
    setSelectedDate(date);
    sendRequest(
      `https://todos-project-a5fb8-default-rtdb.firebaseio.com/schedules/${user}/${date}.json`,
      "GET",
      null,
      null,
      "GET_SCHEDULES"
    );
  };

  useEffect(() => {
    if (isLoggedIn) {
      getSchedulesHandler(selectedDate);
    } else {
      return navigate("/auth?mode=login");
    }
  }, []);

  const updateSchedulesHandler = (newSchedule) => {
    if (schedules) {
      for (const schedule of schedules) {
        console.log(newSchedule.time);
        console.log(schedule.time);
        const isDuplicated = isTimeDuplicated(newSchedule.time, schedule.time);
        if (isDuplicated) {
          alert("Time duplicated. Delete the schedule first.");
          return;
        }
      }
    }
    sendRequest(
      `https://todos-project-a5fb8-default-rtdb.firebaseio.com/schedules/${user}/${selectedDate}.json`,
      "POST",
      JSON.stringify(newSchedule),
      newSchedule,
      "UPDATE_SCHEDULES"
    );
  };

  const deleteScheduleHandler = (key) => {
    sendRequest(
      `https://todos-project-a5fb8-default-rtdb.firebaseio.com/schedules/${user}/${selectedDate}/${key}.json`,
      "DELETE",
      null,
      key,
      "DELETE_SCHEDULE"
    );
  };

  useEffect(() => {
    if (identifier === "GET_SCHEDULES") {
      const transformedSchedules = [];
      if (data) {
        for (const key in data) {
          const timeArray = [];
          transformedSchedules.push({ ...data[key], key: key });
        }
        setSchedules(transformedSchedules);
      } else {
        setSchedules(null);
      }
    } else if (identifier === "DELETE_SCHEDULE") {
      const existingSchedule = schedules.filter(
        (schedule) => schedule.key !== extra
      );
      setSchedules(existingSchedule);
    } else if (identifier === "UPDATE_SCHEDULES") {
      const newSchedule = { key: data.name, ...extra };
      const oldSchedules = schedules;
      if (oldSchedules) {
        setSchedules([...oldSchedules, newSchedule]);
      } else {
        setSchedules([newSchedule]);
      }
    }
  }, [data, identifier, extra, setSchedules]);

  console.log(schedules);

  return (
    <Layout>
      <SearchSchedule onGetSchedules={getSchedulesHandler} />
      <div className={classes.info}>
        <h4 className={classes.date}>{selectedDate}</h4>
        {!update && (
          <button
            className={classes.updatebtn}
            onClick={() => {
              setUpdate(true);
            }}
          >
            Update
          </button>
        )}
      </div>
      {update && (
        <UpdateSchedules
          onUpdateSchedules={updateSchedulesHandler}
          onCloseUpdate={() => {
            setUpdate(false);
          }}
        />
      )}
      {!schedules && (
        <div className={classes['no-schedule']}>
        <p>
          There is no schedule. Please press update button and add your
          schedules.
        </p></div>
      )}
      {schedules && (
        <DailySchedule
          schedules={schedules}
          onDeleteSchedule={deleteScheduleHandler}
          isUpdating={update}
        />
      )}
    </Layout>
  );
};

export default Schedule;
