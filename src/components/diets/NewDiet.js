import { useRef, useState } from "react";
import Select from "react-select";

const options = [
  { value: "breakfast", label: "Breakfast" },
  { value: "lunch", label: "Lunch" },
  { value: "dinner", label: "Dinner" },
  { value: "snacks", label: "Snacks" },
];

const NewDiet = () => {
  const [typeSelect, setTypeSelect] = useState(null);
  const dateRef = useRef();
  const mealRef = useRef();

  const dietPlanSubmitHandler = (event) => {
    event.preventDefault();

    console.log(' dateRef : ' + dateRef.current.value + ' typeSelect : '+typeSelect.value + ' meal : ' + mealRef.current.value)
    console.log(typeSelect)
  }
  return (
    <div>
      <form onSubmit={dietPlanSubmitHandler}>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" ref={dateRef}/>
        <label htmlFor='meal-type'>Meal Type</label>
        <Select
          id='meal-type'
          defaultValue={typeSelect}
          onChange={setTypeSelect}
          options={options}
        />
        <label htmlFor="meal">Plan</label>
        <input type="text" id="meal" ref={mealRef}/>
        <button>Add Plan</button>
      </form>
    </div>
  );
};

export default NewDiet;
