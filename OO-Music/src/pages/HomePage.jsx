import React from "react";
import { Link } from "react-router-dom";
import artists from "../mock/albums";

function HomePage() {
  return (
    <div>
      <h1>Artistas</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist["slug-artist"]}>
            <Link to={`/${artist["slug-artist"]}`}>{artist.artist}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
