import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CreateReview from "./pages/CreateReview/CreateReview";
import FilmDetail from "./pages/FilmDetail/FilmDetail";
import HomePage from "./pages/Homepage/HomePage";
import Register from "./pages/Register/Register";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/film-detail" element={<FilmDetail />}></Route>
        <Route path="/create-review" element={<CreateReview />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
