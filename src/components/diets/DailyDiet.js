const DailyDiet = (props) => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snacks"];
  console.log("Its DailyDiet component");
  console.log(props.diet);
  let mealItem;

  return (
    <li>
      {mealType.map((type) => (
            <div>
            <h4>{type}</h4>
            <p>{props.diet[type] || " - "}</p>
          </div>
      ))}
    </li>
  );
};

export default DailyDiet;
