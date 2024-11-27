import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../styles/components/_Home.scss";

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/games/");
        console.log("Respuesta de la API:", response.data);

        setGames(response.data.juegos || []);
      } catch (err) {
        console.error("Error al obtener los datos:", err);
        setError("Error al obtener los datos de la API");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <p>Cargando juegos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home-container">
      <h1 className="home-title">Juegos de Mesa</h1>
      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id_juego} className="game-card">
            <h3>{game.nombre}</h3>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
