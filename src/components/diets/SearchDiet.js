import classes from "./SearchDiet.module.css";
import { Fragment, useContext, useRef, useState } from "react";
import { getDietPlan } from "../../lib/todosApi";
import { formattedToday } from "../../lib/formattedToday";
import { useEffect } from "react";
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
        <input type="week" htmlFor="week" ref={searchWeek} />
        <button>Search</button>
      </form>
    </Card>
  );
};

export default SearchDiet;
