import React from "react";
import { useParams, Link } from "react-router-dom";
import artists from "../mock/albums";
import styled from "styled-components";

const ArtistContainer = styled.div`
  padding: 20px;
`;

const ArtistTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
`;

const AlbumList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const AlbumItem = styled.li`
  margin-bottom: 5px;
`;

const AlbumLink = styled(Link)`
  text-decoration: none;
  color: blue;

  &:hover {
    text-decoration: underline;
  }
`;

function ArtistPage() {
  const { artist } = useParams();
  const artistData = artists.find((item) => item["slug-artist"] === artist);

  if (!artistData) {
    return <div>Artista não encontrado</div>;
  }

  return (
    <ArtistContainer>
      <ArtistTitle>{artistData.artist}</ArtistTitle>
      <h2>Álbuns:</h2>
      <AlbumList>
        {artistData.albums.map((album) => (
          <AlbumItem key={album["slug-album"]}>
            <AlbumLink to={`/${artist}/${album["slug-album"]}`}>
              {album.album}
            </AlbumLink>
          </AlbumItem>
        ))}
      </AlbumList>
    </ArtistContainer>
  );
}

export default ArtistPage;
