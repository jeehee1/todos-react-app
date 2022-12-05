import classes from "./DailyDiet.module.css";

const DailyDiet = (props) => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snacks"];
  const week = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  let mealItem;

  console.log(props.id)

  return (
    <li key={props.id}>
      {week.map((date) => (
        <div className={classes.date}>
          <p>{date}</p>
          {mealType.map((type) => (
            <div className={classes.meal}>
              <h4>{type}</h4>
              <p>{props.diet[type] || " - "}</p>
            </div>
          ))}
        </div>
      ))}
    </li>
  );
};

export default DailyDiet;
