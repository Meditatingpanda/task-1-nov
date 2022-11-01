import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LazyLoading from "./pages/LazyLoading";
import Paginate from "./pages/Paginate";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lazyloading" element={<LazyLoading />} />
        <Route path="/paginate" element={<Paginate />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
