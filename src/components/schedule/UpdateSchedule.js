import { useState, useRef } from "react";
import useHttp from "../../hooks/http";
import Select from "react-select";

const timeOptions = [];
for (let i = 6; i < 24; i++) {
  timeOptions.push({ value: i, label: i });
}

const UpdateSchedule = () => {
  const { sendRequest, loading, error } = useHttp();
  const dateRef = useRef();
  const scheduleRef = useRef();
  const [selectedStartTime, setSelectedStartTime] = useState();
  const [selectedEndTime, setSelectedEndTime] = useState();

  const updateScheduleHandler = (event) => {
    event.preventDefault();
    const selectedDate = dateRef.current.value;
    const scheduleDetail = scheduleRef.current.value;
    sendRequest(
      `https://todos-project-a5fb8-default-rtdb.firebaseio.com/schedules/${selectedDate}.json`,
      "POST",
      JSON.stringify({
        start: selectedStartTime.value,
        end: selectedEndTime.value,
        schedule: scheduleDetail,
      }),
      null,
      "UPDATE_SCHEDULE"
    );
  };

  return (
    <form onSubmit={updateScheduleHandler}>
      <label id="date">Date</label>
      <input id="date" type="date" ref={dateRef} />
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
