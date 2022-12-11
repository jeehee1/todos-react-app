import { useContext, useRef } from "react";
import { DietContext } from "../../store/diet-context";

const SearchDiet = (props) => {
  const dietCtx = useContext(DietContext);
  const searchDate = useRef();
  const searchDietsHandler = (event) => {
    event.preventDefault();
    dietCtx.storeDate(searchDate.current.value);
  };

  return (
    <form onSubmit={searchDietsHandler}>
      <label htmlFor="date">date</label>
      <input type="date" htmlFor="date" ref={searchDate} />
      <button>Search</button>
    </form>
  );
};

export default SearchDiet;
