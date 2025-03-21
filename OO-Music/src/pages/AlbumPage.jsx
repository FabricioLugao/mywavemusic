import React from "react";
import { useParams } from "react-router-dom";
import artists from "../mock/albums";

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
    <div>
      <h1>{artistData.artist}</h1>
      <h2>{albumData.album}</h2>
      <p>Ano: {albumData.year}</p>
      <p>Gênero: {albumData.genre}</p>
    </div>
  );
}

export default AlbumPage;
