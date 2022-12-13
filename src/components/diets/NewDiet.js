const NewDiet = () => {
  return (
    <div>
      <form>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" />
        <label htmlFor="type">Meal Type</label>
        <select id="type">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>
        <label htmlFor="meal">Plan</label>
        <input type="text" id="meal" />
        <button>Add Plan</button>
      </form>
    </div>
  );
};

export default NewDiet;
