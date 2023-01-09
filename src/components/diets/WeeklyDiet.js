import DailyDiet from "./DailyDiet";

const WeeklyDiet = (props) => {

  const dietData = [];
  const week = props.week;
  const date = props.date;
  console.log(date)

  return (
    <ul>
        <p>{week}</p>
      {date.map((date) => (
        <li>
          <DailyDiet searchWeek={week} searchDate={date}/>
        </li>
      ))}
    </ul>
  );
};

export default WeeklyDiet;
