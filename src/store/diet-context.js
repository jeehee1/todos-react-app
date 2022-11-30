import React, { useState } from "react";

const DUMMY_DIET = {
  "2022-W45": {
    Mon: { Breakfast: "English Muffin", Lunch: "Chicken Burger" },
    Wed: { Breakfast: "Oatmeal", Dinner: "Turkey Sandwich" },
  },
  "2022-W47": {
    Mon: { Breakfast: "Pancakes", Lunch: "Cheese Toastie" },
    Wed: { Dinner: "Chicken Salad" },
  },
};

const transformedTodos = [];

for (const key in DUMMY_DIET) {
  const dietObj = { id: key, ...DUMMY_DIET[key] };
  transformedTodos.push(dietObj);
}

export const DietContext = React.createContext({
  diet: transformedTodos,
  week: "",
  storeWeek: (week) => {},
});

const DietContextProvider = (props) => {
  const [searchWeek, setSearchWeek] = useState("");

  let weeklyFilteredDiet = null;

  const storeSearchWeek = (week) => {
    setSearchWeek(week);
  };

  if (searchWeek !== "") {
    console.log("search week is valid");
    console.log(transformedTodos);
    console.log(searchWeek)
    weeklyFilteredDiet = transformedTodos.filter(
      (diet) => diet.id === searchWeek
    );
    console.log(weeklyFilteredDiet);
  }

  const contextValue = {
    diet: weeklyFilteredDiet,
    week: searchWeek,
    storeWeek: storeSearchWeek,
  };

  return (
    <DietContext.Provider value={contextValue}>
      {props.children}
    </DietContext.Provider>
  );
};

export default DietContextProvider;
