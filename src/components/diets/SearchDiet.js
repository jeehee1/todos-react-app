import classes from "./SearchDiet.module.css";
import { Fragment, useContext, useRef, useState } from "react";
import { getDietPlan } from "../../lib/api";
import { formattedToday } from "../../lib/formattedToday";
import { useEffect } from "react";

const SearchDiet = (props) => {
  const [newForm, setNewForm] = useState(false);
  const [updateBtn, setUpdateBtn] = useState(false);

  const today = formattedToday();

  const searchDate = useRef();

  const searchDietsHandler = async (event) => {
    event.preventDefault();
    if(!searchDate.current.value){
      return;
    }
    const date = searchDate.current.value;
    const diet = await getDietPlan(date);
    props.onSearchByDate(date, diet);
    setUpdateBtn(true);
  };

  const searchMenu = (
    <Fragment>
      <form onSubmit={searchDietsHandler}>
        <label htmlFor="date">Search the date</label>
        <input type="date" htmlFor="date" ref={searchDate} />
        <button>Search</button>
        {updateBtn && <button onClick={props.onShowUpdate}>Update</button>}
      </form>
    </Fragment>
  );

  return <div className={classes.search}>{searchMenu}</div>;
};

export default SearchDiet;
