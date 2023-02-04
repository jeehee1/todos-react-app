import Todos from "./pages/Todos";
import { Route, Routes, redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Diet from "./pages/Diet";
import Auth from "./pages/Auth";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/diets" element={<Diet />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Layout>
  );
}

export default App;
