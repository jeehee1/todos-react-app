import { Fragment } from "react";
import DailyDiet from "../components/diets/DailyDiet";
import DietContextProvider from "../store/diet-context";

const Diet = () => {
  const searchDietHandler = () => {};

  return (
    <DietContextProvider>
      <DailyDiet onSearchDiet={searchDietHandler} />
    </DietContextProvider>
  );
};

export default Diet;
