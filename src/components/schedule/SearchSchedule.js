import classes from "./SearchSchedule.module.css";
import { useRef } from "react";
import Card from "../../layout/Card";

const SearchSchedule = (props) => {
  const dateRef = useRef();

  const submitSearchHandler = (event) => {
    event.preventDefault();
    props.onGetSchedules(dateRef.current.value);
    console.log(dateRef.current.value);
  };

  return (
    <Card>
      <form onSubmit={submitSearchHandler}>
        <div className={classes.search}>
        <label id="date">Search Date</label>
        <input type="date" id="date" ref={dateRef} />
        <button>Search</button>
        </div>
      </form>
    </Card>
  );
};

export default SearchSchedule;
