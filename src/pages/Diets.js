import { Fragment } from "react";
import SearchDiets from "../components/diets/SearchDiets";
import WeeklyDiets from "../components/diets/WeeklyDiets";

const Diets = () => {
  const DUMMY_DIET = [
    {
      22115: {
        Mon: { Breakfast: "English Muffin", Lunch: "Chicken Burger" },
        Wed: { Breakfast: "Oatmeal", Dinner: "Turkey Sandwich" },
      },
    },
    {
      22121: {
        Mon: { Breakfast: "Pancakes", Lunch: "Cheese Toastie" },
        Wed: { Dinner: "Chicken Salad" },
      },
    },
  ];

  return (
    <Fragment>
      <div>Diets plan</div>
      <SearchDiets />
      <WeeklyDiets />
    </Fragment>
  );
};

export default Diets;
