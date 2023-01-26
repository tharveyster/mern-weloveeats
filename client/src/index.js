import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";

export default function App() {
  return (
    <>
      <div id="main">
        <div className="pageCap"></div>
        <BrowserRouter>
          <Header />

          <Outlet />
          <ScrollToTop />
          <Routes>
            <Route index element={<Home />} />
            <Route path="category/:id" element={<Category />} />
            <Route path="recipe/:id" element={<Recipe />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
