import classes from "./UpdateDiet.module.css";
import { useRef } from "react";

const UpdateDiet = (props) => {
  const { day, breakfast, lunch, dinner, snacks } = props.dietInfo;
  const breakfastRef = useRef();
  const lunchRef = useRef();
  const dinnerRef = useRef();
  const snacksRef = useRef();

  const submitDietHandler = (event) => {
    event.preventDefault();

    const newDietData = {
      day: day,
      breakfast: breakfastRef.current.value,
      lunch: lunchRef.current.value,
      dinner: dinnerRef.current.value,
      snacks: snacksRef.current.value,
    };
    props.onSaveDiet(newDietData);
  };

  return (
    <form className={classes.update} onSubmit={submitDietHandler}>
      <label htmlFor="breakfast">Breakfast</label>
      <input
        type="text"
        id="breakfast"
        ref={breakfastRef}
        defaultValue={breakfast}
      />
      <label htmlFor="lunch">Lunch</label>
      <input type="text" id="lunch" ref={lunchRef} defaultValue={lunch} />
      <label htmlFor="dinner">Dinner</label>
      <input type="text" id="dinner" ref={dinnerRef} defaultValue={dinner} />
      <label htmlFor="snacks">Snacks</label>
      <input type="text" id="snacks" ref={snacksRef} defaultValue={snacks} />
      <div className={classes.btn}>
        <button>save</button>
      </div>
    </form>
  );
};

export default UpdateDiet;
