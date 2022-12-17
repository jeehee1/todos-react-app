import { useRef, useState } from "react";
import Select from "react-select";
import { addDietPlan } from "../../lib/api";

const options = [
  { value: "breakfast", label: "Breakfast" },
  { value: "lunch", label: "Lunch" },
  { value: "dinner", label: "Dinner" },
  { value: "snacks", label: "Snacks" },
];

const NewDiet = (props) => {
  const [typeSelect, setTypeSelect] = useState(null);
  const typeRef = useRef();
  const mealRef = useRef();

  const dietPlanSubmitHandler = async (event) => {
    event.preventDefault();

    const date = props.date;
    console.log(date);
    console.log(typeSelect.value);
    console.log({ ...props.diet, meal: mealRef.current.value });

    addDietPlan(date, typeSelect.value, mealRef.current.value);

    props.closeNewDiet();
  };
  return (
    <div>
      <form onSubmit={dietPlanSubmitHandler}>
        <label htmlFor="meal-type">Meal Type</label>
        <Select
          id="meal-type"
          defaultValue={typeSelect}
          onChange={setTypeSelect}
          options={options}
          ref={typeRef}
        />
        <label htmlFor="meal">Plan</label>
        <input type="text" id="meal" ref={mealRef} />
        <button>Add Plan</button>
      </form>
    </div>
  );
};

export default NewDiet;
