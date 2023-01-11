import { useRef } from "react";

const UpdateDiet = (props) => {
  const {key, date, day, breakfast, lunch, dinner, snacks } = props.dietInfo;
  const breakfastRef = useRef();
  const lunchRef = useRef();
  const dinnerRef = useRef();
  const snacksRef = useRef();

  const submitDietHandler = (event) => {
    const newDietData = {
      day: day,
      breakfast: breakfastRef.current.value,
      lunch: lunchRef.current.value,
      dinner: dinnerRef.current.value,
      snacks: snacksRef.current.value,
    };
    event.preventDefault();
    console.log(newDietData);
    const data = fetch(
      `https://todos-project-a5fb8-default-rtdb.firebaseio.com/diet/${date}/${key}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(newDietData),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        return responseData;
      })
      .catch((error) => {
        return error;
      });
    console.log(data);
  };

  return (
    <form onSubmit={submitDietHandler}>
      <label htmlFor="breakfast">Breakfast</label>
      <input type="text" id="breakfast" ref={breakfastRef} value={breakfast}/>
      <label htmlFor="lunch">Lunch</label>
      <input type="text" id="lunch" ref={lunchRef} value={lunch}/>
      <label htmlFor="dinner">Dinner</label>
      <input type="text" id="dinner" ref={dinnerRef} value={dinner} />
      <label htmlFor="snacks">Snacks</label>
      <input type="text" id="snacks" ref={snacksRef} value={snacks}/>
      <button>save</button>
    </form>
  );
};

export default UpdateDiet;
