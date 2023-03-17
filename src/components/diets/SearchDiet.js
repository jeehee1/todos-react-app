import classes from "./SearchDiet.module.css";
import { useRef } from "react";
import getDateOfWeek from "../../lib/getDayOfWeek";
import Card from "../../layout/Card";

const dayOfWeek = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

const SearchDiet = (props) => {
  const searchDate = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const date = getDateOfWeek(searchDate.current.value);
    props.onSetStartDate(date);
  };
  return (
    <Card>
      <form className={classes.search} onSubmit={submitHandler}>
        <label htmlFor="week">Search week</label>
        <input id="date" type="date" ref={searchDate}/>
        <button>Search</button>
      </form>
    </Card>
  );
};

export default SearchDiet;
