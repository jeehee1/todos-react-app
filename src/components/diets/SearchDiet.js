import classes from "./SearchDiet.module.css";
import { Fragment, useContext, useRef, useState } from "react";
import { DietContext } from "../../store/diet-context";
import NewDiet from "./NewDiet";

const SearchDiet = (props) => {
  const [newForm, setNewForm] = useState(false);

  const dietCtx = useContext(DietContext);
  const searchDate = useRef();
  const searchDietsHandler = (event) => {
    event.preventDefault();
    dietCtx.storeDate(searchDate.current.value);
  };

  const addNewDietHandler = () => {
    setNewForm(true);
  };

  const searchMenu = (
    <Fragment>
      <form onSubmit={searchDietsHandler}>
        <lable htmlFor="date">Search the date</lable>
        <input type="date" htmlFor="date" ref={searchDate} />
        <button>Search</button>
      </form>
      <button onClick={addNewDietHandler}>Add Meal Plan</button>
    </Fragment>
  );

  return (
    <div className={classes.search}>
      {!newForm && searchMenu}
      {newForm && <NewDiet />}
    </div>
  );
};

export default SearchDiet;
