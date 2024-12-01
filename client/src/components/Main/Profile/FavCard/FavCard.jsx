import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ game }) => {

// DELETE FAV

  // const handleClick = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3000/api/favorites/${userId}`);
  //     console.log("Respuesta de la API:", response.data);

  //     setGames(response.data.Favoritos || []);
  //   } catch (err) {
  //     console.error("Error al obtener los datos:", err);
  //     setError("Error al obtener los datos de la API");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
