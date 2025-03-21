import React from "react";
import { Link } from "react-router-dom";
import artists from "../mock/albums";
import styled from "styled-components";

const HomeContainer = styled.div`
  padding: 20px;
`;

const HomeTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
`;

const ArtistList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ArtistItem = styled.li`
  margin-bottom: 5px;
`;

const ArtistLink = styled(Link)`
  text-decoration: none;
  color: blue;

  &:hover {
    text-decoration: underline;
  }
`;

function HomePage() {
  return (
    <HomeContainer>
      <HomeTitle>Artistas</HomeTitle>
      <ArtistList>
        {artists.map((artist) => (
          <ArtistItem key={artist["slug-artist"]}>
            <ArtistLink to={`/${artist["slug-artist"]}`}>
              {artist.artist}
            </ArtistLink>
          </ArtistItem>
        ))}
      </ArtistList>
    </HomeContainer>
  );
}

export default HomePage;
