import classes from "./DietItem.module.css";

const DietItem = (props) => {
  return (
    <div className={classes.mealitem}>
      <h4>{props.type}</h4>
      <p>{props.diet[props.type]}</p>
    </div>
  );
};

export default DietItem;
