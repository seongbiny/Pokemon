import React from "react";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailScreen from "./pages/detailScreen";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:site_name" content="포켓몬 도감" />
        <meta property="og:title" content="포켓몬 도감" />
        <meta
          property="og:url"
          content="https://pokemon-smoky-nine.vercel.app/"
        />
        <meta
          property="og:description"
          content="poke API를 이용한 포켓몬 도감입니다."
        />
      </Helmet>
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
