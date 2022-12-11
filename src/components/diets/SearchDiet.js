import classes from "./SearchDiet.module.css";
import { useContext, useRef } from "react";
import { DietContext } from "../../store/diet-context";

const SearchDiet = (props) => {
  const dietCtx = useContext(DietContext);
  const searchDate = useRef();
  const searchDietsHandler = (event) => {
    event.preventDefault();
    dietCtx.storeDate(searchDate.current.value);
  };

  return (
    <form
      onSubmit={searchDietsHandler}
      className={classes.search}
    >
      <lable htmlFor="date">Search the date</lable>
      <input type="date" htmlFor="date" ref={searchDate} />
      <button>Search</button>
    </form>
  );
};

export default SearchDiet;
