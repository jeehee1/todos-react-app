import { useState } from "react";
import { Fragment } from "react";
import DailySchedule from "../components/schedule/DailySchedule";
import SearchSchedule from "../components/schedule/SearchSchedule";
import UpdateSchedule from "../components/schedule/UpdateSchedule";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState();

  const selectDateHandler = (date) => {
    setSelectedDate(date);
  };
  console.log(selectedDate)

  return (
    <Fragment>
      <SearchSchedule onSelectDate={selectDateHandler} />'
      <UpdateSchedule />
      <DailySchedule />
    </Fragment>
  );
};

export default Schedule;
