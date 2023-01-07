import React, { useState } from "react";


export const DietContext = React.createContext({
  week: '',
  diet: [],
  storeDiet: (diet) => {},
});

const DietContextProvider = (props) => {
  const [searchedDiet, setSearchedDiet] = useState();
  const [searchWeek, setSearchWeek] = useState()

  const getDietByDate = (diet) => {
    setSearchedDiet(diet);
  }

  const contextValue = {
    week: searchWeek,
    diet: searchedDiet,
    storeDiet : getDietByDate
  }

  return (
    <DietContext.Provider value={contextValue}>
      {props.children}
    </DietContext.Provider>
  );
};

export default DietContextProvider;
