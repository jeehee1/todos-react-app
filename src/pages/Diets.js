import { Fragment } from "react";
import DailyDiet from "../components/diets/DailyDiet";
import NewDiet from "../components/diets/NewDiet";

const Diets = () => {
    return (
        <Fragment>
        <div>Diets plan</div>
        <NewDiet/>
        <DailyDiet/>
        </Fragment>
    )
}

export default Diets;