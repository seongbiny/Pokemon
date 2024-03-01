import React from "react";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailScreen from "./pages/detailScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:pokemonId" element={<DetailScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
