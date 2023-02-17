import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import DailySchedule from "../components/schedule/DailySchedule";
import SearchSchedule from "../components/schedule/SearchSchedule";
import UpdateSchedule from "../components/schedule/UpdateSchedule";
import useHttp from "../hooks/http";

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
  const formattedToday = getToday();
  const { sendRequest, loading, error, data, identifier } = useHttp();
  const [update, setUpdate] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [schedules, setSchedules] = useState();

  const getScheduleHandler = (date) => {
    setSelectedDate(date);
    sendRequest(
      `https://todos-project-a5fb8-default-rtdb.firebaseio.com/schedules/${date}.json`,
      "GET",
      null,
      null,
      "GET_SCHEDULES"
    );
  };

  const updateSchedulesHandler = (newSchedule) => {
    for (const schedule of schedules) {
      console.log(newSchedule.time);
      console.log(schedule.time);
      const isDuplicated = isTimeDuplicated(newSchedule.time, schedule.time);
      if (isDuplicated) {
        alert("Time duplicated. Delete the schedule first.");
        return;
      }
    }
    sendRequest(
      `https://todos-project-a5fb8-default-rtdb.firebaseio.com/schedules/${selectedDate}.json`,
      "POST",
      JSON.stringify(newSchedule),
      null,
      "UPDATE_SCHEDULES"
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
      }
    } else {
      setSchedules(null);
    }
  }, [data]);

  console.log(schedules);


  return (
    <Fragment>
      <SearchSchedule
        onGetSchedule={getScheduleHandler}
        initialDate={formattedToday}
      />
      <h4>{selectedDate}</h4>
      <button
        onClick={() => {
          setUpdate(true);
        }}
      >
        Update
      </button>
      {update && <UpdateSchedule onUpdateSchedules={updateSchedulesHandler} onCloseUpdate={() => {setUpdate(false)}}/>}
      <DailySchedule schedules={schedules} />
    </Fragment>
  );
};

export default Schedule;
