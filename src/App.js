import Todos from "./pages/Todos";
import { Route, Routes } from "react-router-dom";
import Diet from "./pages/Diet";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/todos" element={<Todos />} />
        <Route path="/diets" element={<Diet />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Home />}/>
      </Routes>
  );
}

export default App;
