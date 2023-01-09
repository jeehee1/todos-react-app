import classes from "./DailyDiet.module.css";

import { Fragment } from "react";
import SearchDiet from "./SearchDiet";
import NewDiet from "./NewDiet";
import { useState } from "react";
import UpdateDiet from "./UpdateDiet";

const DailyDiet = (props) => {
  const week = props.searchWeek;
  const date = props.searchDate;

  const [showUpdate, setShowUpdate] = useState(false);

  const updateDietHandler = (event) => {
    event.preventDefault();
    setShowUpdate(true);
  };

  const dietList = (
    <div>
      <div>
        <h3>Breakfast</h3>
      </div>
      <div>
        <h3>Lunch</h3>
      </div>
      <div>
        <h3>Dinner</h3>
      </div>
      <div>
        <h3>Snacks</h3>
      </div>
    </div>
  );

  return (
    <Fragment>
      <p>{date}</p>
      {!showUpdate && dietList}
      {showUpdate && <UpdateDiet date={date}/>}
      <form onSubmit={updateDietHandler}>
        <button>Update</button>
      </form>
    </Fragment>
  );
};

export default DailyDiet;
