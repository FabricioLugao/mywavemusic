import React from "react";
import { useParams, Link } from "react-router-dom";
import artists from "../mock/albums";

function ArtistPage() {
  const { artist } = useParams();
  const artistData = artists.find((item) => item["slug-artist"] === artist);

  if (!artistData) {
    return <div>Artista não encontrado</div>;
  }

  return (
    <div>
      <h1>{artistData.artist}</h1>
      <h2>Álbuns:</h2>
      <ul>
        {artistData.albums.map((album) => (
          <li key={album["slug-album"]}>
            <Link to={`/${artist}/${album["slug-album"]}`}>{album.album}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArtistPage;
