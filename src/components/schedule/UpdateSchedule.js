import { useState, useRef } from "react";
import useHttp from "../../hooks/http";
import Select from "react-select";

const timeOptions = [];
for (let i = 6; i < 24; i++) {
  timeOptions.push({ value: i, label: i });
}

const UpdateSchedule = (props) => {
  const scheduleRef = useRef();
  const [selectedStartTime, setSelectedStartTime] = useState();
  const [selectedEndTime, setSelectedEndTime] = useState();

  const updateScheduleHandler = (event) => {
    event.preventDefault();
    const scheduleDetail = scheduleRef.current.value;
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
    <form onSubmit={updateScheduleHandler}>
      <label id="startTime">Start Time</label>
      <Select
        id="startTime"
        value={selectedStartTime}
        onChange={(selectedValue) => {
          setSelectedStartTime(selectedValue);
        }}
        options={timeOptions}
      />
      <label id="endTime">End Time</label>
      <Select
        id="endTime"
        value={selectedEndTime}
        onChange={(selectedValue) => {
          setSelectedEndTime(selectedValue);
        }}
        options={timeOptions}
      />
      <label id="schedule">Schedule</label>
      <input id="schedule" type="text" ref={scheduleRef} />
      <button>Submit</button>
    </form>
  );
};

export default UpdateSchedule;
