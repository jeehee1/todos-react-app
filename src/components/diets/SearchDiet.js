import classes from "./SearchDiet.module.css";
import { Fragment, useContext, useRef, useState } from "react";
import { getDietPlan } from "../../lib/api";
import { formattedToday } from "../../lib/formattedToday";
import { useEffect } from "react";
import getDayOfWeek from "../../lib/getDayOfWeek";

const SearchDiet = (props) => {
  const searchWeek = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const week = searchWeek.current.value;
    const startDate = getDayOfWeek(week);
    props.onSetStartDate(startDate);
    console.log(startDate)
  };
  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <label htmlFor="week">Search week</label>
        <input type="week" htmlFor="week" ref={searchWeek} />
        <button>Search</button>
      </form>
    </Fragment>
  );
};

export default SearchDiet;
