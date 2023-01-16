import classes from "./DailyDiet.module.css";

import { Fragment, useEffect } from "react";
import SearchDiet from "./SearchDiet";
import NewDiet from "./NewDiet";
import { useState } from "react";
import UpdateDiet from "./UpdateDiet";
import Card from "../../layout/Card";

const DailyDiet = (props) => {
  const date = props.searchDate.substring(0, 10);
  const day = props.searchDate.substring(10, 13);
  const [diet, setDiet] = useState();
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    // if (date !== null) {
    fetch(
      `https://todos-project-a5fb8-default-rtdb.firebaseio.com/diet/${date}.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        if (responseData === null) {
          setDiet({
            key: null,
            date: date,
            day: day,
            breafkast: null,
            lunch: null,
            snacks: null,
          });
        }
        for (const key in responseData) {
          setDiet({ key: key, date: date, ...responseData[key] });
        }
      });
    // } else {

    // }
  }, [date]);

  console.log(diet);

  const updateDietHandler = (event) => {
    event.preventDefault();
    setShowUpdate(true);
    props.onInvisibleUpdateBtn();
  };

  const saveDietHandler = (newDiet) => {
    if (diet.key)
      fetch(
        `https://todos-project-a5fb8-default-rtdb.firebaseio.com/diet/${date}/${diet.key}.json`,
        {
          method: "PATCH",
          body: JSON.stringify(newDiet),
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          setDiet({ date: date, key: diet.key, ...responseData });
          props.onVisibleUpdateBtn();
        })
        .catch((error) => {
          return error;
        });
    else {
      fetch(
        `https://todos-project-a5fb8-default-rtdb.firebaseio.com/diet/${date}.json`,
        {
          method: "POST",
          body: JSON.stringify(newDiet),
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          console.log(responseData);
          setDiet({ key: responseData.name, ...newDiet });
          props.onVisibleUpdateBtn();
        });
    }
    setShowUpdate(false);
  };

  console.log("diet : ");
  console.log(diet);

  const dietList = (
    <Fragment>
      <div className={classes.box}>
        <h4 className={classes.head}>Breakfast</h4>
        <p className={classes.info}>
          {diet && diet.breakfast ? diet.breakfast : " "}
        </p>
      </div>
      <div className={classes.box}>
        <h4 className={classes.head}>Lunch</h4>
        <p className={classes.info}>{diet && diet.lunch ? diet.lunch : " "}</p>
      </div>
      <div className={classes.box}>
        <h4 className={classes.head}>Dinner</h4>
        <p className={classes.info}>
          {diet && diet.dinner ? diet.dinner : " "}
        </p>
      </div>
      <div className={classes.box}>
        <h4 className={classes.head}>Snacks</h4>
        <p className={classes.info}>
          {diet && diet.snacks ? diet.snacks : " "}
        </p>
      </div>
    </Fragment>
  );

  const updateBtn = (
    <form className={classes.btn} onSubmit={updateDietHandler}>
      <button>Update</button>
    </form>
  );

  return (
    <Fragment>
      <h3 className={classes.date}>{date} ({day})</h3>
      <Card>
        {!showUpdate && dietList}
        {showUpdate && (
          <UpdateDiet dietInfo={diet} onSaveDiet={saveDietHandler} />
        )}
        {props.updateBtn && updateBtn}
      </Card>
    </Fragment>
  );
};

export default DailyDiet;
