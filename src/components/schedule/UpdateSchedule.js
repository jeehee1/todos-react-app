const UpdateSchedule = () => {
  const timeOpt = [];
  for (let i = 6; i < 24; i++) {
    timeOpt.push(<option value={i}>{i}</option>);
  }
  return (
    <form>
      <label id="date">Date</label>
      <input id="date" type="date" />
      <label id="startTime">Start Time</label>
      <select name="startTime" id="startTime">
        {timeOpt}
      </select>
      <label id="endTime">End Time</label>
      <select name="endTime" id="endTime">
        {timeOpt}
      </select>
      <label id="schedule">Schedule</label>
      <input id="schedule" type="text" />
      <button>Submit</button>
    </form>
  );
};

export default UpdateSchedule;
