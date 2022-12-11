import React, { useState } from "react";

const DUMMY_DIET = {
  "2022-12-13": {
    Breakfast: "English Muffin",
    Lunch: "Chicken Burger",
  },
  "2022-12-14": {
    Breakfast: "Oatmeal",
    Dinner: "Turkey Sandwich",
  },
  "2022-12-15": {
    Breakfast: "Pancakes",
    Lunch: "Cheese Toastie",
  },
  "2022-12-16": { Dinner: "Chicken Salad" },
};

const transformedDiets = [];

for (const key in DUMMY_DIET) {
  const dietObj = { id: key, ...DUMMY_DIET[key] };
  transformedDiets.push(dietObj);
}

export const DietContext = React.createContext({
  diet: [],
  date: "",
  storeDate: (date) => {},
});

const DietContextProvider = (props) => {
  const [searchDate, setSearchDate] = useState("");

  let dailyFilteredDiet = null;

  const storeSearchDate = (date) => {
    setSearchDate(date);
    console.log("setSearchDate : " + date);
  };

  if (searchDate !== "") {
    dailyFilteredDiet = transformedDiets.filter(
      (diet) => diet.id === searchDate
    );
    console.log(dailyFilteredDiet)
    console.log("searchDate = " + searchDate);
  }

  const contextValue = {
    diet: dailyFilteredDiet,
    date: searchDate,
    storeDate: storeSearchDate,
  };

  return (
    <DietContext.Provider value={contextValue}>
      {props.children}
    </DietContext.Provider>
  );
};

export default DietContextProvider;
