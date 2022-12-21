import classes from "./SearchDiet.module.css";
import { Fragment, useContext, useRef, useState } from "react";
import { getDietPlan } from "../../lib/api";

const SearchDiet = (props) => {
  const [newForm, setNewForm] = useState(false);

  const searchDate = useRef();
  
  const searchDietsHandler = async (event) => {
    event.preventDefault();
    const date = searchDate.current.value;
    const diet = await getDietPlan(date);
    props.onSearchByDate(date, diet);
  };

  const searchMenu = (
    <Fragment>
      <form onSubmit={searchDietsHandler}>
        <label htmlFor="date">Search the date</label>
        <input type="date" htmlFor="date" ref={searchDate} />
        <button>Search</button>
      </form>
    </Fragment>
  );

  return (
    <div className={classes.search}>
      {searchMenu}
    </div>
  );
};

export default SearchDiet;
