import React, { useState, useEffect, useRef } from "react";
import abbeyRoad from "../assets/abbeyroad.webp"; // Imagem na pasta public
import QRious from "qrious";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import "./Card.css";

export default function Card() {
  const [flipped, setFlipped] = useState(false);
  const qrRef = useRef(null);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const artist = queryParams.get("artist");
  const album = queryParams.get("album");

  const baseUrl = process.env.REACT_APP_URL;
  const albumUrl = `${baseUrl}/${artist}/${album}`;

  useEffect(() => {
    new QRious({
      element: qrRef.current,
      value: albumUrl,
      size: 150,
    });
  }, [albumUrl]);

  return (
    <div className="card-container">
      <div
        className={`card ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="card-front">
          <img src={abbeyRoad} alt="Abbey Road" />
          <FontAwesomeIcon icon={faSyncAlt} className="flip-icon" />
        </div>
        <div className="card-back">
          <canvas ref={qrRef}></canvas>
          <p>Escaneie para acessar o álbum</p>
        </div>
      </div>
    </div>
  );
}
