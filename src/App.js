import Todos from "./pages/Todos";
import { Route, Routes } from "react-router-dom";
import NavLayout from "./components/layout/NavLayout";
import Diet from "./pages/Diet";

function App() {
  return (
    <NavLayout>
      <Routes>
        <Route path="/todos" element={<Todos />} />
        <Route path="/diets" element={<Diet />} />
      </Routes>
    </NavLayout>
  );
}

export default App;
