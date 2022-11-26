import Todos from "./pages/Todos";
import { Route, Routes } from "react-router-dom";
import NavLayout from "./components/layout/NavLayout";

function App() {
  return (
    <NavLayout>
      <Routes>
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </NavLayout>
  );
}

export default App;
