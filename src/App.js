import Todos from "./pages/Todos";
import { Route, Routes } from "react-router-dom";
import NavLayout from "./components/layout/NavLayout";
import Diets from "./pages/Diets";

function App() {
  return (
    <NavLayout>
      <Routes>
        <Route path="/todos" element={<Todos />} />
        <Route path="/diets" element={<Diets />} />
      </Routes>
    </NavLayout>
  );
}

export default App;
