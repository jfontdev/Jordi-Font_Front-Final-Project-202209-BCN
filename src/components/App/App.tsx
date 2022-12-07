import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import CreateReview from "../../pages/CreateReview/CreateReview";
import HomePage from "../../pages/Homepage/HomePage";
import Register from "../../pages/Register/Register";
import React, { Suspense } from "react";
import Loading from "../Loading/Loading";

const FilmDetail = React.lazy(
  () => import("../../pages/FilmDetail/FilmDetail")
);

const Detail = React.lazy(() => import("../../pages/Detail/Detail"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/film-detail" element={<FilmDetail />}></Route>
          <Route path="/create-review" element={<CreateReview />}></Route>
          <Route path="/review-detail/:id" element={<Detail />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
