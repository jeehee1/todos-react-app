import classes from "./DailyDiet.module.css";

import { Fragment, useEffect } from "react";
import SearchDiet from "./SearchDiet";
import NewDiet from "./NewDiet";
import { useState } from "react";
import UpdateDiet from "./UpdateDiet";
import Card from "../../layout/Card";
import useHttp from "../../hooks/http";
import { useReducer } from "react";

const dietReducer = (curDiet, action) => {
  switch (action.type) {
    case "SET":
      return action.diet;
    case "UPDATE":
      return { ...curDiet, ...action.newDiet };
    default:
      throw new Error("Something went wrong!");
  }
};

const DailyDiet = (props) => {
  const date = props.searchDate.substring(0, 10);
  const day = props.searchDate.substring(10, 13);

  console.log("date");
  console.log(date);
  // const [diet, setDiet] = useState();
  const [diet, dispatch] = useReducer(dietReducer, []);
  const [showUpdate, setShowUpdate] = useState(false);

  const { loading, error, data, extra, identifier, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest(
      `https://todos-project-a5fb8-default-rtdb.firebaseio.com/diet/${date}.json`,
      "GET",
      null,
      date,
      "SET_DIET"
    );
    console.log(data);
  }, []);

  useEffect(() => {
    let dietInfo;
    if (identifier === "SET_DIET") {
      dietInfo = {
        key: null,
        date: date,
        day: day,
        breafkast: null,
        lunch: null,
        snacks: null,
      };
      if (data !== null) {
        for (const key in data) {
          dietInfo = { date: date, key: key, ...data[key] };
        }
      }
      dispatch({ type: "SET", diet: dietInfo });
    }
    if (!error && !loading && identifier === "UPDATE_DIET") {
      let diet;
      if (data.name) {
        diet = { ...extra, key: data.name };
      } else {
        diet = extra;
      }
      dispatch({ type: "UPDATE", newDiet: diet });
    }
  }, [data]);

  const updateDietHandler = (event) => {
    event.preventDefault();
    setShowUpdate(true);
    props.onInvisibleUpdateBtn();
  };

  const saveDietHandler = (newDiet) => {
    let url;
    let strMethod;
    if (diet.key) {
      url = `https://todos-project-a5fb8-default-rtdb.firebaseio.com/diet/${date}/${diet.key}.json`;
      strMethod = "PATCH";
    } else {
      url = `https://todos-project-a5fb8-default-rtdb.firebaseio.com/diet/${date}.json`;
      strMethod = "POST";
    }
    sendRequest(
      url,
      strMethod,
      JSON.stringify(newDiet),
      newDiet,
      "UPDATE_DIET"
    );
    // fetch(
    //   `https://todos-project-a5fb8-default-rtdb.firebaseio.com/diet/${date}.json`,
    //   {
    //     method: "POST",
    //     body: JSON.stringify(newDiet),
    //     headers: { "Content-Type": "application/json" },
    //   }
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((responseData) => {
    //     console.log(responseData);
    //     // setDiet({ key: responseData.name, ...newDiet });
    //   });
    setShowUpdate(false);
    props.onVisibleUpdateBtn();
  };

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
      <h3 className={classes.date}>
        {date} ({day})
      </h3>
      <Card>
        {loading && <p>Loading...</p>}
        {!showUpdate && !loading && dietList}
        {showUpdate && !loading && (
          <UpdateDiet dietInfo={diet} onSaveDiet={saveDietHandler} />
        )}
        {props.updateBtn && !loading && updateBtn}
      </Card>
    </Fragment>
  );
};

export default DailyDiet;
