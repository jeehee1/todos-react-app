import classes from "./SearchDiet.module.css";
import { useRef } from "react";
import getDateOfWeek from "../../lib/getDayOfWeek";
import Card from "../../layout/Card";

const SearchDiet = (props) => {
  const searchWeek = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const week = searchWeek.current.value;
    const date = getDateOfWeek(week);
    props.onSetStartDate(week, date);
  };
  return (
    <Card>
      <form className={classes.search} onSubmit={submitHandler}>
        <label htmlFor="week">Search week</label>
        <input id="week" type="week" ref={searchWeek} placeholder="input week"/>
        <button>Search</button>
      </form>
    </Card>
  );
};

export default SearchDiet;
