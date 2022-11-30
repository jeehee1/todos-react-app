import { Fragment } from "react";
import WeeklyDiet from "../components/diets/WeeklyDiet";
import DietContextProvider from "../store/diet-context";

const Diet = () => {
  const searchDietHandler = () => {};

  return (
    <DietContextProvider>
      <div>Diets plan</div>
      <WeeklyDiet onSearchDiet={searchDietHandler} />
    </DietContextProvider>
  );
};

export default Diet;
