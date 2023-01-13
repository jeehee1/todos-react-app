import classes from "./DailyDiet.module.css";

import { Fragment, useEffect } from "react";
import SearchDiet from "./SearchDiet";
import NewDiet from "./NewDiet";
import { useState } from "react";
import UpdateDiet from "./UpdateDiet";

const DailyDiet = (props) => {
  const date = props.searchDate.substring(0, 10);
  const day = props.searchDate.substring(10, 13);
  const [diet, setDiet] = useState();
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    if (date !== null) {
      fetch(
        `https://todos-project-a5fb8-default-rtdb.firebaseio.com/diet/${date}.json`
      )
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          for (const key in responseData) {
            setDiet({ key: key, date: date, ...responseData[key] });
          }
        });
    }
    setDiet(null);
  }, [date]);

  const updateDietHandler = (event) => {
    event.preventDefault();
    setShowUpdate(true);
  };

  const saveDietHandler = (newDiet) => {
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
        console.log("responseData");
        console.log(responseData);
        setDiet({ date: date, key: diet.key, ...responseData });
      })
      .catch((error) => {
        return error;
      });
    setShowUpdate(false);
  };

  console.log("diet : ");
  console.log(diet);

  const dietList = (
    <div>
      <div>
        <h3>Breakfast</h3>
        <p>{diet && diet.breakfast ? diet.breakfast : " "}</p>
        <form date={date}></form>
      </div>
      <div>
        <h3>Lunch</h3>
        <p>{diet && diet.lunch ? diet.lunch : " "}</p>
      </div>
      <div>
        <h3>Dinner</h3>
        <p>{diet && diet.dinner ? diet.dinner : " "}</p>
      </div>
      <div>
        <h3>Snacks</h3>
        <p>{diet && diet.snacks ? diet.snacks : " "}</p>
      </div>
    </div>
  );

  return (
    <Fragment>
      <p>{date}</p>
      <p>{day}</p>
      {!showUpdate && dietList}
      {showUpdate && (
        <UpdateDiet dietInfo={diet} onSaveDiet={saveDietHandler} />
      )}
      <form onSubmit={updateDietHandler}>
        <button>Update</button>
      </form>
    </Fragment>
  );
};

export default DailyDiet;
