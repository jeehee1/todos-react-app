import { Fragment } from "react";
import DailyDiet from "../components/diets/DailyDiet";
import DietContextProvider from "../store/diet-context";

const Diet = () => {
  const searchDietHandler = () => {};

  return (
    <DietContextProvider>
      <div>Diets plan</div>
      <DailyDiet onSearchDiet={searchDietHandler} />
    </DietContextProvider>
  );
};

export default Diet;
