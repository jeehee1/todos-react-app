import { useEffect, useRef } from "react";

const SearchSchedule = (props) => {
  const dateRef = useRef();
  const today = props.initialDate;

  const submitSearchHandler = (event) => {
    event.preventDefault();
    props.onGetSchedule(dateRef.current.value);
  };

  useEffect(() => {
    console.log('search')
    props.onGetSchedule(today);
  }, []);

  return (
    <form onSubmit={submitSearchHandler}>
      <label id="date">Search Date</label>
      <input type="date" id="date" ref={dateRef}/>
      <button>Search</button>
    </form>
  );
};

export default SearchSchedule;
