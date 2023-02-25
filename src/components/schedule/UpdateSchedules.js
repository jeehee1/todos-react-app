import classes from "./UpdateSchedules.module.css";
import { useState, useRef } from "react";
import Select from "react-select";
import Card from "../../layout/Card";

const timeOptions = [];
for (let i = 0; i < 25; i++) {
  timeOptions.push({ value: i, label: i });
}

const UpdateSchedules = (props) => {
  const scheduleRef = useRef();
  const [selectedStartTime, setSelectedStartTime] = useState();
  const [selectedEndTime, setSelectedEndTime] = useState();

  const updateScheduleHandler = (event) => {
    console.log(selectedStartTime);
    console.log(selectedEndTime);
    event.preventDefault();
    const scheduleDetail = scheduleRef.current.value;
    if (selectedStartTime.value >= selectedEndTime.value) {
      return alert("Start time should be ealier than end time");
    }
    const time = [];
    for (let i = selectedStartTime.value; i < selectedEndTime.value; i++) {
      time.push(i);
    }
    console.log(time);
    props.onUpdateSchedules({
      start: selectedStartTime.value,
      end: selectedEndTime.value,
      time: time,
      schedule: scheduleDetail,
    });
  };

  return (
    <Card>
      <form onSubmit={updateScheduleHandler}>
        <div className={classes.update}>
          <div className={classes.date}>
            <label id="startTime">Start Time</label>
            <Select
              className={classes.select}
              id="startTime"
              value={selectedStartTime}
              onChange={(selectedValue) => {
                setSelectedStartTime(selectedValue);
              }}
              options={timeOptions}
            />
            <label id="endTime">End Time</label>
            <Select
              className={classes.select}
              id="endTime"
              value={selectedEndTime}
              onChange={(selectedValue) => {
                setSelectedEndTime(selectedValue);
              }}
              options={timeOptions}
            />
          </div>
          <div className={classes.schedule}>
            <label id="schedule">Schedule</label>
            <input id="schedule" type="text" ref={scheduleRef} />
          </div>
          <button>Submit</button>
          <button className={classes.closebtn} onClick={props.onCloseUpdate}>
            close Update
          </button>
        </div>
      </form>
    </Card>
  );
};

export default UpdateSchedules;
