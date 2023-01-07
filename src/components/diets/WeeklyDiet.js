import DailyDiet from "./DailyDiet";

const WeeklyDiet = () => {
  const DUMMY_DIET = {
    date: "2023-01-01",
    day: 'MON',
    breakfast: "Bagel",
    lunch: "Pizzas",
    dinner: "Chicken",
  };

  return (
    <ul>
      <li>{DUMMY_DIET.date}  / {DUMMY_DIET.day}{<DailyDiet diet={DUMMY_DIET}/>}</li>
      <li>Tue</li>
      <li>Wed</li>
      <li>Thur</li>
      <li>Fri</li>
      <li>Sat</li>
    </ul>
  );
};

export default WeeklyDiet;
