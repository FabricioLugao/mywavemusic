import abbeyRoad from "../assets/abbeyroad.webp"; // Imagem na pasta public
import { useState, useEffect, useRef } from "react";
import QRious from "qrious";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import "./Card1.css";

export default function Card1() {
  const [flipped, setFlipped] = useState(false);
  const qrRef = useRef(null);

  useEffect(() => {
    new QRious({
      element: qrRef.current,
      value: "http://localhost:3000",
      size: 150,
    });
  }, []);

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
