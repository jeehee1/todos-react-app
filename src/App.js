import Todos from "./pages/Todos";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Diet from "./pages/Diet";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/diets" element={<Diet />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Layout>
  );
}

export default App;
