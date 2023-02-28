import { useNavigate } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
    const navigate = useNavigate();
    const navigateHandler = () => {
        return navigate('/schedule');
    }
  return (
    <div className={classes.home}>
      <div className={classes.paragraph}>
        <p>
          This is planner for you! <br /> Plan your day and follow your plan.
          You can find your constant development at the end. <br />
          Jump right in and explore your new day.
        </p>
        <button onClick={navigateHandler}>Go to Schedules</button>
      </div>
    </div>
  );
};

export default Home;
