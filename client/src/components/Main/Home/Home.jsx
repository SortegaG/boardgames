import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/games/');
        console.log('Respuesta de la API:', response.data); 

        setGames(response.data.juegos || []); 
      } catch (err) {
        console.error('Error al obtener los datos:', err); 
        setError('Error al obtener los datos de la API');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <p>Cargando juegos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Juegos de Mesa</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {games.map((game) => (
          <div
            key={game.id_juego}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              width: '300px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
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
