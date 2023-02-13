import { Fragment } from "react";
import DailySchedule from "../components/schedule/DailySchedule";
import SearchSchedule from "../components/schedule/SearchSchedule";
import UpdateSchedule from "../components/schedule/UpdateSchedule";

const Schedule = () => {
  return (
    <Fragment>
      <SearchSchedule />'
    <UpdateSchedule/>
      <DailySchedule />
    </Fragment>
  );
};

export default Schedule;
