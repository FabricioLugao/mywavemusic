import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./pages/Card";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exemplo-card" element={<Card />} />
        <Route path="/:artist/:album" element={<AlbumPage />} />
        <Route path="/:artist" element={<ArtistPage />} />
      </Routes>
    </Router>
  );
}

export default App;
