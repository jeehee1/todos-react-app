import { Fragment } from "react";
import DailySchedule from "../components/schedule/DailySchedule";
import SearchSchedule from "../components/schedule/SearchSchedule";

const Schedule = () => {
  return (
    <Fragment>
      <SearchSchedule />
      <DailySchedule />
    </Fragment>
  );
};

export default Schedule;
