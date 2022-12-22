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
      <SearchDiet onSearchByDate={searchByDateHandler} onShowUpdate={showUpdateHandler} />
      <h3 className={classes.date}>
        {searchDate? searchDate + " MEAL PLAN": 'Please search the date first'}
      </h3>
      {/* {searchDate && !showUpdate && (
        <button onClick={showUpdateHandler}>Update Plan</button>
      )} */}
      {searchDate && showUpdate && (
        <button onClick={closeNewDietHandler}>Close Form</button>
      )}
      {!searchedDiet.length && searchDate && (
        <p className={classes.empty}>No result</p>
      )}

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
