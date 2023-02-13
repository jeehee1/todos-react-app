import { useRef } from "react";

const SearchSchedule = (props) => {
  const dateRef = useRef();

  const submitSearchHandler = (event) => {
    event.preventDefault();
    props.onSelectDate(dateRef.current.value);
  };

  return (
    <form onSubmit={submitSearchHandler}>
      <label id="date">Search Date</label>
      <input type="date" id="date" ref={dateRef} />
      <button>Search</button>
    </form>
  );
};

export default SearchSchedule;
