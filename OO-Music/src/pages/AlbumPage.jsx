import React from "react";
import { useParams } from "react-router-dom";
import artists from "../mock/albums";
import styled from "styled-components";

const AlbumContainer = styled.div`
  padding: 20px;
`;

const AlbumTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
`;

const AlbumSubtitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const AlbumInfo = styled.p`
  font-size: 1em;
  margin-bottom: 5px;
`;

const StreamList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StreamItem = styled.li`
  margin-bottom: 5px;
`;

const StreamLink = styled.a`
  text-decoration: none;
  color: blue;

  &:hover {
    text-decoration: underline;
  }
`;

function AlbumPage() {
  const { artist, album } = useParams();
  const artistData = artists.find((item) => item["slug-artist"] === artist);
  const albumData = artistData?.albums.find(
    (item) => item["slug-album"] === album
  );

  if (!artistData || !albumData) {
    return <div>Álbum não encontrado</div>;
  }

  return (
    <AlbumContainer>
      <AlbumTitle>{artistData.artist}</AlbumTitle>
      <AlbumSubtitle>{albumData.album}</AlbumSubtitle>
      <AlbumInfo>Ano: {albumData.year}</AlbumInfo>
      <AlbumInfo>Gênero: {albumData.genre}</AlbumInfo>
      <h3>Onde escutar:</h3>
      <StreamList>
        {albumData.streams.map((stream) => (
          <StreamItem key={stream.name}>
            <StreamLink
              href={stream.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {stream.name}
            </StreamLink>
          </StreamItem>
        ))}
      </StreamList>
    </AlbumContainer>
  );
}

export default AlbumPage;
