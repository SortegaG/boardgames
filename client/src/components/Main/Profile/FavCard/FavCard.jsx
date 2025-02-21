import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ game }) => {


  return (
    <div className="game-card">
      <h3>{game.nombre}</h3>
      {/* <img src={game.imagen_url} alt={game.nombre} /> */} 
      <p>{game.descripcion}</p>
      <p>
        <strong>Categoría:</strong> {game.categoria}
      </p>
      <p>
        <strong>Edad recomendada:</strong> {game.edad_recomendada}+
      </p>
      <p>
        <strong>Jugadores:</strong> {game.jugadores_min} - {game.jugadores_max}
      </p>
      <button>Añadir a favoritos</button>
    </div>
  );
};

export default Card;
