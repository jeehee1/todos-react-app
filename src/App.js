import Todos from "./pages/Todos";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
}

export default App;
