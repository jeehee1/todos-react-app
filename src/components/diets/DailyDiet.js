import DietItem from "./DietItem";

const DailyDiet = (props) => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snacks"];
  console.log("Its DailyDiet component");
  console.log(props.diet);
  let mealItem;

  return (
    <li>
      {mealType.map((type) => (
        <DietItem diet={props.diet} type={type}/>
      ))}
      {/* <div>{props.diet.date}</div>
      <div>
        <h3>Breakfast</h3>
        {props.diet.Breakfast}
      </div>
      <div>
        <h3>Lunch</h3>
        {props.diet.Lunch}
      </div>
      <div>
        <h3>Dinner</h3>
        {props.diet.Dinner}
      </div>
      <div>
        <h3>Snacks</h3>
        {props.diet.Snack}
      </div> */}
    </li>
  );
};

export default DailyDiet;
