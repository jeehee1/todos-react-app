import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "breakfast", label: "Breakfast" },
  { value: "lunch", label: "Lunch" },
  { value: "dinner", label: "Dinner" },
  { value: "snacks", label: "Snacks" },
];

const NewDiet = () => {
  const [typeSelect, setTypeSelect] = useState(null);
  return (
    <div>
      <form>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" />
        <label htmlFor='meal-type'>Meal Type</label>
        <Select
          id='meal-type'
          defaultValue={typeSelect}
          onChange={setTypeSelect}
          options={options}
        />
        <label htmlFor="meal">Plan</label>
        <input type="text" id="meal" />
        <button>Add Plan</button>
      </form>
    </div>
  );
};

export default NewDiet;
