import Todos from "./pages/Todos";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Diet from "./pages/Diet";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/todos" element={<Todos />} />
        <Route path="/diets" element={<Diet />} />
      </Routes>
    </Layout>
  );
}

export default App;
