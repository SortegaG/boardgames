import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GamesComponent = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filtros
  const [category, setCategory] = useState('');
  const [minAge, setMinAge] = useState('');
  const [maxPlayers, setMaxPlayers] = useState('');

  const navigate = useNavigate();

  const apiUrl = '/api/games'; // Cambia esto por tu endpoint real

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const result = await response.json();
        setGames(result); // Supone que la API devuelve una lista de juegos
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const applyFilters = () => {
    return games.filter((game) => {
      const matchesCategory = category ? game.categoria === category : true;
      const matchesMinAge = minAge ? game.edad_recomendada >= parseInt(minAge) : true;
      const matchesMaxPlayers = maxPlayers ? game.jugadores_max <= parseInt(maxPlayers) : true;

      return matchesCategory && matchesMinAge && matchesMaxPlayers;
    });
  };

  if (loading) return <p>Cargando juegos...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredGames = applyFilters();

  return (
    <div>
      {/* Filtros */}
      <div style={{ marginBottom: '1rem' }}>
        <h2>Filtros</h2>
        <label>
          Categoría:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Ej: Estrategia"
          />
        </label>
        <label>
          Edad mínima:
          <input
            type="number"
            value={minAge}
            onChange={(e) => setMinAge(e.target.value)}
            placeholder="Ej: 12"
          />
        </label>
        <label>
          Máximo de jugadores:
          <input
            type="number"
            value={maxPlayers}
            onChange={(e) => setMaxPlayers(e.target.value)}
            placeholder="Ej: 4"
          />
        </label>
        <button onClick={() => applyFilters()}>Aplicar filtros</button>
      </div>

      {/* Tarjetas */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {filteredGames.map((game) => (
          <div
            key={game.id_juego}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              width: '250px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>{game.nombre}</h3>
            <p>{game.descripcion}</p>
            <p>
              <strong>Categoría:</strong> {game.categoria}
            </p>
            <p>
              <strong>Edad recomendada:</strong> {game.edad_recomendada}
            </p>
            <p>
              <strong>Jugadores:</strong> {game.jugadores_min} - {game.jugadores_max}
            </p>
            <button
              onClick={() => navigate(`/game/${game.id_juego}`)}
              style={{
                marginTop: '10px',
                padding: '8px 16px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Ver detalles
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesComponent;
