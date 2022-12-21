import classes from "./DailyDiet.module.css";

import { Fragment } from "react";
import SearchDiet from "./SearchDiet";
import NewDiet from "./NewDiet";
import { useState } from "react";

const DailyDiet = () => {
  const [searchedDiet, setSearchedDiet] = useState([]);
  const [searchDate, setSearchDate] = useState("");
  const [showUpdate, setShowUpdate] = useState(false);
  const showUpdateHandler = () => {
    setShowUpdate(true);
  };
  const closeNewDietHandler = () => {
    setShowUpdate(false);
  };

  const searchByDateHandler = (date, diet) => {
    setSearchDate(date);
    setSearchedDiet(diet);
  };

  console.log("searchDiet");
  console.log(searchedDiet);
  return (
    <Fragment>
      <SearchDiet onSearchByDate={searchByDateHandler} />
      <h3 className={classes.date}>
        {searchDate + " MEAL PLAN" || "Please select the date"}
      </h3>
      {searchDate && !showUpdate && <button onClick={showUpdateHandler}>Update Plan</button>}
      {searchDate && showUpdate && (
        <button onClick={closeNewDietHandler}>Close Form</button>
      )}
      {!searchDate && <p>Please search the date for update plan</p>}
      {!searchedDiet.length && <p>No result</p>}

      {showUpdate && (
        <NewDiet date={searchDate} closeNewDiet={closeNewDietHandler} />
      )}
      <ul className={classes.list}>
        {searchedDiet.map((diet) => (
          <li key={diet.id}>
            <p>
              {diet.type} - {diet.meal}
            </p>
            <button>delete</button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default DailyDiet;
