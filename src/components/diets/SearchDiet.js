import { useContext, useRef } from "react";
import { DietContext } from "../../store/diet-context";

const SearchDiet = (props) => {
  const dietCtx = useContext(DietContext);
  const searchWeek = useRef();
  const searchDietsHandler = (event) => {
    event.preventDefault();
    dietCtx.storeWeek(searchWeek.current.value);
  };

  return (
    <form onSubmit={searchDietsHandler}>
      <label htmlFor="week">Week</label>
      <input type="week" htmlFor="week" ref={searchWeek} />
      <button>Search</button>
    </form>
  );
};

export default SearchDiet;
