import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import Register from "./pages/Register/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};

export default App;
