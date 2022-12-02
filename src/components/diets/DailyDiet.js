const DailyDiet = (props) => {
  console.log(props.diet);
  return (
    <li>
      <div>{props.diet.date}</div>
      <div>Breakfast: {props.diet.Breakfast}</div>
      <div>Lunch: {props.diet.Lunch}</div>
      <div>Dinner: {props.diet.Dinner}</div>
    </li>
  );
};

export default DailyDiet;
